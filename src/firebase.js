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

export { app };