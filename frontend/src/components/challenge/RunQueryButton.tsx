import { Play } from 'lucide-react'

type RunQueryButtonProps = {
  onRun: () => void
}

export default function RunQueryButton({ onRun }: RunQueryButtonProps) {
  return (
    <button
      type="button"
      onClick={onRun}
      className="inline-flex items-center gap-2 rounded-md bg-teal px-4 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-teal-dim"
    >
      <Play size={15} strokeWidth={2.5} />
      Run Query
    </button>
  )
}
