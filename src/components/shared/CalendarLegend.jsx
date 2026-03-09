// Shared calendar legend. Used in DatePicker, YearOverviewTile, AdminCalendar, OccupancyEditor.
// showSelection: show the "Auswahl" item (only in interactive pickers, not read-only views).
export default function CalendarLegend({ showSelection = false, className = '' }) {
  return (
    <div className={`flex flex-wrap gap-x-4 gap-y-1 text-xs text-anthracite/50 ${className}`}>
      <span className="flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-sm bg-primary/15 border border-primary/20" />Belegt
      </span>
      <span className="flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-sm overflow-hidden border border-primary/20" style={{ background: 'linear-gradient(to right, transparent 50%, rgba(167,6,5,0.18) 50%)' }} />An-/Abreise
      </span>
{showSelection && (
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-blue/15 border border-blue/20" />Auswahl
        </span>
      )}
      <span className="flex items-center gap-1.5">
        <span className="w-3 h-3 rounded-sm" style={{ backgroundColor: 'rgba(196,169,77,0.25)', border: '1px solid rgba(196,169,77,0.4)' }} />Ferien / Feiertag / Brückentag (NRW)
      </span>
    </div>
  );
}
