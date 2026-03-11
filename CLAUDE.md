# CLAUDE.md

## Memory
Projektgedächtnis: `MEMORY.md` im Repo-Root. Immer lesen bevor du arbeitest.

## Commands

```bash
npm run dev       # Start Vite dev server (localhost:5173/ferienwohnung/)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run deploy    # Build + publish to GitHub Pages via gh-pages
```

**Always ask the user before running `npm run deploy`.**

No tests or linters configured.

## Architecture

Single-page React app (HashRouter). `/` → PublicPage, `/info` → InfoPage, `/admin/*` → AdminPage (lazy-loaded).

No global store — `PublicPage` owns top-level state and passes props down.
Data: two Firestore real-time hooks (`useOccupancy`, `useInquiries`) in `src/hooks/`.
Calendar: `buildMonthGrid` → `MonthCalendar` (CSS `cal-day-*` classes). Half-day splits: horizontal `linear-gradient to right` only — no diagonal, no border-radius.

## Environment

Running inside **VS Code with the Claude Code extension** (not CLI). Do not suggest CLI-only solutions or terminal restarts.

## Key Conventions

- **Date format:** `dd.MM.yyyy` strings. Use `formatDe`/`parseDe` from `src/utils/dateHelpers.js`.
- **Base path:** `/ferienwohnung/` (vite.config.js). All asset paths need this prefix.
- **Design tokens:** Use semantic Tailwind names (`warm`, `offwhite`, `primary`, `anthracite`, `border`, `gold`, `blue`) — no raw hex values.
- **Fonts:** `DM Serif Display` (headings), `Inter` (body) via Google Fonts in `index.html`.
- **Admin:** lazy-loaded via `React.lazy` — keep admin components out of the main bundle.
- **Firebase config** in `src/firebase.js` is intentionally public (client-safe, no admin SDK).
