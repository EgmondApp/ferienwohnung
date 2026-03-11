import { useState } from 'react';

const SHARE_URL = 'https://EgmondApp.github.io/ferienwohnung/';

const IconShare = () => (
  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15M9 12l3 3m0 0 3-3m-3 3V2.25" />
  </svg>
);

const IconCheck = () => (
  <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
);

export default function ShareButton() {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Ferienwohnung Egmond aan Zee',
          text: 'Ferienwohnung direkt am Meer — Egmond aan Zee, Niederlande',
          url: SHARE_URL,
        });
      } catch {
        // user cancelled or error — ignore
      }
    } else {
      try {
        await navigator.clipboard.writeText(SHARE_URL);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // clipboard not available — ignore
      }
    }
  }

  return (
    <button
      onClick={handleShare}
      className={`flex items-center gap-1.5 px-3 py-1 text-xs font-medium rounded-full border transition-colors
        ${copied
          ? 'border-gold/40 bg-offwhite text-gold'
          : 'border-border bg-offwhite hover:bg-warm hover:border-anthracite/20 text-anthracite/60 hover:text-anthracite'
        }`}
      aria-label="Seite teilen"
    >
      {copied ? <IconCheck /> : <IconShare />}
      {copied ? 'Link kopiert!' : 'Teilen'}
    </button>
  );
}
