export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-offwhite mt-4">
      <div className="max-w-7xl mx-auto px-6 py-5 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-anthracite/50">
        <span className="font-serif text-anthracite/70">Egmond aan Zee</span>
        <a href="mailto:kilian.kimmeskamp@outlook.com" className="hover:text-anthracite transition-colors" aria-label="E-Mail Kontakt">
          Kontakt
        </a>
        <span>© {year}</span>
        <a href="#/admin" className="text-anthracite/20 hover:text-anthracite/50 transition-colors text-xs">
          Admin
        </a>
      </div>
    </footer>
  );
}
