// Firebase client setup. Exports `db` (Firestore instance) used by all hooks.
// Project: egmondbelegung (europe-west3). Config is public/client-safe.
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCVuLt773djuu5QVt4epbzUFN57Bo8M9Fg",
  authDomain: "egmondbelegung.firebaseapp.com",
  projectId: "egmondbelegung",
  storageBucket: "egmondbelegung.firebasestorage.app",
  messagingSenderId: "874294620175",
  appId: "1:874294620175:web:443b7d6d6db0313eed337a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export { app };

// Simple write-guard for Firestore rules. Not a user password —
// a separate client key to block casual/automated abuse.
// Change this value AND update firestore.rules if compromised.
export const ADMIN_KEY = 'egmond-fw-XK9m';