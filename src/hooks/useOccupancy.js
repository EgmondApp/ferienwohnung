// Firestore hook for bookings, split across two collections:
//
//   occupancy/{id}       startDate, endDate  — publicly readable (guest calendar)
//   bookingDetails/{id}  note, email, phone, message — signed-in admins only
//
// Both share the same document id. The split exists because Firestore rules
// cannot restrict individual fields: the guest calendar needs to read the
// dates, so anything stored alongside them would be public too.
//
// Pass withDetails=true (admin views) to merge the guest data back in —
// callers then see the same flat objects as before.
import { useState, useEffect, useMemo } from 'react';
import { collection, onSnapshot, addDoc, deleteDoc, doc, setDoc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const COLLECTION = 'occupancy';
const DETAILS = 'bookingDetails';
const DETAIL_FIELDS = ['note', 'email', 'phone', 'message'];

function byStartDate(a, b) {
  const [da, ma, ya] = a.startDate.split('.').map(Number);
  const [db2, mb, yb] = b.startDate.split('.').map(Number);
  return new Date(ya, ma - 1, da) - new Date(yb, mb - 1, db2);
}

export function useOccupancy(withDetails = false) {
  const [entries, setEntries] = useState([]);
  const [details, setDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, COLLECTION),
      (snapshot) => {
        const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        data.sort(byStartDate);
        setEntries(data);
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

  useEffect(() => {
    if (!withDetails) return;
    const unsub = onSnapshot(
      collection(db, DETAILS),
      (snapshot) => {
        const map = {};
        snapshot.docs.forEach((d) => { map[d.id] = d.data(); });
        setDetails(map);
      },
      (err) => {
        // Non-fatal: the calendar still works, only guest data stays hidden.
        console.error('useOccupancy details:', err.message);
        setDetails({});
      }
    );
    return unsub;
  }, [withDetails]);

  const occupancy = useMemo(() => {
    if (!details) return entries;
    return entries.map((e) => (details[e.id] ? { ...e, ...details[e.id] } : e));
  }, [entries, details]);

  async function addOccupancy(startDate, endDate, note = '', email = '', phone = '', message = '') {
    const ref = await addDoc(collection(db, COLLECTION), {
      startDate,
      endDate,
      createdAt: serverTimestamp(),
    });
    if (note || email || phone || message) {
      await setDoc(doc(db, DETAILS, ref.id), { note, email, phone, message });
    }
  }

  async function removeOccupancy(id) {
    await deleteDoc(doc(db, COLLECTION, id));
    // Deleting a non-existent document is a no-op in Firestore.
    await deleteDoc(doc(db, DETAILS, id));
  }

  async function updateOccupancyEntry(id, updates) {
    const base = {};
    const detail = {};
    for (const [k, v] of Object.entries(updates)) {
      (DETAIL_FIELDS.includes(k) ? detail : base)[k] = v;
    }
    if (Object.keys(base).length) await updateDoc(doc(db, COLLECTION, id), base);
    if (Object.keys(detail).length) await setDoc(doc(db, DETAILS, id), detail, { merge: true });
  }

  return { occupancy, loading, error, addOccupancy, removeOccupancy, updateOccupancyEntry };
}
