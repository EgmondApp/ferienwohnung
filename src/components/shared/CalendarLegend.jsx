// Shared calendar legend. Used in DatePicker, YearOverviewTile, AdminCalendar, OccupancyEditor.
export default function CalendarLegend({ showSelection = true, className = '' }) {
  return (
    <div className={`flex flex-wrap gap-x-4 gap-y-1 text-xs text-anthracite/50 ${className}`}>
      <span className="flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-sm bg-primary/15 border border-primary/20" />Belegt
      </span>
      <span className="flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-sm overflow-hidden border border-primary/20" style={{ background: 'linear-gradient(to right, rgba(167,6,5,0.14) 50%, transparent 50%)' }} />Abreise
      </span>
      <span className="flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-sm overflow-hidden border border-primary/20" style={{ background: 'linear-gradient(to right, transparent 50%, rgba(167,6,5,0.14) 50%)' }} />Anreise
      </span>
      {showSelection && (
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-blue/15 border border-blue/20" />Auswahl
        </span>
      )}
      <span className="flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-sm bg-gold/25 border border-gold/40" />Ferien / Feiertage (NRW)
      </span>
    </div>
  );
}
