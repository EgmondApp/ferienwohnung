import { useState, useEffect } from 'react';
import { addMonths, subMonths, getMonth, getYear } from 'date-fns';
import MonthCalendar from '../shared/MonthCalendar';
import { formatDeDisplay } from '../../utils/dateHelpers';

/**
 * Two-month side-by-side date picker.
 * Click first = Anreise, click second = Abreise.
 *
 * Props:
 *   isOpen, onClose
 *   occupancy
 *   initialDate - optional Date to start from (e.g. clicked day in year calendar)
 *   onSelect - ({ arrival: Date, departure: Date }) => void
 */
export default function DatePicker({ isOpen, onClose, occupancy, initialDate, onSelect }) {
  const [baseMonth, setBaseMonth] = useState(() => {
    const d = initialDate || new Date();
    return new Date(getYear(d), getMonth(d), 1);
  });
  const [arrival, setArrival] = useState(null);
  const [departure, setDeparture] = useState(null);

  // Reset when opening with a new initial date
  useEffect(() => {
    if (isOpen && initialDate) {
      setBaseMonth(new Date(getYear(initialDate), getMonth(initialDate), 1));
      setArrival(initialDate);
      setDeparture(null);
    }
  }, [isOpen, initialDate]);

  if (!isOpen) return null;

  const secondMonth = addMonths(baseMonth, 1);

  function handleDayClick(date) {
    if (!arrival || (arrival && departure)) {
      // Start new selection
      setArrival(date);
      setDeparture(null);
    } else if (date > arrival) {
      // Set departure
      setDeparture(date);
    } else {
      // Clicked before arrival — restart
      setArrival(date);
      setDeparture(null);
    }
  }

  function handleConfirm() {
    if (arrival && departure) {
      onSelect({ arrival, departure });
      onClose();
    }
  }

  function handleReset() {
    setArrival(null);
    setDeparture(null);
  }

  const selectedRange = { start: arrival, end: departure };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-anthracite/50 px-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between px-6 pt-5 pb-3 border-b border-border">
          <h3 className="font-serif text-xl text-anthracite">Reisezeitraum wählen</h3>
          <button
            onClick={onClose}
            className="text-anthracite/50 hover:text-anthracite text-2xl leading-none"
            aria-label="Schließen"
          >
            ×
          </button>
        </div>

        {/* Selection summary */}
        <div className="flex gap-8 px-6 py-3 text-sm bg-warm/50">
          <div>
            <span className="text-anthracite/60">Anreise: </span>
            <span className="font-medium">{arrival ? formatDeDisplay(arrival) : '–'}</span>
          </div>
          <div>
            <span className="text-anthracite/60">Abreise: </span>
            <span className="font-medium">{departure ? formatDeDisplay(departure) : '–'}</span>
          </div>
        </div>

        {/* Month navigation + calendars */}
        <div className="px-6 py-5">
          <div className="flex items-center justify-between mb-4">
            <button
              onClick={() => setBaseMonth((m) => subMonths(m, 1))}
              className="px-3 py-1 text-sm border border-border rounded hover:bg-offwhite transition-colors"
            >
              ←
            </button>
            <button
              onClick={() => setBaseMonth((m) => addMonths(m, 1))}
              className="px-3 py-1 text-sm border border-border rounded hover:bg-offwhite transition-colors"
            >
              →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <MonthCalendar
              year={getYear(baseMonth)}
              month={getMonth(baseMonth)}
              occupancy={occupancy}
              selectedRange={selectedRange}
              onDayClick={handleDayClick}
            />
            <MonthCalendar
              year={getYear(secondMonth)}
              month={getMonth(secondMonth)}
              occupancy={occupancy}
              selectedRange={selectedRange}
              onDayClick={handleDayClick}
            />
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between px-6 pb-5 pt-2 border-t border-border">
          <button
            onClick={handleReset}
            className="text-sm text-anthracite/60 hover:text-anthracite transition-colors"
          >
            Zurücksetzen
          </button>
          <button
            onClick={handleConfirm}
            disabled={!arrival || !departure}
            className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Zeitraum übernehmen
          </button>
        </div>
      </div>
    </div>
  );
}
