import { useState, useEffect, useRef } from 'react';

const IMAGES = [
  { src: './images/innen-5.jpg', alt: 'Essplatz mit offener Schiebetür zur Terrasse' },
  { src: './images/innen-2.jpg', alt: 'Wohnbereich mit Tresen und Essplatz' },
  { src: './images/innen-1.jpg', alt: 'Küche mit Tresen' },
  { src: './images/innen-4.jpg', alt: 'Essbereich mit Sitzlandschaft und Spielesammlung' },
  { src: './images/innen-3.jpg', alt: 'Essplatz am Panoramafenster' },
  { src: './images/innen-7.jpg', alt: 'Balkon nach Westen mit Blick aufs Meer' },
  { src: './images/innen-6.jpg', alt: 'Balkon nach Süden mit Blick in die Dünen' },
  { src: './images/interior-5.jpg', alt: 'Kerzenleuchter am Fenster bei Sonnenuntergang' },
  { src: './images/exterior-1.jpg', alt: 'Blick aus dem Wohnzimmerfenster zum Strand' },
  { src: './images/interior-1.jpg', alt: 'Das Haus von der Dünenseite' },
  { src: './images/exterior-3.jpg', alt: 'Sonnenuntergang über dem Meer' },
  { src: './images/exterior-2.jpg', alt: 'Strandaufgang in der Dämmerung' },
  { src: './images/exterior-8.jpg', alt: 'Strandkörbe am Abend' },
  { src: './images/exterior-4.jpg', alt: 'Dünen im Abendlicht' },
  { src: './images/exterior-5.jpg', alt: 'Dünenlandschaft' },
  { src: './images/interior-2.jpg', alt: 'Dünen bei aufziehendem Gewitter' },
  { src: './images/interior-4.jpg', alt: 'Dünensee' },
  { src: './images/exterior-7.jpg', alt: 'Milchstraße über den Dünen' },
  { src: './images/exterior-6.jpg', alt: 'Egmond aan Zee bei Nacht' },
  { src: './images/interior-3.jpg', alt: 'Strandaufgang bei Sonnenuntergang' },
];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (activeIndex === null) return;
    document.body.style.overflow = 'hidden';
    function handleKey(e) {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i + 1) % IMAGES.length);
      if (e.key === 'ArrowLeft') setActiveIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
    }
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [activeIndex]);

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null || activeIndex === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 40) return;
    if (diff > 0) {
      setActiveIndex((i) => (i + 1) % IMAGES.length);
    } else {
      setActiveIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
    }
    touchStartX.current = null;
  }

  return (
    <section id="galerie" className="px-6 pt-2 pb-4 md:px-12 lg:px-20 max-w-7xl mx-auto">

      <GalleryTile images={IMAGES} onOpen={setActiveIndex} />

      {/* Lightbox */}
      {activeIndex !== null && (
        <div
          className="lightbox-overlay animate-fade-in"
          role="dialog"
          aria-label="Galerie"
          onClick={() => setActiveIndex(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button onClick={() => setActiveIndex(null)} className="absolute top-5 right-5 text-white/80 hover:text-white text-3xl z-10 w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors" aria-label="Schließen">×</button>

          <button
            onClick={(e) => { e.stopPropagation(); setActiveIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl z-10 w-12 h-16 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Vorheriges Bild"
          >‹</button>

          <img
            key={activeIndex}
            src={IMAGES[activeIndex].src}
            alt={IMAGES[activeIndex].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); setActiveIndex((i) => (i + 1) % IMAGES.length); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl z-10 w-12 h-16 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Nächstes Bild"
          >›</button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {activeIndex + 1} / {IMAGES.length}
          </div>
        </div>
      )}
    </section>
  );
}

function GalleryTile({ images, onOpen }) {
  const [main, ...rest] = images;
  const thumbs = rest.slice(0, 4);

  return (
    <div className="flex flex-col gap-1.5">
      {/* Label */}
      <div className="flex items-center justify-between px-0.5">
        <span className="text-xs font-medium text-anthracite/70 uppercase tracking-widest">Galerie</span>
      </div>

      {/* 1 large + 2x2 thumbnails (Airbnb style) */}
      <button
        onClick={() => onOpen(0)}
        className="group relative rounded-xl overflow-hidden bg-offwhite border border-border hover:border-anthracite/20 transition-colors shadow-sm active:scale-[0.99]"
        aria-label={`Galerie öffnen — ${images.length} Fotos`}
      >
        <div className="grid grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-0.5 h-56 sm:h-72 lg:h-80">
          {/* Large image: left, full height */}
          <div className="row-span-2 overflow-hidden bg-stone/20">
            <img
              src={main.src}
              alt={main.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
              loading="lazy"
            />
          </div>
          {/* 4 thumbnails in 2x2 */}
          {thumbs.map((img) => (
            <div key={img.src} className="overflow-hidden bg-stone/20">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-anthracite/0 group-hover:bg-anthracite/30 transition-colors" />
        {/* Permanent photo count badge */}
        <div className="absolute bottom-2.5 right-2.5 bg-white/90 text-anthracite text-xs font-medium px-2.5 py-1 rounded-full shadow-sm pointer-events-none">
          Alle {images.length} Fotos
        </div>
      </button>
    </div>
  );
}
