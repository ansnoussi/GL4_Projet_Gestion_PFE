import { JwtPayload } from './interfaces/jwt-payload.interface';
import { Injectable, UnauthorizedException, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { sign } from 'jsonwebtoken';
import { IUser } from '../user/interfaces/user.interface';
//import { RefreshToken } from './interfaces/refresh-token.interface';
import { Request } from 'express';
@Injectable()
export class AuthService {

  //cryptr: any;

  constructor(
    @InjectModel('User') private readonly userModel: Model<IUser>,
  ) {
  }

   createAccessToken(payload: Object): string {
    const accessToken = sign({...payload}, process.env.ENCRYPT_JWT_SECRET , { expiresIn: process.env.JWT_EXPIRATION });
    return accessToken;
  }

  async validateUser(jwtPayload: JwtPayload): Promise<any> {
    const user = await this.userModel.findOne({_id: jwtPayload.userId});
    if (!user) {
      throw new UnauthorizedException('User not found.');
    }
    return user;
  }
  
  getBrowserInfo(req: Request): string {
    return req.header['user-agent'] || 'XX';
  }

}