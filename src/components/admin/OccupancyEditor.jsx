import { useState, useEffect } from 'react';
import DatePicker from '../public/DatePicker';
import { formatDe, formatDeDisplay, formatDeShort, parseDe } from '../../utils/dateHelpers';

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

export default function OccupancyEditor({ occupancy, loading, addOccupancy, removeOccupancy, updateOccupancyEntry, prefilled, onClearPrefilled }) {
  const [arrival, setArrival] = useState(null);
  const [departure, setDeparture] = useState(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [note, setNote] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [listExpandedId, setListExpandedId] = useState(null);
  const [editForm, setEditForm] = useState({ startDate: '', endDate: '', note: '', email: '', phone: '' });
  const [error, setError] = useState(null);
  const [saving, setSaving] = useState(false);

  // Pre-fill from calendar selection
  useEffect(() => {
    if (prefilled) {
      const [ad, am, ay] = prefilled.startDate.split('.').map(Number);
      setArrival(new Date(ay, am - 1, ad));
      const [dd, dm, dy] = prefilled.endDate.split('.').map(Number);
      setDeparture(new Date(dy, dm - 1, dd));
      setNote('');
    }
  }, [prefilled]);

  function handleReset() {
    setArrival(null);
    setDeparture(null);
    setNote('');
    setEmail('');
    setPhone('');
    onClearPrefilled?.();
  }

  async function handleAdd(e) {
    e.preventDefault();
    if (!arrival || !departure) { setError('Bitte Zeitraum wählen.'); return; }
    setError(null);
    setSaving(true);
    try {
      await addOccupancy(formatDe(arrival), formatDe(departure), note, email, phone);
      handleReset();
    } catch {
      setError('Fehler beim Speichern.');
    }
    setSaving(false);
  }

  function startEditing(entry) {
    setEditingId(entry.id);
    setEditForm({ startDate: entry.startDate, endDate: entry.endDate, note: entry.note || '', email: entry.email || '', phone: entry.phone || '' });
  }

  async function handleSaveEdit() {
    setError(null);
    setSaving(true);
    try {
      await updateOccupancyEntry(editingId, editForm);
      setEditingId(null);
    } catch {
      setError('Fehler beim Aktualisieren.');
    }
    setSaving(false);
  }

  async function handleDelete(id, label) {
    if (!window.confirm(`Belegung ${label} löschen?`)) return;
    try { await removeOccupancy(id); } catch { setError('Fehler beim Löschen.'); }
  }

  const inputClass = 'px-3 py-2 bg-white border border-border rounded text-sm text-anthracite focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue/20 transition-colors';
  const hasRange = arrival && departure;
  const nights = hasRange ? Math.round((departure - arrival) / 86400000) : null;

  if (loading) return <div className="text-stone text-sm py-8">Lade Belegungsdaten...</div>;

  return (
    <div>
      <h2 className="font-serif text-xl text-anthracite mb-5">Belegung verwalten</h2>

      {/* Date selection card */}
      <div className={`bg-white rounded-xl border p-6 md:p-8 mb-6 shadow-sm ${hasRange ? 'border-blue/30' : 'border-border'}`}>

        {/* Date trigger bar */}
        <div className="bg-offwhite border border-border rounded-xl overflow-hidden shadow-sm mb-5">
          <div className="flex flex-col sm:flex-row">

            {/* Anreise */}
            <button
              onClick={() => setPickerOpen(true)}
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

            <div className="hidden sm:block w-px bg-border my-3" />
            <div className="sm:hidden h-px bg-border mx-5" />

            {/* Abreise */}
            <button
              onClick={() => setPickerOpen(true)}
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
                  onClick={() => setPickerOpen(true)}
                  className="w-full sm:w-auto sm:h-10 px-5 py-2.5 sm:py-0 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap flex items-center gap-2"
                >
                  <span>{nights} Nächte</span>
                  <span className="opacity-70 text-xs">✓</span>
                </button>
              ) : (
                <button
                  onClick={() => setPickerOpen(true)}
                  className="w-full sm:w-auto sm:h-10 px-5 py-2.5 sm:py-0 border border-primary text-primary hover:bg-primary hover:text-white text-sm font-medium rounded-lg transition-colors whitespace-nowrap"
                >
                  Auswählen
                </button>
              )}
            </div>

          </div>
        </div>

        {/* Guest form — only shown when range is complete */}
        {hasRange && (
          <form onSubmit={handleAdd} className="space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              <div>
                <label className="block text-xs text-anthracite/50 mb-1">Name des Gastes</label>
                <input type="text" value={note} onChange={(e) => setNote(e.target.value)}
                  className={`${inputClass} w-full`} placeholder="z.B. Familie Müller" autoFocus />
              </div>
              <div>
                <label className="block text-xs text-anthracite/50 mb-1">E-Mail (optional)</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}
                  className={`${inputClass} w-full`} placeholder="gast@beispiel.de" />
              </div>
              <div>
                <label className="block text-xs text-anthracite/50 mb-1">Telefon (optional)</label>
                <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                  className={`${inputClass} w-full`} placeholder="0170 1234567" />
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button type="submit" disabled={saving}
                className="px-5 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded transition-colors disabled:opacity-50">
                {saving ? 'Speichern…' : 'Belegung eintragen'}
              </button>
              <button type="button" onClick={handleReset}
                className="text-sm text-anthracite/40 hover:text-anthracite transition-colors underline underline-offset-2">
                Zurücksetzen
              </button>
            </div>
          </form>
        )}

        {error && <p className="text-primary text-sm mt-3">{error}</p>}
      </div>

      {/* Existing entries */}
      {(() => {
        const listYear = arrival ? arrival.getFullYear() : new Date().getFullYear();
        const filtered = occupancy
          .filter((o) => { const [,,y] = o.startDate.split('.').map(Number); return y === listYear; })
          .sort((a, b) => {
            const [ad, am, ay] = a.startDate.split('.').map(Number);
            const [bd, bm, by] = b.startDate.split('.').map(Number);
            return new Date(ay, am - 1, ad) - new Date(by, bm - 1, bd);
          });
        return (
          <div>
            <h3 className="font-serif text-base text-anthracite mb-3 px-0.5">Belegungen {listYear}</h3>
            {filtered.length === 0 ? (
              <div className="bg-white rounded-xl border border-border shadow-sm px-5 py-8 text-sm text-stone text-center">Keine Belegungen für {listYear}.</div>
            ) : (
              <div className="space-y-2">
                {filtered.map((entry) => (
                  <div key={entry.id} className="bg-white rounded-xl border border-green-200 shadow-sm overflow-hidden opacity-90">
                    {editingId === entry.id ? (
                      <div className="px-5 py-4 space-y-2">
                        <div className="flex gap-2 flex-wrap">
                          <input type="text" value={editForm.startDate} onChange={(e) => setEditForm((f) => ({ ...f, startDate: e.target.value }))} className={`${inputClass} w-28`} />
                          <span className="text-anthracite/30 self-center">—</span>
                          <input type="text" value={editForm.endDate} onChange={(e) => setEditForm((f) => ({ ...f, endDate: e.target.value }))} className={`${inputClass} w-28`} />
                          <input type="text" value={editForm.note} onChange={(e) => setEditForm((f) => ({ ...f, note: e.target.value }))} className={`${inputClass} flex-1 min-w-[120px]`} placeholder="Name" />
                          <input type="email" value={editForm.email} onChange={(e) => setEditForm((f) => ({ ...f, email: e.target.value }))} className={`${inputClass} flex-1 min-w-[140px]`} placeholder="E-Mail" />
                          <input type="tel" value={editForm.phone} onChange={(e) => setEditForm((f) => ({ ...f, phone: e.target.value }))} className={`${inputClass} w-32`} placeholder="Telefon" />
                        </div>
                        <div className="flex gap-3">
                          <button onClick={handleSaveEdit} disabled={saving} className="text-sm text-blue hover:underline">Speichern</button>
                          <button onClick={() => setEditingId(null)} className="text-sm text-anthracite/40 hover:text-anthracite">Abbrechen</button>
                        </div>
                      </div>
                    ) : (
                      <>
                        <button
                          onClick={() => setListExpandedId(listExpandedId === entry.id ? null : entry.id)}
                          className="w-full px-5 py-4 flex items-start gap-3 text-left hover:bg-warm/50 transition-colors"
                        >
                          <span className="w-2 h-2 rounded-full bg-green-400 shrink-0 mt-1.5" />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-sm font-semibold text-anthracite">
                                {entry.note || <span className="text-anthracite/25 font-normal">–</span>}
                              </span>
                              <span className="px-2 py-0.5 text-[11px] font-medium rounded-full bg-green-100 text-green-800">Bestätigt</span>
                              <span className="flex items-center gap-1 px-2 py-0.5 text-[11px] font-medium rounded-full bg-offwhite border border-border text-anthracite/55">
                                <IconMoon />{calcNights(entry.startDate, entry.endDate)} Nächte
                              </span>
                            </div>
                            <div className="flex items-center gap-1 mt-1.5 text-xs text-anthracite/50">
                              <IconCalendar />
                              {formatDeShort(parseDe(entry.startDate))} – {formatDeDisplay(parseDe(entry.endDate))}
                            </div>
                          </div>
                          <span className="text-anthracite/25 text-xs shrink-0 mt-0.5">
                            {listExpandedId === entry.id ? '▲' : '▼'}
                          </span>
                        </button>
                        {listExpandedId === entry.id && (
                          <div className="px-5 pb-5 pt-3 border-t border-border bg-warm/20">
                            {(entry.email || entry.phone) && (
                              <div className="flex flex-wrap gap-4 mb-4 text-sm">
                                {entry.email && (
                                  <a href={`mailto:${entry.email}`} className="flex items-center gap-1.5 text-blue hover:underline">
                                    <IconMail />{entry.email}
                                  </a>
                                )}
                                {entry.phone && (
                                  <span className="flex items-center gap-1.5 text-anthracite/60">
                                    <IconPhone />{entry.phone}
                                  </span>
                                )}
                              </div>
                            )}
                            <div className="flex items-center gap-3 pt-1">
                              <button
                                onClick={() => { startEditing(entry); setListExpandedId(null); }}
                                className="px-4 py-2 border border-border hover:border-blue hover:text-blue text-sm text-anthracite/50 rounded-lg transition-colors"
                              >
                                Bearbeiten
                              </button>
                              <button
                                onClick={() => handleDelete(entry.id, entry.note ? `"${entry.note}"` : entry.startDate)}
                                className="px-4 py-2 border border-border hover:border-primary hover:text-primary text-sm text-anthracite/50 rounded-lg transition-colors"
                              >
                                Löschen
                              </button>
                            </div>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })()}

      {/* DatePicker modal */}
      <DatePicker
        isOpen={pickerOpen}
        onClose={() => setPickerOpen(false)}
        occupancy={occupancy}
        initialDate={arrival || new Date()}
        onSelect={({ arrival: a, departure: d }) => {
          setArrival(a);
          setDeparture(d);
        }}
      />
    </div>
  );
}
