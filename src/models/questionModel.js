import mongoose from 'mongoose';
const { Schema } = mongoose;
import db from '../database.js';

const questionSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    options: [
        {
            option: {
                type: String,
                required: true,
                trim: true,
            },
        }
    ],

    correctOption: {
        type: String,
        required: true,
        trim: true,
    },

    sectionId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },


}, { timestamps: true });


export default mongoose.model('Question', questionSchema)


