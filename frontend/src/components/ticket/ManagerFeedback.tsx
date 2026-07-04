import { MessageCircle } from 'lucide-react'

type ManagerFeedbackProps = {
  manager: string
  feedback: string
  hasRun: boolean
}

export default function ManagerFeedback({ manager, feedback, hasRun }: ManagerFeedbackProps) {
  return (
    <div className="rounded-lg border border-border bg-bg-card p-4">
      <h2 className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-text-faint">
        <MessageCircle size={14} className="text-violet" />
        Manager Feedback
      </h2>
      {hasRun ? (
        <p className="text-sm leading-relaxed text-text-muted">
          <span className="font-medium text-text">{manager}: </span>
          {feedback}
        </p>
      ) : (
        <p className="text-sm text-text-faint">Run your query to get feedback from {manager}.</p>
      )}
    </div>
  )
}