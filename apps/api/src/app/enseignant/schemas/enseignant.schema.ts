import * as mongoose from 'mongoose';

export const EnseignantSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    firstName: String,
    lastName: String,
}, { timestamps: true });
