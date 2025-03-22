import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-full shadow-lg px-4 md:px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/logo.jpeg" alt="IndieGuru" className="h-8 w-8 object-contain" />
              <span className="ml-2 text-lg font-semibold text-gray-900">IndieGuru</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/store" className="text-gray-600 hover:text-gray-900">Store</Link>
            <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/faqs" className="text-gray-600 hover:text-gray-900">FAQs</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link>
            <Link to="/login" className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pt-2 pb-4 space-y-1 px-2">
            <Link to="/store" className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg">Store</Link>
            <Link to="/about" className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg">About</Link>
            <Link to="/faqs" className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg">FAQs</Link>
            <Link to="/contact" className="block text-gray-600 hover:text-gray-900 px-3 py-2 rounded-lg">Contact Us</Link>
            <Link to="/login" className="block text-center text-primary border-2 border-primary hover:bg-primary hover:text-white px-3 py-2 rounded-lg">
              Login
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
