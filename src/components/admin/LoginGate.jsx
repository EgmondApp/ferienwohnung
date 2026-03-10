import { useState } from 'react';

export default function LoginGate({ onLogin }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [checking, setChecking] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setChecking(true);
    setError(false);

    const success = await onLogin(password);
    if (!success) {
      setError(true);
      setPassword('');
    }
    setChecking(false);
  }

  return (
    <div className="min-h-screen bg-warm flex flex-col items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <h1 className="font-serif text-3xl text-anthracite">Egmond aan Zee</h1>
          <p className="text-sm text-anthracite/40 mt-1">Verwaltung</p>
        </div>

        <div className="bg-white rounded-xl border border-border p-6 md:p-8">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs text-anthracite/50 mb-1.5">Passwort</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2.5 bg-white border border-border rounded text-sm text-anthracite placeholder:text-stone focus:outline-none focus:border-anthracite/40 focus:ring-2 focus:ring-anthracite/10 transition-colors"
                placeholder="Passwort eingeben"
                autoFocus
              />
            </div>
            {error && (
              <p className="text-primary text-sm border border-primary/20 bg-primary/5 rounded px-3 py-2">
                Falsches Passwort.
              </p>
            )}
            <button
              type="submit"
              disabled={checking || !password}
              className="w-full px-4 py-2.5 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded-lg transition-colors disabled:opacity-40"
            >
              {checking ? 'Prüfe…' : 'Anmelden'}
            </button>
          </form>
        </div>

        <p className="text-center mt-5">
          <a href="#/" className="text-sm text-anthracite/40 hover:text-anthracite/70 transition-colors">
            ← Zur Gästeseite
          </a>
        </p>
      </div>
    </div>
  );
}
