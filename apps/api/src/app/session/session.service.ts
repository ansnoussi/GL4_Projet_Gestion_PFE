import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { ISession } from './interfaces/session.interface';


@Injectable()
export class SessionService {
  constructor(@InjectModel('Session') private sessionModel: Model<ISession>) { }


}