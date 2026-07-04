import { Router } from 'express'
import { checkDatabaseConnection } from '../db'

export const healthRouter = Router()

healthRouter.get('/health', async (_req, res) => {
  const isConnected = await checkDatabaseConnection()

  if (!isConnected) {
    return res.status(503).json({
      status: 'degraded',
      service: 'sqlpracticepro-backend',
      database: 'disconnected',
    })
  }

  res.json({
    status: 'ok',
    service: 'sqlpracticepro-backend',
    database: 'connected',
  })
})
