# Anime Hub

Anime Hub is a React 19 + TypeScript single-page application powered by Vite. It focuses on rapid UI experimentation for anime dashboards, features a light/dark theme toggle, and relies on the latest React Router (v7) data APIs for navigation.

## Stack Highlights

- React 19, React Router 7, React DOM
- Vite 7 for dev server + build pipeline
- Tailwind CSS 4 with Radix UI primitives and shadcn/ui styling helpers
- Form handling via React Hook Form, validation with Zod
- Component generation automated with Yarn scripts and `npx shadcn@latest`

## Project Structure

```
anime-hub/
├─ src/
│  ├─ assets/main.css
│  ├─ components/      # shadcn + Radix reusable UI
│  ├─ hooks/           # custom hooks (e.g. responsive helpers)
│  └─ main.tsx         # app entry, theming, router host
├─ docs/react-router/  # in-repo guide for router patterns
├─ scripts/            # utility scripts (shadcn component batch)
├─ dist/               # production build output
└─ README.md
```

## Prerequisites

- Node.js ≥ 20 (LTS recommended)
- Yarn (the repo assumes `yarn.lock`)
- Modern browser that supports ES2022 modules

## Getting Started

```bash
git clone https://github.com/<your-org>/anime-hub.git
cd anime-hub
yarn install
yarn dev
```

Visit `http://localhost:5173` and edits under `src/` will hot-reload automatically.

## Available Scripts

- `yarn dev` – start the Vite dev server with React Fast Refresh.
- `yarn build` – type-check via `tsc -b` then emit optimized assets into `dist/`.
- `yarn preview` – run the production server preview (uses the latest build).
- `yarn lint` – run ESLint across the repo.

## React Router Notes

The app uses the modern React Router data APIs (actions, loaders, pending UI). Internal notes and examples live in `docs/react-router/`. Start with `docs/react-router/index.md` for a quick refresher on route objects, then branch into the other files for data loading, testing, and custom navigations.

## Working With UI Components

- Individual components come from shadcn/ui + Radix and live under `src/components/ui/`.
- To add new primitives, you can either run the curated batch script:
  ```bash
  bash scripts/create-components.sh
  ```
  or call the generator ad-hoc:
  ```bash
  npx shadcn@latest add accordion
  ```
- Theme switching is handled by `ThemeProvider`/`ModeToggle` inside `src/main.tsx`. Update those components if you need custom palettes or new storage keys.

## Using npx Commands

- `npx shadcn@latest add <component>` – scaffold UI pieces (used by the script above).
- `npx serve dist` – optional quick way to inspect the production bundle after `yarn build`.

## Deployment

1. `yarn build`
2. Upload the `dist/` folder to your static host (Vercel, Netlify, Cloudflare Pages, etc.) or serve it manually via `npx serve dist`.

## Troubleshooting

- Delete `node_modules` + reinstall (`rm -rf node_modules && yarn install`) if type definitions look stale.
- Clear Vite cache (`rm -rf node_modules/.vite`) when alias or env changes don’t reflect.
- Ensure you’re running the same Node version across contributors to avoid lockfile churn.
