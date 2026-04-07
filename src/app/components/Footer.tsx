import { Link } from 'react-router';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t border-purple-600/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-purple-400 mb-4">Wells Cleaning Well</h3>
            <p className="text-gray-400 text-sm">
              A local, family-owned cleaning business proudly serving our community. Where We Do It Well!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-purple-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-purple-400 text-sm transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-purple-400 mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Phone className="h-4 w-4 text-purple-400" />
                <span>(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <Mail className="h-4 w-4 text-purple-400" />
                <span>hello@wellscleaningwell.com</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400 text-sm">
                <MapPin className="h-4 w-4 text-purple-400" />
                <span>Serving Your Local Area</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-purple-600/20 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Wells Cleaning Well. All rights reserved. Locally owned and operated.</p>
        </div>
      </div>
    </footer>
  );
}