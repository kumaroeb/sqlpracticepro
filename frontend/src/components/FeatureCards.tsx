import { features } from '../data/features'

export default function FeatureCards() {
  return (
    <section id="features" className="border-b border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 max-w-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-teal">
            Why SQLPracticePro
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Built to be used, not endured.
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon
            return (
              <div
                key={feature.id}
                className="rounded-lg border border-border bg-bg-card p-6 transition-colors hover:border-border-bright"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-teal/10 text-teal">
                  <Icon size={20} strokeWidth={2} />
                </div>
                <h3 className="font-display text-base font-semibold text-text">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-text-muted">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
