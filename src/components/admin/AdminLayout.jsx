// Admin page — single scroll view: calendar + inquiries.
import { useState } from 'react';
import AdminCalendar from './AdminCalendar';
import InquiryList from './InquiryList';
import { useOccupancy } from '../../hooks/useOccupancy';
import { useInquiries } from '../../hooks/useInquiries';

function PasswordModal({ changePassword, onClose }) {
  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [confirm, setConfirm] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [saving, setSaving] = useState(false);

  const inputClass = 'w-full px-4 py-2.5 bg-white border border-border rounded text-sm text-anthracite focus:outline-none focus:border-anthracite/40 focus:ring-2 focus:ring-anthracite/10 transition-colors';

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    if (next.length < 6) { setError('Neues Passwort muss mindestens 6 Zeichen haben.'); return; }
    if (next !== confirm) { setError('Passwörter stimmen nicht überein.'); return; }
    setSaving(true);
    const ok = await changePassword(current, next);
    setSaving(false);
    if (!ok) { setError('Aktuelles Passwort falsch.'); return; }
    setSuccess(true);
    setTimeout(onClose, 1500);
  }

  return (
    <div className="fixed inset-0 z-50 bg-anthracite/60 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-warm rounded-2xl shadow-2xl w-full max-w-sm" role="dialog" aria-label="Passwort ändern" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-5 py-4 border-b border-border">
          <span className="font-serif text-base text-anthracite">Passwort ändern</span>
          <button onClick={onClose} className="text-anthracite/40 hover:text-anthracite text-2xl leading-none w-8 h-8 flex items-center justify-center">×</button>
        </div>
        <form onSubmit={handleSubmit} className="px-5 py-4 space-y-3">
          {success ? (
            <p className="text-sm text-green-700 font-medium py-2">Passwort erfolgreich geändert ✓</p>
          ) : (
            <>
              <div>
                <label htmlFor="pw-current" className="block text-xs text-anthracite/50 mb-1.5">Aktuelles Passwort</label>
                <input id="pw-current" name="current-password" type="password" value={current} onChange={(e) => setCurrent(e.target.value)} className={inputClass} autoComplete="current-password" autoFocus required />
              </div>
              <div>
                <label htmlFor="pw-new" className="block text-xs text-anthracite/50 mb-1.5">Neues Passwort</label>
                <input id="pw-new" name="new-password" type="password" value={next} onChange={(e) => setNext(e.target.value)} className={inputClass} autoComplete="new-password" required />
              </div>
              <div>
                <label htmlFor="pw-confirm" className="block text-xs text-anthracite/50 mb-1.5">Wiederholen</label>
                <input id="pw-confirm" name="confirm-password" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} className={inputClass} autoComplete="new-password" required />
              </div>
              {error && <p className="text-primary text-sm border border-primary/20 bg-primary/5 rounded px-3 py-2">{error}</p>}
              <button type="submit" disabled={saving} className="w-full py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-40">
                {saving ? 'Speichern…' : 'Passwort speichern'}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

export default function AdminLayout({ onLogout, changePassword }) {
  const [pwModalOpen, setPwModalOpen] = useState(false);
  const occupancyHook = useOccupancy();
  const inquiriesHook = useInquiries();

  return (
    <div className="min-h-screen bg-warm">
      {/* Header */}
      <header className="bg-anthracite no-print">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="h-14 flex items-center justify-between gap-4">
            <span className="font-serif text-lg text-white shrink-0">Egmond aan Zee</span>
            <div className="flex items-center gap-4 shrink-0">
<a href="#/" className="text-sm text-white/40 hover:text-white/80 transition-colors">← Gästeseite</a>
              <button onClick={() => setPwModalOpen(true)} className="text-sm text-white/40 hover:text-white/80 transition-colors">Passwort</button>
              <button onClick={onLogout} className="text-sm text-white/40 hover:text-white/80 transition-colors">Abmelden</button>
            </div>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-6 space-y-10">
        <div id="anfragen">
          <InquiryList {...inquiriesHook} addOccupancy={occupancyHook.addOccupancy} occupancy={occupancyHook.occupancy} />
        </div>
        <AdminCalendar
          occupancy={occupancyHook.occupancy}
          loading={occupancyHook.loading}
          error={occupancyHook.error}
          removeOccupancy={occupancyHook.removeOccupancy}
          addOccupancy={occupancyHook.addOccupancy}
        />
      </main>

      {pwModalOpen && (
        <PasswordModal changePassword={changePassword} onClose={() => setPwModalOpen(false)} />
      )}
    </div>
  );
}
