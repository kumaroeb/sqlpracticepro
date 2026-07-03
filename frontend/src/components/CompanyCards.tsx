import { companies } from '../data/companies'

const accentMap: Record<string, { text: string; bg: string; ring: string }> = {
  rose: { text: 'text-rose', bg: 'bg-rose/10', ring: 'hover:border-rose/50' },
  teal: { text: 'text-teal', bg: 'bg-teal/10', ring: 'hover:border-teal/50' },
  amber: { text: 'text-amber', bg: 'bg-amber/10', ring: 'hover:border-amber/50' },
  violet: { text: 'text-violet', bg: 'bg-violet/10', ring: 'hover:border-violet/50' },
}

// Company Card — v0.1: shows one fictional company. That's it for now.
// Progress indicator, difficulty badge, and completion % come later,
// once the SQL Workspace (v0.2) gives us something to track progress on.
export default function CompanyCards() {
  return (
    <section id="worlds" className="border-b border-border bg-bg-elevated">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-teal">
            Learning Worlds
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Pick a company. Solve their problem.
          </h2>
          <p className="mt-4 text-text-muted">
            Every world is a different industry and dataset, so the SQL you
            learn stays attached to a real reason you needed it.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          {companies.map((company) => {
            const accent = accentMap[company.accent]
            return (
              <div
                key={company.id}
                className={`rounded-lg border border-border bg-bg-card p-6 transition-colors ${accent.ring}`}
              >
                <span className={`inline-block rounded-md px-2.5 py-1 text-xs font-medium ${accent.bg} ${accent.text}`}>
                  {company.domain}
                </span>

                <h3 className="mt-4 font-display text-xl font-semibold text-text">{company.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{company.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
