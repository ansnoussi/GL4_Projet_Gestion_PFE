import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IEtudiant } from './interfaces/etudiant.interface';

@Injectable()
export class EtudiantService {
  constructor(@InjectModel('Etudiant') private edudiantModel: Model<IEtudiant>
  ) { }

}