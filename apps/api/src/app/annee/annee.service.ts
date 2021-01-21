import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IAnnee } from './interfaces/annee.interface';

@Injectable()
export class AnneeService {
  constructor(@InjectModel('User') private anneeModel: Model<IAnnee>) { }

}