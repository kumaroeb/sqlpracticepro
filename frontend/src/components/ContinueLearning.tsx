import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getProgress } from '../services/progress'

// Maps the progress service's department slug to a display label.
// Only "product" is real today (Ticket #001's department); the others
// are here so this doesn't silently show a raw slug once more
// departments exist.
const DEPARTMENT_LABELS: Record<string, string> = {
  product: 'Product Analytics',
  marketing: 'Marketing Analytics',
  content: 'Content Analytics',
}

// Placeholder denominator until the full ticket catalog exists — see
// CHANGELOG.md. The numerator (completed count) is real data.
const TOTAL_TICKETS_PLACEHOLDER = 50

export default function ContinueLearning() {
  const progress = getProgress()
  const completedCount = progress.streamflix.completedTickets.length

  // No progress yet — render nothing, per spec.
  if (completedCount === 0) {
    return null
  }

  const departmentLabel =
    DEPARTMENT_LABELS[progress.streamflix.department] ?? progress.streamflix.department
  // Next ticket number is derived from completion count rather than the
  // progress service's `currentTicket` field, since nothing currently
  // advances that field — see CHANGELOG.md.
  const nextTicketNumber = completedCount + 1

  return (
    <section className="border-b border-border bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-6 py-10">
        <div className="flex flex-col gap-6 rounded-lg border border-border-bright bg-bg-card p-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-xl font-semibold text-text">Welcome Back 👋</h2>
            <p className="mt-1 text-sm text-text-muted">Ready for your next assignment?</p>

            <dl className="mt-4 grid grid-cols-2 gap-x-8 gap-y-3 text-sm sm:grid-cols-4">
              <div>
                <dt className="text-xs text-text-faint">Company</dt>
                <dd className="text-text">StreamFlix</dd>
              </div>
              <div>
                <dt className="text-xs text-text-faint">Department</dt>
                <dd className="text-text">{departmentLabel}</dd>
              </div>
              <div>
                <dt className="text-xs text-text-faint">Completed Tickets</dt>
                <dd className="text-text">
                  {completedCount} / {TOTAL_TICKETS_PLACEHOLDER}
                </dd>
              </div>
              <div>
                <dt className="text-xs text-text-faint">Next Assignment</dt>
                <dd className="text-text">Ticket #{nextTicketNumber}</dd>
              </div>
            </dl>

            <p className="mt-3 text-xs text-text-faint">Estimated time: 5 min</p>
          </div>

          <Link
            to="/streamflix"
            className="inline-flex w-full flex-none items-center justify-center gap-2 rounded-md bg-teal px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-teal-dim sm:w-auto"
          >
            Resume Assignment
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </section>
  )
}
