// Firestore hook for the "occupancy" collection.
// Provides real-time booking list + addOccupancy / removeOccupancy / updateOccupancyEntry.
// Dates are stored as dd.MM.yyyy strings. Used by AdminLayout, OccupancyEditor, InquiryList.
import { useState, useEffect } from 'react';
import { collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db, ADMIN_KEY } from '../firebase';

const COLLECTION = 'occupancy';

export function useOccupancy() {
  const [occupancy, setOccupancy] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, COLLECTION),
      (snapshot) => {
        const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        data.sort((a, b) => {
          const [da, ma, ya] = a.startDate.split('.').map(Number);
          const [db2, mb, yb] = b.startDate.split('.').map(Number);
          return new Date(ya, ma - 1, da) - new Date(yb, mb - 1, db2);
        });
        setOccupancy(data);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error('useOccupancy:', err.message);
        setLoading(false);
        setError('Belegungsdaten konnten nicht geladen werden.');
      }
    );
    return unsub;
  }, []);

  async function addOccupancy(startDate, endDate, note = '', email = '', phone = '', message = '') {
    await addDoc(collection(db, COLLECTION), {
      startDate,
      endDate,
      note,
      email,
      phone,
      message,
      createdAt: serverTimestamp(),
      _ak: ADMIN_KEY,
    });
  }

  async function removeOccupancy(id) {
    await deleteDoc(doc(db, COLLECTION, id));
  }

  async function updateOccupancyEntry(id, updates) {
    await updateDoc(doc(db, COLLECTION, id), { ...updates, _ak: ADMIN_KEY });
  }

  return { occupancy, loading, error, addOccupancy, removeOccupancy, updateOccupancyEntry };
}
