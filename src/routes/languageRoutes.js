import { Router } from 'express'
const router = Router()
import { addLanguage, getLanguages, getLanguage } from '../controllers/languageController.js'
import {isRequestValidated} from '../validators/validator.js'
import { check, validationResult } from 'express-validator';


router.post('/addLanguage', 
[
    check('name').notEmpty().withMessage('Name is Required'),
], 
isRequestValidated, addLanguage)

router.get('/getLanguages', getLanguages)

router.get('/getLanguage', getLanguage)

export default router