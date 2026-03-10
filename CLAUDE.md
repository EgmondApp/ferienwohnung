# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server (localhost:5173/ferienwohnung/)
npm run build     # Production build → dist/
npm run preview   # Preview production build locally
npm run deploy    # Build + publish to GitHub Pages via gh-pages
```

**Always ask the user before running `npm run deploy`.**

There are no tests or linters configured.

## Architecture

Single-page React app (HashRouter) with two main areas:

- **`/`** — `PublicPage` (booking inquiry flow: date selection → gallery → inquiry form)
- **`/info`** — `InfoPage` (printable guest info sheet)
- **`/admin/*`** — `AdminPage` (lazy-loaded, ~26 kB chunk; password-gated)

**State management:** No global store. `PublicPage` owns top-level state (`arrival`, `departure`, `pickerOpen`, `calendarOpen`, `gasteInfoOpen`) and passes it down as props.

**Data layer:** Two Firestore real-time hooks in `src/hooks/`:
- `useOccupancy` — `occupancy` collection; dates stored as `dd.MM.yyyy` strings
- `useInquiries` — `inquiries` collection

**Calendar rendering pipeline:**
1. `buildMonthGrid` (`calendarHelpers.js`) → week arrays (Mon-first, null-padded)
2. `MonthCalendar` renders the grid using CSS class-based styling (`cal-day-*` in `index.css`)
3. Half-day split occupancy uses horizontal CSS `linear-gradient to right`; no diagonal, no border-radius tricks
4. `getSpecialDayInfo` overlays NRW school holidays/public holidays from `src/data/holidays.js`

**Admin flow:** `InquiryList` "Annehmen" button directly writes to the `occupancy` Firestore collection via `addOccupancy`. Admin dashboard has two tabs: **Kalender** (year view + occupancy list with delete) and **Anfragen** (inquiry list with status filter). `OccupancyEditor` exists in the file system but is no longer wired into the dashboard.

## Key Conventions

- **Date format everywhere:** `dd.MM.yyyy` strings (German locale). Use `formatDe`/`parseDe` from `src/utils/dateHelpers.js`.
- **Base path:** `/ferienwohnung/` (configured in `vite.config.js`). All asset paths must include this prefix.
- **Design tokens:** Defined in `tailwind.config.js`. Use semantic names (`warm`, `offwhite`, `primary`, `anthracite`, `border`, `gold`, `blue`) — do not use raw hex values inline.
- **Fonts:** `DM Serif Display` (headings), `Inter` (body) — loaded via Google Fonts in `index.html`.
- **Admin is lazy-loaded:** Import via `React.lazy`; keep admin components out of the main bundle.
- **Firebase config** in `src/firebase.js` is intentionally public (client-safe Firestore config, no admin SDK).

## Key Component APIs

**`MonthCalendar`** (`src/components/shared/MonthCalendar.jsx`):
Props: `onDayClick`, `onOccupiedClick`, `selectedRange`, `showGuestName`, `showHeading`, `compact`.
Half-day cells (Arrival/Departure/Split) always fire `onDayClick`, not `onOccupiedClick`.

**`CalendarLegend`** (`src/components/shared/CalendarLegend.jsx`):
Shared legend used in DatePicker, YearOverviewTile, AdminCalendar, OccupancyEditor.
Prop `showSelection={true}` adds the "Auswahl" legend item.

**`YearOverviewTile`** (`src/components/public/YearOverviewTile.jsx`):
Props: `isOpen`, `onClose`, `onSelect`. Manages its own `arrival`/`departure` state internally.
Clicking a month zooms into it; clicking days sets a range. A selection bar + "Zeitraum übernehmen" button appears once a range is selected, scrolling the page to `#anfrage` on confirm.
