import { useState } from 'react';
import { parseDe, formatDeShort, formatDeDisplay } from '../../utils/dateHelpers';

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
const IconPerson = () => (
  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
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

function calcNights(arrival, departure) {
  return Math.round((parseDe(departure) - parseDe(arrival)) / 86400000);
}

function formatRange(arrival, departure) {
  return `${formatDeShort(parseDe(arrival))} – ${formatDeDisplay(parseDe(departure))}`;
}

function formatTimestamp(ts) {
  if (!ts?.seconds) return '–';
  return new Date(ts.seconds * 1000).toLocaleDateString('de-DE', {
    day: '2-digit', month: '2-digit', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
}

export default function InquiryList({ inquiries, loading, error, deleteInquiry, updateInquiryStatus, addOccupancy, occupancy = [] }) {
  const [confirmedId, setConfirmedId] = useState(null);
  const [errorId, setErrorId] = useState(null);
  const [filter, setFilter] = useState('offen');

  const displayed = filter === 'offen'
    ? inquiries.filter((i) => i.status !== 'gebucht' && i.status !== 'abgelehnt')
    : inquiries;

  function hasConflict(arrival, departure) {
    const newStart = parseDe(arrival);
    const newEnd = parseDe(departure);
    return occupancy.some((o) => {
      const start = parseDe(o.startDate);
      const end = parseDe(o.endDate);
      return start < newEnd && end > newStart;
    });
  }

  async function handleAccept(inquiry) {
    if (hasConflict(inquiry.arrival, inquiry.departure)) {
      setErrorId(inquiry.id);
      setTimeout(() => setErrorId(null), 4000);
      return;
    }
    try {
      await addOccupancy(inquiry.arrival, inquiry.departure, inquiry.name, inquiry.email || '', inquiry.phone || '', inquiry.message || '');
      await updateInquiryStatus(inquiry.id, 'gebucht');
      setConfirmedId(inquiry.id);
      setTimeout(() => setConfirmedId(null), 3000);
    } catch (err) {
      console.error('handleAccept:', err);
      setErrorId(inquiry.id);
      setTimeout(() => setErrorId(null), 4000);
    }
  }

  async function handleReject(inquiry) {
    if (!window.confirm(`Anfrage von ${inquiry.name} wirklich löschen?`)) return;
    try {
      await deleteInquiry(inquiry.id);
    } catch (err) {
      console.error('handleReject:', err);
    }
  }

  if (loading) return <div className="text-stone text-sm py-8">Lade Anfragen...</div>;
  if (error) return <div className="text-primary text-sm py-8 bg-primary/5 border border-primary/20 rounded-lg px-4">{error}</div>;

  return (
    <div>
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-serif text-xl text-anthracite">Anfragen</h2>
        <div className="flex gap-1 bg-offwhite border border-border rounded-lg p-1">
          {[{ value: 'offen', label: 'Offen' }, { value: 'alle', label: 'Alle' }].map((opt) => (
            <button
              key={opt.value}
              onClick={() => setFilter(opt.value)}
              className={`px-3 py-1 text-xs rounded-md font-medium transition-all ${
                filter === opt.value ? 'bg-anthracite text-white shadow-sm' : 'text-anthracite/50 hover:text-anthracite'
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
      </div>

      {/* Confirmation banner */}
      {confirmedId && (
        <div className="mb-4 px-5 py-3 bg-green-50 border border-green-200 rounded-lg text-sm text-green-800 font-medium">
          Buchung eingetragen ✓
        </div>
      )}

      {displayed.length === 0 ? (
        <div className="bg-white rounded-xl border border-border shadow-sm px-5 py-12 text-center text-sm text-stone">
          {filter === 'offen' ? 'Keine offenen Anfragen.' : 'Noch keine Anfragen eingegangen.'}
        </div>
      ) : (
        <div className="space-y-3">
          {displayed.map((inquiry) => {
            const isGebucht = inquiry.status === 'gebucht';
            const nights = calcNights(inquiry.arrival, inquiry.departure);
            return (
              <div key={inquiry.id} className={`bg-white rounded-xl border shadow-sm px-5 py-4 ${isGebucht ? 'border-green-200 opacity-60' : 'border-border'}`}>

                {/* Top row: name + badges + timestamp */}
                <div className="flex items-start justify-between gap-3 flex-wrap mb-2">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`w-2 h-2 rounded-full shrink-0 mt-0.5 ${isGebucht ? 'bg-green-400' : 'bg-primary/60'}`} />
                    <span className="text-sm font-semibold text-anthracite">{inquiry.name}</span>
                    {isGebucht && (
                      <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-green-100 text-green-800">Gebucht</span>
                    )}
                    <span className="flex items-center gap-1 px-2 py-0.5 text-[11px] font-medium rounded-full bg-offwhite border border-border text-anthracite/55">
                      <IconMoon />{nights} Nächte
                    </span>
                  </div>
                  <span className="text-xs text-anthracite/25 shrink-0">{formatTimestamp(inquiry.createdAt)}</span>
                </div>

                {/* Date + persons */}
                <div className="flex items-center gap-4 mb-3 flex-wrap">
                  <span className="flex items-center gap-1 text-xs text-anthracite/50">
                    <IconCalendar />{formatRange(inquiry.arrival, inquiry.departure)}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-anthracite/40">
                    <IconPerson />{inquiry.guests} {Number(inquiry.guests) === 1 ? 'Person' : 'Personen'}
                  </span>
                </div>

                {/* Contact */}
                <div className="flex flex-wrap gap-4 mb-3 text-sm">
                  <a href={`mailto:${inquiry.email}`} className="flex items-center gap-1.5 text-blue hover:underline">
                    <IconMail />{inquiry.email}
                  </a>
                  {inquiry.phone && (
                    <span className="flex items-center gap-1.5 text-anthracite/60">
                      <IconPhone />{inquiry.phone}
                    </span>
                  )}
                </div>

                {/* Message */}
                {inquiry.message && (
                  <div className="mb-3 bg-warm rounded-lg border border-border px-3 py-2 text-sm text-anthracite/70 italic">
                    „{inquiry.message}"
                  </div>
                )}

                {/* Actions */}
                {!isGebucht && (
                  <div className="pt-1">
                    {errorId === inquiry.id && (
                      <p className="text-sm text-primary font-medium mb-2">
                        Zeitraum bereits belegt — Buchung kann nicht eingetragen werden.
                      </p>
                    )}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleAccept(inquiry)}
                        className="px-4 py-2 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors"
                      >
                        Annehmen
                      </button>
                      <button
                        onClick={() => handleReject(inquiry)}
                        className="px-4 py-2 border border-border hover:border-primary hover:text-primary text-sm text-anthracite/50 rounded-lg transition-colors"
                      >
                        Ablehnen
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
