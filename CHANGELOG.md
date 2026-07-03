# Changelog

All notable changes to this project are documented here.

## [0.1.2] - Trim stub nav & footer links

### Changed
- `Navbar`: removed "Features", "Pricing", and "Sign in" links — none of
  those point to a real page yet. Only "Learning Worlds" (real anchor) and
  the "Start practicing" CTA remain. Add back once those pages exist.
- `Footer`: removed the Product / Learn / Company link-columns section
  entirely — those were placeholder links (`href="#"`). Footer is now just
  the brand block and the bottom bar (copyright + "no popups" line).

Note: the Features *section* on the landing page itself (`FeatureCards`) is
unchanged — only the nav entry pointing to it was removed, since the
section itself is real, built content.

## [0.1.1] - Simplify Company Card, adopt version-based roadmap

### Changed
- `Company` data type stripped down to `id`, `name`, `domain`, `description`,
  `accent` — removed `status` and `skills` fields
- `CompanyCards` component simplified to match the Company Card spec
  exactly (Purpose: display one fictional company) — removed status
  badges, lock icons, and skill-tag chips
- Roadmap switched from phase numbers to version numbers (0.1 → 1.0),
  matching the actual plan
- Business Model section rewritten: no premium membership, subscription,
  or payment features are being targeted right now — that's explicit
- UX principles renamed to "Learning First Design Principles" and synced
  to the finalized list (no popups, no forced signup, ads for revenue
  only with side-only placement, performance first, accessibility first,
  mobile friendly, reusable components, readable code)
- Added a lightweight "Feature Specs" section to the project doc so future
  features get a short Purpose / Status / Future write-up before being built

### Removed
- Skill tags, "coming soon" states, and lock icons from Company Card
  (deferred — not part of the v0.1 scope)
- Premium AI features, resume/interview prep products, and certificates
  from the business model (not a current goal)

## [0.0.3] - Sprint 2 complete: Landing Page

### Added
- Tailwind CSS v4 installed and configured (via `@tailwindcss/vite`)
- Design system tokens: dark "database midnight" palette, Space Grotesk /
  Inter / JetBrains Mono type system (`src/index.css`)
- `Hero` component with a live business-problem → SQL query → result table
  signature element
- `CompanyCards` component rendering the four Learning Worlds
  (StreamFlix, MedCare, ShopSphere, CampusHub)
- `FeatureCards` component (4 product differentiators)
- `Footer` component
- Responsive design across all landing page sections (mobile nav included)
- FastAPI backend scaffold: `app/main.py`, CORS config, `/health` endpoint,
  `/companies` endpoint returning the four Learning Worlds
- Root README with full setup instructions for frontend and backend
- `docs/PROJECT_OVERVIEW.md` synced with current progress and roadmap

## [0.0.2] - Sprint 1

### Added
- GitHub repository created, Git configured
- React + TypeScript project scaffolded with Vite
- Initial `Hero` and `Navbar` components (pre-Tailwind)
- CHANGELOG created
- First successful Git workflow (production build + ESLint passing)

## [0.0.1] - Project kickoff

### Added
- Project vision, mission, target audience, and business model defined
- Technology stack decided (React/TS/Vite frontend, FastAPI/PostgreSQL backend)
- Initial project structure planned
