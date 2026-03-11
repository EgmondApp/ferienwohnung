> **Hinweis:** Die Schnell-Routine wird auch automatisch als Teil von `/finish` (Schritt 0) ausgeführt. Nutze `/optimieren` für Cleanup zwischendurch oder wenn du die Intensiv-Routine brauchst.

Frage den Nutzer zuerst:

"Welche Optimierung soll ich durchführen?

**[S] Schnell** – console.logs entfernen, MEMORY.md komprimieren, DEPRECATED-Dateien prüfen (~2 min)
**[I] Intensiv** – Alles von Schnell + ungenutzte Imports/Dateien, Keep-in-Sync prüfen, tote Assets, Bundle-Größe, VS-Code-Umgebung (~5 min)

Bitte antworte mit S oder I."

Warte auf die Antwort, dann führe die passende Routine aus:

---

## Routine SCHNELL

1. Alle `console.log`, `console.warn`, `console.error` in `src/` suchen und auflisten. Nutzer fragen ob entfernen.
2. MEMORY.md lesen und komprimieren: veraltete, redundante oder überholte Einträge entfernen. Max. 200 Zeilen.
3. `[DEPRECATED]`-Sektion in MEMORY.md prüfen — gelistete Dateien im Repo suchen. Nutzer fragen ob löschen, dann Eintrag aus MEMORY.md entfernen.

Abschlussmeldung: "Schnell-Optimierung abgeschlossen. [Zusammenfassung]"

---

## Routine INTENSIV

Führe zuerst alle Schritte der SCHNELL-Routine durch, dann zusätzlich:

4. Alle `.jsx`/`.js` Dateien in `src/` auf ungenutzte Imports prüfen (Imports die im File nicht verwendet werden) → entfernen.
5. Komponenten und Hooks in `src/components/` und `src/hooks/` prüfen — welche werden nirgends importiert? Auflisten.
6. `⚠️ Keep in Sync`-Punkte aus MEMORY.md prüfen:
   - `GasteInfoModal.jsx` ↔ `InfoPage.jsx` — gleicher Inhalt?
   - `src/firebase.js` ↔ `firestore.rules` — ADMIN_KEY identisch?
   - Abweichungen melden.
7. Tote Assets in `public/images/` prüfen — Bilder die nirgends in `src/` oder `index.html` referenziert werden. Auflisten.
8. `npm run build` ausführen und Bundle-Größen ausgeben (gzip-Größen der Chunks).
9. VS-Code-Umgebung aufräumen:
   - Alte Plan-Dateien in `.claude/plans/` auflisten → Nutzer fragen ob löschen
   - Untracked Dateien in `git status` prüfen → Nutzer fragen ob stagen oder in `.gitignore` aufnehmen

Abschlussmeldung: "Intensiv-Optimierung abgeschlossen. [Zusammenfassung]"
