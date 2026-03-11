import { useEffect } from 'react';
import ShareButton from '../shared/ShareButton';

export default function GasteInfoModal({ isOpen, onClose }) {
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const baseUrl = window.location.href.split('#')[0];

  return (
    <div className="fixed inset-0 z-50 bg-anthracite/60 flex items-center justify-center p-4 animate-fade-in" onClick={onClose}>
      <div className="bg-warm rounded-2xl shadow-2xl w-full max-w-2xl max-h-[92vh] flex flex-col animate-modal-in" role="dialog" aria-label="Informationen" onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
          <span className="font-serif text-lg text-anthracite">Zu Wohnung und Anreise</span>
          <div className="flex items-center gap-4">
            <a href={`${baseUrl}#/info`} target="_blank" rel="noopener noreferrer" className="px-3 py-1 text-xs font-medium rounded-full border border-border bg-offwhite hover:bg-warm hover:border-anthracite/20 text-anthracite/60 hover:text-anthracite transition-colors">
              Drucken / Vollansicht ↗
            </a>
            <button onClick={onClose} className="text-anthracite/40 hover:text-anthracite text-2xl leading-none w-8 h-8 flex items-center justify-center" aria-label="Schließen">×</button>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-auto px-6 py-5 space-y-4 flex-1">

          <Card icon="📍" title="Adresse" action={<ShareButton />}>
            <p className="font-medium">Kennedyboulevard 604</p>
            <p>1931 XM Egmond aan Zee</p>
            <a href="https://maps.google.com/?q=Kennedyboulevard+604,+1931+XM+Egmond+aan+Zee" target="_blank" rel="noopener noreferrer"
              className="inline-block mt-2 text-sm text-primary hover:underline">
              🗺️ In Google Maps öffnen
            </a>
          </Card>

          <Card icon="🚗" title="Anreise & Eingang">
            <InfoRow icon="🅿️" label="Parken">Am Südende des Innenhofs. Vorletzte Garage rechts – Nummer&nbsp;21.</InfoRow>
            <InfoRow icon="🚪" label="Eingang">Eingangstür links nahe der Garage. Dann 2.&nbsp;Etage links – Türschild „Kimmeskamp".</InfoRow>
          </Card>

          <Card icon="🏠" title="Zur Wohnung">
            <InfoRow icon="🔄" label="Check-in / Check-out">Wechsel ab 12 Uhr (oder nach Absprache). Abreise bis 12 Uhr, Anreise ab 12 Uhr.</InfoRow>
            <InfoRow icon="🧺" label="Bettzeug">Bettzeug und Handtücher nicht vergessen.</InfoRow>
            <InfoRow icon="🛋️" label="Betten">Ausziehbetten unter der Sitzlandschaft. Decken &amp; Kissen in den Bettkästen im Schlafzimmer.</InfoRow>
            <InfoRow icon="☀️" label="Markise">Elektrisch – Stecker an der Balkontür anschalten. Fernbedienung im Regal ganz links. Bei Windgefahr unbedingt einfahren!</InfoRow>
            <InfoRow icon="🗑️" label="Müll">Abfallpass im Flurregal. 30L-Sack ca.&nbsp;0,55&nbsp;€ · 60L-Sack ca.&nbsp;1,10&nbsp;€. Papier, Glas, PMD kostenfrei. Die Kosten werden nicht weiterberechnet – wir freuen uns trotzdem, wenn ihr sparsam damit umgeht.</InfoRow>
            <InfoRow icon="🧹" label="Endreinigung">Gereinigt übergeben oder ca.&nbsp;70&nbsp;€ über die Hausmeister buchen (Stand 2025).</InfoRow>
          </Card>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Card icon="✅" title="Bei Ankunft">
              <Checklist items={[
                { icon: '🔌', text: 'Kühlschränke einstecken' },
                { icon: '🔥', text: 'Gas aufdrehen – rechts neben dem Herd' },
                { icon: '🌡️', text: 'Heizung auf Temperatur' },
                { icon: '💧', text: 'Wasserhahn Spülmaschine aufdrehen' },
              ]} />
            </Card>
            <Card icon="🚪" title="Bei Abfahrt">
              <Checklist items={[
                { icon: '🔌', text: 'Kühlschränke ausstecken & öffnen' },
                { icon: '💧', text: 'Wasserhahn Spülmaschine zudrehen' },
                { icon: '❄️', text: 'Heizung auf Schneeflocke' },
                { icon: '🔥', text: 'Gas ausschalten' },
                { icon: '🚪', text: 'Zwischentür zuziehen' },
                { icon: '🚿', text: 'Bad & WC offen lassen' },
              ]} />
            </Card>
          </div>

        </div>
      </div>
    </div>
  );
}

function Card({ icon, title, children, action }) {
  return (
    <div className="bg-offwhite border border-border rounded-xl p-4">
      <h3 className="font-serif text-base text-anthracite mb-2 flex items-center gap-2">
        <span>{icon}</span>
        <span className="flex-1">{title}</span>
        {action}
      </h3>
      <div className="space-y-2 text-sm text-anthracite/80 leading-relaxed">{children}</div>
    </div>
  );
}

function InfoRow({ icon, label, children }) {
  return (
    <div className="flex gap-2">
      <span className="shrink-0 mt-0.5">{icon}</span>
      <div><span className="font-medium text-anthracite">{label}: </span>{children}</div>
    </div>
  );
}

function Checklist({ items }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item) => (
        <li key={item.text} className="flex items-start gap-2">
          <span className="shrink-0">{item.icon}</span>
          <span>{item.text}</span>
        </li>
      ))}
    </ul>
  );
}
