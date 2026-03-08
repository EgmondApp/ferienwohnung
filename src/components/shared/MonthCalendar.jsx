import { getDate, isToday, isSameDay } from 'date-fns';
import { buildMonthGrid, getSpecialDayInfo, isOccupied } from '../../utils/calendarHelpers';
import { isPast, WEEKDAY_HEADERS, MONTH_NAMES } from '../../utils/dateHelpers';

/**
 * Renders a single month calendar grid.
 *
 * Props:
 *   year, month (0-indexed)
 *   occupancy - array of { startDate, endDate }
 *   selectedRange - { start: Date|null, end: Date|null }
 *   onDayClick - (date) => void
 *   compact - smaller sizing for overview
 */
export default function MonthCalendar({
  year,
  month,
  occupancy = [],
  selectedRange = { start: null, end: null },
  onDayClick,
  compact = false,
}) {
  const weeks = buildMonthGrid(year, month);

  function getDayClasses(date) {
    if (!date) return '';

    const classes = ['cal-day'];
    const past = isPast(date);
    const today = isToday(date);
    const occupied = isOccupied(date, occupancy);
    const special = getSpecialDayInfo(date);
    const { start, end } = selectedRange;

    if (past) classes.push('cal-day--past');
    if (today) classes.push('cal-day--today');

    if (start && isSameDay(date, start)) {
      classes.push('cal-day--arrival');
    } else if (end && isSameDay(date, end)) {
      classes.push('cal-day--departure');
    } else if (start && end && date > start && date < end) {
      classes.push('cal-day--selected');
    } else if (occupied) {
      classes.push('cal-day--occupied');
    } else if (!past) {
      classes.push('cal-day--free');
    }

    if (special.isSpecial) {
      classes.push('cal-day--special');
    }

    if (onDayClick && !past && !occupied) {
      classes.push('cursor-pointer hover:bg-blue/10');
    } else if (occupied || past) {
      classes.push('cal-day--disabled');
    }

    return classes.join(' ');
  }

  function getTooltip(date) {
    if (!date) return '';
    const special = getSpecialDayInfo(date);
    if (special.isSpecial) return special.name;
    return '';
  }

  const cellSize = compact ? 'text-xs' : 'text-sm';
  const headerSize = compact ? 'text-sm' : 'text-base';

  return (
    <div>
      <h3 className={`font-serif ${headerSize} mb-2 text-anthracite`}>
        {MONTH_NAMES[month]} {year}
      </h3>

      {/* Weekday headers */}
      <div className="grid grid-cols-7 gap-px mb-1">
        {WEEKDAY_HEADERS.map((d) => (
          <div key={d} className={`text-center ${compact ? 'text-[10px]' : 'text-xs'} text-stone font-medium`}>
            {d}
          </div>
        ))}
      </div>

      {/* Day grid */}
      {weeks.map((week, wi) => (
        <div key={wi} className="grid grid-cols-7 gap-px">
          {week.map((date, di) => (
            <div
              key={di}
              className={date ? getDayClasses(date) : 'cal-day'}
              title={date ? getTooltip(date) : ''}
              onClick={() => date && onDayClick && !isPast(date) && !isOccupied(date, occupancy) && onDayClick(date)}
            >
              {date ? (
                <span className={cellSize}>{getDate(date)}</span>
              ) : null}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
