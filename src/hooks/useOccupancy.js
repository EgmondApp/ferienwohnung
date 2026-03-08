import { useState, useEffect } from 'react';
import { collection, onSnapshot, addDoc, deleteDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const COLLECTION = 'occupancy';

export function useOccupancy() {
  const [occupancy, setOccupancy] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, COLLECTION), (snapshot) => {
      const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      // Sort by startDate
      data.sort((a, b) => {
        const [da, ma, ya] = a.startDate.split('.').map(Number);
        const [db2, mb, yb] = b.startDate.split('.').map(Number);
        return new Date(ya, ma - 1, da) - new Date(yb, mb - 1, db2);
      });
      setOccupancy(data);
      setLoading(false);
    });
    return unsub;
  }, []);

  async function addOccupancy(startDate, endDate, note = '') {
    await addDoc(collection(db, COLLECTION), {
      startDate,
      endDate,
      note,
      createdAt: serverTimestamp(),
    });
  }

  async function removeOccupancy(id) {
    await deleteDoc(doc(db, COLLECTION, id));
  }

  async function updateOccupancyEntry(id, updates) {
    await updateDoc(doc(db, COLLECTION, id), updates);
  }

  return { occupancy, loading, addOccupancy, removeOccupancy, updateOccupancyEntry };
}
