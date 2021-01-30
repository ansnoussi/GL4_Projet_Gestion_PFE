import * as mongoose from 'mongoose';

export const SalleSchema = new mongoose.Schema({
    label: {
        type: String,
        unique: true,
        required: true
    }
},{timestamps:true});
