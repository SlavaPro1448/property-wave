export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-8 sm:py-12">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Kontakt</h3>
            <address className="not-italic text-sm sm:text-base">
              <p>Hausverwaltung Natalie Frank</p>
              <p>Musterstraße 123</p>
              <p>12345 Musterstadt</p>
              <p className="mt-2">Tel: (0123) 456789</p>
              <p>Email: info@hausverwaltung-frank.de</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="#services" className="hover:text-white/80">
                  Dienstleistungen
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white/80">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white/80">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm sm:text-base">
              <li>
                <a href="/impressum" className="hover:text-white/80">
                  Impressum
                </a>
              </li>
              <li>
                <a href="/datenschutz" className="hover:text-white/80">
                  Datenschutz
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-white/10 text-center text-sm sm:text-base">
          <p>&copy; 2024 Hausverwaltung Natalie Frank. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};