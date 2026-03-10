// Shared month calendar grid. Used in: DatePicker, YearOverviewTile, AdminCalendar, OccupancyEditor.
// Props: year, month, occupancy[], selectedRange, onDayClick, onOccupiedClick, compact, showGuestName, showHeading.
// Half-days (arrival/departure/split) always route to onDayClick. Only interior occupied days use onOccupiedClick.
// CSS state classes are defined in src/index.css (.cal-day--*).
import { getDate, getDay, isToday, isSameDay } from 'date-fns';
import { buildMonthGrid, getSpecialDayInfo, isOccupied, getOccupancy } from '../../utils/calendarHelpers';
import { isPast, parseDe, WEEKDAY_HEADERS, MONTH_NAMES } from '../../utils/dateHelpers';

export default function MonthCalendar({
  year,
  month,
  occupancy = [],
  selectedRange = { start: null, end: null },
  onDayClick,
  onOccupiedClick,
  compact = false,
  showGuestName = false,
  occupiedLabel = null,
  showHeading = true,
}) {
  const weeks = buildMonthGrid(year, month);

  function getEntryInfo(date) {
    const isArrivalDay = occupancy.some((o) => isSameDay(date, parseDe(o.startDate)));
    const isDepartureDay = occupancy.some((o) => isSameDay(date, parseDe(o.endDate)));
    const occupied = isOccupied(date, occupancy);
    const entry = getOccupancy(date, occupancy);
    return {
      occupied,
      entry,
      isArrival: isArrivalDay && !isDepartureDay,
      isDeparture: isDepartureDay && !isArrivalDay,
      isSplit: isArrivalDay && isDepartureDay,
    };
  }

  function isWeekend(date) {
    const dow = getDay(date); // 0=Sun, 6=Sat
    return dow === 0 || dow === 6;
  }

  function getDayClasses(date) {
    if (!date) return '';
    const classes = ['cal-day'];
    const past = isPast(date);
    const today = isToday(date);
    const special = getSpecialDayInfo(date);
    const { start, end } = selectedRange;
    const { occupied, isArrival, isDeparture, isSplit } = getEntryInfo(date);

    const isUserArrival = start && isSameDay(date, start);
    const isUserDeparture = end && isSameDay(date, end);
    const isInRange = start && end && date > start && date < end;
    const isUserSelected = isUserArrival || isUserDeparture || isInRange;

    if (past) classes.push('cal-day--past');
    if (today) classes.push('cal-day--today');
    if (isWeekend(date) && !occupied && !isUserSelected) classes.push('cal-day--weekend');

    if (isUserArrival) {
      classes.push('cal-day--arrival');
    } else if (isUserDeparture) {
      classes.push('cal-day--departure');
    } else if (isInRange) {
      classes.push('cal-day--selected');
    } else if (occupied) {
      if (isSplit) classes.push('cal-day--occ-split');
      else if (isArrival) classes.push('cal-day--occ-arrival');
      else if (isDeparture) classes.push('cal-day--occ-departure');
      else classes.push('cal-day--occupied');
    } else if (!past) {
      classes.push('cal-day--free');
    }

    // Special only when not selected/occupied
    if (special.isSpecial && !isUserSelected && !occupied) {
      classes.push('cal-day--special');
    }

    // Cursor
    if (!past && occupied) {
      const isHalf = isArrival || isDeparture || isSplit;
      if (isHalf && onDayClick) {
        classes.push('cursor-pointer hover:opacity-80');
      } else if (onOccupiedClick) {
        classes.push('cursor-pointer hover:opacity-70');
      } else {
        classes.push('cal-day--disabled');
      }
    } else if (!past && !occupied && onDayClick) {
      classes.push('cursor-pointer hover:bg-blue/10');
    } else if (past) {
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

  function handleClick(date) {
    if (!date || isPast(date)) return;
    const { occupied, isArrival, isDeparture, isSplit } = getEntryInfo(date);
    if (occupied) {
      const isHalf = isArrival || isDeparture || isSplit;
      if (isHalf && onDayClick) {
        // An/Abreisetage sind Übergangstage → für Datumsauswahl nutzbar
        onDayClick(date);
      } else if (onOccupiedClick) {
        onOccupiedClick(date);
      }
    } else if (onDayClick) {
      onDayClick(date);
    }
  }

  function getGuestFirstName(date) {
    const { occupied, isSplit } = getEntryInfo(date);
    if (!occupied) return null;
    if (isSplit) {
      const dep = occupancy.find((o) => isSameDay(date, parseDe(o.endDate)))?.note?.split(' ')[0];
      const arr = occupancy.find((o) => isSameDay(date, parseDe(o.startDate)))?.note?.split(' ')[0];
      if (dep && arr) return `${dep}/${arr}`;
      return dep || arr || null;
    }
    const entry = getOccupancy(date, occupancy);
    return entry?.note?.split(' ')[0] ?? null;
  }

  const cellSize = compact ? 'text-xs' : 'text-sm';
  const headerSize = compact ? 'text-sm' : 'text-base';

  return (
    <div>
      {showHeading && (
        <h3 className={`font-serif ${headerSize} mb-2 text-anthracite`}>
          {MONTH_NAMES[month]} {year}
        </h3>
      )}
      <div className="grid grid-cols-7 gap-px mb-1">
        {WEEKDAY_HEADERS.map((d) => (
          <div key={d} className={`text-center ${compact ? 'text-[10px]' : 'text-xs'} text-stone font-medium`}>
            {d}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-x-0 gap-y-px">
        {weeks.flat().map((date, i) => {
          const guestName = date
            ? (occupiedLabel && getEntryInfo(date).occupied ? occupiedLabel : (showGuestName ? getGuestFirstName(date) : null))
            : null;
          return (
            <div
              key={date ? `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}` : `e${i}`}
              className={date ? getDayClasses(date) : 'cal-day'}
              title={date ? getTooltip(date) : ''}
              onClick={() => handleClick(date)}
            >
              {date ? (
                guestName ? (
                  <div className="flex flex-col items-center leading-tight">
                    <span className={cellSize}>{getDate(date)}</span>
                    <span className="text-[7px] leading-none opacity-80 truncate max-w-full px-0.5">{guestName}</span>
                  </div>
                ) : (
                  <span className={cellSize}>{getDate(date)}</span>
                )
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
