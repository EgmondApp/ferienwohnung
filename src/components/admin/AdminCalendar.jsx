// Admin calendar overview. Screen view: 12-month grid. Print view: strip calendar (6 months/page, 2 pages).
import { useState } from 'react';
import { isSameDay } from 'date-fns';
import MonthCalendar from '../shared/MonthCalendar';
import CalendarLegend from '../shared/CalendarLegend';
import { parseDe, formatDeShort, formatDeDisplay, MONTH_NAMES } from '../../utils/dateHelpers';
import { getOccupancy, getSpecialDayInfo } from '../../utils/calendarHelpers';

const IconCalendar = () => (
  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
  </svg>
);
const IconMoon = () => (
  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75 9.75 9.75 0 0 1 8.25 6c0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25 9.75 9.75 0 0 0 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
  </svg>
);
const IconMail = () => (
  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
  </svg>
);
const IconPhone = () => (
  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
  </svg>
);

function calcNights(start, end) {
  return Math.round((parseDe(end) - parseDe(start)) / 86400000);
}

const WEEKDAY_SHORT = ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];

// Renders 6 months as a side-by-side strip table for printing.
function PrintHalfYear({ year, months, occupancy }) {
  const colorAdjust = { WebkitPrintColorAdjust: 'exact', printColorAdjust: 'exact' };
  return (
    <table style={{ width: '100%', borderCollapse: 'collapse', tableLayout: 'fixed', fontFamily: 'Arial, sans-serif', fontSize: '8px', ...colorAdjust }}>
      <colgroup>
        {months.map((m) => <col key={m} style={{ width: `${100 / months.length}%` }} />)}
      </colgroup>
      <thead>
        <tr>
          {months.map((m) => (
            <th key={m} style={{
              textAlign: 'left', padding: '4px 6px',
              background: '#222', color: '#fff',
              fontFamily: 'Georgia, serif', fontSize: '10px', fontWeight: 'bold',
              borderRight: '2px solid #fff',
              ...colorAdjust,
            }}>
              {MONTH_NAMES[m]} {year}
            </th>
          ))}
        </tr>
        <tr>
          {months.map((m) => (
            <th key={m} style={{
              textAlign: 'left', padding: '2px 6px',
              background: '#f5f5f5', borderBottom: '1px solid #ccc', borderRight: '1px solid #ddd',
              fontSize: '6.5px', color: '#888', fontWeight: 'normal',
              ...colorAdjust,
            }}>
              Tag · Wochentag · Gast
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
          <tr key={day}>
            {months.map((m) => {
              const date = new Date(year, m, day);
              if (date.getMonth() !== m) {
                return <td key={m} style={{ borderRight: '1px solid #e8e8e8', borderBottom: '1px solid #f5f5f5', ...colorAdjust }} />;
              }

              const dow = (date.getDay() + 6) % 7; // Mon=0 … Sun=6
              const isWeekend = dow >= 5;
              const entry = getOccupancy(date, occupancy);
              const special = getSpecialDayInfo(date);
              // Use independent checks across ALL bookings — same logic as MonthCalendar.getEntryInfo
              // This correctly handles same-day handovers (Gast A departs, Gast B arrives same day)
              const isArrivalDay   = occupancy.some((o) => isSameDay(date, parseDe(o.startDate)));
              const isDepartureDay = occupancy.some((o) => isSameDay(date, parseDe(o.endDate)));
              const isArrival  = isArrivalDay && !isDepartureDay;
              const isDeparture = isDepartureDay && !isArrivalDay;
              const isSplit    = isArrivalDay && isDepartureDay;
              // On split days show both names: "Departing / Arriving"
              let guestName = null;
              if (isSplit) {
                const dep = occupancy.find((o) => isSameDay(date, parseDe(o.endDate)))?.note?.split(' ')[0];
                const arr = occupancy.find((o) => isSameDay(date, parseDe(o.startDate)))?.note?.split(' ')[0];
                guestName = [dep, arr].filter(Boolean).join(' / ') || null;
              } else if (entry?.note) {
                guestName = entry.note.split(' ')[0];
              }

              let background = isWeekend ? '#ebebeb' : '#fff';
              let color = '#222';
              let fontWeight = isWeekend ? '700' : '400';

              if (entry) {
                if (isSplit) {
                  background = 'linear-gradient(to right, #b8b8b8 50%, #cccccc 50%)';
                } else if (isArrival) {
                  background = isWeekend
                    ? 'linear-gradient(to right, #ebebeb 50%, #b8b8b8 50%)'
                    : 'linear-gradient(to right, #fff 50%, #b8b8b8 50%)';
                } else if (isDeparture) {
                  background = isWeekend
                    ? 'linear-gradient(to right, #b8b8b8 50%, #ebebeb 50%)'
                    : 'linear-gradient(to right, #b8b8b8 50%, #fff 50%)';
                } else {
                  background = '#cccccc';
                }
                fontWeight = '600';
              } else if (special.isSpecial) {
                background = '#e8e2c8';
                color = '#555';
              }

              return (
                <td key={m} style={{
                  padding: '1.5px 4px',
                  background,
                  color,
                  fontWeight,
                  borderBottom: '1px solid #e8e8e8',
                  borderRight: '1px solid #ddd',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  lineHeight: '1.5',
                  ...colorAdjust,
                }}>
                  <span style={{ display: 'inline-block', minWidth: '14px' }}>{day}</span>
                  <span style={{ color: '#999', fontSize: '6.5px', marginLeft: '2px' }}>{WEEKDAY_SHORT[dow]}</span>
                  {guestName && (
                    <span style={{ fontSize: '6.5px', marginLeft: '5px', color: entry ? '#333' : '#777' }}>{guestName}</span>
                  )}
                </td>
              );
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default function AdminCalendar({ occupancy, loading, error, removeOccupancy }) {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [expandedId, setExpandedId] = useState(null);
  const months = Array.from({ length: 12 }, (_, i) => i);

  if (loading) return <div className="text-stone text-sm py-8">Lade Belegungsdaten...</div>;
  if (error) return <div className="text-primary text-sm py-8 bg-primary/5 border border-primary/20 rounded-lg px-4">{error}</div>;

  return (
    <div>
      {/* Controls — screen only */}
      <div className="flex items-center justify-between mb-4 no-print">
        <div className="flex items-center gap-3">
          <h2 className="font-serif text-xl text-anthracite">Jahreskalender</h2>
          <div className="flex items-center gap-1 bg-offwhite border border-border rounded-lg p-0.5">
            <button
              onClick={() => setYear((y) => y - 1)}
              className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-white hover:shadow-sm transition-all text-anthracite/50 hover:text-anthracite text-base leading-none"
              aria-label="Vorjahr"
            >‹</button>
            <span className="px-2 text-sm font-medium text-anthracite min-w-[42px] text-center">{year}</span>
            <button
              onClick={() => setYear((y) => y + 1)}
              className="w-7 h-7 flex items-center justify-center rounded-md hover:bg-white hover:shadow-sm transition-all text-anthracite/50 hover:text-anthracite text-base leading-none"
              aria-label="Folgejahr"
            >›</button>
          </div>
        </div>
        <button
          onClick={() => window.print()}
          className="flex items-center gap-2 px-4 py-2 text-sm border border-border rounded-lg hover:bg-offwhite hover:border-anthracite/20 transition-colors text-anthracite/55 hover:text-anthracite"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0 1 10.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0 .229 2.523a1.125 1.125 0 0 1-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0 0 21 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 0 0-1.913-.247M6.34 18H5.25A2.25 2.25 0 0 1 3 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 0 1 1.913-.247m10.5 0a48.536 48.536 0 0 0-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5Zm-3 0h.008v.008H15V10.5Z" />
          </svg>
          Drucken
        </button>
      </div>

      {/* Legend — screen only */}
      <CalendarLegend className="mb-5 no-print" />

      {/* Screen: month grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 no-print">
        {months.map((month) => (
          <div key={month} className="bg-white rounded-xl p-4 border border-border shadow-sm">
            <MonthCalendar
              year={year}
              month={month}
              occupancy={occupancy}
              compact
              showGuestName
            />
          </div>
        ))}
      </div>

      {/* Print: strip calendar — 2 pages, 6 months each */}
      <div className="hidden print-only">
        {/* Page 1: Jan–Jun */}
        <div style={{ marginBottom: '6px' }}>
          <div style={{ marginBottom: '6px', borderBottom: '1px solid #ccc', paddingBottom: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: '13px', fontWeight: 'bold' }}>Belegungsübersicht {year}</span>
            <span style={{ fontSize: '7px', color: '#aaa' }}>Erstellt am {new Date().toLocaleDateString('de-DE')} · Seite 1/2 · Januar–Juni</span>
          </div>
          <PrintHalfYear year={year} months={[0, 1, 2, 3, 4, 5]} occupancy={occupancy} />
        </div>

        {/* Page break */}
        <div style={{ pageBreakAfter: 'always' }} />

        {/* Page 2: Jul–Dez */}
        <div>
          <div style={{ marginBottom: '6px', borderBottom: '1px solid #ccc', paddingBottom: '4px', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontFamily: 'Georgia, serif', fontSize: '13px', fontWeight: 'bold' }}>Belegungsübersicht {year}</span>
            <span style={{ fontSize: '7px', color: '#aaa' }}>Erstellt am {new Date().toLocaleDateString('de-DE')} · Seite 2/2 · Juli–Dezember</span>
          </div>
          <PrintHalfYear year={year} months={[6, 7, 8, 9, 10, 11]} occupancy={occupancy} />
        </div>
      </div>

      {/* Occupancy list — screen only */}
      <div className="mt-6 no-print">
        <h3 className="font-serif text-base text-anthracite mb-3 px-0.5">Belegungen {year}</h3>
        {occupancy.filter((o) => {
          const [, , y] = o.startDate.split('.').map(Number);
          return y === year;
        }).length === 0 ? (
          <div className="bg-white rounded-xl border border-border shadow-sm px-5 py-6 text-sm text-stone text-center">Keine Belegungen für {year}.</div>
        ) : (
          <div className="space-y-2">
            {occupancy
              .filter((o) => { const [, , y] = o.startDate.split('.').map(Number); return y === year; })
              .sort((a, b) => {
                const [ad, am, ay] = a.startDate.split('.').map(Number);
                const [bd, bm, by] = b.startDate.split('.').map(Number);
                return new Date(ay, am - 1, ad) - new Date(by, bm - 1, bd);
              })
              .map((o) => (
                <div key={o.id} className="bg-white rounded-xl border border-green-200 shadow-sm overflow-hidden opacity-90">
                  <button
                    onClick={() => setExpandedId(expandedId === o.id ? null : o.id)}
                    className="w-full px-5 py-4 flex items-start gap-3 text-left hover:bg-warm/50 transition-colors"
                  >
                    <span className="w-2 h-2 rounded-full bg-green-400 shrink-0 mt-1.5" />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="text-sm font-semibold text-anthracite">
                          {o.note || <span className="text-anthracite/30 font-normal">–</span>}
                        </span>
                        <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-green-100 text-green-800">Bestätigt</span>
                        <span className="flex items-center gap-1 px-2 py-0.5 text-[11px] font-medium rounded-full bg-offwhite border border-border text-anthracite/55">
                          <IconMoon />{calcNights(o.startDate, o.endDate)} Nächte
                        </span>
                      </div>
                      <div className="flex items-center gap-1 mt-1.5 text-xs text-anthracite/50">
                        <IconCalendar />{formatDeShort(parseDe(o.startDate))} – {formatDeDisplay(parseDe(o.endDate))}
                      </div>
                    </div>
                    <span className="text-anthracite/20 text-xs shrink-0 mt-1">{expandedId === o.id ? '▲' : '▼'}</span>
                  </button>
                  {expandedId === o.id && (
                    <div className="px-5 pb-4 pt-3 border-t border-border bg-warm/20">
                      {(o.email || o.phone) ? (
                        <div className="flex flex-wrap gap-4 text-sm mb-3">
                          {o.email && (
                            <a href={`mailto:${o.email}`} className="flex items-center gap-1.5 text-blue hover:underline">
                              <IconMail />{o.email}
                            </a>
                          )}
                          {o.phone && (
                            <span className="flex items-center gap-1.5 text-anthracite/60">
                              <IconPhone />{o.phone}
                            </span>
                          )}
                        </div>
                      ) : (
                        <p className="text-xs text-anthracite/30 mb-3">Keine Kontaktdaten hinterlegt.</p>
                      )}
                      <button
                        onClick={() => {
                          if (window.confirm(`Belegung "${o.note || o.startDate}" wirklich löschen?`)) {
                            removeOccupancy(o.id);
                            setExpandedId(null);
                          }
                        }}
                        className="text-xs text-primary/60 hover:text-primary transition-colors underline underline-offset-2"
                      >
                        Belegung löschen
                      </button>
                    </div>
                  )}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
