// Client-side progress persistence. No backend, no auth, no cloud sync —
// progress lives entirely in this browser's Local Storage.

export type StreamFlixProgress = {
  completedTickets: string[]
  currentTicket: number
  department: string
  lastVisited: string
}

export type ProgressState = {
  streamflix: StreamFlixProgress
}

const STORAGE_KEY = 'sqlpracticepro:progress'

function defaultProgress(): ProgressState {
  return {
    streamflix: {
      completedTickets: [],
      currentTicket: 1,
      department: 'product',
      lastVisited: '',
    },
  }
}

// Basic shape guard — if storage is missing, corrupted, or from an
// incompatible older version, fall back to a fresh default instead of
// throwing and breaking the page.
function isValidProgressState(value: unknown): value is ProgressState {
  if (!value || typeof value !== 'object') return false
  const candidate = value as Partial<ProgressState>
  return (
    !!candidate.streamflix &&
    Array.isArray(candidate.streamflix.completedTickets) &&
    typeof candidate.streamflix.currentTicket === 'number'
  )
}

export function getProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return defaultProgress()

    const parsed: unknown = JSON.parse(raw)
    return isValidProgressState(parsed) ? parsed : defaultProgress()
  } catch {
    // localStorage unavailable (e.g. private browsing) or invalid JSON —
    // fail soft rather than crashing the page.
    return defaultProgress()
  }
}

export function saveProgress(progress: ProgressState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress))
  } catch {
    // Storage unavailable or quota exceeded — fail silently. Progress
    // just won't persist this session, but the app keeps working.
  }
}

// Intended usage (not yet wired up — see CHANGELOG.md): once the
// frontend calls POST /tickets/:id/validate and gets back
// `ticketPassed: true`, call markTicketCompleted(ticketId) to record it.
export function markTicketCompleted(ticketId: string): ProgressState {
  const progress = getProgress()
  const alreadyCompleted = progress.streamflix.completedTickets.includes(ticketId)

  const updated: ProgressState = {
    ...progress,
    streamflix: {
      ...progress.streamflix,
      completedTickets: alreadyCompleted
        ? progress.streamflix.completedTickets
        : [...progress.streamflix.completedTickets, ticketId],
      lastVisited: new Date().toISOString(),
    },
  }

  saveProgress(updated)
  return updated
}

export function resetProgress(): ProgressState {
  const fresh = defaultProgress()
  saveProgress(fresh)
  return fresh
}
