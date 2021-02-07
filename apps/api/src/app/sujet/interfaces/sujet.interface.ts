import * as mongoose from 'mongoose';

export interface ISujet extends mongoose.Document {
  intitule: String,
  valide: Boolean
  enseignant : mongoose.Types.ObjectId
}