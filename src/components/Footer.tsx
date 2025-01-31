export const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <address className="not-italic">
              <p>123 Property Street</p>
              <p>City, State 12345</p>
              <p className="mt-2">Phone: (123) 456-7890</p>
              <p>Email: info@property.com</p>
            </address>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#services" className="hover:text-white/80">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white/80">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white/80">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Business Hours</h3>
            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p>Saturday: 10:00 AM - 2:00 PM</p>
            <p>Sunday: Closed</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p>&copy; 2024 Property Management. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};