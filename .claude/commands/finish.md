Beende die aktuelle Session sauber. Führe folgende Schritte der Reihe nach aus:

## 0. Code-Cleanup

- Suche alle `console.log`, `console.warn`, `console.error` in `src/` → entferne sie (außer bewusst gesetzte Error-Handler)
- Prüfe alle `.jsx`/`.js` in `src/` auf ungenutzte Imports → entferne sie
- Lies die `[DEPRECATED]`-Sektion in MEMORY.md → frage den Nutzer ob die gelisteten Dateien jetzt gelöscht werden sollen

## 1. Build prüfen

- `npm run build` ausführen
- Bei Fehler: **STOPP** — Problem melden und beheben, erst dann weitermachen
- Bei Erfolg: Bundle-Größen kurz ausgeben

## 2. MEMORY.md aktualisieren (wie /save-context)

- `git log --oneline -5` und `git diff HEAD~1` lesen um alle Änderungen der Session zu erfassen
- MEMORY.md nach der Struktur aus `.claude/commands/save-context.md` aktualisieren
- Kompakt halten (max. 250 Zeilen), veraltete/redundante Einträge entfernen

## 3. R:\Claude\ferienwohnung\ Docs synchronisieren (nur bei wesentlichen Änderungen)

- **Architektur-Änderungen** (neue Komponenten, Hooks, Struktur): ARCHITECTURE.md updaten
- **Deploy-Änderungen** (neue Scripts, Prozess): DEPLOYMENT.md updaten
- **Neue Probleme oder Sync-Regeln**: TROUBLESHOOTING.md updaten
- **Projektdaten** (URL, Stack, Beschreibung): README.md updaten
- Nur updaten wenn sich etwas Wesentliches geändert hat – nicht bei reinen Bugfixes/UI-Tweaks

## 4. Committen + Pushen

- `git status` prüfen — wenn keine Änderungen: diesen Schritt überspringen
- Alle geänderten Dateien stagen (keine Secrets, keine .env)
- Aussagekräftigen Commit erstellen mit Zusammenfassung der Session
- `git push origin main`

## 5. Deployen

- `npm run deploy` ausführen
- Kurz über Ergebnis berichten

## 6. Session-Report

Gib am Ende eine kompakte Zusammenfassung aus:
- Was wurde geändert/gebaut?
- Was wurde deployed?
- Gibt es Warnings/Blockers für die nächste Session?
- Nächste Priorität
