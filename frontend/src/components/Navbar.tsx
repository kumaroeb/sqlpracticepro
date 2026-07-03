import { useState } from 'react'
import { Menu, X, Database } from 'lucide-react'

// Nav kept to real, built destinations only. Features, Pricing, and Sign in
// will come back once those actually exist (v0.2+).
const links = [{ label: 'Learning Worlds', href: '#worlds' }]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-bg/90 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-teal/10 text-teal">
            <Database size={18} strokeWidth={2.25} />
          </span>
          SQLPractice<span className="text-teal">Pro</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-text-muted transition-colors hover:text-text"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#worlds"
            className="rounded-md bg-teal px-4 py-2 text-sm font-medium text-bg transition-colors hover:bg-teal-dim"
          >
            Start practicing
          </a>
        </div>

        <button
          className="text-text md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-bg px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-text-muted hover:text-text"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#worlds"
              onClick={() => setOpen(false)}
              className="rounded-md bg-teal px-4 py-2 text-center text-sm font-medium text-bg"
            >
              Start practicing
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
