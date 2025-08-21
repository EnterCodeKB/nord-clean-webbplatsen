import React from "react";
import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-12 pb-6" aria-label="Sidfot">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4">PWNORD</h2>
            <p className="mb-4">
              Professionell rengöring av altaner och utomhusytor. Vi hjälper dig
              att hålla dina utomhusytor rena och i gott skick.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="text-white hover:text-brand-lightblue transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-white hover:text-brand-lightblue transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-white hover:text-brand-lightblue transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Tjänster</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/tjanster#altaner"
                  className="hover:text-brand-lightblue transition-colors duration-200"
                >
                  Rengöring av altaner
                </Link>
              </li>
              <li>
                <Link
                  to="/tjanster#terrasser"
                  className="hover:text-brand-lightblue transition-colors duration-200"
                >
                  Rengöring av terrasser
                </Link>
              </li>
              <li>
                <Link
                  to="/tjanster#uteplatser"
                  className="hover:text-brand-lightblue transition-colors duration-200"
                >
                  Rengöring av uteplatser
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Länkar</h2>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="hover:text-brand-lightblue transition-colors duration-200"
                >
                  Hem
                </Link>
              </li>
              <li>
                <Link
                  to="/om-oss"
                  className="hover:text-brand-lightblue transition-colors duration-200"
                >
                  Om oss
                </Link>
              </li>
              <li>
                <Link
                  to="/kontakt"
                  className="hover:text-brand-lightblue transition-colors duration-200"
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  to="/integritetspolicy"
                  className="hover:text-brand-lightblue transition-colors duration-200"
                >
                  Integritetspolicy
                </Link>
              </li>
              <li>
                <Link
                  to="/anvandarvillkor"
                  className="hover:text-brand-lightblue transition-colors duration-200"
                >
                  Användarvillkor
                </Link>
              </li>
              <li>
                <Link
                  to="/tillganglighet"
                  className="hover:text-brand-lightblue transition-colors duration-200"
                >
                  Tillgänglighet
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-bold mb-4">Kontakt</h2>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:+46706273885"
                  className="hover:text-brand-lightblue transition-colors duration-200"
                >
                  070 627 38 85
                </a>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:kontakt@pwnord.se"
                  className="hover:text-brand-lightblue transition-colors duration-200"
                >
                  kontakt@pwnord.se
                </a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 flex-shrink-0" />
                <address className="not-italic">111 23 Stockholm</address>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} PWNORD. Alla rättigheter förbehållna.
            </p>
            <div className="mt-4 md:mt-0">
              <a
                href="/sitemap.xml"
                className="text-sm text-gray-400 hover:text-brand-lightblue transition-colors duration-200 mr-4"
              >
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
