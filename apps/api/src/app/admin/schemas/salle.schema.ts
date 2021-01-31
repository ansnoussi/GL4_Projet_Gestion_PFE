import * as mongoose from 'mongoose';
import * as bcrypt from 'bcrypt';

export const SalleSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
},{timestamps:true});

