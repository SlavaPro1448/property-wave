export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Kontakt</h3>
            <address className="not-italic">
              <p>Hausverwaltung Natalie Frank</p>
              <p>Musterstraße 123</p>
              <p>12345 Musterstadt</p>
              <p className="mt-2">Tel: (0123) 456789</p>
              <p>Email: info@hausverwaltung-frank.de</p>
            </address>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
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
            <h3 className="text-xl font-bold mb-4">Rechtliches</h3>
            <ul className="space-y-2">
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
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p>&copy; 2024 Hausverwaltung Natalie Frank. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
};