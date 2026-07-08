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
  managerTitle: string
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
  // Assignment Complete panel (Sprint 8, Slice 3) — shown only when the
  // ticket's validation passes.
  assignmentCompleteMessage: string
  learnedConcepts: string[]
  learnedExplanation: string
  businessImpact: string
  nextTicketDisplay: string
  nextTicketTitle: string
  nextTicketEstimatedTime: string
}

export const mockTicket: Ticket = {
  ticketNumber: 'TCK-001',
  department: 'Product Analytics',
  manager: 'Sophia Carter',
  managerTitle: 'Product Analytics Manager',
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
  assignmentCompleteMessage:
    "Excellent work.\nThe Product Team can now verify the homepage movie catalog using the report you generated.\nI've already prepared your next assignment.",
  learnedConcepts: ['SELECT', 'FROM', 'Returning specific columns'],
  learnedExplanation:
    'You learned how to retrieve specific information from a database using the SELECT statement.',
  businessImpact:
    "Your report gives the Product Team a complete list of available movies before tomorrow's homepage release.",
  nextTicketDisplay: 'Ticket #002',
  nextTicketTitle: 'Movies Released After 2020',
  nextTicketEstimatedTime: '5 minutes',
}
