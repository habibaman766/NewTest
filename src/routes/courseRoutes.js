import { Router } from 'express'
const router = Router()
import { addCourse, getCourses, getCourse } from '../controllers/courseController.js'
import {isRequestValidated} from '../validators/validator.js'
import { check, validationResult } from 'express-validator';


router.post('/addCourse', 
[
    check('name').notEmpty().withMessage('Name is Required'),
], 
isRequestValidated, addCourse)

router.get('/getCourses', getCourses)

router.get('/getCourse', getCourse)

export default router