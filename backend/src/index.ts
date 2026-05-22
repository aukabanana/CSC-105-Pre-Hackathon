import express, { Request, Response } from 'express'
import 'dotenv/config'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cors from 'cors' 

import router from './routes/routes.js'
dotenv.config()

const app = express();
const PORT = process.env.PORT

if (!PORT) throw new Error('PORT is missing in your dotenv file')

app.use(cors())
app.use(express.json())
app.use(morgan('dev'))
app.use('/api', router)

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})