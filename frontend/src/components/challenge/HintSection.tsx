import { useState } from 'react'
import { Lightbulb, ChevronDown } from 'lucide-react'

type HintSectionProps = {
  hint: string
}

export default function HintSection({ hint }: HintSectionProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="rounded-lg border border-border bg-bg-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="hint-panel"
        className="flex w-full items-center justify-between px-4 py-3 text-left"
      >
        <span className="flex items-center gap-2 text-sm font-medium text-text">
          <Lightbulb size={15} className="text-amber" />
          Need a hint?
        </span>
        <ChevronDown size={16} className={`text-text-faint transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <p id="hint-panel" className="border-t border-border px-4 py-3 text-sm leading-relaxed text-text-muted">
          {hint}
        </p>
      )}
    </div>
  )
}
