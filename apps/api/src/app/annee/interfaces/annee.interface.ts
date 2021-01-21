import * as mongoose from 'mongoose';

export interface IAnnee extends mongoose.Document {   
  year: Number,
  isCurrent : Boolean
  }