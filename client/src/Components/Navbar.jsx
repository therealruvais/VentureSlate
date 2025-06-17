import React, { useState, useEffect } from 'react';
import { Menu, X, TrendingUp } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <TrendingUp className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-800">VentureSlate</span>
          </div>

  
          <div className="hidden md:flex items-center space-x-8">
            <a href="/home" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</a>
            <a href="/about" className="text-gray-700  hover:text-blue-600 font-medium transition-colors">About</a>
            
          </div>

          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-4 right-4 animate-fade-in-down">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-4 py-2 rounded-md hover:bg-gray-50">Home</a>
              <a href="#" className="text-blue-600 font-medium px-4 py-2 rounded-md bg-blue-50">About</a>
  
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
