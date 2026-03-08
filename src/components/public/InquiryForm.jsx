import { useState } from 'react';
import { formatDe, formatDeDisplay } from '../../utils/dateHelpers';

/**
 * Simple inquiry form.
 * Props:
 *   arrival - Date | null
 *   departure - Date | null
 *   onOpenDatePicker - () => void
 *   onSubmit - (formData) => Promise<void>
 */
export default function InquiryForm({ arrival, departure, onOpenDatePicker, onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    guests: 2,
    message: '',
  });
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
      await onSubmit({
        ...form,
        arrival: formatDe(arrival),
        departure: formatDe(departure),
      });
      setSent(true);
      setForm({ name: '', email: '', phone: '', guests: 2, message: '' });
    } catch (err) {
      setError('Fehler beim Senden. Bitte versuchen Sie es erneut.');
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <section id="anfrage" className="px-6 py-16 md:px-12 lg:px-20 max-w-3xl mx-auto">
        <div className="bg-offwhite border border-border rounded-lg p-8 text-center">
          <h2 className="font-serif text-2xl text-anthracite mb-3">Vielen Dank!</h2>
          <p className="text-anthracite/70">
            Ihre Anfrage wurde gesendet. Wir melden uns in Kürze bei Ihnen.
          </p>
          <button
            onClick={() => setSent(false)}
            className="mt-6 text-sm text-blue hover:underline"
          >
            Neue Anfrage stellen
          </button>
        </div>
      </section>
    );
  }

  const inputClass =
    'w-full px-4 py-2.5 bg-white border border-border rounded text-sm text-anthracite placeholder:text-stone focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue/30 transition-colors';

  return (
    <section id="anfrage" className="px-6 py-16 md:px-12 lg:px-20 max-w-3xl mx-auto">
      <h2 className="font-serif text-2xl md:text-3xl text-anthracite mb-2">Anfrage senden</h2>
      <p className="text-anthracite/60 mb-8 text-sm">
        Unverbindlich anfragen — wir antworten persönlich.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Date selection */}
        <div className="bg-offwhite border border-border rounded-lg p-4">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 min-w-[140px]">
              <div className="text-xs text-anthracite/60 mb-1">Anreise</div>
              <div className="text-sm font-medium">
                {arrival ? formatDeDisplay(arrival) : '–'}
              </div>
            </div>
            <div className="flex-1 min-w-[140px]">
              <div className="text-xs text-anthracite/60 mb-1">Abreise</div>
              <div className="text-sm font-medium">
                {departure ? formatDeDisplay(departure) : '–'}
              </div>
            </div>
            <button
              type="button"
              onClick={onOpenDatePicker}
              className="px-4 py-2 text-sm border border-border rounded hover:bg-white transition-colors"
            >
              {arrival ? 'Ändern' : 'Zeitraum wählen'}
            </button>
          </div>
        </div>

        {/* Name + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-anthracite/60 mb-1.5">Name *</label>
            <input
              type="text"
              value={form.name}
              onChange={(e) => update('name', e.target.value)}
              className={inputClass}
              placeholder="Max Mustermann"
              required
            />
          </div>
          <div>
            <label className="block text-xs text-anthracite/60 mb-1.5">E-Mail *</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => update('email', e.target.value)}
              className={inputClass}
              placeholder="max@beispiel.de"
              required
            />
          </div>
        </div>

        {/* Phone + Guests */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs text-anthracite/60 mb-1.5">Telefon (optional)</label>
            <input
              type="tel"
              value={form.phone}
              onChange={(e) => update('phone', e.target.value)}
              className={inputClass}
              placeholder="0170 1234567"
            />
          </div>
          <div>
            <label className="block text-xs text-anthracite/60 mb-1.5">Personen</label>
            <select
              value={form.guests}
              onChange={(e) => update('guests', Number(e.target.value))}
              className={inputClass}
            >
              {[1, 2, 3, 4, 5, 6].map((n) => (
                <option key={n} value={n}>{n} {n === 1 ? 'Person' : 'Personen'}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs text-anthracite/60 mb-1.5">Nachricht (optional)</label>
          <textarea
            value={form.message}
            onChange={(e) => update('message', e.target.value)}
            className={`${inputClass} h-28 resize-none`}
            placeholder="Haben Sie besondere Wünsche oder Fragen?"
          />
        </div>

        {/* Error */}
        {error && (
          <p className="text-primary text-sm">{error}</p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={sending}
          className="w-full md:w-auto px-8 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded transition-colors disabled:opacity-50"
        >
          {sending ? 'Wird gesendet...' : 'Anfrage senden'}
        </button>
      </form>
    </section>
  );
}
