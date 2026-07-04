import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

// Placeholder: only TCK-001 exists right now, so there is no real "next
// ticket" to route to yet. This points back at /streamflix so the link is
// always valid. Update the `to` prop once ticket sequencing is built.
export default function NextTicketButton() {
  return (
    <Link
      to="/streamflix"
      className="inline-flex items-center gap-2 rounded-md border border-border-bright bg-bg-card px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-teal/50 hover:text-teal"
    >
      Next Ticket
      <ArrowRight size={15} />
    </Link>
  )
}