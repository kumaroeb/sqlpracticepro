import { useState } from 'react'
import { Code2, ChevronDown } from 'lucide-react'

type SolutionPanelProps = {
  solution: string
}

export default function SolutionPanel({ solution }: SolutionPanelProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-lg border border-border bg-bg-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="solution-panel"
        className="flex w-full items-center justify-between px-4 py-3 text-left"
      >
        <span className="flex items-center gap-2 text-sm font-medium text-text">
          <Code2 size={15} className="text-teal" />
          View solution
        </span>
        <ChevronDown size={16} className={`text-text-faint transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <pre
          id="solution-panel"
          className="overflow-x-auto border-t border-border bg-bg-elevated px-4 py-3 font-mono text-[13px] leading-relaxed text-text"
        >
          {solution}
        </pre>
      )}
    </div>
  )
}