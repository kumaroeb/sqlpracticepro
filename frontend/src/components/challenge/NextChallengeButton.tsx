import { ArrowRight } from 'lucide-react'

export default function NextChallengeButton() {
  return (
    // TODO(navigation): point href at the real next-challenge route once
    // challenge routing/sequencing is designed. Currently a placeholder.
    <a
      href="#"
      className="inline-flex items-center gap-2 rounded-md border border-border-bright bg-bg-card px-4 py-2.5 text-sm font-medium text-text transition-colors hover:border-teal/50 hover:text-teal"
    >
      Next Challenge
      <ArrowRight size={15} />
    </a>
  )
}
