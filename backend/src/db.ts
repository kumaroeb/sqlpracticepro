import { Pool } from 'pg'

// Reusable connection pool. Credentials are read from environment
// variables only — nothing is hardcoded here.
export const pool = new Pool({
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT ? Number(process.env.DATABASE_PORT) : undefined,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
})

// Internal only — verifies the pool can actually reach PostgreSQL.
// Not exposed as its own route; /health uses this to report database
// status. Does not run or expose any user-facing SQL execution.
export async function checkDatabaseConnection(): Promise<boolean> {
  try {
    await pool.query('SELECT NOW()')
    return true
  } catch {
    return false
  }
}
