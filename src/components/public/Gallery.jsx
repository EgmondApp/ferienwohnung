import { useState, useEffect, useRef } from 'react';

const GALLERIES = [
  {
    id: 'innen',
    label: 'Innen',
    images: [
      { src: './images/interior-1.jpg', alt: 'Wohnbereich' },
      { src: './images/interior-2.jpg', alt: 'Schlafzimmer' },
      { src: './images/interior-3.jpg', alt: 'Küche' },
      { src: './images/interior-4.jpg', alt: 'Badezimmer' },
      { src: './images/interior-5.jpg', alt: 'Essbereich' },
      { src: './images/interior-6.jpg', alt: 'Sitzlandschaft' },
      { src: './images/interior-7.jpg', alt: 'Schlafzimmer 2' },
      { src: './images/interior-8.jpg', alt: 'Detail' },
    ],
  },
  {
    id: 'aussen',
    label: 'Außen',
    images: [
      { src: './images/exterior-1.jpg', alt: 'Balkon' },
      { src: './images/exterior-2.jpg', alt: 'Terrasse' },
      { src: './images/exterior-3.jpg', alt: 'Strand' },
      { src: './images/exterior-4.jpg', alt: 'Dünen' },
      { src: './images/exterior-5.jpg', alt: 'Meer' },
      { src: './images/exterior-6.jpg', alt: 'Sonnenuntergang' },
      { src: './images/exterior-7.jpg', alt: 'Dorf' },
      { src: './images/exterior-8.jpg', alt: 'Umgebung' },
    ],
  },
];

export default function Gallery() {
  const [activeGallery, setActiveGallery] = useState(null);
  const touchStartX = useRef(null);

  useEffect(() => {
    if (!activeGallery) return;
    document.body.style.overflow = 'hidden';
    function handleKey(e) {
      const imgs = activeGallery.gallery.images;
      if (e.key === 'Escape') setActiveGallery(null);
      if (e.key === 'ArrowRight') setActiveGallery((a) => a ? { ...a, index: (a.index + 1) % imgs.length } : null);
      if (e.key === 'ArrowLeft') setActiveGallery((a) => a ? { ...a, index: (a.index - 1 + imgs.length) % imgs.length } : null);
    }
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKey);
    };
  }, [activeGallery]);

  function handleTouchStart(e) {
    touchStartX.current = e.touches[0].clientX;
  }

  function handleTouchEnd(e) {
    if (touchStartX.current === null || !activeGallery) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) < 40) return;
    const imgs = activeGallery.gallery.images;
    if (diff > 0) {
      setActiveGallery((a) => a ? { ...a, index: (a.index + 1) % imgs.length } : null);
    } else {
      setActiveGallery((a) => a ? { ...a, index: (a.index - 1 + imgs.length) % imgs.length } : null);
    }
    touchStartX.current = null;
  }

  return (
    <section id="galerie" className="px-6 pt-2 pb-4 md:px-12 lg:px-20 max-w-7xl mx-auto">

      {/* 2 Kacheln */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {GALLERIES.map((gallery) => (
          <GalleryTile
            key={gallery.id}
            gallery={gallery}
            onOpen={(index) => setActiveGallery({ gallery, index })}
          />
        ))}
      </div>

      {/* Lightbox */}
      {activeGallery && (
        <div
          className="lightbox-overlay animate-fade-in"
          role="dialog"
          aria-label={`${activeGallery.gallery.label} Galerie`}
          onClick={() => setActiveGallery(null)}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button onClick={() => setActiveGallery(null)} className="absolute top-5 right-5 text-white/80 hover:text-white text-3xl z-10 w-12 h-12 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors" aria-label="Schließen">×</button>

          <button
            onClick={(e) => { e.stopPropagation(); setActiveGallery((a) => a ? { ...a, index: (a.index - 1 + a.gallery.images.length) % a.gallery.images.length } : null); }}
            className="absolute left-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl z-10 w-12 h-16 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Vorheriges Bild"
          >‹</button>

          <img
            key={activeGallery.index}
            src={activeGallery.gallery.images[activeGallery.index].src}
            alt={activeGallery.gallery.images[activeGallery.index].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded shadow-2xl animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            onClick={(e) => { e.stopPropagation(); setActiveGallery((a) => a ? { ...a, index: (a.index + 1) % a.gallery.images.length } : null); }}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl z-10 w-12 h-16 flex items-center justify-center rounded-lg hover:bg-white/10 transition-colors"
            aria-label="Nächstes Bild"
          >›</button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {activeGallery.gallery.label} · {activeGallery.index + 1} / {activeGallery.gallery.images.length}
          </div>
        </div>
      )}
    </section>
  );
}

function GalleryTile({ gallery, onOpen }) {
  const [main, ...rest] = gallery.images;
  const thumbs = rest.slice(0, 4);

  return (
    <div className="flex flex-col gap-1.5">
      {/* Label */}
      <div className="flex items-center justify-between px-0.5">
        <span className="text-xs font-medium text-anthracite/70 uppercase tracking-widest">{gallery.label}</span>
      </div>

      {/* 1 large + 2x2 thumbnails (Airbnb style) */}
      <button
        onClick={() => onOpen(0)}
        className="group relative rounded-xl overflow-hidden bg-offwhite border border-border hover:border-anthracite/20 transition-colors shadow-sm active:scale-[0.99]"
        aria-label={`${gallery.label} Galerie öffnen — ${gallery.images.length} Fotos`}
      >
        <div className="grid grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-0.5 h-48 sm:h-56">
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
          {thumbs.map((img, i) => (
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
          Alle {gallery.images.length} Fotos
        </div>
      </button>
    </div>
  );
}
