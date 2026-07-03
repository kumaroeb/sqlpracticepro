import { ArrowDown, Play } from 'lucide-react'

export default function Hero() {
  return (
    <section id="top" className="bg-grid relative overflow-hidden border-b border-border">
      <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 md:grid-cols-2 md:items-center md:py-28">
        {/* Left: copy */}
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border-bright bg-bg-elevated px-3 py-1 text-xs text-text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            No installs. No account required to start.
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-text sm:text-5xl">
            Don't memorize SQL.
            <br />
            <span className="text-teal">Work</span> as a Data Analyst.
          </h1>

          <p className="mt-6 max-w-md text-base leading-relaxed text-text-muted">
            SQLPracticePro teaches SQL through realistic business problems inside
            fictional companies — not flashcards, not isolated interview trivia.
            Open the editor and start solving.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#worlds"
              className="inline-flex items-center gap-2 rounded-md bg-teal px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-teal-dim"
            >
              <Play size={16} strokeWidth={2.5} />
              Start practicing free
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 text-sm font-medium text-text-muted transition-colors hover:text-text"
            >
              See how it works
              <ArrowDown size={14} />
            </a>
          </div>

          <p className="mt-8 text-xs text-text-faint">
            Built for students, career changers, and analysts refreshing their SQL.
          </p>
        </div>

        {/* Right: signature element — the business problem, live, becoming a query and a result */}
        <div className="relative">
          <div className="rounded-lg border border-border bg-bg-card px-4 py-3 text-sm text-text-muted shadow-lg shadow-black/20">
            <span className="font-medium text-amber">Product Team @ StreamFlix:</span>{' '}
            "Give us the top-rated Action movies released after 2020 for the homepage."
          </div>

          <div className="my-3 flex justify-center text-text-faint">
            <ArrowDown size={16} />
          </div>

          <div className="overflow-hidden rounded-lg border border-border-bright bg-[#0d1526] shadow-2xl shadow-black/40">
            <div className="flex items-center gap-1.5 border-b border-border px-4 py-2.5">
              <span className="h-2.5 w-2.5 rounded-full bg-rose/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
              <span className="h-2.5 w-2.5 rounded-full bg-teal/70" />
              <span className="ml-2 text-xs text-text-faint">query.sql</span>
            </div>
            <pre className="overflow-x-auto px-4 py-4 font-mono text-[13px] leading-relaxed">
              <code>
                <span className="text-violet">SELECT</span> <span className="text-text">title, release_year, rating</span>{'\n'}
                <span className="text-violet">FROM</span> <span className="text-text">movies</span>{'\n'}
                <span className="text-violet">WHERE</span> <span className="text-text">genre = </span><span className="text-teal">'Action'</span>{'\n'}
                {'  '}<span className="text-violet">AND</span> <span className="text-text">release_year &gt; </span><span className="text-amber">2020</span>{'\n'}
                <span className="text-violet">ORDER BY</span> <span className="text-text">rating </span><span className="text-violet">DESC</span>{'\n'}
                <span className="text-violet">LIMIT</span> <span className="text-amber">5</span><span className="text-text">;</span>
              </code>
            </pre>
            <div className="border-t border-border bg-bg-elevated px-4 py-3">
              <table className="w-full text-left text-xs text-text-muted">
                <thead>
                  <tr className="text-text-faint">
                    <th className="pb-1.5 font-normal">title</th>
                    <th className="pb-1.5 font-normal">year</th>
                    <th className="pb-1.5 font-normal">rating</th>
                  </tr>
                </thead>
                <tbody className="font-mono text-text">
                  <tr>
                    <td className="py-0.5">Redline Protocol</td>
                    <td className="py-0.5">2023</td>
                    <td className="py-0.5 text-teal">9.1</td>
                  </tr>
                  <tr>
                    <td className="py-0.5">Ashfall</td>
                    <td className="py-0.5">2022</td>
                    <td className="py-0.5 text-teal">8.8</td>
                  </tr>
                  <tr>
                    <td className="py-0.5 text-text-faint">…</td>
                    <td className="py-0.5 text-text-faint">…</td>
                    <td className="py-0.5 text-text-faint">…</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
