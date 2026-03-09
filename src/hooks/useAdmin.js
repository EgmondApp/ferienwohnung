import { useState, useEffect, useCallback } from 'react';

/*
 * Simple client-side password gate.
 * Default password: "ferienwohnung2025"
 * The active hash is stored in localStorage (HASH_KEY).
 * Falls back to ADMIN_HASH if nothing is stored (first run / localStorage cleared).
 */
const ADMIN_HASH = '7f51a62a10ca8f9e5ca6c9b1a21570b87b569ffd32a971140115f0387d39f369';
const SESSION_KEY = 'fw_admin';
const HASH_KEY = 'fw_admin_hash';

async function hashPassword(password) {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const buffer = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function getActiveHash() {
  return localStorage.getItem(HASH_KEY) || ADMIN_HASH;
}

export function useAdmin() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY) === 'true') {
      setIsAuthenticated(true);
    }
    setChecking(false);
  }, []);

  const login = useCallback(async (password) => {
    const hash = await hashPassword(password);
    if (hash === getActiveHash()) {
      sessionStorage.setItem(SESSION_KEY, 'true');
      setIsAuthenticated(true);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    sessionStorage.removeItem(SESSION_KEY);
    setIsAuthenticated(false);
  }, []);

  const changePassword = useCallback(async (currentPassword, newPassword) => {
    const currentHash = await hashPassword(currentPassword);
    if (currentHash !== getActiveHash()) return false;
    const newHash = await hashPassword(newPassword);
    localStorage.setItem(HASH_KEY, newHash);
    return true;
  }, []);

  return { isAuthenticated, checking, login, logout, changePassword };
}
