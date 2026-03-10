// Calendar grid and occupancy helpers used by MonthCalendar.
// buildMonthGrid → week array for rendering. isOccupied/getOccupancy → booking lookup.
// getSpecialDayInfo → NRW holidays/school breaks from src/data/holidays.js.
import { getYear, getMonth, getDay, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay } from 'date-fns';
import { parseDe, isInRange } from './dateHelpers';
import { publicHolidays, schoolHolidays, bridgeDays } from '../data/holidays';

/**
 * Build a grid of weeks for a given month.
 * Each week is an array of 7 slots (Mon=0 to Sun=6), null if empty.
 */
export function buildMonthGrid(year, month) {
  const first = startOfMonth(new Date(year, month));
  const last = endOfMonth(new Date(year, month));
  const days = eachDayOfInterval({ start: first, end: last });

  const weeks = [];
  let currentWeek = new Array(7).fill(null);

  for (const day of days) {
    // getDay: 0=Sun, we want Mon=0
    const dow = (getDay(day) + 6) % 7;
    currentWeek[dow] = day;

    if (dow === 6) {
      weeks.push(currentWeek);
      currentWeek = new Array(7).fill(null);
    }
  }

  // Push last partial week
  if (currentWeek.some((d) => d !== null)) {
    weeks.push(currentWeek);
  }

  return weeks;
}

/**
 * Check if a date is a special day (public holiday, school holiday, or bridge day).
 * Returns { isSpecial: boolean, name: string | null }
 */
export function getSpecialDayInfo(date) {
  const year = getYear(date);

  // Check public holidays
  const holidays = publicHolidays[year] || [];
  for (const h of holidays) {
    if (isSameDay(date, parseDe(h.date))) {
      return { isSpecial: true, name: h.name };
    }
  }

  // Check bridge days
  const bridges = bridgeDays[year] || [];
  for (const b of bridges) {
    if (isSameDay(date, parseDe(b.date))) {
      return { isSpecial: true, name: b.name };
    }
  }

  // Check school holidays
  const school = schoolHolidays[year] || [];
  for (const s of school) {
    if (isInRange(date, s.start, s.end)) {
      return { isSpecial: true, name: s.name };
    }
  }

  return { isSpecial: false, name: null };
}

/**
 * Check if a date is occupied, given an array of occupancy ranges.
 * Returns the matching occupancy entry or null.
 */
export function getOccupancy(date, occupancyList) {
  for (const entry of occupancyList) {
    if (isInRange(date, entry.startDate, entry.endDate)) {
      return entry;
    }
  }
  return null;
}

/**
 * Check if a date falls within any occupied range.
 */
export function isOccupied(date, occupancyList) {
  return getOccupancy(date, occupancyList) !== null;
}

/**
 * Check if any day between start (exclusive) and end (exclusive) is occupied.
 * Used by DatePicker and YearOverviewTile to detect booking conflicts in a selected range.
 */
export function hasConflictBetween(start, end, occupancyList) {
  const msDay = 86400000;
  for (let d = new Date(start.getTime() + msDay); d < end; d = new Date(d.getTime() + msDay)) {
    if (isOccupied(d, occupancyList)) return true;
  }
  return false;
}
