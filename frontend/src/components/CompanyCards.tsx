import { ArrowRight, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { companies } from '../data/companies'

const accentMap: Record<string, { text: string; bg: string; ring: string; border: string }> = {
  rose: { text: 'text-rose', bg: 'bg-rose/10', ring: 'hover:border-rose/50', border: 'border-rose/40' },
  teal: { text: 'text-teal', bg: 'bg-teal/10', ring: 'hover:border-teal/50', border: 'border-teal/40' },
  amber: { text: 'text-amber', bg: 'bg-amber/10', ring: 'hover:border-amber/50', border: 'border-amber/40' },
  violet: { text: 'text-violet', bg: 'bg-violet/10', ring: 'hover:border-violet/50', border: 'border-violet/40' },
}

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
            const isAvailable = company.status === 'available'

            const cardInner = (
              <>
                <div className="flex items-start justify-between gap-3">
                  <span className={`inline-block rounded-md px-2.5 py-1 text-xs font-medium ${accent.bg} ${accent.text}`}>
                    {company.domain}
                  </span>
                  {!isAvailable && (
                    <span className="flex items-center gap-1 rounded-md border border-border px-2 py-1 text-xs text-text-faint">
                      <Lock size={12} />
                      Coming Soon
                    </span>
                  )}
                </div>

                <h3 className="mt-4 font-display text-xl font-semibold text-text">{company.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{company.description}</p>

                {isAvailable && (
                  <span className={`mt-5 inline-flex items-center gap-1.5 text-sm font-medium ${accent.text}`}>
                    Start the StreamFlix challenge
                    <ArrowRight size={15} className="transition-transform group-hover:translate-x-0.5" />
                  </span>
                )}
              </>
            )

            if (isAvailable) {
              return (
                <Link
                  key={company.id}
                  to="/streamflix"
                  aria-label={`Start the ${company.name} SQL challenge`}
                  className={`group rounded-lg border bg-bg-card p-6 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal ${accent.border} ${accent.ring}`}
                >
                  {cardInner}
                </Link>
              )
            }

            return (
              <div
                key={company.id}
                aria-disabled="true"
                className="rounded-lg border border-border bg-bg-card p-6 opacity-60"
              >
                {cardInner}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
