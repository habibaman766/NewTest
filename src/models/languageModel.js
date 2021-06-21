import mongoose from 'mongoose';
const { Schema } = mongoose;
import db from '../database.js';

const languageSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
}, {timestamps:true});


export default mongoose.model('Language', languageSchema)


