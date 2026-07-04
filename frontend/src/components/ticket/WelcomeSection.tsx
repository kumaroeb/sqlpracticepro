import { Database } from 'lucide-react'

export default function WelcomeSection() {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-10 w-10 flex-none items-center justify-center rounded-md bg-teal/10 text-teal">
        <Database size={20} strokeWidth={2} />
      </span>
      <div>
        <p className="text-sm text-text-muted">
          Welcome to <span className="font-medium text-text">StreamFlix</span>
        </p>
        <p className="text-xs text-text-faint">You're working as a Junior Data Analyst.</p>
      </div>
    </div>
  )
}