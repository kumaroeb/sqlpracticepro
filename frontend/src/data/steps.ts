import type { LucideIcon } from 'lucide-react'
import { Building2, MessageSquareText, Terminal, Play, CheckCircle2 } from 'lucide-react'

export type Step = {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const steps: Step[] = [
  {
    id: 'pick',
    title: 'Pick a company',
    description: 'Choose a Learning World, like StreamFlix, and get its real dataset.',
    icon: Building2,
  },
  {
    id: 'read',
    title: 'Read the problem',
    description: 'Every question comes from an actual business need, not trivia.',
    icon: MessageSquareText,
  },
  {
    id: 'write',
    title: 'Write your query',
    description: 'Use the in-browser SQL editor. Nothing to install.',
    icon: Terminal,
  },
  {
    id: 'run',
    title: 'Run it',
    description: 'Execute against real data and see your result set instantly.',
    icon: Play,
  },
  {
    id: 'compare',
    title: 'Compare & learn',
    description: 'See the solution and understand why it works.',
    icon: CheckCircle2,
  },
]
