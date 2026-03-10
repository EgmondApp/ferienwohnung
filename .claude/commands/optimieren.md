Frage den Nutzer zuerst:

"Welche Optimierung soll ich durchführen?

**[S] Schnell** – MEMORY.md komprimieren, veraltete Docs prüfen, console.logs entfernen (~2 min)
**[I] Intensiv** – Alles von Schnell + ungenutzte Imports/Dateien finden, .gitignore prüfen, Bundle-Größe analysieren (~5 min)

Bitte antworte mit S oder I."

Warte auf die Antwort, dann führe die passende Routine aus:

---

## Routine SCHNELL

1. MEMORY.md lesen und komprimieren: veraltete, redundante oder überholte Einträge entfernen. Kerninfos knapp halten. Max. 200 Zeilen.
2. PROJECT_STATUS.md, DEV_CONTEXT.md, SESSION_SUMMARY.md im Root prüfen – sind sie noch aktuell und nützlich? Wenn veraltet, Nutzer fragen ob löschen.
3. Alle console.log/console.warn/console.error in src/ suchen und auflisten. Nutzer fragen ob entfernen.

Abschlussmeldung: "Schnell-Optimierung abgeschlossen. [Zusammenfassung was gemacht wurde]"

---

## Routine INTENSIV

Führe zuerst alle Schritte der SCHNELL-Routine durch, dann zusätzlich:

4. Alle .jsx/.js Dateien in src/ auf ungenutzte Imports prüfen (Imports die im File nicht verwendet werden).
5. Komponenten und Hooks in src/components/ und src/hooks/ prüfen – welche werden nirgends importiert?
6. .gitignore lesen und prüfen ob node_modules/.package-lock.json eingetragen ist. Falls nicht, eintragen.
7. `npm run build` ausführen und Bundle-Größe ausgeben (gzip-Größen der Chunks).

Abschlussmeldung: "Intensiv-Optimierung abgeschlossen. [Zusammenfassung was gemacht wurde]"
