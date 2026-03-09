# Ferienwohnung Egmond aan Zee

Web-App für eine einzelne Ferienwohnung.
Öffentlicher Bereich: Verfügbarkeitskalender + Anfrageformular.
Admin-Bereich: Belegung verwalten + Anfragen einsehen.

**Live:** https://egmondapp.github.io/ferienwohnung/

## Setup

### 1. Repository klonen & Abhängigkeiten installieren

```bash
git clone https://github.com/EgmondApp/ferienwohnung.git
cd ferienwohnung
npm install
```

### 2. Firebase einrichten

1. Neues Projekt auf [Firebase Console](https://console.firebase.google.com) erstellen
2. Firestore Database aktivieren (Region: europe-west3)
3. Web-App hinzufügen und Konfiguration kopieren
4. `src/firebase.js` mit eigenen Werten aktualisieren
5. Firestore-Regeln aus `firestore.rules` übernehmen

### 3. Admin-Passwort setzen

Hash in der Browser-Konsole generieren:

```js
crypto.subtle.digest('SHA-256', new TextEncoder().encode('DEIN_PASSWORT'))
  .then(b => console.log(Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2,'0')).join('')))
```

Hash in `src/hooks/useAdmin.js` → `ADMIN_HASH` eintragen.

### 4. Bilder ablegen

Bilder in `public/images/`:

| Datei | Verwendung |
|---|---|
| `hero.jpg` | Slideshow-Bild 1 (Strand) |
| `exterior-1.jpg` | Slideshow-Bild 2 + Galerie Außen |
| `exterior-2..8.jpg` | Galerie Außen |
| `exterior-8.jpg` | Slideshow-Bild 3 |
| `interior-1..8.jpg` | Galerie Innen |
| `interior-2.jpg` | Slideshow-Bild 4 |
| `Favicon.png` | App-Icon |

### 5. Texte & Feriendaten anpassen

- Objekt-Beschreibung und Badges: `src/pages/PublicPage.jsx`
- Gäste-Info (Adresse, Checklisten): `src/components/public/GasteInfoModal.jsx` und `src/pages/InfoPage.jsx`
- Feriendaten jährlich aktualisieren: `src/data/holidays.js`

## Entwicklung

```bash
npm run dev
```

Öffnet auf `http://localhost:5173/ferienwohnung/`

## Deployment

```bash
npm run deploy
```

Baut mit Vite und publiziert auf GitHub Pages (`gh-pages` Branch).

## Projektstruktur

```
src/
├── main.jsx
├── App.jsx                    Router (HashRouter: /, /info, /admin)
├── firebase.js
├── index.css                  Tailwind + cal-day Klassen
├── data/
│   └── holidays.js            NRW Feiertage/Ferien/Brückentage
├── utils/
│   ├── dateHelpers.js         Datumsformatierung
│   └── calendarHelpers.js     Kalenderlogik (buildMonthGrid, isOccupied)
├── hooks/
│   ├── useOccupancy.js        Firestore "occupancy"
│   ├── useInquiries.js        Firestore "inquiries"
│   └── useAdmin.js            Passwort-Login (SHA-256)
├── components/
│   ├── shared/
│   │   ├── MonthCalendar.jsx
│   │   └── CalendarLegend.jsx
│   ├── public/
│   │   ├── Header.jsx         Slideshow-Hero
│   │   ├── DateSelector.jsx   Anreise/Abreise-Bar
│   │   ├── DatePicker.jsx     2-Monats-Kalender Modal
│   │   ├── YearOverviewTile.jsx Jahresübersicht Modal
│   │   ├── Gallery.jsx        Innen/Außen Galerie + Lightbox
│   │   ├── InquiryForm.jsx    Anfrageformular
│   │   ├── GasteInfoModal.jsx Gäste-Info Modal
│   │   └── Footer.jsx
│   └── admin/
│       ├── LoginGate.jsx
│       ├── AdminLayout.jsx    Tabs: Kalender / Anfragen
│       ├── AdminCalendar.jsx
│       └── InquiryList.jsx
└── pages/
    ├── PublicPage.jsx
    ├── InfoPage.jsx           Gäste-Info (druckbar, /info)
    └── AdminPage.jsx          Lazy-loaded
```

## Technologie

- React 18 + Vite + PWA (vite-plugin-pwa)
- Tailwind CSS
- Firebase Firestore (europe-west3)
- date-fns
- GitHub Pages
