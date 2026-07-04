import { Play, Loader2 } from 'lucide-react'

type RunQueryButtonProps = {
  onRun: () => void
  isLoading: boolean
}

export default function RunQueryButton({ onRun, isLoading }: RunQueryButtonProps) {
  return (
    <button
      type="button"
      onClick={onRun}
      disabled={isLoading}
      aria-busy={isLoading}
      className="inline-flex items-center gap-2 rounded-md bg-teal px-4 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-teal-dim disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isLoading ? (
        <>
          <Loader2 size={15} className="animate-spin" />
          Running…
        </>
      ) : (
        <>
          <Play size={15} strokeWidth={2.5} />
          Run Query
        </>
      )}
    </button>
  )
}
