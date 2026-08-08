// Firestore hook for the "inquiries" collection.
// status values: "neu" | "gebucht" | "abgelehnt".
//
// Inquiries contain guest contact data and are readable by signed-in admins
// only. Guests can create them (the booking form) but never read them back,
// so the public page must pass listen=false — otherwise its snapshot listener
// would be rejected by the rules.
import { useState, useEffect } from 'react';
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const COLLECTION = 'inquiries';

export function useInquiries(listen = false) {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(listen);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!listen) return;
    const unsub = onSnapshot(
      collection(db, COLLECTION),
      (snapshot) => {
        const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        data.sort((a, b) => {
          const ta = a.createdAt?.seconds || 0;
          const tb = b.createdAt?.seconds || 0;
          return tb - ta;
        });
        setInquiries(data);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error('useInquiries:', err.message);
        setLoading(false);
        setError('Anfragen konnten nicht geladen werden.');
      }
    );
    return unsub;
  }, [listen]);

  async function addInquiry(inquiry) {
    await addDoc(collection(db, COLLECTION), {
      ...inquiry,
      status: 'neu',
      createdAt: serverTimestamp(),
    });
  }

  async function updateInquiryStatus(id, status) {
    await updateDoc(doc(db, COLLECTION, id), { status });
  }

  async function deleteInquiry(id) {
    await deleteDoc(doc(db, COLLECTION, id));
  }

  return { inquiries, loading, error, addInquiry, updateInquiryStatus, deleteInquiry };
}
