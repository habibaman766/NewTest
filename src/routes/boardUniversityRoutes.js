import { Router } from 'express'
const router = Router()
import { addBoardUniversity, getUniversities, getUniversityById } from '../controllers/boardUniversityController.js'


router.post('/addBoardUniversity', addBoardUniversity)

router.get('/getUniversities', getUniversities)

router.get('/getUniversityById', getUniversityById)

export default router