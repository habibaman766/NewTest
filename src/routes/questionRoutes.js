import { Router } from 'express'
const router = Router()
import {isRequestValidated} from '../validators/validator.js'
import { check, validationResult } from 'express-validator';
import { addQuestion, getQuestions, getOptions } from '../controllers/questionController.js'


router.post('/addQuestion', 
[
    check('name').notEmpty().withMessage('Name is Required'),
], 
isRequestValidated, addQuestion)

router.get('/getQuestions', getQuestions)

router.get('/getOptions', getOptions)



export default router