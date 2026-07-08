import type { ExecuteQueryResult } from './queryExecutor'

export type TicketValidationResult = {
  ticketPassed: boolean
  message: string
}

export type TicketValidator = (
  result: ExecuteQueryResult
) => TicketValidationResult | Promise<TicketValidationResult>

// One validator function per ticket, keyed by ticket id. To add a new
// ticket's rules: create src/validators/<ticketId>.ts that calls
// registerValidator(...), then import it from src/validators/index.ts.
// Nothing in the route or the execution engine needs to change.
const validators: Record<string, TicketValidator> = {}

export function registerValidator(ticketId: string, validator: TicketValidator): void {
  validators[ticketId] = validator
}

export function getValidator(ticketId: string): TicketValidator | undefined {
  return validators[ticketId]
}
