export default function InfoPage() {
  return (
    <div className="min-h-screen bg-warm print:bg-white">
      {/* Header */}
      <div className="bg-anthracite text-white px-6 py-5 no-print">
        <div className="max-w-2xl mx-auto flex items-center justify-between">
          <span className="font-serif text-lg">Egmond aan Zee — Informationen</span>
          <div className="flex gap-4 text-sm text-white/60">
            <button onClick={() => window.print()} className="hover:text-white transition-colors">
              Drucken
            </button>
            <a href="#/" className="hover:text-white transition-colors">← Zur Startseite</a>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10 space-y-6 print:py-4 print:space-y-4">

        {/* Titel */}
        <div className="print:mb-6">
          <h1 className="font-serif text-3xl text-anthracite">Zu Wohnung und Anreise</h1>
          <p className="text-anthracite/60 mt-2 text-sm leading-relaxed">Alle Infos für Euren Aufenthalt auf einen Blick.</p>
        </div>

        {/* Die Wohnung */}
        <Card icon="🏡" title="Die Wohnung">
          <p>
            Die Ferienwohnung liegt in der <strong>2.&nbsp;Etage</strong> des Hauses am Kennedyboulevard und bietet Platz für bis zu <strong>4&nbsp;Personen</strong>.
          </p>
          <InfoRow icon="🛏️" label="Schlafzimmer">
            1 Schlafzimmer mit 2 Einzelbetten. Im großen Wohnzimmer befinden sich zwei weitere <strong>Ausziehbetten</strong> unter der Sitzlandschaft — Decken &amp; Kissen in den Bettkästen.
          </InfoRow>
          <InfoRow icon="☀️" label="Balkon">
            Der <strong>Südbalkon</strong> bietet einen unverbauten Blick in die Dünen. Nach Westen geht der Blick direkt aufs Meer. Die elektrische Markise lässt sich mit der Fernbedienung (Regal links) ausfahren — Stecker an der Balkontür anschalten.
          </InfoRow>
          <InfoRow icon="📐" label="Lage">
            2.&nbsp;Etage, Eingang links nahe der Garage — Türschild „Kimmeskamp".
          </InfoRow>
        </Card>

        {/* Adresse */}
        <Card icon="📍" title="Adresse">
          <p className="font-medium">Kennedyboulevard 604</p>
          <p>1931 XM Egmond aan Zee</p>
          <a
            href="https://maps.google.com/?q=Kennedyboulevard+604,+1931+XM+Egmond+aan+Zee"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 text-sm text-primary hover:underline no-print"
          >
            🗺️ In Google Maps öffnen
          </a>
          <p className="print-only hidden text-xs mt-1 text-anthracite/60">
            maps.google.com → Kennedyboulevard 604, Egmond aan Zee
          </p>
        </Card>

        {/* Anreise & Eingang */}
        <Card icon="🚗" title="Anreise & Eingang">
          <InfoRow icon="🅿️" label="Parken">
            Am Südende des Innenhofs. Vorletzte Garage rechts – Nummer&nbsp;21.
          </InfoRow>
          <InfoRow icon="🚪" label="Eingang">
            Eingangstür links nahe der Garage. Dann 2.&nbsp;Etage links – Türschild „Kimmeskamp".
          </InfoRow>
        </Card>

        {/* Zur Wohnung */}
        <Card icon="🏠" title="Zur Wohnung">
          <InfoRow icon="🔄" label="Check-in / Check-out">
            Wechsel ab 12 Uhr (oder nach Absprache). Abreise bis 12 Uhr, Anreise ab 12 Uhr – so ist ein Mieterwechsel am selben Tag möglich.
          </InfoRow>
          <InfoRow icon="🧺" label="Bettzeug">
            Bettzeug und Handtücher nicht vergessen.
          </InfoRow>
          <InfoRow icon="☀️" label="Markise">
            Elektrisch – Stecker an der Balkontür anschalten. Fernbedienung im Regal der Sitzlandschaft ganz links. Bei Windgefahr unbedingt einfahren!
          </InfoRow>
          <InfoRow icon="🗑️" label="Müll">
            Für den Restmüll den Abfallpass im Flurregal nutzen. Die Gebühren übernehmen wir – achtet bitte dennoch auf die Kosten pro Einwurf: 30L-Sack ca.&nbsp;0,55&nbsp;€ · 60L-Sack ca.&nbsp;1,10&nbsp;€. Papier, Glas und Plastik (PMD) an den Sammelstellen kostenfrei.
          </InfoRow>
          <InfoRow icon="🧹" label="Endreinigung">
            Bitte die Wohnung gereinigt übergeben – so wie Ihr sie gerne vorfinden würdet. Eine Endreinigung kann für ca.&nbsp;70&nbsp;€ (Stand 2025) über die Hausmeister dazu gebucht werden.
          </InfoRow>
        </Card>

        {/* Bei Ankunft */}
        <Card icon="✅" title="Bei Ankunft">
          <Checklist items={[
            { icon: '🔌', text: 'Kühlschränke einstecken' },
            { icon: '🔥', text: 'Gas aufdrehen – rechts neben dem Herd' },
            { icon: '🌡️', text: 'Heizung auf Temperatur' },
            { icon: '💧', text: 'Wasserhahn für Spülmaschine aufdrehen – hinter dem Kühlschrank' },
          ]} />
        </Card>

        {/* Bei Abfahrt */}
        <Card icon="🚪" title="Bei Abfahrt">
          <Checklist items={[
            { icon: '🔌', text: 'Kühlschränke ausstecken & öffnen' },
            { icon: '💧', text: 'Wasserhahn für Spülmaschine zudrehen' },
            { icon: '❄️', text: 'Heizung auf Schneeflocke' },
            { icon: '🔥', text: 'Gas ausschalten' },
            { icon: '🚪', text: 'Zwischentür zuziehen' },
            { icon: '🚿', text: 'Bad & WC offen lassen' },
          ]} />
        </Card>

        {/* Footer */}
        <p className="text-center text-xs text-anthracite/40 pt-4 no-print">
          Fragen? Einfach melden — wir helfen gerne.
        </p>
      </div>
    </div>
  );
}

function Card({ icon, title, children }) {
  return (
    <div className="bg-offwhite border border-border rounded-xl p-5 print:border-anthracite/20 print:rounded-none print:border print:p-3">
      <h2 className="font-serif text-lg text-anthracite mb-3 flex items-center gap-2">
        <span>{icon}</span> {title}
      </h2>
      <div className="space-y-3 text-sm text-anthracite/80 leading-relaxed">
        {children}
      </div>
    </div>
  );
}

function InfoRow({ icon, label, children }) {
  return (
    <div className="flex gap-3">
      <span className="text-base shrink-0 mt-0.5">{icon}</span>
      <div>
        <span className="font-medium text-anthracite">{label}: </span>
        {children}
      </div>
    </div>
  );
}

function Checklist({ items }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3">
          <span className="text-base shrink-0">{item.icon}</span>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}
