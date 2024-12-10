import React, { useState } from 'react';
import { Menu, User, Globe, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-600">
              AmeyaBharat
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/destinations" className="text-gray-700 hover:text-orange-600">Destinations</Link>
            <Link to="/activities" className="text-gray-700 hover:text-orange-600">Activities</Link>
            <Link to="/hotels" className="text-gray-700 hover:text-orange-600">Hotels</Link>
            <Link to="/deals" className="text-gray-700 hover:text-orange-600">Deals</Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Globe className="h-5 w-5 text-gray-600" />
            </button>
            <Link to="/profile" className="p-2 hover:bg-gray-100 rounded-full">
              <User className="h-5 w-5 text-gray-600" />
            </Link>
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-full"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-5 w-5 text-gray-600" />
              ) : (
                <Menu className="h-5 w-5 text-gray-600" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg">
          <div className="px-4 py-2 space-y-2">
            <Link 
              to="/destinations" 
              className="block px-3 py-2 rounded-md hover:bg-orange-50 text-gray-700 hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Destinations
            </Link>
            <Link 
              to="/activities" 
              className="block px-3 py-2 rounded-md hover:bg-orange-50 text-gray-700 hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Activities
            </Link>
            <Link 
              to="/hotels" 
              className="block px-3 py-2 rounded-md hover:bg-orange-50 text-gray-700 hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Hotels
            </Link>
            <Link 
              to="/deals" 
              className="block px-3 py-2 rounded-md hover:bg-orange-50 text-gray-700 hover:text-orange-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Deals
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}