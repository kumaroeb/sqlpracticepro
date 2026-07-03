# SQLPracticePro

> Don't memorize SQL. Work as a Data Analyst. Solve real business problems.

An interactive SQL learning platform that teaches SQL through realistic business
scenarios inside fictional companies (StreamFlix, MedCare, ShopSphere, CampusHub)
instead of isolated syntax drills.

See [`docs/PROJECT_OVERVIEW.md`](docs/PROJECT_OVERVIEW.md) for the full product vision,
roadmap, and design principles.

---

## Project structure

```
sqlpracticepro/
  frontend/     React + TypeScript + Vite + Tailwind CSS landing page & app
  backend/      FastAPI service (health check + companies endpoints, more coming)
  database/     Schema + migrations (Phase 2+)
  datasets/     Seed data for each Learning World (Phase 3+)
  docs/         Product docs
  scripts/      Dev/ops scripts
  assets/       Shared static assets (logos, illustrations)
```

---

## Getting started

### Frontend

```bash
cd frontend
npm install
npm run dev
```

The app runs at `http://localhost:5173`.

Build for production:

```bash
npm run build
npm run preview
```

### Backend

Requires Python 3.11+.

```bash
cd backend
python -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
uvicorn app.main:app --reload
```

The API runs at `http://localhost:8000`. Interactive docs at
`http://localhost:8000/docs`.

By default the frontend expects the API at `http://localhost:8000` — nothing is
wired up yet on the frontend to call it (that's Phase 2, once the SQL Workspace
starts hitting `/companies`), but the endpoint is live and ready to use.

---

## Tech stack

| Layer     | Choice                                   |
|-----------|-------------------------------------------|
| Frontend  | React 18, TypeScript, Vite, Tailwind CSS v4 |
| Icons     | lucide-react                              |
| Backend   | FastAPI, SQLAlchemy, Pydantic Settings    |
| Database  | PostgreSQL (Neon in production)           |
| Editor    | Monaco Editor (Phase 2)                   |
| Hosting   | Vercel (frontend), Render (backend), Neon (DB) |

---

## Current status

**v0.1 (Landing Page): complete.** Navbar, Hero, Learning Worlds (StreamFlix
active, others Coming Soon), How It Works, Why SQLPracticePro, and Footer
are all built and responsive. No auth, pricing, or testimonials — out of
scope by design.

**Next up — v0.2: SQL Workspace.** Monaco Editor, connected to the backend.
This is also when the StreamFlix card's CTA gets pointed at a real workspace
route instead of scrolling back to Learning Worlds.

See the [Roadmap](docs/PROJECT_OVERVIEW.md#roadmap) for the full version plan.

---

## Learning First design principles

- No popups
- No forced signup
- Ads for revenue only — side placement, never inside the workspace
- Performance first
- Accessibility first
- Mobile friendly
- Reusable components
- Readable code

No premium membership or payment features are being targeted right now —
the priority is keeping the product simple and easy for users first.
