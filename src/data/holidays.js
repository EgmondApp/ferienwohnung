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
  2027: [
    { date: '01.01.2027', name: 'Neujahr' },
    { date: '26.03.2027', name: 'Karfreitag' },
    { date: '29.03.2027', name: 'Ostermontag' },
    { date: '01.05.2027', name: 'Tag der Arbeit' },
    { date: '06.05.2027', name: 'Christi Himmelfahrt' },
    { date: '17.05.2027', name: 'Pfingstmontag' },
    { date: '27.05.2027', name: 'Fronleichnam' },
    { date: '03.10.2027', name: 'Tag der Deutschen Einheit' },
    { date: '01.11.2027', name: 'Allerheiligen' },
    { date: '25.12.2027', name: '1. Weihnachtsfeiertag' },
    { date: '26.12.2027', name: '2. Weihnachtsfeiertag' },
  ],
  2028: [
    { date: '01.01.2028', name: 'Neujahr' },
    { date: '14.04.2028', name: 'Karfreitag' },
    { date: '17.04.2028', name: 'Ostermontag' },
    { date: '01.05.2028', name: 'Tag der Arbeit' },
    { date: '25.05.2028', name: 'Christi Himmelfahrt' },
    { date: '05.06.2028', name: 'Pfingstmontag' },
    { date: '15.06.2028', name: 'Fronleichnam' },
    { date: '03.10.2028', name: 'Tag der Deutschen Einheit' },
    { date: '01.11.2028', name: 'Allerheiligen' },
    { date: '25.12.2028', name: '1. Weihnachtsfeiertag' },
    { date: '26.12.2028', name: '2. Weihnachtsfeiertag' },
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
  2027: [
    { start: '01.01.2027', end: '06.01.2027', name: 'Weihnachtsferien' },
    { start: '22.03.2027', end: '03.04.2027', name: 'Osterferien' },
    { start: '18.05.2027', end: '18.05.2027', name: 'Pfingstferien' },
    { start: '19.07.2027', end: '31.08.2027', name: 'Sommerferien' },
    { start: '23.10.2027', end: '06.11.2027', name: 'Herbstferien' },
    { start: '24.12.2027', end: '31.12.2027', name: 'Weihnachtsferien' },
  ],
  2028: [
    { start: '10.04.2028', end: '22.04.2028', name: 'Osterferien' },
    { start: '06.06.2028', end: '06.06.2028', name: 'Pfingstferien' },
    { start: '03.07.2028', end: '15.08.2028', name: 'Sommerferien' },
    { start: '09.10.2028', end: '21.10.2028', name: 'Herbstferien' },
    { start: '21.12.2028', end: '05.01.2029', name: 'Weihnachtsferien' },
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
  2027: [
    { date: '07.05.2027', name: 'Brückentag (Christi Himmelfahrt)' },
    { date: '28.05.2027', name: 'Brückentag (Fronleichnam)' },
  ],
  2028: [
    { date: '26.05.2028', name: 'Brückentag (Christi Himmelfahrt)' },
    { date: '16.06.2028', name: 'Brückentag (Fronleichnam)' },
  ],
};
