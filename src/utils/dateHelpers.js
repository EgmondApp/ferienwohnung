import { parse, format, eachDayOfInterval, isWithinInterval, isBefore, isAfter, startOfDay, isSameDay } from 'date-fns';
import { de } from 'date-fns/locale';

const DE_FORMAT = 'dd.MM.yyyy';

/** Parse dd.mm.yyyy string to Date */
export function parseDe(dateStr) {
  return parse(dateStr, DE_FORMAT, new Date());
}

/** Format Date to dd.mm.yyyy */
export function formatDe(date) {
  return format(date, DE_FORMAT);
}

/** Format Date for display: "15. März 2025" */
export function formatDeDisplay(date) {
  return format(date, 'd. MMMM yyyy', { locale: de });
}

/** Format Date short: "15. Mär" */
export function formatDeShort(date) {
  return format(date, 'd. MMM', { locale: de });
}

/** Get all dates in a range (inclusive) */
export function datesInRange(startStr, endStr) {
  const start = typeof startStr === 'string' ? parseDe(startStr) : startStr;
  const end = typeof endStr === 'string' ? parseDe(endStr) : endStr;
  return eachDayOfInterval({ start, end });
}

/** Check if a date falls within a range */
export function isInRange(date, startStr, endStr) {
  const start = typeof startStr === 'string' ? parseDe(startStr) : startStr;
  const end = typeof endStr === 'string' ? parseDe(endStr) : endStr;
  return isWithinInterval(date, { start, end });
}

/** Check if date is in the past */
export function isPast(date) {
  return isBefore(startOfDay(date), startOfDay(new Date()));
}

/** Check if two dates are the same day */
export function sameDay(a, b) {
  return isSameDay(a, b);
}

/** German weekday headers (Mo–So) */
export const WEEKDAY_HEADERS = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

/** German month names */
export const MONTH_NAMES = [
  'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
  'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember',
];
