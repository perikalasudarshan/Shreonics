import { Outlet, Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../../assets/IMG_20260105_182409.png";

export function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/products", label: "Products" },
    { path: "/research", label: "R&D" },
    { path: "/services", label: "Services" },
    { path: "/about", label: "About" },
    { path: "/why-choose-us", label: "Why Us" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Skip to main content link for accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-[#00a859] text-white px-4 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      {/* Header */}
      <header className="bg-white shadow-md sticky top-0 z-50" role="banner">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3" aria-label="Shreonics Solutions - Go to homepage">
              <img src={logo} alt="Shreonics Solutions Logo" className="h-16 w-auto" />
              <span className="text-xl font-bold bg-gradient-to-r from-[#00a859] to-[#0055a5] bg-clip-text text-transparent hidden sm:inline">
                Shreonics Solutions
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1" role="navigation" aria-label="Main navigation">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#00a859] focus:ring-offset-2 ${
                    isActive(link.path)
                      ? "bg-gradient-to-r from-[#00a859] to-[#0055a5] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  aria-current={isActive(link.path) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 focus:outline-none focus:ring-2 focus:ring-[#00a859] focus:ring-offset-2"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" aria-hidden="true" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" aria-hidden="true" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {mobileMenuOpen && (
            <nav
              className="md:hidden pb-4 space-y-2"
              role="navigation"
              aria-label="Mobile navigation"
              id="mobile-menu"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-[#00a859] focus:ring-offset-2 ${
                    isActive(link.path)
                      ? "bg-gradient-to-r from-[#00a859] to-[#0055a5] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                  aria-current={isActive(link.path) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" role="main" className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12" role="contentinfo">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <Link to="/" className="flex items-center gap-3 mb-4" aria-label="Shreonics Solutions - Go to homepage">
                <img src={logo} alt="Shreonics Solutions Logo" className="h-12 w-auto" />
                <div>
                  <div className="text-lg font-bold bg-gradient-to-r from-[#00a859] to-[#0055a5] bg-clip-text text-transparent">
                    Shreonics Solutions
                  </div>
                </div>
              </Link>
              <p className="text-gray-400 max-w-md">
                Engineering practical electronics & assistive systems. Focused on embedded systems, power electronics, robotics, and prosthetic technology.
              </p>
            </div>

            <nav aria-label="Footer quick links">
              <h3 className="font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/products" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Products</Link></li>
                <li><Link to="/research" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">R&D</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">Services</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">About Us</Link></li>
              </ul>
            </nav>

            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <address className="space-y-2 text-gray-400 not-italic">
                <div>Location: India</div>
                <div>
                  <a href="mailto:shreonics@gmail.com" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
                    shreonics@gmail.com
                  </a>
                </div>
                <div>
                  <a href="tel:+917386402694" className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900 rounded">
                    +91-7386402694
                  </a>
                </div>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Shreonics Solutions Pvt Ltd. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}