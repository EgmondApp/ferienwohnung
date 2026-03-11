Beende die aktuelle Session sauber. Führe folgende Schritte der Reihe nach aus:

1. **MEMORY.md aktualisieren** (wie /save-context):
   - Lies `git log --oneline -5` und `git diff HEAD~1` um alle Änderungen dieser Session zu erfassen
   - Aktualisiere MEMORY.md nach der Struktur aus `.claude/commands/save-context.md`
   - Halte es kompakt (max. 250 Zeilen)

2. **Auf main committen**:
   - Füge alle geänderten Dateien zum Commit hinzu
   - Erstelle einen aussagekräftigen Commit mit Zusammenfassung der Session-Änderungen
   - Push auf `origin main`

3. **Deployen**:
   - Führe `npm run deploy` aus
   - Berichte kurz über das Ergebnis

4. **Session-Report** ausgeben:
   - Was wurde geändert/gebaut?
   - Was wurde deployed?
   - Gibt es Warnings/Blockers für die nächste Session?
   - Nächste Priorität
