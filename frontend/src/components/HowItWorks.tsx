import { steps } from '../data/steps'

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="border-b border-border bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-14 max-w-xl">
          <p className="mb-3 text-xs font-medium uppercase tracking-wider text-teal">
            How It Works
          </p>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-text sm:text-4xl">
            Five steps. No setup.
          </h2>
        </div>

        <ol className="grid gap-8 sm:grid-cols-5 sm:gap-4">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isLast = index === steps.length - 1
            return (
              <li key={step.id} className="relative flex gap-4 sm:flex-col sm:gap-0">
                {/* Connecting line: horizontal on desktop, vertical on mobile */}
                {!isLast && (
                  <span
                    aria-hidden="true"
                    className="absolute left-6 top-14 h-[calc(100%-2rem)] w-px bg-border sm:left-[calc(50%+1.75rem)] sm:top-6 sm:h-px sm:w-[calc(100%-3.5rem)]"
                  />
                )}

                <div className="relative flex h-12 w-12 flex-none items-center justify-center rounded-full border border-border-bright bg-bg-card text-teal sm:mx-auto">
                  <Icon size={20} strokeWidth={2} />
                  <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-teal font-mono text-[10px] font-semibold text-bg">
                    {index + 1}
                  </span>
                </div>

                <div className="sm:mt-4 sm:text-center">
                  <h3 className="font-display text-sm font-semibold text-text">{step.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-text-muted">{step.description}</p>
                </div>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
