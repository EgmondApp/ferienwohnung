# Ferienwohnung – Projektgedächtnis

## ⚡ Quick Facts
- **Live:** https://EgmondApp.github.io/ferienwohnung/
- **Repo:** https://github.com/EgmondApp/ferienwohnung
- **Stack:** React + Vite + Tailwind + Firebase Firestore → GitHub Pages
- **Deploy:** `npm run deploy` (immer erst fragen!)
- **Firebase:** egmondbelegung, europe-west3, ADMIN_KEY in `src/firebase.js`

---

## Status
- **Phase:** Production
- **Last Updated:** 2026-03-11
- **Known Issues:** –
- **Next Steps:**
  - Kalender-Optik-Session abgeschlossen aber verworfen → Änderungen waren: Rotton vereinheitlichen, Legende kürzen, Ferien bei belegten Tagen (goldener Unterstrich), Admin-Zeitleiste. Alles auf Wunsch zurückgesetzt — kann jederzeit neu implementiert werden.

---

## Stack & Deployment
- React + Vite + Tailwind + Firebase Firestore
- HashRouter, Base-Path `/ferienwohnung/`
- **Branches:** `main` (Quellcode, Default), `gh-pages` (Build-Output, auto von `npm run deploy`)
- Deploy: `npm run deploy` → `gh-pages` Branch (Source auf `main`, Build auf `gh-pages`)
- Firebase CLI: `firebase deploy --only firestore:rules`
- firebase.json + .firebaserc im Root
- **PWA-Icons:** icon-192.png, icon-512.png, icon-maskable.png in public/images/

---

## Architektur (Schlüsseldateien)

### Pages
- `src/App.jsx` – Routing, ErrorBoundary-Wrapper
- `src/pages/PublicPage.jsx` – Haupt-State: arrival, departure, pickerOpen, calendarOpen, gasteInfoOpen; Firestore-Error-Banner
- `src/pages/InfoPage.jsx` – Druckfreundliche Standalone-Seite "Zu Wohnung und Anreise"; Header mit Drucken-Button + "← Zur Startseite"; Print-Styles (print:bg-white etc.)
- `src/pages/AdminPage.jsx` – Admin (lazy-loaded, ~26kB Chunk)

### Public Components
- `src/components/public/Header.jsx` – Carousel (4 Slides: hero/exterior-1/exterior-8/interior-3, 5s), h-[42vh], Gradient-Overlay; Info-Button oben rechts (rounded-full, bg-black/25) + Dot-Indicators unten rechts; Prop: `onInfoClick`
- `src/components/public/DateSelector.jsx` – Anreise/Abreise-Felder + Jahresübersicht-Link + ShareButton; MiniYearIcon nutzt #DED6CA
- `src/components/public/YearOverviewTile.jsx` – Jahresübersicht-Modal, eigener arrival/departure-State, Konflikt-Feedback im Footer; kein "Belegt"-Text auf Tagen
- `src/components/public/DatePicker.jsx` – 2-Monats-Picker, Legende oben, Pfeile abs. positioniert
- `src/components/public/Gallery.jsx` – 2 Kacheln (Innen/Außen), Lightbox mit Swipe
- `src/components/public/InquiryForm.jsx` – Validierung (email regex, name≥2, msg≤2000+counter), Erfolgsbox in offwhite/gold/anthracite
- `src/components/public/Footer.jsx` – mailto-Link + Jahr
- `src/components/public/GasteInfoModal.jsx` – Modal "Zu Wohnung und Anreise"; Props: isOpen, onClose; Inhalt: Adresse (Maps-Link + ShareButton in Card-Header), Anreise/Eingang, Zur Wohnung, Checklisten; Header-Link "Drucken / Vollansicht ↗" öffnet /info; ESC schließt; Card-Komponente hat optionalen `action`-Prop

### Shared Components
- `src/components/shared/MonthCalendar.jsx` – Monatsraster, cal-day-Klassen, half-days → onDayClick; `React.memo` + `useMemo` für cellData
- `src/components/shared/CalendarLegend.jsx` – prop showSelection=true; Einträge: Belegt, Auswahl (optional), Ferien/Feiertage (NRW)
- `src/components/shared/ErrorBoundary.jsx` – Class-Component, Reload-Screen
- `src/components/shared/InfoIcon.jsx` – Shared SVG info-icon
- `src/components/shared/ShareButton.jsx` – Web Share API + Clipboard-Fallback; zeigt "Link kopiert!" (gold, 2s) auf Desktop; Prop-less, teilt immer canonical URL

### Admin Components
- `src/components/admin/AdminLayout.jsx` – anthrazit Header, "← Gästeseite" auch Mobile
- `src/components/admin/AdminCalendar.jsx` – Jahreskalender, Belegungsliste; Filter via parseDe+getYear; nutzt handleDaySelect
- `src/components/admin/InquiryList.jsx` – Filter: Offen/Alle; "Annehmen"→Firestore; "Löschen" löscht aus DB
- `src/components/admin/LoginGate.jsx` – bg-warm, weiße Card rounded-xl

### Hooks & Utils
- `src/hooks/useOccupancy.js` – Firestore "occupancy", schreibt _ak
- `src/hooks/useInquiries.js` – Firestore "inquiries", schreibt _ak in updateInquiryStatus
- `src/hooks/useAdmin.js` – Passwort-Auth (SHA-256, sessionStorage)
- `src/firebase.js` – Firebase-Config + `export ADMIN_KEY = 'egmond-fw-XK9m'`
- `src/utils/dateHelpers.js` – formatDe, formatDeDisplay, MONTH_NAMES, WEEKDAY_HEADERS
- `src/utils/calendarHelpers.js` – buildMonthGrid, isOccupied, getSpecialDayInfo, hasConflictBetween, **handleDaySelect** (shared Klick-Logik für alle Picker)
- `src/data/holidays.js` – NRW Ferien/Feiertage/Brückentage 2025–2028
- `src/index.css` – cal-day-Klassen, horizontale Splits (linear-gradient to right)

---

## Design System ("Warme Mitte")
- **Fonts:** DM Serif Display (serif), Inter (sans) via Google Fonts
- **Farben:** warm=#F2EDE4, offwhite=#F8F5EE, primary=#A70605, anthracite=#131313, border=#DED6CA, gold=#C4A94D, blue=#0566A8
- **Tailwind-Config:** tailwind.config.js – semantische Token-Namen verwenden, kein raw hex
- **Ausnahme:** PrintHalfYear darf raw hex (Inline-Print-Styles)

### UI-Konventionen
- Muted text: `text-anthracite/40` (nicht text-stone)
- Kalender half-day Splits: Opacity 0.14 (belegt), horizontale Gradienten
- Nächte: `differenceInDays` aus date-fns
- Keine raw `green-*` Klassen – Erfolgsboxen: offwhite/gold/anthracite
- Modal-Animationen: `animate-fade-in` (Backdrop), `animate-modal-in` (Dialog) via index.css
- Scrollbar-Shift vermieden: `scrollbar-gutter: stable` auf body

---

## Firestore & Security
- **Rules:** ADMIN_KEY-Check für occupancy create/update, inquiry update
- **Delete:** erlaubt wenn kein _ak im Doc (Legacy) oder _ak korrekt
- **Inquiry create:** name≥2, email≥5, arrival/departure required, msg≤2000

---

## ⚠️ Keep in Sync
- `src/firebase.js` ↔ `firestore.rules` (ADMIN_KEY muss identisch sein)
- `src/data/holidays.js` ↔ Schulministerium NRW (jährlich prüfen)
- `GasteInfoModal.jsx` ↔ `InfoPage.jsx` (gleicher Inhalt – bei Änderung beide updaten!)

---

## Wichtige Entscheidungen & Gründe

- **GasteInfoModal + InfoPage:** Gleicher Inhalt in zwei Formaten → Modal für schnellen Zugriff, InfoPage für Druck/Vollansicht. Modal hat "Vollansicht ↗"-Link, InfoPage hat "← Startseite".
- **Zwei Info-Trigger in PublicPage:** Header (klein, oben rechts) + großer Button zwischen Gallery und InquiryForm → unterschiedliche Sichtbarkeits-Kontexte
- **handleDaySelect zentral:** DatePicker, YearOverviewTile, AdminCalendar alle nutzen diese Funktion aus calendarHelpers.js → single source of truth
- **Datums-Filter AdminCalendar:** parseDe+getYear statt split('.') → robuster
- **DatePicker öffnet immer leer:** Kein Vorausfüllen → verhindert Verwirrung
- **Admin lazy-loaded:** Hält Haupt-Bundle klein
- **cal-day:** Horizontale Splits, border-radius: 0, KEIN diagonal
- **Keine Navigation im Header:** One-Page-Prinzip
- **ShareButton:** Web Share API auf Mobile (natives Sheet), Clipboard-Fallback auf Desktop → keine externe Lib, canonical URL hardcoded (kein Hash-Fragment)

---

## [DEPRECATED]
–

---

## NRW Schulferien & Daten (Stand März 2026)
- 2026 Sommerferien: 20.07–01.09 | Herbstferien: 17.10–31.10
- 2027 Weihnachtsferien: 24.12.2027–08.01.2028
- 2028 Sommerferien: 10.07–22.08 | Herbstferien: 23.10–04.11
- Quelle: Schulministerium NRW
