import { pool } from '../db'

export type ExecuteQueryResult = {
  columns: string[]
  rows: unknown[][]
  rowCount: number
}

export class QueryValidationError extends Error {}

// Keywords rejected anywhere in the query, matched as whole words
// (case-insensitive) so e.g. "DROP" doesn't also match inside an
// unrelated word. INTO is included here rather than special-cased as
// the phrase "SELECT INTO", because the real syntax is
// "SELECT col1, col2 INTO new_table FROM ..." — INTO doesn't directly
// follow the word SELECT, so banning the keyword itself is what
// actually catches it.
const FORBIDDEN_KEYWORDS = [
  'INSERT', 'UPDATE', 'DELETE', 'DROP', 'ALTER',
  'CREATE', 'TRUNCATE', 'GRANT', 'REVOKE', 'COPY', 'CALL', 'DO', 'INTO',
]

// Strips leading whitespace and leading -- / * comments, repeatedly,
// so "  -- note\n  /* also */  SELECT ..." is still recognized as
// starting with SELECT. Only strips from the front — comments elsewhere
// in the query are left alone (and are still scanned for forbidden
// keywords, see the known limitation noted in CHANGELOG.md).
function stripLeadingCommentsAndWhitespace(input: string): string {
  let s = input
  for (;;) {
    const withoutLeadingWs = s.replace(/^\s+/, '')

    if (withoutLeadingWs.startsWith('--')) {
      const newlineIndex = withoutLeadingWs.indexOf('\n')
      s = newlineIndex === -1 ? '' : withoutLeadingWs.slice(newlineIndex + 1)
      continue
    }

    if (withoutLeadingWs.startsWith('/*')) {
      const endIndex = withoutLeadingWs.indexOf('*/')
      s = endIndex === -1 ? '' : withoutLeadingWs.slice(endIndex + 2)
      continue
    }

    return withoutLeadingWs
  }
}

export function validateQuery(query: string): void {
  const trimmed = query.trim()

  if (!trimmed) {
    throw new QueryValidationError('Query cannot be empty.')
  }

  // Rule 1: must begin with SELECT, ignoring leading whitespace/comments.
  const leading = stripLeadingCommentsAndWhitespace(trimmed)
  if (!/^select\b/i.test(leading)) {
    throw new QueryValidationError('Only SELECT statements are allowed.')
  }

  // Rules 2 & 3: exactly one statement, with at most one *trailing*
  // semicolon. Any semicolon that isn't the very last character means
  // there's a second statement stacked after it.
  const semicolonCount = (trimmed.match(/;/g) ?? []).length
  const hasMisplacedSemicolon = semicolonCount === 1 && !trimmed.endsWith(';')
  if (semicolonCount > 1 || hasMisplacedSemicolon) {
    throw new QueryValidationError(
      'Only a single SQL statement is allowed. Remove any additional statements or semicolons.'
    )
  }

  // Rule 4: forbidden keywords anywhere in the query.
  for (const keyword of FORBIDDEN_KEYWORDS) {
    const pattern = new RegExp(`\\b${keyword}\\b`, 'i')
    if (pattern.test(trimmed)) {
      throw new QueryValidationError(`Query contains a forbidden keyword: ${keyword}.`)
    }
  }
}

export async function executeQuery(query: string): Promise<ExecuteQueryResult> {
  validateQuery(query)

  const result = await pool.query(query)
  const columns = result.fields.map((field) => field.name)
  const rows = result.rows.map((row) => columns.map((column) => row[column]))

  return {
    columns,
    rows,
    rowCount: result.rowCount ?? rows.length,
  }
}
