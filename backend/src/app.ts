import express from 'express'
import cors from 'cors'
import { healthRouter } from './routes/health.route'
import { executeRouter } from './routes/execute.route'

const app = express()

app.use(cors({ origin: process.env.CORS_ORIGIN ?? '*' }))
app.use(express.json())

app.use(healthRouter)
app.use(executeRouter)

export default app
