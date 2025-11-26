## Prompt: Anime Streaming Experience

You are an expert product + UI designer building a responsive, mobile-first web app named "Anime Hub". The codebase already uses React 19, React Router 7, TypeScript, Tailwind CSS 4, shadcn/ui, Radix primitives, and a theme toggle powered by `ThemeProvider` + `ModeToggle`. The goal is to evolve the project into a polished anime-watching experience that feels premium yet playful.

### Core Requirements

- Create a home screen that highlights featured anime with immersive hero artwork, quick metadata (genre, rating, episode count), and a CTA that routes to the show's page using React Router actions/loaders.
- Design category rows (Trending, Recently Updated, Classics) with horizontal carousels using existing shadcn/Radix components; include subtle hover interactions and progress badges for partially watched shows.
- Craft a dedicated "Watch" view that centers on a custom video player (HTML5 video is fine) with controls for play/pause, scrubber, volume, quality selector, and subtitle toggle. Keep controls minimal, aligned with the dark theme, and ensure focus states are accessible.
- Expose an episode list sidebar for the current series; it should be collapsible, keyboard navigable, and remember its open/closed state via local storage.
- Provide a lightweight "Up Next" mini card beneath the player that previews the next episode and includes a start button.

### Visual Direction

- Lean into deep indigo/dark gray surfaces, neon accents (#8b5cf6 / #22d3ee) for focus states, and generous blur/glassmorphism panels for overlays.
- Typography: pair a clean sans-serif for UI copy with a stylized display font for titles (look at Google Fonts’ Exo 2 or Oxanium).
- Use soft drop shadows and layered gradients to add depth without overwhelming performance.

### Interaction & Responsiveness

- Start every flow with a mobile-first wireframe (≤400px width), then progressively enhance for tablet and desktop.
- Mobile: prioritize video viewport; use bottom sheets for episodes, metadata, and controls that can be swiped up.
- Tablet: stack video above a collapsible episode list and surface the "Up Next" card beside controls.
- Desktop: persistent sidebar + widescreen video layout with ample negative space and keyboard shortcuts.
- Every route transition should leverage React Router’s pending states to show skeletons/spinners from `src/components/ui`.

### Technical Notes

- Continue using Yarn scripts (`yarn dev`, `yarn build`, etc.) and keep instructions in README up to date.
- When prototyping new UI, rely on existing utility components in `src/components/ui/` before introducing new dependencies.
- Any new assets (posters, thumbnails) should live in `public/anime/` and be referenced via Vite’s asset handling.

Deliver detailed wireframes or high-fidelity mocks plus a short rationale for the layout choices so the implementation team can follow through quickly.
