import { useState, useEffect } from 'react';
import { collection, onSnapshot, addDoc, updateDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase';

const COLLECTION = 'inquiries';

export function useInquiries() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onSnapshot(collection(db, COLLECTION), (snapshot) => {
      const data = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      // Sort newest first
      data.sort((a, b) => {
        const ta = a.createdAt?.seconds || 0;
        const tb = b.createdAt?.seconds || 0;
        return tb - ta;
      });
      setInquiries(data);
      setLoading(false);
    });
    return unsub;
  }, []);

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

  return { inquiries, loading, addInquiry, updateInquiryStatus, deleteInquiry };
}
