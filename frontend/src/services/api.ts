// Reusable API layer. Components call these functions instead of using
// fetch directly, so the request shape, error handling, and base URL
// live in exactly one place.

export type ExecuteQuerySuccess = {
  columns: string[]
  rows: unknown[][]
  rowCount: number
  executionTimeMs?: number
}

export type ExecuteQueryResponse =
  | { ok: true; data: ExecuteQuerySuccess }
  | { ok: false; error: string }

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000'

export async function executeQuery(query: string): Promise<ExecuteQueryResponse> {
  let response: Response

  try {
    response = await fetch(`${API_BASE_URL}/execute`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query }),
    })
  } catch {
    return { ok: false, error: 'Could not reach the server. Check your connection and try again.' }
  }

  const data = await response.json().catch(() => null)

  if (!response.ok) {
    const message = data && typeof data.error === 'string' ? data.error : `Request failed with status ${response.status}.`
    return { ok: false, error: message }
  }

  if (!data || !Array.isArray(data.columns) || !Array.isArray(data.rows)) {
    return { ok: false, error: 'Unexpected response from the server.' }
  }

  return { ok: true, data }
}
