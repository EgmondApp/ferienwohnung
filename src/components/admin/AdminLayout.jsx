// Admin shell with tab navigation (Kalender / Anfragen).
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

  const inputClass = 'w-full px-3 py-2 bg-white border border-border rounded text-sm text-anthracite focus:outline-none focus:border-anthracite/40 transition-colors';

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
      <div className="bg-warm rounded-xl shadow-2xl w-full max-w-sm" onClick={(e) => e.stopPropagation()}>
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
                <label className="block text-xs text-anthracite/50 mb-1">Aktuelles Passwort</label>
                <input type="password" value={current} onChange={(e) => setCurrent(e.target.value)} className={inputClass} autoFocus required />
              </div>
              <div>
                <label className="block text-xs text-anthracite/50 mb-1">Neues Passwort</label>
                <input type="password" value={next} onChange={(e) => setNext(e.target.value)} className={inputClass} required />
              </div>
              <div>
                <label className="block text-xs text-anthracite/50 mb-1">Wiederholen</label>
                <input type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} className={inputClass} required />
              </div>
              {error && <p className="text-xs text-primary">{error}</p>}
              <button type="submit" disabled={saving} className="w-full py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded transition-colors disabled:opacity-50">
                {saving ? 'Speichern…' : 'Passwort speichern'}
              </button>
            </>
          )}
        </form>
      </div>
    </div>
  );
}

const TABS = [
  { id: 'calendar', label: 'Kalender' },
  { id: 'inquiries', label: 'Anfragen' },
];

export default function AdminLayout({ onLogout, changePassword }) {
  const [activeTab, setActiveTab] = useState('calendar');
  const [pwModalOpen, setPwModalOpen] = useState(false);
  const occupancyHook = useOccupancy();
  const inquiriesHook = useInquiries();

  const newCount = inquiriesHook.inquiries.filter((i) => i.status === 'neu').length;

  return (
    <div className="min-h-screen bg-warm">
      {/* Header */}
      <header className="bg-anthracite no-print">
        <div className="max-w-6xl mx-auto px-6 md:px-12">

          {/* Top row */}
          <div className="h-14 flex items-center justify-between gap-4">
            <span className="font-serif text-lg text-white shrink-0">Egmond aan Zee</span>

            {/* Desktop tabs — segmented control */}
            <nav className="hidden md:flex gap-1 bg-white/10 rounded-lg p-1">
              {TABS.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-4 py-1.5 text-sm font-medium rounded-md transition-all ${
                    activeTab === tab.id
                      ? 'bg-white text-anthracite shadow-sm'
                      : 'text-white/55 hover:text-white'
                  }`}
                >
                  {tab.label}
                  {tab.id === 'inquiries' && newCount > 0 && (
                    <span className="ml-1.5 inline-flex items-center justify-center w-4 h-4 text-[10px] font-medium bg-primary text-white rounded-full">
                      {newCount}
                    </span>
                  )}
                </button>
              ))}
            </nav>

            <div className="flex items-center gap-4 shrink-0">
              <a href="#/" className="text-sm text-white/40 hover:text-white/80 transition-colors hidden sm:block">← Gästeseite</a>
              <button onClick={() => setPwModalOpen(true)} className="text-sm text-white/40 hover:text-white/80 transition-colors hidden sm:block">Passwort</button>
              <button onClick={onLogout} className="text-sm text-white/40 hover:text-white/80 transition-colors">Abmelden</button>
            </div>
          </div>

          {/* Mobile tabs — segmented control */}
          <nav className="md:hidden flex gap-1 bg-white/10 rounded-lg p-1 mb-3 -mx-0">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex-1 py-1.5 text-sm font-medium rounded-md transition-all ${
                  activeTab === tab.id
                    ? 'bg-white text-anthracite shadow-sm'
                    : 'text-white/55 hover:text-white'
                }`}
              >
                {tab.label}
                {tab.id === 'inquiries' && newCount > 0 && (
                  <span className="ml-1 inline-flex items-center justify-center w-4 h-4 text-[10px] font-medium bg-primary text-white rounded-full">
                    {newCount}
                  </span>
                )}
              </button>
            ))}
          </nav>

        </div>
      </header>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 md:px-12 py-6">
        {activeTab === 'calendar' && (
          <AdminCalendar
            occupancy={occupancyHook.occupancy}
            loading={occupancyHook.loading}
            error={occupancyHook.error}
            removeOccupancy={occupancyHook.removeOccupancy}
          />
        )}
        {activeTab === 'inquiries' && (
          <InquiryList {...inquiriesHook} addOccupancy={occupancyHook.addOccupancy} occupancy={occupancyHook.occupancy} />
        )}
      </main>

      {pwModalOpen && (
        <PasswordModal changePassword={changePassword} onClose={() => setPwModalOpen(false)} />
      )}
    </div>
  );
}
