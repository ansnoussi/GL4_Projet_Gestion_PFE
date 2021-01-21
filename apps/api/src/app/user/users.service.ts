import { Model } from 'mongoose';
import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './interfaces/user.interface';
import { AuthService } from '../auth/auth.service';

import { CreateUserDto, LoginUserDto } from "@gl4/api-interfaces"

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private userModel: Model<IUser>,
    private authSerice: AuthService
  ) { }

  async create(createUserDto: CreateUserDto): Promise<IUser> {
    const foundUser = await this.findOneByEmail(createUserDto.email)
    if (foundUser) throw new NotAcceptableException('Email already exists!')
    let createdUser = new this.userModel(createUserDto);
    return await createdUser.save();

  }

  async login(loginDto: LoginUserDto): Promise<any> {
    return new Promise(async (resolve, reject) => {
      const foundUser = await this.findOneByEmail(loginDto.email)
      if (!foundUser) reject(new NotFoundException('User does not exists!'))

      foundUser.checkPassword(loginDto.password, (err, match) => {
        if (err) throw new Error('Password does not match!')
        if (match) {
          const data = foundUser.toJSON()
          const payload = {
            userId: data._id,
            role: data.role,
          }

          const token = this.authSerice.createAccessToken(payload)
          const finalpayload = {
            ...payload,
            email : data.email,
            token
          }
          resolve(finalpayload)
        }else{
          reject({
            success : false,
            message: 'Password doesnt match!'
          })
        }
      })
    })
  }
  async findOneByEmail(email): Promise<IUser> {

    return await this.userModel.findOne({ email });

  }

}