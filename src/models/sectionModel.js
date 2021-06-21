import mongoose from 'mongoose';
const { Schema } = mongoose;
import db from '../database.js';

const sectionSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    courseId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    languageId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    examTime: {
        type: Number,
        required: true
    }

}, {timestamps:true});


export default mongoose.model('Section', sectionSchema)


