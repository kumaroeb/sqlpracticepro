import { Router } from 'express'

export const executeRouter = Router()

// Placeholder only. The SQL execution engine is a later Sprint 6 slice —
// this route intentionally does not touch the database or run any query.
executeRouter.post('/execute', (_req, res) => {
  res.json({ message: 'Execution engine coming in Sprint 6' })
})
