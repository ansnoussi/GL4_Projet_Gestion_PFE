import { Model } from 'mongoose';
import { Injectable, NotAcceptableException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IEnseignant } from "../enseignant/interfaces/enseignant.interface"

@Injectable()
export class AdminService {
  constructor(@InjectModel('Enseignant') private enseignantModel: Model<IEnseignant>,

  ) { }

  async createNewEnseignant(enseignant): Promise<IEnseignant> {
    let newEnseignant = new this.enseignantModel(enseignant);
    return await newEnseignant.save();
  }

  async createManyEnseignant(enseignants: Array<IEnseignant>): Promise<Array<IEnseignant>> {
    let newEnseignants = await this.enseignantModel.insertMany(enseignants)
    return newEnseignants
  }

}