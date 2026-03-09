import { formatDeDisplay } from '../../utils/dateHelpers';

const IconCalendar = () => (
  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
  </svg>
);

// Mini illustrated year overview — 4 tiny month grids in a 2×2 arrangement
const MiniYearIcon = () => {
  const months = [
    [0, 0, 2, 0, 0, 1, 1, 0, 0, 0],
    [0, 1, 1, 1, 0, 0, 0, 2, 0, 0],
    [0, 0, 0, 1, 1, 0, 0, 0, 0, 2],
    [0, 0, 2, 0, 1, 1, 1, 0, 0, 0],
  ];
  const colors = { 0: '#9E9587', 1: '#A70605', 2: '#C4A94D' };
  const opacities = { 0: 0.25, 1: 0.55, 2: 0.6 };

  return (
    <svg width="36" height="30" viewBox="0 0 36 30" fill="none">
      {months.map((cells, mi) => {
        const cols = 5;
        const mx = (mi % 2) * 19;
        const my = Math.floor(mi / 2) * 15;
        return (
          <g key={mi}>
            <rect x={mx} y={my} width="17" height="2.5" rx="0.5" fill="#131313" opacity="0.12" />
            {cells.map((val, ci) => (
              <rect
                key={ci}
                x={mx + (ci % cols) * 3.4}
                y={my + 4 + Math.floor(ci / cols) * 4}
                width="2.5"
                height="2.5"
                rx="0.4"
                fill={colors[val]}
                opacity={opacities[val]}
              />
            ))}
          </g>
        );
      })}
    </svg>
  );
};

export default function DateSelector({ arrival, departure, onOpenDatePicker, onOpenCalendar }) {
  const nights = arrival && departure ? Math.round((departure - arrival) / 86400000) : null;
  const hasRange = arrival && departure;

  return (
    <section className="px-6 pt-5 pb-3 md:px-12 lg:px-20 max-w-7xl mx-auto">

      {/* Combined search bar */}
      <div className="bg-offwhite border border-border rounded-xl overflow-hidden shadow-sm">
        <div className="flex flex-col sm:flex-row">

          {/* Anreise */}
          <button
            onClick={onOpenDatePicker}
            className="flex-1 px-5 py-3.5 text-left hover:bg-warm transition-colors flex items-center gap-3"
          >
            <span className={arrival ? 'text-primary' : 'text-stone'}><IconCalendar /></span>
            <div>
              <div className="text-[11px] text-anthracite/45 mb-0.5 uppercase tracking-wide">Anreise</div>
              <div className={`text-sm font-medium ${arrival ? 'text-anthracite' : 'text-anthracite/35'}`}>
                {arrival ? formatDeDisplay(arrival) : 'Datum wählen'}
              </div>
            </div>
          </button>

          {/* Dividers */}
          <div className="hidden sm:block w-px bg-border my-3" />
          <div className="sm:hidden h-px bg-border mx-5" />

          {/* Abreise */}
          <button
            onClick={onOpenDatePicker}
            className="flex-1 px-5 py-3.5 text-left hover:bg-warm transition-colors flex items-center gap-3"
          >
            <span className={departure ? 'text-primary' : 'text-stone'}><IconCalendar /></span>
            <div>
              <div className="text-[11px] text-anthracite/45 mb-0.5 uppercase tracking-wide">Abreise</div>
              <div className={`text-sm font-medium ${departure ? 'text-anthracite' : 'text-anthracite/35'}`}>
                {departure ? formatDeDisplay(departure) : 'Datum wählen'}
              </div>
            </div>
          </button>

          {/* CTA */}
          <div className="p-3 sm:pl-0 sm:pr-3 sm:py-3 flex items-center">
            {hasRange ? (
              <button
                onClick={onOpenDatePicker}
                className="w-full sm:w-auto sm:h-10 px-5 py-2.5 sm:py-0 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-2"
              >
                <span>{nights} Nächte</span>
                <span className="opacity-70 text-xs">✓</span>
              </button>
            ) : (
              <button
                onClick={onOpenDatePicker}
                className="w-full sm:w-auto sm:h-10 px-5 py-2.5 sm:py-0 border border-primary text-primary hover:bg-primary hover:text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
              >
                Zeitraum wählen
              </button>
            )}
          </div>

          {/* Divider before Jahresübersicht — desktop only */}
          <div className="hidden sm:block w-px bg-border my-3" />

          {/* Jahresübersicht — desktop */}
          <button
            onClick={onOpenCalendar}
            className="hidden sm:flex flex-col items-center justify-center gap-1.5 px-5 py-3 hover:bg-warm transition-colors group"
          >
            <span className="opacity-60 group-hover:opacity-90 transition-opacity">
              <MiniYearIcon />
            </span>
            <span className="text-[11px] text-anthracite/45 group-hover:text-anthracite/70 transition-colors whitespace-nowrap">
              Jahresübersicht
            </span>
          </button>

          {/* Jahresübersicht — mobile */}
          <div className="sm:hidden h-px bg-border mx-5" />
          <button
            onClick={onOpenCalendar}
            className="sm:hidden flex items-center gap-3 px-5 py-3 hover:bg-warm transition-colors group"
            aria-label="Jahresübersicht öffnen"
          >
            <span className="opacity-60 group-hover:opacity-90 transition-opacity">
              <MiniYearIcon />
            </span>
            <span className="text-sm text-anthracite/50 group-hover:text-anthracite/75 transition-colors">
              Jahresübersicht
            </span>
          </button>

        </div>
      </div>
    </section>
  );
}
