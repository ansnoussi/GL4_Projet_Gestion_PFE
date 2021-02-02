import * as mongoose from 'mongoose';

export interface IEnseignant extends mongoose.Document {
    email: string,
    firstName: string,
    lastName: string
}