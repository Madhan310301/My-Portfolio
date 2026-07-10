# Madhan Kumar — Portfolio

A cinematic personal portfolio website featuring 7 interactive sections with a dark crimson nebula aesthetic, animated skills visualizer, project case-study navigator, education flight trajectory, and contact form.

## Quick Start

```bash
# Install dependencies (pnpm required)
pnpm install

# Start the dev server (defaults to port 5173)
pnpm --filter @workspace/portfolio run dev

# Or with a custom port
PORT=3000 pnpm --filter @workspace/portfolio run dev
```

## Commands

| Command | Description |
|---------|-------------|
| `pnpm --filter @workspace/portfolio run dev` | Start the Vite dev server |
| `pnpm --filter @workspace/portfolio run build` | Production build to `artifacts/portfolio/dist/` |
| `pnpm --filter @workspace/portfolio run serve` | Preview the production build |
| `pnpm run typecheck` | TypeScript type-check across all packages |
| `pnpm run build` | Typecheck + build everything |

## Environment Variables

| Variable | Default | Description |
|----------|---------|-------------|
| `PORT` | `5173` | Dev server port |
| `BASE_PATH` | `/` | Base URL path for deployment |

## Stack

- **Framework**: React 19 + Vite 7
- **Styling**: Tailwind CSS 4 + shadcn/ui (Radix primitives)
- **Animation**: Framer Motion
- **Charts**: Recharts
- **Routing**: Wouter
- **Language**: TypeScript 5.9
- **Package Manager**: pnpm workspaces

## Where Things Live

```
artifacts/portfolio/
├── src/
│   ├── components/       # Section components (Hero, About, Projects, Skills, etc.)
│   │   └── ui/           # shadcn/ui primitives (55+ components)
│   ├── pages/
│   │   ├── Home.tsx      # Assembles all sections
│   │   └── not-found.tsx
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Root component with routing
│   ├── main.tsx          # Entry point
│   └── index.css         # Theme tokens, fonts, utility classes
├── public/               # Static assets
├── index.html            # HTML template
└── vite.config.ts        # Vite configuration
attached_assets/          # User profile photo (aliased as @assets/ in Vite)
```

## Architecture Decisions

- **Static single-page app** — all data is hardcoded in component files; no backend or database required.
- **User photo** at `attached_assets/` is imported via the `@assets/` Vite alias.
- **Resume/CV links** are placeholder `href="#"` — search for `RESUME LINK PLACEHOLDER` and `CV DOWNLOAD PLACEHOLDER` to replace them.
- **Skills charts** use Recharts with Bar, Donut, and Radar chart tabs.
- **Education trajectory** uses Framer Motion spring physics.
