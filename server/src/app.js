import express from 'express'
import authRouter from './route/auth.route.js'
import chatRouter from './route/chat.route.js'
import cookieParser from 'cookie-parser'
import morgan from 'morgan'
import cors from 'cors';

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(morgan('dev'))
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))

app.use('/api/auth', authRouter)
app.use("/api/chats", chatRouter);

export default app
