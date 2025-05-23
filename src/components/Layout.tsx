import React, { useState, useEffect } from "react";
import { Outlet, Link, NavLink } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import CookieConsent from "./CookieConsent";
import Footer from "./Footer";

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const navLinkClasses = ({ isActive }: { isActive: boolean }) =>
    `block py-2 px-4 transition-colors duration-200 ${
      isActive
        ? "text-brand-blue font-semibold"
        : "text-gray-700 hover:text-brand-blue"
    }`;

  return (
    <div className="flex flex-col min-h-screen">
      <header
        className={`sticky top-0 w-full z-30 transition-all duration-300 bg-white ${
          scrolled ? "shadow-md py-2" : "py-4"
        }`}
        aria-label="Sidhuvud"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center" aria-label="PWNORD hem">
              <span className="text-2xl font-bold text-brand-blue">
                PW<span className="text-brand-darkblue">NORD</span>
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-1">
              <NavLink to="/" end className={navLinkClasses}>
                Hem
              </NavLink>
              <NavLink to="/tjanster" className={navLinkClasses}>
                Tjänster
              </NavLink>
              <NavLink to="/om-oss" className={navLinkClasses}>
                Om oss
              </NavLink>
              <NavLink to="/kontakt" className={navLinkClasses}>
                Kontakt
              </NavLink>
            </div>

            <div className="hidden md:flex items-center ml-6">
              <a
                href="tel:+46701234567"
                className="flex items-center mr-4 text-brand-blue hover:text-brand-darkblue transition-colors duration-200"
                aria-label="Ring oss"
              >
                <Phone className="h-4 w-4 mr-1" />
                <span className="text-sm">070 627 38 85</span>
              </a>
              <a
                href="mailto:info@pwnord.se"
                className="flex items-center text-brand-blue hover:text-brand-darkblue transition-colors duration-200"
                aria-label="Maila oss"
              >
                <Mail className="h-4 w-4 mr-1" />
                <span className="text-sm">kontakt@pwnord.se</span>
              </a>
            </div>

            <button
              className="md:hidden bg-transparent p-2 rounded-md text-gray-700"
              onClick={toggleMenu}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          id="mobile-menu"
          className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-md transition-all duration-300 origin-top ${
            isMenuOpen
              ? "opacity-100 scale-y-100"
              : "opacity-0 scale-y-0 pointer-events-none"
          }`}
        >
          <div className="container mx-auto px-4 py-3">
            <NavLink to="/" end className={navLinkClasses} onClick={closeMenu}>
              Hem
            </NavLink>
            <NavLink
              to="/tjanster"
              className={navLinkClasses}
              onClick={closeMenu}
            >
              Tjänster
            </NavLink>
            <NavLink
              to="/om-oss"
              className={navLinkClasses}
              onClick={closeMenu}
            >
              Om oss
            </NavLink>
            <NavLink
              to="/kontakt"
              className={navLinkClasses}
              onClick={closeMenu}
            >
              Kontakt
            </NavLink>

            <div className="border-t border-gray-200 mt-2 pt-2 space-y-2">
              <a
                href="tel:+46706273885"
                className="flex items-center px-4 py-2 text-gray-700 hover:text-brand-blue transition-colors duration-200"
                aria-label="Ring oss"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span>070 627 38 85</span>
              </a>
              <a
                href="mailto:kontakt@pwnord.se"
                className="flex items-center px-4 py-2 text-gray-700 hover:text-brand-blue transition-colors duration-200"
                aria-label="Maila oss"
              >
                <Mail className="h-4 w-4 mr-2" />
                <span>kontakt@pwnord.se</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Layout;
