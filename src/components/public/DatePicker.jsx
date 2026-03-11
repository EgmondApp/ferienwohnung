import { useState, useEffect } from 'react';
import { addMonths, subMonths, getMonth, getYear, differenceInDays } from 'date-fns';
import MonthCalendar from '../shared/MonthCalendar';
import CalendarLegend from '../shared/CalendarLegend';
import { formatDeDisplay } from '../../utils/dateHelpers';
import { handleDaySelect } from '../../utils/calendarHelpers';

export default function DatePicker({ isOpen, onClose, occupancy, initialDate, onSelect }) {
  const [baseMonth, setBaseMonth] = useState(() => {
    const d = initialDate || new Date();
    return new Date(getYear(d), getMonth(d), 1);
  });
  const [arrival, setArrival] = useState(null);
  const [departure, setDeparture] = useState(null);

  useEffect(() => {
    if (isOpen) {
      const d = initialDate || new Date();
      setBaseMonth(new Date(getYear(d), getMonth(d), 1));
      setArrival(null);
      setDeparture(null);
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [isOpen, initialDate]);

  useEffect(() => {
    if (!isOpen) return;
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const secondMonth = addMonths(baseMonth, 1);
  const nights = arrival && departure ? differenceInDays(departure, arrival) : null;

  function handleDayClick(date) {
    const { newArrival, newDeparture } = handleDaySelect(arrival, departure, date, occupancy);
    setArrival(newArrival);
    setDeparture(newDeparture);
  }

  function handleConfirm() {
    if (arrival && departure) {
      onSelect({ arrival, departure });
      onClose();
      setTimeout(() => {
        document.getElementById('anfrage')?.scrollIntoView({ behavior: 'smooth' });
      }, 300);
    }
  }

  function handleReset() {
    setArrival(null);
    setDeparture(null);
  }

  const selectedRange = { start: arrival, end: departure };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-anthracite/60 px-4" onClick={onClose}>
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col" role="dialog" aria-label="Reisezeitraum wählen" onClick={(e) => e.stopPropagation()}>

        {/* Header — merged title + selection summary */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
          <div>
            {(arrival || departure) ? (
              <div className="flex items-center gap-2.5 text-sm">
                <span className={`font-medium ${arrival ? 'text-anthracite' : 'text-anthracite/35'}`}>
                  {arrival ? formatDeDisplay(arrival) : 'Anreise'}
                </span>
                <span className="text-anthracite/25">→</span>
                <span className={`font-medium ${departure ? 'text-anthracite' : 'text-anthracite/35'}`}>
                  {departure ? formatDeDisplay(departure) : 'Abreise'}
                </span>
                {nights && (
                  <span className="ml-1 px-2 py-0.5 text-[11px] bg-offwhite border border-border rounded-full text-anthracite/50">
                    {nights} Nächte
                  </span>
                )}
              </div>
            ) : (
              <span className="font-serif text-lg text-anthracite">Reisezeitraum wählen</span>
            )}
            <p className="text-xs text-anthracite/35 mt-0.5">
              {!arrival ? 'Anreisetag wählen' : !departure ? 'Abreisetag wählen' : 'Zeitraum bestätigen'}
            </p>
          </div>
          <button onClick={onClose} className="text-anthracite/40 hover:text-anthracite text-2xl leading-none w-8 h-8 flex items-center justify-center" aria-label="Schließen">×</button>
        </div>

        {/* Legend — compact */}
        <CalendarLegend showSelection className="px-6 py-2 border-b border-border bg-warm/30 shrink-0" />

        {/* Month navigation + calendars */}
        <div className="px-6 py-4 overflow-auto flex-1">
          {/* Mobile: single month */}
          <div className="md:hidden">
            <div className="flex items-center justify-between mb-3">
              <button onClick={() => setBaseMonth((m) => subMonths(m, 1))} className="p-2.5 rounded hover:bg-offwhite transition-colors text-anthracite/60 hover:text-anthracite text-xl leading-none" aria-label="Vorheriger Monat">‹</button>
              <span className="text-xs text-anthracite/50 font-medium">{baseMonth.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}</span>
              <button onClick={() => setBaseMonth((m) => addMonths(m, 1))} className="p-2.5 rounded hover:bg-offwhite transition-colors text-anthracite/60 hover:text-anthracite text-xl leading-none" aria-label="Nächster Monat">›</button>
            </div>
            <MonthCalendar year={getYear(baseMonth)} month={getMonth(baseMonth)} occupancy={occupancy} selectedRange={selectedRange} onDayClick={handleDayClick} showHeading={false} />
          </div>

          {/* Desktop: two months */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setBaseMonth((m) => subMonths(m, 1))}
              className="absolute left-0 top-0 p-2 rounded hover:bg-offwhite transition-colors text-anthracite/50 hover:text-anthracite text-xl leading-none"
              aria-label="Vorheriger Monat"
            >‹</button>
            <button
              onClick={() => setBaseMonth((m) => addMonths(m, 1))}
              className="absolute right-0 top-0 p-2 rounded hover:bg-offwhite transition-colors text-anthracite/50 hover:text-anthracite text-xl leading-none"
              aria-label="Nächster Monat"
            >›</button>
            <div className="grid grid-cols-2 gap-8 px-7">
              <MonthCalendar year={getYear(baseMonth)} month={getMonth(baseMonth)} occupancy={occupancy} selectedRange={selectedRange} onDayClick={handleDayClick} />
              <MonthCalendar year={getYear(secondMonth)} month={getMonth(secondMonth)} occupancy={occupancy} selectedRange={selectedRange} onDayClick={handleDayClick} />
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between px-6 pb-4 pt-3 border-t border-border shrink-0">
          {(arrival || departure) ? (
            <button onClick={handleReset} className="px-3 py-1 text-xs font-medium rounded-full border border-border bg-offwhite hover:bg-warm hover:border-anthracite/20 text-anthracite/60 hover:text-anthracite transition-colors">
              Zurücksetzen
            </button>
          ) : (
            <span />
          )}
          <button
            onClick={handleConfirm}
            disabled={!arrival || !departure}
            className="px-6 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Zeitraum übernehmen
          </button>
        </div>
      </div>
    </div>
  );
}
