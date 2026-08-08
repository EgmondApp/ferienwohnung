// Firebase client setup. Exports `db` (Firestore) and `auth` (Firebase Auth).
// Project: egmondbelegung (europe-west3). Config is public/client-safe.
//
// Write access is guarded by Firebase Auth, NOT by a shared key in this file.
// Admin accounts are created manually in the Firebase Console
// (Authentication → Users). Self-registration is disabled.
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

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
export const auth = getAuth(app);
export { app };
