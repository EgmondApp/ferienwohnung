/*
 * NRW Feiertage, Schulferien und Brückentage
 * Jährlich aktualisieren — einmal im Herbst für das Folgejahr.
 */

export const publicHolidays = {
  2025: [
    { date: '01.01.2025', name: 'Neujahr' },
    { date: '18.04.2025', name: 'Karfreitag' },
    { date: '21.04.2025', name: 'Ostermontag' },
    { date: '01.05.2025', name: 'Tag der Arbeit' },
    { date: '29.05.2025', name: 'Christi Himmelfahrt' },
    { date: '09.06.2025', name: 'Pfingstmontag' },
    { date: '19.06.2025', name: 'Fronleichnam' },
    { date: '03.10.2025', name: 'Tag der Deutschen Einheit' },
    { date: '01.11.2025', name: 'Allerheiligen' },
    { date: '25.12.2025', name: '1. Weihnachtsfeiertag' },
    { date: '26.12.2025', name: '2. Weihnachtsfeiertag' },
  ],
  2026: [
    { date: '01.01.2026', name: 'Neujahr' },
    { date: '03.04.2026', name: 'Karfreitag' },
    { date: '06.04.2026', name: 'Ostermontag' },
    { date: '01.05.2026', name: 'Tag der Arbeit' },
    { date: '14.05.2026', name: 'Christi Himmelfahrt' },
    { date: '25.05.2026', name: 'Pfingstmontag' },
    { date: '04.06.2026', name: 'Fronleichnam' },
    { date: '03.10.2026', name: 'Tag der Deutschen Einheit' },
    { date: '01.11.2026', name: 'Allerheiligen' },
    { date: '25.12.2026', name: '1. Weihnachtsfeiertag' },
    { date: '26.12.2026', name: '2. Weihnachtsfeiertag' },
  ],
};

export const schoolHolidays = {
  2025: [
    { start: '23.12.2024', end: '06.01.2025', name: 'Weihnachtsferien' },
    { start: '14.04.2025', end: '26.04.2025', name: 'Osterferien' },
    { start: '10.06.2025', end: '10.06.2025', name: 'Pfingstferien' },
    { start: '14.07.2025', end: '26.08.2025', name: 'Sommerferien' },
    { start: '13.10.2025', end: '25.10.2025', name: 'Herbstferien' },
    { start: '22.12.2025', end: '06.01.2026', name: 'Weihnachtsferien' },
  ],
  2026: [
    { start: '22.12.2025', end: '06.01.2026', name: 'Weihnachtsferien' },
    { start: '30.03.2026', end: '11.04.2026', name: 'Osterferien' },
    { start: '26.05.2026', end: '26.05.2026', name: 'Pfingstferien' },
    { start: '29.06.2026', end: '11.08.2026', name: 'Sommerferien' },
    { start: '12.10.2026', end: '24.10.2026', name: 'Herbstferien' },
    { start: '23.12.2026', end: '06.01.2027', name: 'Weihnachtsferien' },
  ],
};

export const bridgeDays = {
  2025: [
    { date: '02.05.2025', name: 'Brückentag (Tag der Arbeit)' },
    { date: '30.05.2025', name: 'Brückentag (Christi Himmelfahrt)' },
    { date: '20.06.2025', name: 'Brückentag (Fronleichnam)' },
  ],
  2026: [
    { date: '02.01.2026', name: 'Brückentag (Neujahr)' },
    { date: '15.05.2026', name: 'Brückentag (Christi Himmelfahrt)' },
    { date: '05.06.2026', name: 'Brückentag (Fronleichnam)' },
  ],
};
