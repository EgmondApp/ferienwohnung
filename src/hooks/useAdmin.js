import { useState, useEffect, useCallback } from 'react';

/*
 * Simple client-side password gate.
 *
 * The password hash is stored here. To generate a new hash:
 *   1. Open browser console
 *   2. Run: crypto.subtle.digest('SHA-256', new TextEncoder().encode('YOUR_PASSWORD'))
 *            .then(b => console.log(Array.from(new Uint8Array(b)).map(x => x.toString(16).padStart(2,'0')).join('')))
 *   3. Replace ADMIN_HASH below
 *
 * Default password: "ferienwohnung2025"
 */
const ADMIN_HASH = '7f51a62a10ca8f9e5ca6c9b1a21570b87b569ffd32a971140115f0387d39f369';

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const buffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

const STORAGE_KEY = 'fw_admin';

export function useAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    if (stored === 'true') {
      setIsAuthenticated(true);
    }
    setChecking(false);
  }, []);

  const login = useCallback(async (password) => {
    const hash = await hashPassword(password);
    if (hash === ADMIN_HASH) {
      sessionStorage.setItem(STORAGE_KEY, 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(STORAGE_KEY);
    setIsAuthenticated(false);
  }, []);

  return { isAuthenticated, checking, login, logout };
}
