import { useState } from 'react';
import MonthCalendar from '../shared/MonthCalendar';

export default function AdminCalendar({ occupancy, loading }) {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const months = Array.from({ length: 12 }, (_, i) => i);

  function handlePrint() {
    window.print();
  }

  if (loading) {
    return <div className="text-gray-400 text-sm py-8">Lade Belegungsdaten...</div>;
  }

  return (
    <div>
      {/* Controls */}
      <div className="flex items-center justify-between mb-6 no-print">
        <div className="flex items-center gap-3">
          <h2 className="font-serif text-xl text-anthracite">Belegungsübersicht {year}</h2>
          <div className="flex gap-1">
            <button
              onClick={() => setYear((y) => y - 1)}
              className="px-2 py-1 text-sm border border-gray-200 rounded hover:bg-gray-100 transition-colors"
            >
              ←
            </button>
            <button
              onClick={() => setYear((y) => y + 1)}
              className="px-2 py-1 text-sm border border-gray-200 rounded hover:bg-gray-100 transition-colors"
            >
              →
            </button>
          </div>
        </div>
        <button
          onClick={handlePrint}
          className="px-4 py-2 text-sm border border-gray-200 rounded hover:bg-gray-100 transition-colors"
        >
          🖨 Drucken
        </button>
      </div>

      {/* Print header (only visible when printing) */}
      <div className="hidden print-only mb-4">
        <h1 className="font-serif text-xl">Belegungsübersicht {year}</h1>
        <p className="text-xs text-gray-500 mt-1">
          Erstellt am {new Date().toLocaleDateString('de-DE')}
        </p>
      </div>

      {/* Legend */}
      <div className="flex flex-wrap gap-x-5 gap-y-1 mb-5 text-xs text-gray-500">
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm bg-primary/15 border border-primary/20" />
          Belegt
        </span>
        <span className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-sm border border-gray-200" />
          Frei
        </span>
        <span className="flex items-center gap-1.5">
          <span className="relative w-3 h-3 rounded-sm border border-gray-200 flex items-center justify-center">
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 border-b border-dotted border-[#C4A94D]" />
          </span>
          Ferien / Feiertag
        </span>
      </div>

      {/* Month grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {months.map((month) => (
          <div key={month} className="bg-white rounded-lg p-4 border border-gray-200">
            <MonthCalendar
              year={year}
              month={month}
              occupancy={occupancy}
              compact
            />
          </div>
        ))}
      </div>

      {/* Occupancy list summary */}
      <div className="mt-8 bg-white rounded-lg p-4 border border-gray-200">
        <h3 className="font-serif text-base text-anthracite mb-3">Belegungen {year}</h3>
        {occupancy.filter((o) => {
          const [, , y] = o.startDate.split('.').map(Number);
          return y === year;
        }).length === 0 ? (
          <p className="text-sm text-gray-400">Keine Belegungen für {year} eingetragen.</p>
        ) : (
          <div className="space-y-1.5">
            {occupancy
              .filter((o) => {
                const [, , y] = o.startDate.split('.').map(Number);
                return y === year;
              })
              .map((o) => (
                <div key={o.id} className="flex items-center gap-3 text-sm">
                  <span className="font-mono text-xs text-gray-500 w-52">
                    {o.startDate} — {o.endDate}
                  </span>
                  <span className="text-gray-700">{o.note || '–'}</span>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
