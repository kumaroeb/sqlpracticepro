import { Clock, Gauge, Flag } from 'lucide-react'
import type { Priority, Difficulty } from '../../data/mockTicket'

const difficultyStyles: Record<Difficulty, string> = {
  Beginner: 'text-teal bg-teal/10',
  Easy: 'text-teal bg-teal/10',
  Medium: 'text-amber bg-amber/10',
  Hard: 'text-rose bg-rose/10',
}

const priorityStyles: Record<Priority, string> = {
  Low: 'text-text-muted bg-bg-elevated',
  Medium: 'text-amber bg-amber/10',
  High: 'text-rose bg-rose/10',
}

type TicketCardProps = {
  ticketNumber: string
  department: string
  priority: Priority
  estimatedMinutes: number
  difficulty: Difficulty
  requiredSkills: string[]
  businessRequest: string
}

export default function TicketCard({
  ticketNumber,
  department,
  priority,
  estimatedMinutes,
  difficulty,
  requiredSkills,
  businessRequest,
}: TicketCardProps) {
  return (
    <div className="rounded-lg border border-border bg-bg-card p-5">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-md bg-bg-elevated px-2.5 py-1 font-mono text-xs text-text-muted">
          {ticketNumber}
        </span>
        <span className="rounded-md bg-teal/10 px-2.5 py-1 text-xs font-medium text-teal">
          {department}
        </span>
        <span className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium ${priorityStyles[priority]}`}>
          <Flag size={12} />
          {priority} priority
        </span>
        <span className={`inline-flex items-center gap-1 rounded-md px-2.5 py-1 text-xs font-medium ${difficultyStyles[difficulty]}`}>
          <Gauge size={12} />
          {difficulty}
        </span>
        <span className="inline-flex items-center gap-1 text-xs text-text-muted">
          <Clock size={13} />
          ~{estimatedMinutes} min
        </span>
      </div>

      <div className="mt-4 rounded-md bg-bg-elevated px-4 py-3 text-sm leading-relaxed text-text-muted">
        <span className="mb-1 block text-xs font-medium uppercase tracking-wider text-amber">
          Business Request
        </span>
        {businessRequest}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-xs text-text-faint">Required skills:</span>
        {requiredSkills.map((skill) => (
          <span key={skill} className="rounded border border-border px-2 py-0.5 font-mono text-[11px] text-text-muted">
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}