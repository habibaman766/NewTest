import { check, validationResult } from 'express-validator';

// exports.validateAddCourseRequest = [
//         check('name').notEmpty().withMessage('Name is Required'),
//     ]



export function isRequestValidated(req, res, next){
    const errors = validationResult(req)
    if (errors.array().length > 0) {
        return res.status(400).json({ "errors": errors.array()[0].msg })
    }
    next()
}
