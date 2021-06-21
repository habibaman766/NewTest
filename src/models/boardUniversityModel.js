import mongoose from 'mongoose';
const { Schema } = mongoose;
import { hashSync, compareSync } from 'bcrypt';
import db from '../database.js';

const boardUniversitySchema = new Schema({
    name:{
        type: String,
        required: true,
        trim: true,
    },
}, {timestamps:true});


export default mongoose.model('Board_University', boardUniversitySchema)


