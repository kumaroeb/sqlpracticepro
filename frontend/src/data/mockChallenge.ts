// Mock data for the StreamFlix Challenge Page (Sprint 3).
// No backend yet — this stands in for what will eventually come from the
// FastAPI + PostgreSQL layer (v0.2+).

export type SchemaColumn = {
  name: string
  type: string
}

export type SchemaTable = {
  name: string
  columns: SchemaColumn[]
}

export const schemaTables: SchemaTable[] = [
  {
    name: 'movies',
    columns: [
      { name: 'id', type: 'int' },
      { name: 'title', type: 'text' },
      { name: 'genre', type: 'text' },
      { name: 'release_year', type: 'int' },
      { name: 'rating', type: 'numeric' },
    ],
  },
  {
    name: 'actors',
    columns: [
      { name: 'id', type: 'int' },
      { name: 'name', type: 'text' },
      { name: 'country', type: 'text' },
    ],
  },
  {
    name: 'movie_actors',
    columns: [
      { name: 'movie_id', type: 'int' },
      { name: 'actor_id', type: 'int' },
    ],
  },
  {
    name: 'reviews',
    columns: [
      { name: 'id', type: 'int' },
      { name: 'movie_id', type: 'int' },
      { name: 'user_id', type: 'int' },
      { name: 'score', type: 'numeric' },
    ],
  },
]

export const mockChallenge = {
  breadcrumb: [
    { label: 'Home', href: '/' },
    { label: 'StreamFlix', href: '/streamflix' },
    { label: 'Top-Rated Action Movies', href: undefined },
  ],
  title: 'Top-Rated Action Movies',
  difficulty: 'Easy' as const,
  estimatedMinutes: 5,
  businessRequest:
    "You are a Data Analyst at StreamFlix. The Product Team wants the top-rated Action movies released after 2020 to feature on the homepage.",
  starterQuery: '-- Write your query below\nSELECT\n  \nFROM movies\n',
  hint: "Filter movies where genre = 'Action' and release_year > 2020, then sort by rating in descending order.",
  explanation:
    "This query filters the movies table down to Action titles released after 2020 using WHERE, then ORDER BY rating DESC surfaces the highest-rated ones first. LIMIT keeps the result set small enough to feature on a homepage.",
  results: {
    columns: ['title', 'release_year', 'rating'],
    rows: [
      { title: 'Redline Protocol', release_year: 2023, rating: 9.1 },
      { title: 'Ashfall', release_year: 2022, rating: 8.8 },
      { title: 'Last Signal', release_year: 2021, rating: 8.4 },
    ],
  },
}
