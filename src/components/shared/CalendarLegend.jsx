// Shared calendar legend. Used in DatePicker, YearOverviewTile, AdminCalendar, OccupancyEditor.
export default function CalendarLegend({ showSelection = true, className = '' }) {
  return (
    <div className={`flex flex-wrap gap-x-4 gap-y-1 text-xs text-anthracite/50 ${className}`}>
      <span className="flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-sm bg-primary/15 border border-primary/20" />Belegt
      </span>
      {showSelection && (
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-blue/15 border border-blue/20" />Auswahl
        </span>
      )}
      <span className="flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-sm bg-gold/25" style={{ borderBottom: '2px solid rgba(196,169,77,0.7)' }} />Ferien | Feier- und Brückentage (NRW)
      </span>
    </div>
  );
}
