import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ISoutenance } from './interfaces/soutenance.interface';

@Injectable()
export class SoutenanceService {
  constructor(@InjectModel('Soutenance') private soutenanceModel: Model<ISoutenance>) { }

}