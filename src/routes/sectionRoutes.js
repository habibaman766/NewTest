import { Router } from 'express'
const router = Router()
import {isRequestValidated} from '../validators/validator.js'
import { check, validationResult } from 'express-validator';
import { addSection, getSections } from '../controllers/sectionController.js'


router.post('/addSection', 
[
    check('name').notEmpty().withMessage('Name is Required'),
], 
isRequestValidated, addSection)

router.get('/getSections', getSections)

export default router