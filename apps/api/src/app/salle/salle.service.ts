import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ISalle } from './interfaces/salle.interface';

@Injectable()
export class SalleService {
  constructor(@InjectModel('Salle') private salleModel: Model<ISalle>) { }

  async getAll(): Promise<ISalle[]> {
    return await  this.salleModel.find();
  }

  async createNew(label): Promise<ISalle> {
    let newSalle = new this.salleModel({label : label});
    return await newSalle.save();
  }

  async getById(id): Promise<ISalle> {
    return await  this.salleModel.findOne({_id : id});
  }

  async deleteById(id): Promise<ISalle> {
    return await  this.salleModel.remove({_id : id}).exec();
  }

}