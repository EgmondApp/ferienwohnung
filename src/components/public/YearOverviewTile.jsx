import { useState, useEffect, useMemo, useCallback } from 'react';
import { addMonths, subMonths, getMonth, getYear } from 'date-fns';
import MonthCalendar from '../shared/MonthCalendar';
import CalendarLegend from '../shared/CalendarLegend';
import { formatDeDisplay } from '../../utils/dateHelpers';
import { handleDaySelect } from '../../utils/calendarHelpers';

export default function YearOverviewTile({ occupancy, isOpen, onClose, onSelect }) {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [zoomedBase, setZoomedBase] = useState(null); // Date | null
  const [arrival, setArrival] = useState(null);
  const [departure, setDeparture] = useState(null);
  const [conflictMsg, setConflictMsg] = useState(false);

  const months = Array.from({ length: 12 }, (_, i) => i);

  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    function handleKey(e) {
      if (e.key === 'Escape') close();
    }
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen]);

  function close() {
    onClose();
    setZoomedBase(null);
    setArrival(null);
    setDeparture(null);
  }

  const handleDayClick = useCallback((date) => {
    const { newArrival, newDeparture, conflict } = handleDaySelect(arrival, departure, date, occupancy);
    setArrival(newArrival);
    setDeparture(newDeparture);
    setConflictMsg(conflict);
  }, [arrival, departure, occupancy]);

  function handleConfirm() {
    if (arrival && departure) {
      onSelect({ arrival, departure });
      onClose();
      setZoomedBase(null);
      setArrival(null);
      setDeparture(null);
      document.getElementById('anfrage')?.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function handleReset() {
    setArrival(null);
    setDeparture(null);
  }

  const selectedRange = useMemo(() => ({ start: arrival, end: departure }), [arrival, departure]);
  const hasSelection = arrival || departure;
  const secondMonth = zoomedBase ? addMonths(zoomedBase, 1) : null;

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-50 bg-anthracite/60 flex items-center justify-center p-4 animate-fade-in"
          onClick={close}
        >
          <div
            className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[92vh] flex flex-col animate-modal-in" role="dialog" aria-label="Jahresübersicht"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
              <div className="flex items-center gap-3">
                {zoomedBase !== null && (
                  <button
                    onClick={() => setZoomedBase(null)}
                    className="text-sm text-anthracite/60 hover:text-anthracite transition-colors"
                  >
                    ← Übersicht
                  </button>
                )}
                {zoomedBase === null && (
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setYear((y) => y - 1)}
                      disabled={year <= currentYear}
                      className="px-2 py-1 text-sm border border-border rounded hover:bg-offwhite disabled:opacity-30 transition-colors"
                      aria-label="Vorjahr"
                    >
                      ←
                    </button>
                    <span className="font-serif text-xl text-anthracite w-16 text-center">{year}</span>
                    <button
                      onClick={() => setYear((y) => y + 1)}
                      className="px-2 py-1 text-sm border border-border rounded hover:bg-offwhite transition-colors"
                      aria-label="Nächstes Jahr"
                    >
                      →
                    </button>
                  </div>
                )}
              </div>
              <button
                onClick={close}
                className="text-anthracite/40 hover:text-anthracite text-2xl leading-none w-8 h-8 flex items-center justify-center"
                aria-label="Schließen"
              >
                ×
              </button>
            </div>

            {/* Selection summary bar */}
            {hasSelection && (
              <div className="flex items-center gap-6 px-6 py-2.5 text-sm bg-warm/60 border-b border-border shrink-0">
                <div>
                  <span className="text-anthracite/50">Anreise: </span>
                  <span className="font-medium text-anthracite">{arrival ? formatDeDisplay(arrival) : '–'}</span>
                </div>
                <div>
                  <span className="text-anthracite/50">Abreise: </span>
                  <span className="font-medium text-anthracite">{departure ? formatDeDisplay(departure) : '–'}</span>
                </div>
              </div>
            )}

            {/* Content */}
            <div className="overflow-auto p-6 flex-1">
              <CalendarLegend className="mb-4" />

              {zoomedBase === null ? (
                <>
                  <p className="text-xs text-anthracite/40 mb-4">
                    Monat antippen zum Vergrößern — Zeitraum direkt im Kalender wählen
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-2">
                    {months.map((month) => (
                      <button
                        key={month}
                        onClick={() => setZoomedBase(new Date(year, month, 1))}
                        className="bg-offwhite rounded-lg p-4 text-left hover:bg-warm hover:border-anthracite/20 border border-border transition-colors"
                      >
                        <MonthCalendar
                          year={year}
                          month={month}
                          occupancy={occupancy}
                          selectedRange={selectedRange}
                          compact
                        />
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div>
                  {/* Mobile: single month with nav */}
                  <div className="md:hidden">
                    <div className="flex items-center justify-between mb-3">
                      <button
                        onClick={() => setZoomedBase((m) => subMonths(m, 1))}
                        className="p-2.5 rounded hover:bg-offwhite transition-colors text-anthracite/60 hover:text-anthracite text-xl leading-none"
                        aria-label="Vorheriger Monat"
                      >‹</button>
                      <span className="text-xs text-anthracite/50 font-medium">
                        {zoomedBase.toLocaleDateString('de-DE', { month: 'long', year: 'numeric' })}
                      </span>
                      <button
                        onClick={() => setZoomedBase((m) => addMonths(m, 1))}
                        className="p-2.5 rounded hover:bg-offwhite transition-colors text-anthracite/60 hover:text-anthracite text-xl leading-none"
                        aria-label="Nächster Monat"
                      >›</button>
                    </div>
                    <MonthCalendar
                      year={getYear(zoomedBase)}
                      month={getMonth(zoomedBase)}
                      occupancy={occupancy}
                      selectedRange={selectedRange}
                      onDayClick={handleDayClick}
                      showHeading={false}
                    />
                  </div>

                  {/* Desktop: 2 months side by side with arrows */}
                  <div className="hidden md:block relative">
                    <button
                      onClick={() => setZoomedBase((m) => subMonths(m, 1))}
                      className="absolute left-0 top-0 p-1 rounded hover:bg-offwhite transition-colors text-anthracite/50 hover:text-anthracite text-xl leading-none"
                      aria-label="Vorheriger Monat"
                    >‹</button>
                    <button
                      onClick={() => setZoomedBase((m) => addMonths(m, 1))}
                      className="absolute right-0 top-0 p-1 rounded hover:bg-offwhite transition-colors text-anthracite/50 hover:text-anthracite text-xl leading-none"
                      aria-label="Nächster Monat"
                    >›</button>
                    <div className="grid grid-cols-2 gap-8 px-8">
                      <MonthCalendar
                        year={getYear(zoomedBase)}
                        month={getMonth(zoomedBase)}
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
                </div>
              )}
            </div>

            {/* Footer: selection actions */}
            <div className="flex items-center justify-between px-6 py-3 border-t border-border shrink-0">
              {hasSelection ? (
                <button
                  onClick={handleReset}
                  className="px-3 py-1 text-xs font-medium rounded-full border border-border bg-offwhite hover:bg-warm hover:border-anthracite/20 text-anthracite/60 hover:text-anthracite transition-colors"
                >
                  Zurücksetzen
                </button>
              ) : (
                <span className={`text-xs ${conflictMsg ? 'text-primary font-medium' : 'text-anthracite/40'}`}>
                  {conflictMsg
                    ? 'Zeitraum enthält belegte Tage — neuen Anreisetag wählen'
                    : zoomedBase !== null
                      ? (!arrival ? 'Anreisetag wählen' : 'Abreisetag wählen')
                      : 'Monat antippen und Zeitraum wählen'}
                </span>
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
      )}
    </>
  );
}
