import { Clock, Gauge } from 'lucide-react'

type Difficulty = 'Easy' | 'Medium' | 'Hard'

const difficultyStyles: Record<Difficulty, string> = {
  Easy: 'text-teal bg-teal/10',
  Medium: 'text-amber bg-amber/10',
  Hard: 'text-rose bg-rose/10',
}

type ChallengeHeaderProps = {
  title: string
  difficulty: Difficulty
  estimatedMinutes: number
}

export default function ChallengeHeader({ title, difficulty, estimatedMinutes }: ChallengeHeaderProps) {
  return (
    <div>
      <h1 className="font-display text-2xl font-semibold tracking-tight text-text sm:text-3xl">
        {title}
      </h1>
      <div className="mt-3 flex flex-wrap items-center gap-3 text-sm">
        <span className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs font-medium ${difficultyStyles[difficulty]}`}>
          <Gauge size={13} />
          {difficulty}
        </span>
        <span className="inline-flex items-center gap-1.5 text-text-muted">
          <Clock size={14} />
          ~{estimatedMinutes} min
        </span>
      </div>
    </div>
  )
}
