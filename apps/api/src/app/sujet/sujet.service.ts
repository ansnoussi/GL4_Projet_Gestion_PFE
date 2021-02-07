import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ISujet } from './interfaces/sujet.interface';


@Injectable()
export class SujetService {
  constructor(@InjectModel('Sujet') private sujetModel: Model<ISujet>) { }

  async createNew(newSujetDto): Promise<ISujet> {
    let newSujet = new this.sujetModel(newSujetDto);
    return await newSujet.save();
  }

  async getAll() : Promise<Array<ISujet>> {
    return await this.sujetModel.find({});
  }

  async getById(id): Promise<ISujet>{
    return await this.sujetModel.findById(id);
  }

  async deleteSujet(id): Promise<ISujet>{
    return await this.sujetModel.deleteOne({_id:id})
  }
}