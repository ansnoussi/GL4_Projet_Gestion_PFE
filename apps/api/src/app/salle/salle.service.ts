import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ISalle } from './interfaces/salle.interface';

@Injectable()
export class SalleService {
  constructor(@InjectModel('Salle') private salleModel: Model<ISalle>) { }

}