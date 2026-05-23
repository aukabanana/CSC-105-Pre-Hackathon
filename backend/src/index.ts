import express, { Request, Response } from 'express'
import 'dotenv/config'
import morgan from 'morgan'
import dotenv from 'dotenv'
import cors from "cors";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middlewares/errorHandler.js";
import authRouter from './routes/auth.route.js'
import router from './routes/auth.route.js'



dotenv.config()

const app = express();
const PORT = process.env.PORT

if (!PORT) throw new Error('PORT is missing in your dotenv file')

app.use(cors({ origin: "http://localhost:5173"}))
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(morgan('dev'))
app.use(router)
app.use(authRouter)
app.use(errorHandler);


app.use(errorHandler)
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
app.get('/', (req: Request, res: Response) => {
    res.send('Connected, Welcome to BackEnd jaaaa 👾👾')
})
