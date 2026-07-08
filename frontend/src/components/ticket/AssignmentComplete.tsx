import { Link } from 'react-router-dom'
import { CheckCircle2, UserRound, ArrowRight } from 'lucide-react'

type AssignmentCompleteProps = {
  manager: string
  managerTitle: string
  managerMessage: string
  learnedConcepts: string[]
  learnedExplanation: string
  businessImpact: string
  nextTicket: string
  nextTicketTitle: string
  estimatedTime: string
}

export default function AssignmentComplete({
  manager,
  managerTitle,
  managerMessage,
  learnedConcepts,
  learnedExplanation,
  businessImpact,
  nextTicket,
  nextTicketTitle,
  estimatedTime,
}: AssignmentCompleteProps) {
  return (
    <div className="rounded-lg border border-teal/40 bg-bg-card p-6">
      <h2 className="flex items-center gap-2 font-display text-lg font-semibold text-text">
        <CheckCircle2 size={20} className="text-teal" />
        Assignment Complete
      </h2>

      {/* Manager message */}
      <div className="mt-5 flex gap-3 rounded-md bg-bg-elevated p-4">
        <span className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-violet/10 text-violet">
          <UserRound size={17} strokeWidth={2} />
        </span>
        <div>
          <p className="text-sm font-medium text-text">{manager}</p>
          <p className="text-xs text-text-muted">{managerTitle}</p>
          <p className="mt-2 whitespace-pre-line text-sm leading-relaxed text-text-muted">
            {managerMessage}
          </p>
        </div>
      </div>

      {/* Today's Learning */}
      <div className="mt-5">
        <h3 className="text-xs font-medium uppercase tracking-wider text-text-faint">
          Today's Learning
        </h3>
        <ul className="mt-2 flex flex-wrap gap-2">
          {learnedConcepts.map((concept) => (
            <li
              key={concept}
              className="inline-flex items-center gap-1.5 rounded-md border border-border px-2.5 py-1 text-xs text-text"
            >
              <CheckCircle2 size={12} className="text-teal" />
              {concept}
            </li>
          ))}
        </ul>
        <p className="mt-3 text-sm leading-relaxed text-text-muted">{learnedExplanation}</p>
      </div>

      {/* Business Impact */}
      <div className="mt-5 rounded-md border border-border px-4 py-3">
        <h3 className="text-xs font-medium uppercase tracking-wider text-text-faint">
          Business Impact
        </h3>
        <p className="mt-1.5 text-sm leading-relaxed text-text-muted">{businessImpact}</p>
      </div>

      {/* Next Assignment */}
      <div className="mt-6 flex flex-col gap-4 border-t border-border pt-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-wider text-text-faint">
            Next Assignment
          </p>
          <p className="mt-1 font-display text-base font-semibold text-text">{nextTicket}</p>
          <p className="text-sm text-text-muted">{nextTicketTitle}</p>
          <p className="mt-1 text-xs text-text-faint">Estimated time: {estimatedTime}</p>
        </div>

        <Link
          to="/streamflix/next"
          className="inline-flex w-full flex-none items-center justify-center gap-2 rounded-md bg-teal px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-teal-dim sm:w-auto"
        >
          Continue to {nextTicket}
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  )
}
