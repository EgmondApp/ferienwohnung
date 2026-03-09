import { useState, useEffect } from 'react';

const SLIDES = [
  { src: './images/hero.jpg',        alt: 'Blick auf den Strand von Egmond aan Zee', position: 'center 75%' },
  { src: './images/exterior-1.jpg',  alt: 'Balkon mit Meerblick',                    position: 'center 50%' },
  { src: './images/exterior-8.jpg',  alt: 'Umgebung Egmond aan Zee',                 position: 'center 50%' },
  { src: './images/interior-2.jpg',  alt: 'Schlafzimmer',                            position: 'center 40%' },
];

export default function Header() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="relative w-full h-[42vh] min-h-[220px] overflow-hidden">
      {SLIDES.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ objectPosition: slide.position, opacity: i === active ? 1 : 0 }}
        />
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-anthracite/75 via-anthracite/20 to-transparent" />

      {/* Title */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-8 md:px-12">
        <h1 className="font-serif text-3xl md:text-5xl text-white drop-shadow-lg">
          Egmond aan Zee
        </h1>
        <p className="text-white/75 text-sm md:text-base mt-2 drop-shadow">
          Ferienwohnung direkt am Meer
        </p>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-4 right-6 z-10 flex gap-1.5">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            aria-label={`Bild ${i + 1}`}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              i === active ? 'bg-white w-4' : 'bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>
    </header>
  );
}
