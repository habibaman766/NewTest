import express, { json } from 'express';
const app = express();
import boardUniversityRoutes from './src/routes/boardUniversityRoutes.js'
import courseRoutes from './src/routes/courseRoutes.js'
import languageRoutes from './src/routes/languageRoutes.js'
import sectionRoutes from './src/routes/sectionRoutes.js'
import questionRoutes from './src/routes/questionRoutes.js'


app.use(json())

app.use('/api', boardUniversityRoutes)

app.use('/api', courseRoutes)

app.use('/api', languageRoutes)

app.use('/api', sectionRoutes)

app.use('/api', questionRoutes)



app.listen(process.env.PORT || 4000, (req, res)=> {
    console.log(`Listening on port 4000`)
})


