import { Database } from 'lucide-react'

// Kept intentionally minimal: brand block + bottom bar only.
// The Product / Learn / Company link columns are removed for now — they
// pointed to pages that don't exist yet. Bring them back once those pages
// (or at least real anchors) actually exist.
export default function Footer() {
  return (
    <footer className="bg-bg">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold text-text">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-teal/10 text-teal">
            <Database size={18} strokeWidth={2.25} />
          </span>
          SQLPractice<span className="text-teal">Pro</span>
        </a>
        <p className="mt-4 max-w-xs text-sm leading-relaxed text-text-muted">
          Practice SQL. Understand SQL. Master SQL. Learn by solving real
          business problems, not memorizing syntax.
        </p>

        <div className="mt-10 flex flex-col gap-4 border-t border-border pt-6 text-xs text-text-faint sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} SQLPracticePro. All rights reserved.</span>
          <span>No popups. No forced sign-up. Ever.</span>
        </div>
      </div>
    </footer>
  )
}
