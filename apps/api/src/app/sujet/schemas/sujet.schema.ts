import * as mongoose from 'mongoose';

export const SujetSchema = new mongoose.Schema({
    intitule: {
        required: true,
        type: String
    },
    valide: {
        type: Boolean,
        default: false
    },
    enseignant : {
        type: mongoose.Types.ObjectId,
        ref: 'Enseignant'
    },
}, { timestamps: true });
