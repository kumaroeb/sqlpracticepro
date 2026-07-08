import express from 'express'
import cors from 'cors'
import { healthRouter } from './routes/health.route'
import { executeRouter } from './routes/execute.route'
import { validateRouter } from './routes/validate.route'
import './validators'

const app = express()

app.use(cors({ origin: process.env.CORS_ORIGIN ?? '*' }))
app.use(express.json())

app.use(healthRouter)
app.use(executeRouter)
app.use(validateRouter)

export default app
