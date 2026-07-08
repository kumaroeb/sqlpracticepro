import { pool } from '../db'
import { registerValidator } from '../services/ticketValidator'

const TICKET_ID = 'TCK-001'

// "Ignore formatting differences" — trims, lowercases, and collapses
// internal whitespace before comparing, so casing or extra spaces in a
// learner's result don't cause a false failure.
function normalizeTitle(title: unknown): string {
  return String(title).trim().toLowerCase().replace(/\s+/g, ' ')
}

registerValidator(TICKET_ID, async (result) => {
  // Rule: exactly one column.
  if (result.columns.length !== 1) {
    return {
      ticketPassed: false,
      message: 'The Product Team only requested the movie title. Your query returned additional columns.',
    }
  }

  // Rule: that column must be "title" (case-insensitive — an aliased
  // "Title" still counts).
  if (result.columns[0].toLowerCase() !== 'title') {
    return {
      ticketPassed: false,
      message: `The Product Team asked for the movie title, but your query returned "${result.columns[0]}" instead.`,
    }
  }

  // Rule: result must contain every movie currently in the catalog —
  // queried live, not against a fixed snapshot, so this stays correct
  // as the seed data changes.
  const canonical = await pool.query('SELECT title FROM movies')
  const expectedTitles = new Set(canonical.rows.map((row) => normalizeTitle(row.title)))
  const actualTitles = new Set(result.rows.map((row) => normalizeTitle(row[0])))

  if (expectedTitles.size !== actualTitles.size) {
    return {
      ticketPassed: false,
      message: `The Product Team expected ${expectedTitles.size} movies, but your query returned ${actualTitles.size}.`,
    }
  }

  for (const title of expectedTitles) {
    if (!actualTitles.has(title)) {
      return {
        ticketPassed: false,
        message: 'Your query is missing some movies from the catalog. Make sure every movie is included.',
      }
    }
  }

  return {
    ticketPassed: true,
    message: 'The Product Team received the movie catalog successfully.',
  }
})
