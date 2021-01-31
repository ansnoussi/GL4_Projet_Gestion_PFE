import { Model } from 'mongoose';
import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ISalle } from './interfaces/salle.interface';
import { CreateSalleDto } from './dto/create-salle.dto';

@Injectable()
export class AdminService {
  constructor(@InjectModel('Salle') private salleModel: Model<ISalle>,

  ) { }

  async createSalle(createSalleDto: CreateSalleDto): Promise<ISalle> {
    const foundSalle = await this.findOnByName(createSalleDto.name)
    if (foundSalle) throw new NotAcceptableException('Salle already exists!')
    let createdUser = new this.salleModel(createSalleDto);
    return await createdUser.save();
  }

  async getAllSalles(): Promise<Array<ISalle>> {
    return await this.salleModel.find({});
  }

  async updateSalle(createSalleDto: CreateSalleDto, id: String): Promise<ISalle> {
    const foundSalle = await this.findOnByName(createSalleDto.name);
    if (!foundSalle) throw new NotFoundException('Salle not found!');
    return await this.salleModel.findByIdAndUpdate(id, createSalleDto, { new: true });
  }

  async findOnByName(name): Promise<ISalle> {

    return await this.salleModel.findOne({ name });

  }

}