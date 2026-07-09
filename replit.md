# Madhan Kumar — Portfolio

A cinematic personal portfolio website for Madhan Kumar, a Full-Stack/AI/IoT developer, featuring 7 interactive sections with a dark crimson nebula aesthetic, animated skills visualizer, project case-study navigator, education flight trajectory, and contact form.

## Run & Operate

- `pnpm --filter @workspace/api-server run dev` — run the API server (port 5000)
- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from the OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- Required env: `DATABASE_URL` — Postgres connection string

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- API: Express 5
- DB: PostgreSQL + Drizzle ORM
- Validation: Zod (`zod/v4`), `drizzle-zod`
- API codegen: Orval (from OpenAPI spec)
- Build: esbuild (CJS bundle)

## Where things live

- `artifacts/portfolio/src/components/` — all section components (Hero, About, Projects, Skills, Credentials, Education, Contact, Navbar, NebulaBackground)
- `artifacts/portfolio/src/pages/Home.tsx` — assembles all sections
- `artifacts/portfolio/src/index.css` — theme tokens, Space Grotesk font import, HUD utility classes
- `attached_assets/Professional_Photo_1783621096294.jpeg` — user's profile photo (aliased as `@assets/` in Vite config)

## Architecture decisions

- **Presentation-first, no backend** — static single-page portfolio; all data is hardcoded constants in each component file.
- **User photo** at `attached_assets/Professional_Photo_1783621096294.jpeg` is imported via `@assets/` Vite alias (configured in `vite.config.ts`).
- **Resume/CV links** are placeholder `href="#"` — marked with `// RESUME LINK PLACEHOLDER` and `// CV DOWNLOAD PLACEHOLDER` comments throughout the components.
- **Skills charts** use Recharts (recharts ^2.15.2 already in devDeps); Bar, Donut, and Radar chart tabs.
- **Education trajectory** uses Framer Motion `animate={{ top }}` with spring physics to move the rocket icon between stage markers.

## Product

7-section portfolio: Hero → About → Projects (6 case studies with orbit navigator) → Skills (interactive chart visualizer with telemetry panel) → Credentials (Wall of Fame grid) → Education (flight trajectory visualization) → Contact (form + footer).

## User preferences

_Populate as you build — explicit user instructions worth remembering across sessions._

## Gotchas

_Populate as you build — sharp edges, "always run X before Y" rules._

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
