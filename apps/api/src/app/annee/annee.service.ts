import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IAnnee } from './interfaces/annee.interface';

@Injectable()
export class AnneeService {
  constructor(@InjectModel('Annee') private anneeModel: Model<IAnnee>) { }

  async advanceYear(year): Promise<IAnnee> {
    await  this.anneeModel.findOneAndUpdate({ isCurrent : true }, {isCurrent : false}):
    let newYear = new this.anneeModel({year : year , isCurrent : true}):
    return await newYear.save();
  }

  async getCurrent(): Promise<IAnnee> {
    return await  this.anneeModel.findOne({ isCurrent : true });
  }
}