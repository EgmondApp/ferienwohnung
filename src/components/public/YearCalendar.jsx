import { useState } from 'react';
import MonthCalendar from '../shared/MonthCalendar';

export default function YearCalendar({ occupancy, onOpenDatePicker }) {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);

  const months = Array.from({ length: 12 }, (_, i) => i);

  return (
    <section id="kalender" className="px-6 py-16 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-8">
        <h2 className="font-serif text-2xl md:text-3xl text-anthracite">
          Verfügbarkeit {year}
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => setYear((y) => y - 1)}
            disabled={year <= currentYear}
            className="px-3 py-1.5 text-sm border border-border rounded hover:bg-offwhite transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            ← {year - 1}
          </button>
          <button
            onClick={() => setYear((y) => y + 1)}
            className="px-3 py-1.5 text-sm border border-border rounded hover:bg-offwhite transition-colors"
          >
            {year + 1} →
          </button>
        </div>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-6 gap-y-2 mb-6 text-xs text-anthracite/70">
        <span className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded-sm bg-primary/15 border border-primary/20" />
          Belegt
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded-sm bg-offwhite border border-border" />
          Frei
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-4 h-4 rounded-sm bg-blue/15 border border-blue/20" />
          Ihre Auswahl
        </span>
        <span className="flex items-center gap-1.5">
          <span className="relative w-4 h-4 rounded-sm border border-border flex items-center justify-center text-[9px]">
            1
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2.5 border-b border-dotted border-[#C4A94D]" />
          </span>
          Ferien / Feiertag / Brückentag
        </span>
      </div>

      {/* 3×4 month grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {months.map((month) => (
          <div key={month} className="bg-offwhite rounded-lg p-4 border border-border">
            <MonthCalendar
              year={year}
              month={month}
              occupancy={occupancy}
              compact
              onDayClick={onOpenDatePicker}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
