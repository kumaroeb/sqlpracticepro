// Mock data for the StreamFlix Ticket page (Sprint 4).
// No backend yet — SQL execution is not implemented. "Run Query" reveals
// the mock result set, solution, explanation, and manager feedback locally.

export type SchemaColumn = {
  name: string
  type: string
}

export type SchemaTable = {
  name: string
  columns: SchemaColumn[]
}

// MVP database only: Movies, Genres, Directors. Reviews is intentionally
// excluded per the locked Sprint 4 spec.
export const schemaTables: SchemaTable[] = [
  {
    name: 'movies',
    columns: [
      { name: 'id', type: 'int' },
      { name: 'title', type: 'text' },
      { name: 'genre_id', type: 'int' },
      { name: 'director_id', type: 'int' },
      { name: 'release_year', type: 'int' },
    ],
  },
  {
    name: 'genres',
    columns: [
      { name: 'id', type: 'int' },
      { name: 'name', type: 'text' },
    ],
  },
  {
    name: 'directors',
    columns: [
      { name: 'id', type: 'int' },
      { name: 'name', type: 'text' },
      { name: 'country', type: 'text' },
    ],
  },
]

export type Priority = 'Low' | 'Medium' | 'High'
export type Difficulty = 'Beginner' | 'Easy' | 'Medium' | 'Hard'

export type Ticket = {
  ticketNumber: string
  department: string
  manager: string
  priority: Priority
  estimatedMinutes: number
  difficulty: Difficulty
  requiredSkills: string[]
  businessRequest: string
  hint: string
  starterQuery: string
  solution: string
  explanation: string
  managerFeedback: string
  breadcrumb: { label: string; href?: string }[]
  results: {
    columns: string[]
    rows: Record<string, string | number>[]
  }
}

export const mockTicket: Ticket = {
  ticketNumber: 'TCK-001',
  department: 'Product Analytics',
  manager: 'Sophia Carter',
  priority: 'Medium',
  estimatedMinutes: 5,
  difficulty: 'Beginner',
  requiredSkills: ['SELECT', 'FROM'],
  businessRequest:
    "The Product Team is updating the homepage. Please list every movie currently available in the catalog. We'll use this report to verify our recommendation system.",
  hint: 'You need every movie and every column — no filtering required. SELECT the columns you want, FROM the movies table.',
  starterQuery: '-- Write your query below\nSELECT\n  \nFROM movies\n',
  solution: 'SELECT *\nFROM movies;',
  explanation:
    'SELECT * returns every column, and FROM movies points at the full catalog table. Together they list every movie currently available — exactly what the Product team asked for.',
  managerFeedback:
    "Nice work — this is exactly what we need to cross-check against the recommendation system. Sending this to the Product team now.",
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'StreamFlix', href: '/streamflix' },
    { label: 'TCK-001', href: undefined },
  ],
  results: {
    columns: ['id', 'title', 'genre_id', 'director_id', 'release_year'],
    rows: [
      { id: 1, title: 'Redline Protocol', genre_id: 2, director_id: 4, release_year: 2023 },
      { id: 2, title: 'Ashfall', genre_id: 1, director_id: 2, release_year: 2022 },
      { id: 3, title: 'Last Signal', genre_id: 2, director_id: 4, release_year: 2021 },
    ],
  },
}