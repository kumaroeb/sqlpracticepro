import { CheckCircle2 } from 'lucide-react'

type WhyThisQueryWorksProps = {
  explanation: string
  hasRun: boolean
}

export default function WhyThisQueryWorks({ explanation, hasRun }: WhyThisQueryWorksProps) {
  return (
    <div className="rounded-lg border border-border bg-bg-card p-4">
      <h2 className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-text-faint">
        <CheckCircle2 size={14} className="text-teal" />
        Why This Query Works
      </h2>
      {hasRun ? (
        <p className="text-sm leading-relaxed text-text-muted">{explanation}</p>
      ) : (
        <p className="text-sm text-text-faint">Run your query to see the explanation.</p>
      )}
    </div>
  )
}
