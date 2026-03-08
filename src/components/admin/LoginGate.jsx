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
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <h1 className="font-serif text-2xl text-anthracite mb-6 text-center">Admin-Bereich</h1>
        <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <label className="block text-sm text-gray-600 mb-2">Passwort</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2.5 border border-gray-200 rounded text-sm focus:outline-none focus:border-blue focus:ring-1 focus:ring-blue/30"
            placeholder="Passwort eingeben"
            autoFocus
          />
          {error && (
            <p className="text-primary text-sm mt-2">Falsches Passwort.</p>
          )}
          <button
            type="submit"
            disabled={checking || !password}
            className="w-full mt-4 px-4 py-2.5 bg-anthracite hover:bg-anthracite/80 text-white text-sm font-medium rounded transition-colors disabled:opacity-40"
          >
            {checking ? 'Prüfe...' : 'Anmelden'}
          </button>
        </form>
        <p className="text-center mt-4">
          <a href="#/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
            ← Zurück zur Startseite
          </a>
        </p>
      </div>
    </div>
  );
}
