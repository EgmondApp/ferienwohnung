import { useState } from 'react';
import { formatDe, formatDeDisplay } from '../../utils/dateHelpers';

export default function InquiryForm({ arrival, departure, onOpenDatePicker, onSubmit }) {
  const nights = arrival && departure ? Math.round((departure - arrival) / 86400000) : null;
  const [form, setForm] = useState({ name: '', email: '', phone: '', guests: 2, message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!arrival || !departure) {
      setError('Bitte wählen Sie zuerst einen Reisezeitraum.');
      return;
    }
    if (!form.name.trim() || !form.email.trim()) {
      setError('Bitte füllen Sie Name und E-Mail aus.');
      return;
    }
    setSending(true);
    setError(null);
    try {
      await onSubmit({ ...form, arrival: formatDe(arrival), departure: formatDe(departure) });
      setSent(true);
      setForm({ name: '', email: '', phone: '', guests: 2, message: '' });
    } catch {
      setError('Fehler beim Senden. Bitte versuchen Sie es erneut.');
    } finally {
      setSending(false);
    }
  }

  const inputClass =
    'w-full px-4 py-2.5 bg-white border border-border rounded text-sm text-anthracite placeholder:text-stone focus:outline-none focus:border-anthracite/40 focus:ring-2 focus:ring-anthracite/10 transition-colors';

  return (
    <section id="anfrage" className="px-6 pt-5 pb-8 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="bg-white rounded-xl border border-border p-6 md:p-8">

        {sent ? (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <p className="text-green-800 font-medium text-lg">
              Danke für die Anfrage — wir melden uns persönlich.
            </p>
            <p className="text-green-600/70 text-sm mt-2">
              Sie erhalten in Kürze eine Antwort per E-Mail.
            </p>
          </div>
        ) : (
          <>
            <h2 className="font-serif text-base text-anthracite/50 mb-4">Anfrageformular</h2>

            {/* Datum-Zusammenfassung */}
            <div className="flex items-center gap-4 mb-6 pb-5 border-b border-border text-sm flex-wrap">
              <div className="whitespace-nowrap">
                <span className="text-anthracite/40">Anreise: </span>
                <span className={`font-medium ${arrival ? 'text-anthracite' : 'text-stone'}`}>{arrival ? formatDeDisplay(arrival) : '–'}</span>
              </div>
              <span className="text-anthracite/20">·</span>
              <div className="whitespace-nowrap">
                <span className="text-anthracite/40">Abreise: </span>
                <span className={`font-medium ${departure ? 'text-anthracite' : 'text-stone'}`}>{departure ? formatDeDisplay(departure) : '–'}</span>
              </div>
              {nights && (
                <>
                  <span className="text-anthracite/20">·</span>
                  <span className="whitespace-nowrap text-anthracite/60 flex items-center gap-1">
                    <span>🌙</span><span className="font-medium text-anthracite">{nights} Nächte</span>
                  </span>
                </>
              )}
              <button
                type="button"
                onClick={onOpenDatePicker}
                className="ml-auto px-3 py-1 text-xs font-medium rounded-full border border-border bg-offwhite hover:bg-warm hover:border-anthracite/20 text-anthracite/60 hover:text-anthracite transition-colors"
              >
                {arrival ? 'Ändern' : 'Zeitraum wählen'}
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-anthracite/50 mb-1.5">Name *</label>
                  <input type="text" value={form.name} onChange={(e) => update('name', e.target.value)}
                    className={inputClass} placeholder="Max Mustermann" required />
                </div>
                <div>
                  <label className="block text-xs text-anthracite/50 mb-1.5">E-Mail *</label>
                  <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)}
                    className={inputClass} placeholder="max@beispiel.de" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs text-anthracite/50 mb-1.5">Telefon (optional)</label>
                  <input type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)}
                    className={inputClass} placeholder="0170 1234567" />
                </div>
                <div>
                  <label className="block text-xs text-anthracite/50 mb-1.5">Personen</label>
                  <select value={form.guests} onChange={(e) => update('guests', Number(e.target.value))}
                    className={inputClass}>
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'Personen'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs text-anthracite/50 mb-1.5">Nachricht (optional)</label>
                <textarea value={form.message} onChange={(e) => update('message', e.target.value)}
                  className={`${inputClass} h-28 resize-none`}
                  placeholder="Haben Sie besondere Wünsche oder Fragen?" />
              </div>

              {error && (
                <p className="text-primary text-sm border border-primary/20 bg-primary/5 rounded px-3 py-2">
                  {error}
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="w-full md:w-auto px-8 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition-colors disabled:opacity-40"
              >
                {sending ? 'Wird gesendet…' : 'Anfrage senden'}
              </button>
            </form>
          </>
        )}
      </div>
    </section>
  );
}
