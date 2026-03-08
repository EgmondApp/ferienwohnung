import { Link } from 'react-router-dom';

/**
 * Full-width hero with text overlay.
 * Replace the image path with your actual hero image.
 */
export default function Header() {
  return (
    <header className="relative w-full h-[70vh] min-h-[400px] max-h-[700px] overflow-hidden">
      {/* Hero image */}
      <img
        src="./images/hero.jpg"
        alt="Ferienwohnung"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-anthracite/70 via-anthracite/30 to-anthracite/10" />

      {/* Navigation bar */}
      <nav className="absolute top-0 left-0 right-0 z-10 flex items-center justify-between px-6 py-4 md:px-12">
        <span className="font-serif text-white text-lg tracking-wide">Egmond aan Zee</span>
        <div className="flex gap-6 text-sm text-white/80">
          <a href="#galerie" className="hover:text-white transition-colors">Galerie</a>
          <a href="#kalender" className="hover:text-white transition-colors">Verfügbarkeit</a>
          <a href="#anfrage" className="hover:text-white transition-colors">Anfrage</a>
          <Link to="/admin" className="hover:text-white transition-colors opacity-50 hover:opacity-80">
            Admin
          </Link>
        </div>
      </nav>

      {/* Hero text */}
      <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-12 md:px-12 md:pb-16">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-3 leading-tight">
          Egmond aan Zee
          <br />
          <span className="text-gold">am See</span>
        </h1>
        <p className="text-white/80 text-lg md:text-xl max-w-xl font-light">
          Wind, Wellen und Dünen
        </p>
        <a
          href="#anfrage"
          className="inline-block mt-6 px-6 py-3 bg-primary hover:bg-primary-dark text-white text-sm font-medium rounded transition-colors"
        >
          Verfügbarkeit prüfen
        </a>
      </div>
    </header>
  );
}
