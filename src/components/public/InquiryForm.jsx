import { useState } from 'react';
import { differenceInDays } from 'date-fns';
import { formatDe, formatDeDisplay } from '../../utils/dateHelpers';

export default function InquiryForm({ arrival, departure, onOpenDatePicker, onSubmit }) {
  const nights = arrival && departure ? differenceInDays(departure, arrival) : null;
  const [form, setForm] = useState({ name: '', email: '', phone: '', guests: 2, message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(null);

  function update(field, value) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!arrival || !departure) {
      setError('Bitte wählen Sie zuerst einen Reisezeitraum.');
      return;
    }
    if (form.name.trim().length < 2) {
      setError('Bitte geben Sie Ihren vollständigen Namen ein.');
      return;
    }
    if (!EMAIL_RE.test(form.email.trim())) {
      setError('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
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
    'w-full px-4 py-2.5 bg-white border border-border rounded text-sm text-anthracite placeholder:text-anthracite/40 focus:outline-none focus:border-anthracite/40 focus:ring-2 focus:ring-anthracite/10 transition-colors';

  return (
    <section id="anfrage" className="px-6 pt-5 pb-8 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <div className="bg-white rounded-xl border border-border p-6 md:p-8">

        {sent ? (
          <div className="bg-offwhite border border-gold/40 rounded-lg p-8 text-center">
            <p className="text-anthracite font-medium text-lg">
              Danke für die Anfrage — wir melden uns persönlich.
            </p>
            <p className="text-anthracite/50 text-sm mt-2">
              Sie erhalten in Kürze eine Antwort per E-Mail.
            </p>
            <button
              type="button"
              onClick={() => setSent(false)}
              className="mt-5 px-5 py-2 text-sm font-medium rounded-lg border border-gold/40 text-anthracite/70 hover:bg-warm transition-colors"
            >
              Neue Anfrage stellen
            </button>
          </div>
        ) : (
          <>
            <h2 className="font-serif text-base text-anthracite/50 mb-4">Anfrageformular</h2>

            {/* Datum-Zusammenfassung */}
            <div className="flex items-center gap-4 mb-6 pb-5 border-b border-border text-sm flex-wrap">
              <div className="whitespace-nowrap">
                <span className="text-anthracite/40">Anreise: </span>
                <span className={`font-medium ${arrival ? 'text-anthracite' : 'text-anthracite/40'}`}>{arrival ? formatDeDisplay(arrival) : '–'}</span>
              </div>
              <span className="text-anthracite/20">·</span>
              <div className="whitespace-nowrap">
                <span className="text-anthracite/40">Abreise: </span>
                <span className={`font-medium ${departure ? 'text-anthracite' : 'text-anthracite/40'}`}>{departure ? formatDeDisplay(departure) : '–'}</span>
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
                  <label htmlFor="inq-name" className="block text-xs text-anthracite/50 mb-1.5">Name *</label>
                  <input id="inq-name" name="name" type="text" value={form.name} onChange={(e) => update('name', e.target.value)}
                    className={inputClass} placeholder="Max Mustermann" required autoComplete="name" />
                </div>
                <div>
                  <label htmlFor="inq-email" className="block text-xs text-anthracite/50 mb-1.5">E-Mail *</label>
                  <input id="inq-email" name="email" type="email" value={form.email} onChange={(e) => update('email', e.target.value)}
                    className={inputClass} placeholder="max@beispiel.de" required autoComplete="email" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="inq-phone" className="block text-xs text-anthracite/50 mb-1.5">Telefon (optional)</label>
                  <input id="inq-phone" name="phone" type="tel" value={form.phone} onChange={(e) => update('phone', e.target.value)}
                    className={inputClass} placeholder="0170 1234567" autoComplete="tel" />
                </div>
                <div>
                  <label htmlFor="inq-guests" className="block text-xs text-anthracite/50 mb-1.5">Personen</label>
                  <select id="inq-guests" name="guests" value={form.guests} onChange={(e) => update('guests', Number(e.target.value))}
                    className={inputClass}>
                    {[1, 2, 3, 4].map((n) => (
                      <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'Personen'}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1.5">
                  <label htmlFor="inq-message" className="text-xs text-anthracite/50">Nachricht (optional)</label>
                  <span className={`text-xs ${form.message.length > 1800 ? 'text-primary' : 'text-anthracite/30'}`}>{form.message.length}/2000</span>
                </div>
                <textarea id="inq-message" name="message" value={form.message} onChange={(e) => update('message', e.target.value.slice(0, 2000))}
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
