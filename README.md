# Ferienwohnung — Verfügbarkeits- und Anfragen-App

Einfache Web-App für eine einzelne Ferienwohnung.  
Öffentlicher Bereich: Verfügbarkeitskalender + Anfrageformular.  
Admin-Bereich: Belegung verwalten + Anfragen einsehen.

## Setup

### 1. Repository klonen & Abhängigkeiten installieren

```bash
git clone <your-repo-url>
cd ferienwohnung
npm install
```

### 2. Firebase einrichten

1. Neues Projekt auf [Firebase Console](https://console.firebase.google.com) erstellen
2. Firestore Database aktivieren (im Testmodus starten)
3. Web-App hinzufügen und Konfiguration kopieren
4. `src/firebase.js` mit deinen Werten aktualisieren
5. Firestore-Regeln aus `firestore.rules` übernehmen

### 3. Admin-Passwort setzen

1. Browser-Konsole öffnen
2. Hash generieren:
   ```js
   crypto.subtle.digest('SHA-256', new TextEncoder().encode('DEIN_PASSWORT'))
     .then(b => console.log(Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2,'0')).join('')))
   ```
3. Hash in `src/hooks/useAdmin.js` → `ADMIN_HASH` eintragen

### 4. Bilder hinzufügen

Bilder in `public/images/` ablegen:
- `hero.jpg` — Hauptbild für den Hero-Bereich
- `gallery-1.jpg` bis `gallery-8.jpg` — Galerie

Bildnamen und -anzahl können in `src/components/public/Gallery.jsx` und `Header.jsx` angepasst werden.

### 5. Texte anpassen

- Apartment-Name & Tagline: `src/components/public/Header.jsx`
- Footer-Links (Impressum, Datenschutz): `src/components/public/Footer.jsx`

### 6. Feriendaten aktualisieren

Jährlich `src/data/holidays.js` aktualisieren:
- NRW Feiertage
- NRW Schulferien
- Brückentage

## Entwicklung

```bash
npm run dev
```

Öffnet auf `http://localhost:5173/ferienwohnung/`

## Deployment (GitHub Pages)

### Vorbereitung

1. In `vite.config.js` den `base`-Pfad anpassen (muss dem Repository-Namen entsprechen)
2. Repository auf GitHub pushen

### Deployment

```bash
npm run deploy
```

Alternativ: GitHub Actions einrichten für automatisches Deployment bei Push.

## Projektstruktur

```
src/
├── main.jsx              Einstiegspunkt
├── App.jsx               Router (/ und /admin)
├── firebase.js           Firebase-Konfiguration
├── index.css             Tailwind + Custom Styles
├── data/
│   └── holidays.js       NRW Feiertage/Ferien/Brückentage
├── utils/
│   ├── dateHelpers.js    Datumsformatierung (dd.mm.yyyy)
│   └── calendarHelpers.js Kalenderlogik
├── hooks/
│   ├── useOccupancy.js   Belegungsdaten (Firestore)
│   ├── useInquiries.js   Anfragen (Firestore)
│   └── useAdmin.js       Passwort-Login
├── components/
│   ├── shared/
│   │   └── MonthCalendar.jsx
│   ├── public/
│   │   ├── Header.jsx
│   │   ├── Gallery.jsx
│   │   ├── YearCalendar.jsx
│   │   ├── DatePicker.jsx
│   │   ├── InquiryForm.jsx
│   │   └── Footer.jsx
│   └── admin/
│       ├── LoginGate.jsx
│       ├── AdminLayout.jsx
│       ├── AdminCalendar.jsx
│       ├── OccupancyEditor.jsx
│       └── InquiryList.jsx
└── pages/
    ├── PublicPage.jsx
    └── AdminPage.jsx
```

## Technologie

- React 18 + Vite
- Tailwind CSS
- Firebase Firestore
- date-fns
- GitHub Pages
