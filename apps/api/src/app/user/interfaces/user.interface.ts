import * as mongoose from 'mongoose';
import { Role } from '../role.enum';

export interface IUser extends mongoose.Document {
    email : string,
    password: string,
    role : Role
    checkPassword(password:string,cb:Function)   
  }