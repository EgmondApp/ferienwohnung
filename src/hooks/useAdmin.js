// Admin authentication via Firebase Auth (email + password).
//
// Accounts are created manually in the Firebase Console under
// Authentication → Users. There is no self-registration in the app.
//
// Replaces the previous client-side SHA-256 password gate. That gate only
// hid the admin UI — it never protected the data, because the Firestore
// rules checked a shared key that shipped inside the JS bundle.
import { useState, useEffect, useCallback } from 'react';
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from 'firebase/auth';
import { auth } from '../firebase';

export function useAdmin() {
  const [user, setUser] = useState(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setChecking(false);
    });
    return unsub;
  }, []);

  // Returns null on success, or a human-readable error message.
  const login = useCallback(async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email.trim(), password);
      return null;
    } catch (err) {
      switch (err.code) {
        case 'auth/invalid-email':
          return 'E-Mail-Adresse ungültig.';
        case 'auth/too-many-requests':
          return 'Zu viele Fehlversuche. Bitte später erneut probieren.';
        case 'auth/network-request-failed':
          return 'Keine Verbindung zum Server.';
        case 'auth/configuration-not-found':
        case 'auth/operation-not-allowed':
          // Setup is incomplete — without this branch the message below
          // would blame the password and send you looking in the wrong place.
          return 'Anmeldung ist nicht eingerichtet: In der Firebase Console unter Authentication den Anbieter „E-Mail/Passwort" aktivieren.';
        default:
          // invalid-credential / user-not-found / wrong-password are
          // deliberately collapsed — no hint about which part was wrong.
          return 'E-Mail oder Passwort falsch.';
      }
    }
  }, []);

  const logout = useCallback(() => signOut(auth), []);

  // Firebase requires a recent login before changing the password,
  // so we re-authenticate with the current one first.
  const changePassword = useCallback(async (currentPassword, newPassword) => {
    const current = auth.currentUser;
    if (!current?.email) return 'Nicht angemeldet.';
    try {
      const cred = EmailAuthProvider.credential(current.email, currentPassword);
      await reauthenticateWithCredential(current, cred);
      await updatePassword(current, newPassword);
      return null;
    } catch (err) {
      switch (err.code) {
        case 'auth/weak-password':
          return 'Neues Passwort ist zu schwach (mindestens 6 Zeichen).';
        case 'auth/too-many-requests':
          return 'Zu viele Fehlversuche. Bitte später erneut probieren.';
        default:
          return 'Aktuelles Passwort falsch.';
      }
    }
  }, []);

  return { user, isAuthenticated: !!user, checking, login, logout, changePassword };
}
