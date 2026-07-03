import type { LucideIcon } from 'lucide-react'
import { Building2, Terminal, MessageSquareText, Zap } from 'lucide-react'

export type Feature = {
  id: string
  title: string
  description: string
  icon: LucideIcon
}

export const features: Feature[] = [
  {
    id: 'realistic',
    title: 'Realistic scenarios, not trivia',
    description:
      'Every question comes from a fictional company with a business problem — never an isolated syntax quiz.',
    icon: Building2,
  },
  {
    id: 'in-browser',
    title: 'Nothing to install',
    description:
      'A full Postgres-backed SQL editor runs right in your browser. Open a tab and start querying in seconds.',
    icon: Terminal,
  },
  {
    id: 'explain',
    title: 'Explains the why',
    description:
      "Get more than pass or fail. See why a query works, and why the obvious first attempt often doesn't.",
    icon: MessageSquareText,
  },
  {
    id: 'fast',
    title: 'Fast, focused, distraction-free',
    description:
      'No popups, no forced sign-up before you practice, one quiet sidebar at most. Just you and the editor.',
    icon: Zap,
  },
]
