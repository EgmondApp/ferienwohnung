import { useState, useEffect } from 'react';

/**
 * Image gallery with lightbox.
 * Place your images in public/images/ and list them here.
 */
const IMAGES = [
  { src: './images/gallery-1.jpg', alt: 'Wohnbereich' },
  { src: './images/gallery-2.jpg', alt: 'Schlafzimmer' },
  { src: './images/gallery-3.jpg', alt: 'Küche' },
  { src: './images/gallery-4.jpg', alt: 'Badezimmer' },
  { src: './images/gallery-5.jpg', alt: 'Terrasse' },
  { src: './images/gallery-6.jpg', alt: 'Umgebung' },
  { src: './images/gallery-7.jpg', alt: 'Garten' },
  { src: './images/gallery-8.jpg', alt: 'Ausblick' },
];

export default function Gallery() {
  const [lightboxIndex, setLightboxIndex] = useState(null);

  // Close lightbox on Escape
  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight' && lightboxIndex !== null) {
        setLightboxIndex((i) => (i + 1) % IMAGES.length);
      }
      if (e.key === 'ArrowLeft' && lightboxIndex !== null) {
        setLightboxIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
      }
    }
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [lightboxIndex]);

  return (
    <section id="galerie" className="px-6 py-16 md:px-12 lg:px-20 max-w-7xl mx-auto">
      <h2 className="font-serif text-2xl md:text-3xl text-anthracite mb-8">Eindrücke</h2>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {IMAGES.map((img, i) => (
          <button
            key={i}
            onClick={() => setLightboxIndex(i)}
            className="relative aspect-[4/3] overflow-hidden rounded group focus:outline-none focus:ring-2 focus:ring-blue"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-anthracite/0 group-hover:bg-anthracite/10 transition-colors" />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightboxIndex(null)}
        >
          {/* Close button */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 text-white/80 hover:text-white text-3xl z-10 w-10 h-10 flex items-center justify-center"
            aria-label="Schließen"
          >
            ×
          </button>

          {/* Previous */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i - 1 + IMAGES.length) % IMAGES.length);
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl z-10"
            aria-label="Vorheriges Bild"
          >
            ‹
          </button>

          {/* Image */}
          <img
            src={IMAGES[lightboxIndex].src}
            alt={IMAGES[lightboxIndex].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((i) => (i + 1) % IMAGES.length);
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/60 hover:text-white text-4xl z-10"
            aria-label="Nächstes Bild"
          >
            ›
          </button>

          {/* Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            {lightboxIndex + 1} / {IMAGES.length}
          </div>
        </div>
      )}
    </section>
  );
}
