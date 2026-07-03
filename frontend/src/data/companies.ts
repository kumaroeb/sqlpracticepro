// Company Card — v1.0 scope: display one fictional company, and whether
// it's playable yet. Planned additions (not yet built):
//   - progress indicator (per-user completion)
//   - difficulty badge
//   - completion %
// Add those to this type + the card component together when that work starts.

export type Company = {
  id: string
  name: string
  domain: string
  description: string
  accent: string
  status: 'available' | 'coming-soon'
}

export const companies: Company[] = [
  {
    id: 'streamflix',
    name: 'StreamFlix',
    domain: 'Movie Streaming Analytics',
    description:
      'The Product team wants the top-rated releases for the homepage. You have Movies, Actors, Reviews, and Watch History.',
    accent: 'rose',
    status: 'available',
  },
  {
    id: 'medcare',
    name: 'MedCare',
    domain: 'Hospital Analytics',
    description:
      'Operations needs patient wait times by department, broken down by shift and week.',
    accent: 'teal',
    status: 'coming-soon',
  },
  {
    id: 'shopsphere',
    name: 'ShopSphere',
    domain: 'E-commerce Analytics',
    description:
      'Marketing wants repeat-purchase rate by acquisition channel, ahead of the Q3 budget review.',
    accent: 'amber',
    status: 'coming-soon',
  },
  {
    id: 'campushub',
    name: 'CampusHub',
    domain: 'University Analytics',
    description:
      'The registrar needs enrollment trends by department and semester for the annual report.',
    accent: 'violet',
    status: 'coming-soon',
  },
]
