import mongoose from 'mongoose';
const { Schema } = mongoose;
import db from '../database.js';

const courseSchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
}, {timestamps:true});


export default mongoose.model('Course', courseSchema)


