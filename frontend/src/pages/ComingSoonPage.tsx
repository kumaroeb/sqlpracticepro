import { Link } from 'react-router-dom'
import { Construction } from 'lucide-react'

export default function ComingSoonPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-bg px-6">
      <div className="max-w-sm text-center">
        <span className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-amber/10 text-amber">
          <Construction size={22} />
        </span>
        <h1 className="font-display text-xl font-semibold text-text">More tickets coming soon</h1>
        <p className="mt-2 text-sm text-text-muted">
          Ticket #002 hasn't been built yet — check back soon for your next assignment.
        </p>
        <Link
          to="/streamflix"
          className="mt-6 inline-flex items-center gap-2 rounded-md bg-teal px-4 py-2.5 text-sm font-medium text-bg transition-colors hover:bg-teal-dim"
        >
          Back to Ticket #001
        </Link>
      </div>
    </div>
  )
}
