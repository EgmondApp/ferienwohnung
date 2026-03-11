Du aktualisierst die Datei MEMORY.md nach einer Entwicklungs-Session mit allen relevanten Erkenntnissen.

VORBEREITUNG:
Lies zuerst `git log --oneline -5` und `git diff HEAD~1` um sicherzugehen dass alle Änderungen dieser Session dokumentiert werden – nichts vergessen.

STRUKTUR (beibehalten):
1. ⚡ Quick Facts (5 wichtigste Fakten – aktualisieren)
2. Status (Phase, Last Updated, Known Issues, Next Steps)
3. Stack & Deployment
4. Architektur (Schlüsseldateien)
5. Design System
6. Firestore & Security
7. ⚠️ Keep in Sync (kritische Sync-Punkte)
8. Wichtige Entscheidungen & Gründe
9. [DEPRECATED]
10. NRW Schulferien & Daten

ANWEISUNGEN:

A) QUICK FACTS aktualisieren
   - Live-URL, GitHub-Link, Stack – immer aktuell halten
   - Wenn sich Major-Change: hier erwähnen

B) STATUS-Sektion
   - "Last Updated: [DATUM]" setzen
   - "Next Steps" basierend auf Session updaten
   - Neue "Known Issues" hinzufügen, gelöste entfernen
   - Phase ("MVP" → "Beta" → "Production") nur wenn Change

C) ARCHITEKTUR & CODE
   - Neue Komponenten hinzufügen (mit Aufgabe)
   - Gelöschte Dateien entfernen
   - Bug-Fixes/Performance-Änderungen dokumentieren
   - Firestore-Schema-Änderungen updaten

D) DECISIONS LOG
   - Neue Entscheidungen WARUM erklären, nicht nur WAS
   - Format: "**[Feature/Decision]:** [Problem] → [Lösung] → [Grund]"
   - Alte Decisions behalten, neue hinzufügen

E) KEEP IN SYNC
   - Neue Sync-Punkte hinzufügen (z.B. neue Secrets, neue Dependencies)
   - Format: "- `Datei A` ↔ `Datei B` (Grund)"

F) DEPRECATED
   - Nur hinzufügen wenn wirklich Cleanup ansteht
   - Format: "- `Datei/Code` – [Grund, warum deprecated]"

KOMPAKT HALTEN:
- Max. 250 Zeilen gesamt
- Keine Wiederholungen
- Nur relevante Details (Code-Snippets nur wenn essentiell)
- Verlinken statt erklären, wo möglich

REPORT AM ENDE:
Nach dem Update, schreib kurz:
- Was wurde geändert? (Neue Features, Bugs behoben, Decisions getroffen)
- Was ist neu dokumentiert?
- Gibt es Warnings/Blockers für nächste Session?

Beispiel:
"### Session-Update
✅ Gallery Lightbox Swipe implementiert
✅ Mobile DatePicker Performance verbessert (Touch-Handler optimiert)
⚠️ Firestore Rules noch nicht deployed – vor nächster Session checken
→ Nächste Priority: Admin Dashboard Belegungsliste sortieren
"
