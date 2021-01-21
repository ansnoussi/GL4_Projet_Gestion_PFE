import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IEnseignant } from './interfaces/enseignant.interface';

@Injectable()
export class EnseignantService {
  constructor(@InjectModel('Enseignant') private enseignantModel: Model<IEnseignant>
  ) { }


}