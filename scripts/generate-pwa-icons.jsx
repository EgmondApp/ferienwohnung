/**
 * PWA Icon Generator für Photoshop
 * --------------------------------
 * Erstellt aus dem aktiven Dokument drei PWA-Icons:
 *   icon-192.png        192×192 px  (Android Homescreen)
 *   icon-512.png        512×512 px  (Splash Screen)
 *   icon-maskable.png   512×512 px  (Adaptive Icons, Safe Zone ~80%)
 *
 * Verwendung:
 *   1. Quellbild in Photoshop öffnen (quadratisch empfohlen)
 *   2. Hintergrundfarbe im Toolbox auf die Icon-Hintergrundfarbe setzen
 *      (wird beim maskable-Icon für den Rand verwendet)
 *   3. Dieses Script ausführen: Datei → Skripten → Durchsuchen → generate-pwa-icons.jsx
 *
 * Ausgabe: alle drei Dateien im selben Ordner wie das Quelldokument.
 */

#target photoshop

(function () {

    // --- Quell-Dokument prüfen ---
    if (!app.documents.length) {
        alert("Kein Dokument geöffnet. Bitte zuerst das Quellbild öffnen.");
        return;
    }

    var src = app.activeDocument;
    var saveFolder = src.path;

    if (!saveFolder || saveFolder.toString() === "") {
        alert("Bitte das Dokument zuerst speichern, damit der Ausgabepfad bekannt ist.");
        return;
    }

    // --- Hilfsfunktionen ---

    function saveAsPNG(doc, filePath) {
        var opts = new PNGSaveOptions();
        opts.compression = 6;
        opts.interlaced = false;
        doc.saveAs(new File(filePath), opts, true, Extension.LOWERCASE);
    }

    function resizeImage(doc, px) {
        doc.resizeImage(
            new UnitValue(px, "px"),
            new UnitValue(px, "px"),
            72,
            ResampleMethod.BICUBICSHARPER
        );
    }

    function resizeCanvas(doc, px) {
        doc.resizeCanvas(
            new UnitValue(px, "px"),
            new UnitValue(px, "px"),
            AnchorPosition.MIDDLECENTER
        );
    }

    // --- 1. icon-192.png ---
    var doc192 = src.duplicate("icon-192-temp", true);
    app.activeDocument = doc192;
    doc192.flatten();
    resizeImage(doc192, 192);
    saveAsPNG(doc192, saveFolder + "/icon-192.png");
    doc192.close(SaveOptions.DONOTSAVECHANGES);

    // --- 2. icon-512.png ---
    var doc512 = src.duplicate("icon-512-temp", true);
    app.activeDocument = doc512;
    doc512.flatten();
    resizeImage(doc512, 512);
    saveAsPNG(doc512, saveFolder + "/icon-512.png");
    doc512.close(SaveOptions.DONOTSAVECHANGES);

    // --- 3. icon-maskable.png ---
    // Motiv auf 80% von 512 = 410 px skalieren, dann Canvas auf 512 px erweitern.
    // Der Rand (~51 px ringsum) wird mit der aktuellen Hintergrundfarbe gefüllt.
    var FULL   = 512;
    var MOTIF  = Math.round(FULL * 0.8); // 410 px

    var docMask = src.duplicate("icon-maskable-temp", true);
    app.activeDocument = docMask;
    docMask.flatten();
    resizeImage(docMask, MOTIF);        // Motiv → 410×410
    resizeCanvas(docMask, FULL);        // Canvas → 512×512 (Rand = Hintergrundfarbe)
    docMask.flatten();                  // Rand einbrennen
    saveAsPNG(docMask, saveFolder + "/icon-maskable.png");
    docMask.close(SaveOptions.DONOTSAVECHANGES);

    // --- Fertig ---
    app.activeDocument = src;
    alert(
        "Fertig! 3 Icons gespeichert in:\n" + saveFolder + "\n\n" +
        "  icon-192.png        192×192 px\n" +
        "  icon-512.png        512×512 px\n" +
        "  icon-maskable.png   512×512 px (Safe Zone 80%)"
    );

}());
