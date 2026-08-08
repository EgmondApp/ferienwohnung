/*
 * One-off migration: split guest data out of the publicly readable
 * `occupancy` collection into the admin-only `bookingDetails` collection,
 * and drop the obsolete `_ak` field everywhere.
 *
 * Run AFTER deploying the new firestore.rules, because it signs in as an
 * admin — the new rules are what make that sign-in meaningful.
 *
 * Usage (from the repo root):
 *
 *   npm install
 *   FW_ADMIN_EMAIL=you@example.com FW_ADMIN_PASSWORD=... node scripts/migrate-booking-details.js
 *   FW_ADMIN_EMAIL=you@example.com FW_ADMIN_PASSWORD=... node scripts/migrate-booking-details.js --apply
 *
 * Without --apply it only reports what it would change. Safe to re-run:
 * documents already migrated are skipped.
 */
import { initializeApp } from 'firebase/app';
import {
  getFirestore, collection, getDocs, doc, setDoc, updateDoc, deleteField,
} from 'firebase/firestore';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCVuLt773djuu5QVt4epbzUFN57Bo8M9Fg',
  authDomain: 'egmondbelegung.firebaseapp.com',
  projectId: 'egmondbelegung',
  storageBucket: 'egmondbelegung.firebasestorage.app',
  messagingSenderId: '874294620175',
  appId: '1:874294620175:web:443b7d6d6db0313eed337a',
};

const DETAIL_FIELDS = ['note', 'email', 'phone', 'message'];
const apply = process.argv.includes('--apply');

const email = process.env.FW_ADMIN_EMAIL;
const password = process.env.FW_ADMIN_PASSWORD;
if (!email || !password) {
  console.error('Fehlt: FW_ADMIN_EMAIL und FW_ADMIN_PASSWORD als Umgebungsvariablen setzen.');
  process.exit(1);
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

function summarise(data) {
  return DETAIL_FIELDS.filter((f) => data[f]).join(', ') || 'keine Gästedaten';
}

async function main() {
  await signInWithEmailAndPassword(auth, email, password);
  console.log(`Angemeldet als ${email}`);
  console.log(apply ? '\n=== APPLY — Daten werden geändert ===\n' : '\n=== DRY RUN — keine Änderungen (--apply zum Ausführen) ===\n');

  const occSnap = await getDocs(collection(db, 'occupancy'));
  let moved = 0; let cleaned = 0; let skipped = 0;

  for (const d of occSnap.docs) {
    const data = d.data();
    const hasDetails = DETAIL_FIELDS.some((f) => data[f]);
    const hasLegacy = DETAIL_FIELDS.some((f) => f in data) || '_ak' in data;

    if (!hasLegacy) {
      skipped += 1;
      continue;
    }

    console.log(`${d.id}  ${data.startDate} – ${data.endDate}  →  ${summarise(data)}`);

    if (apply) {
      if (hasDetails) {
        const details = {};
        for (const f of DETAIL_FIELDS) details[f] = data[f] || '';
        await setDoc(doc(db, 'bookingDetails', d.id), details, { merge: true });
        moved += 1;
      }
      const strip = { _ak: deleteField() };
      for (const f of DETAIL_FIELDS) strip[f] = deleteField();
      await updateDoc(doc(db, 'occupancy', d.id), strip);
      cleaned += 1;
    } else {
      if (hasDetails) moved += 1;
      cleaned += 1;
    }
  }

  // The old admin UI wrote _ak into inquiries on status changes.
  const inqSnap = await getDocs(collection(db, 'inquiries'));
  let inqCleaned = 0;
  for (const d of inqSnap.docs) {
    if (!('_ak' in d.data())) continue;
    console.log(`inquiries/${d.id}  →  _ak entfernen`);
    if (apply) await updateDoc(doc(db, 'inquiries', d.id), { _ak: deleteField() });
    inqCleaned += 1;
  }

  console.log('\n--- Zusammenfassung ---');
  console.log(`occupancy gesamt:        ${occSnap.docs.length}`);
  console.log(`  Gästedaten verschoben: ${moved}`);
  console.log(`  Felder bereinigt:      ${cleaned}`);
  console.log(`  bereits migriert:      ${skipped}`);
  console.log(`inquiries bereinigt:     ${inqCleaned}`);
  if (!apply) console.log('\nNichts geändert. Mit --apply erneut ausführen.');
  process.exit(0);
}

main().catch((err) => {
  console.error('\nFehlgeschlagen:', err.code || '', err.message);
  process.exit(1);
});
