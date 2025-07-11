import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return <header className="w-full bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:py-6">
          <div className="flex items-center">
            <Link to="/" className="text-orange-600 font-bold text-2xl">
            <img
            src="/assets/images/website-logo.jpg"
            alt="Eco Bricks Logo"
            className="h-20 w-auto object-contain"
            />
            </Link>
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            <Link to="/about" className="text-gray-700 hover:text-orange-600 transition-colors">
              About
            </Link>
            <Link to="/products" className="text-gray-700 hover:text-orange-600 transition-colors">
              Products
            </Link>
            <Link to="/videos" className="text-gray-700 hover:text-orange-600 transition-colors">
              Videos
            </Link>
            <Link to="/benefits" className="text-gray-700 hover:text-orange-600 transition-colors">
              Benefits
            </Link>
            <Link to="/testimonials" className="text-gray-700 hover:text-orange-600 transition-colors">
              Testimonials
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600 transition-colors">
              Contact
            </Link>
          </nav>
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 hover:text-orange-600 focus:outline-none">
              {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Navigation */}
        {isMenuOpen && <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link to="/about" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
              <Link to="/products" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
                Products
              </Link>
              <Link to="/videos" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
                Videos
              </Link>
              <Link to="/benefits" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
                Benefits
              </Link>
              <Link to="/testimonials" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
                Testimonials
              </Link>
              <Link to="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-orange-600 hover:bg-gray-50 rounded-md" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>}
      </div>
    </header>;
};