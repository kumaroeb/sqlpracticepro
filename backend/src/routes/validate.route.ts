import { Router } from 'express'
import { executeQuery, QueryValidationError } from '../services/queryExecutor'
import { getValidator } from '../services/ticketValidator'

export const validateRouter = Router()

validateRouter.post('/tickets/:ticketId/validate', async (req, res) => {
  const { ticketId } = req.params
  const { query } = req.body ?? {}

  if (typeof query !== 'string') {
    return res.status(400).json({ success: false, message: 'Request body must include a "query" string.' })
  }

  const validator = getValidator(ticketId)
  if (!validator) {
    return res.status(404).json({ success: false, message: `No validator found for ticket "${ticketId}".` })
  }

  let executionResult
  try {
    executionResult = await executeQuery(query)
  } catch (err) {
    if (err instanceof QueryValidationError) {
      return res.status(400).json({ success: false, message: err.message })
    }
    const message = err instanceof Error ? err.message : 'Unknown database error.'
    return res.status(400).json({ success: false, message })
  }

  const { ticketPassed, message } = await validator(executionResult)

  return res.json({ success: true, ticketPassed, message })
})
