import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ISujet } from './interfaces/sujet.interface';


@Injectable()
export class SujetService {
  constructor(@InjectModel('Sujet') private sujetModel: Model<ISujet>) { }

}