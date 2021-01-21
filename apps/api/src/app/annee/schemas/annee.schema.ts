import * as mongoose from 'mongoose';

export const AnneeSchema = new mongoose.Schema({
    year: {
        type: Number,
        unique: true,
        required: true
    },
    isCurrent: {
        type: Boolean
    }
},{timestamps:true});
