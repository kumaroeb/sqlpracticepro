# SQLPracticePro - Project Overview

## Version

v0.1

---

# Project Vision

SQLPracticePro is an interactive SQL learning platform designed to teach SQL through realistic business scenarios rather than isolated interview questions.

Instead of memorizing SQL syntax, learners solve real business problems using realistic datasets inside fictional companies.

Our philosophy is:

> **Practice SQL. Understand SQL. Master SQL.**

---

# Mission

Build the most beginner-friendly and practical SQL learning platform on the internet.

Users should feel like they are working as a Data Analyst rather than completing coding exercises.

---

# Product Goals

Our platform should:

- Teach SQL using realistic datasets
- Explain why queries work
- Require no local database installation
- Allow users to start practicing immediately
- Provide an excellent free learning experience
- Remain fast, clean, and distraction-free

---

# Learning First Design Principles

SQLPracticePro follows these rules:

- **No popups.**
- **No forced signup.** Users can start practicing immediately.
- **Ads, revenue only.** No paywalls, no premium tier, right now. If ads are
  introduced, they appear only on the side and never affect the workspace.
- **Performance first.**
- **Accessibility first.**
- **Mobile friendly.**
- **Reusable components.**
- **Readable code.**

---

# Business Model

The platform is free. No premium membership, subscription, or payment
features are being targeted right now — that's an explicit non-goal for the
current phase. If revenue is introduced later, it will be a single sidebar ad
that never interrupts the SQL workspace. The priority is making the product
easy and frictionless for users first; monetization is a later conversation.

---

# Target Audience

Primary users:

- Students
- Career changers
- Junior Data Analysts
- Junior Data Engineers
- SQL interview candidates

Secondary users:

- Working professionals refreshing SQL skills

---

# Current Technology Stack

Frontend

- React 18
- TypeScript
- Vite
- Tailwind CSS v4
- lucide-react (icons)

Backend

- FastAPI
- Python 3.11+
- SQLAlchemy (ORM, wired for Phase 2)

Database

- PostgreSQL

Editor (Phase 2)

- Monaco Editor

Hosting (Planned)

- Vercel (frontend)
- Render (backend)
- Neon PostgreSQL (database)

---

# Current Project Structure

```
sqlpracticepro/
  frontend/
    src/
      components/
        Navbar.tsx
        Hero.tsx
        CompanyCards.tsx
        FeatureCards.tsx
        Footer.tsx
      data/
        companies.ts
        features.ts
      App.tsx
      main.tsx
      index.css
  backend/
    app/
      routers/
        health.py
        companies.py
      config.py
      main.py
    requirements.txt
  database/
  datasets/
  docs/
  assets/
  scripts/
  README.md
  CHANGELOG.md
```

---

# Current Progress

Completed

- GitHub repository created
- Git configured
- React + TypeScript project created (Vite)
- Tailwind CSS v4 installed and configured
- Hero component built (with live query/result signature element)
- Navbar component built (responsive, mobile menu)
- Learning Worlds section built (Company Cards: StreamFlix, MedCare, ShopSphere, CampusHub)
- Features section built
- Footer component built
- FastAPI backend scaffolded with health check and companies endpoints
- CHANGELOG created
- Production build passes
- First successful Git workflow completed

---

# Development Workflow

Every feature follows the same process.

Idea -> Feature Specification -> Architecture Review -> Implementation -> Manual Code Review -> Testing -> Git Commit -> Git Push

---

# AI Workflow

ChatGPT

Responsible for:

- Product architecture
- Database design
- UI/UX decisions
- Teaching React/FastAPI
- Feature planning
- Code review
- Product roadmap

Codex / Claude

Responsible for:

- Implementing components
- Refactoring
- Fixing lint/build issues
- Generating boilerplate
- Writing tests (future)

Human

Responsible for:

- Reviewing changes
- Understanding code
- Approving implementations
- Git commits
- Product decisions

---

# Development Principles

Every component should have one responsibility.

Reusable components only.

Readable code over clever code.

Minimal dependencies.

Accessibility first.

Performance first.

---

# Current Version

**v0.1 — Landing Page: complete.**

- Hero
- Navbar
- Feature Cards
- Company Card (simplified: name, domain, description only)
- Footer
- Responsive Design
- Tailwind CSS

**Next up: v0.2 — SQL Workspace** (Monaco Editor, connected to the backend).

---

# Learning Worlds

Instead of generic databases, users practice SQL inside realistic fictional companies.

Current planned companies

- StreamFlix — Movie Streaming Analytics
- MedCare — Hospital Analytics
- ShopSphere — E-commerce Analytics
- CampusHub — University Analytics

Future

- FinTrust
- SkyJet
- CargoFlow

---

# StreamFlix

This is the first learning database.

Possible tables

- Movies
- Actors
- Movie_Actors
- Directors
- Genres
- Users
- Reviews
- Watch_History
- Subscriptions
- Countries
- Languages

This database alone can teach:

- SELECT
- WHERE
- ORDER BY
- GROUP BY
- HAVING
- JOIN
- LEFT JOIN
- CTE
- Window Functions
- Aggregate Functions

---

# Learning Philosophy

Questions should always include business context.

Instead of "Find all movies," we ask: "You are a Data Analyst at StreamFlix. The Product Team wants the top-rated Action movies released after 2020 to feature on the homepage."

The learner is solving a business problem rather than memorizing SQL.

---

# Long-Term Vision

SQLPracticePro should feel like a career simulator.

Learners join fictional companies and solve realistic SQL problems.

They progress through multiple industries while naturally learning SQL concepts.

The end goal is to prepare users for real Data Analyst and Data Engineering roles.

---

# Roadmap

**Version 0.1 — Landing Page** ✅ Done

**Version 0.2 — SQL Workspace**
Monaco Editor, in-browser query input, connected to the backend.

**Version 0.3 — PostgreSQL Backend**
Live query execution against a real Postgres database via FastAPI.

**Version 0.4 — StreamFlix Dataset**
First real Learning World: schema, seed data, and beginner SQL challenges.

**Version 1.0 — Public Beta**
Everything above, polished and deployed publicly.

Anything not on this list (authentication, user progress tracking,
explanation engine, additional Learning Worlds, premium features) is
deliberately deferred. Simple first; add complexity only when it's needed.

---

# Feature Specs

Specs are written per-feature, only for what's currently being built. Fields
and behavior not listed here are intentionally left out until needed.

## Company Card

**Purpose:** Display one fictional company.

**Status:** Completed (v0.1) — shows domain, name, and description only.

**Future (not yet built):**
- Progress indicator
- Difficulty badge
- Completion %

---

# Motto

Don't memorize SQL.

Work as a Data Analyst.

Solve real business problems.
