import express, { Request, Response } from 'express'
import 'dotenv/config'
import morgan from 'morgan'
import dotenv from 'dotenv'
dotenv.config()

const app = express();
const PORT = process.env.PORT

if (!PORT) throw new Error('PORT is missing in your dotenv file')

app.use(express.json())
app.use(morgan('dev'))

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})