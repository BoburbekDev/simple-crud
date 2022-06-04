import express from 'express';
import morgan from 'morgan'
import cors from 'cors'
import user from './routes/user.routes';
const app = express()
app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use('/api/user', user)

export default app