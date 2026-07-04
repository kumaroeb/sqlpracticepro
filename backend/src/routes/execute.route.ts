import { Router } from 'express'
import { executeQuery, QueryValidationError } from '../services/queryExecutor'

export const executeRouter = Router()

executeRouter.post('/execute', async (req, res) => {
  const { query } = req.body ?? {}

  if (typeof query !== 'string') {
    return res.status(400).json({ error: 'Request body must include a "query" string.' })
  }

  try {
    const result = await executeQuery(query)
    return res.json(result)
  } catch (err) {
    if (err instanceof QueryValidationError) {
      return res.status(400).json({ error: err.message })
    }

    const message = err instanceof Error ? err.message : 'Unknown database error.'
    return res.status(400).json({ error: message })
  }
})
