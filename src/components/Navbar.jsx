import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="max-w-[100vw] fixed top-4 left-4 right-4 z-50 bg-white/90 backdrop-blur-sm rounded-full shadow-lg px-4 md:px-6">
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
            <Link to="/store" className="text-gray-600 hover:text-gray-900">Help</Link>
            {/* <Link to="/about" className="text-gray-600 hover:text-gray-900">About</Link>
            <Link to="/faqs" className="text-gray-600 hover:text-gray-900">FAQs</Link>
            <Link to="/contact" className="text-gray-600 hover:text-gray-900">Contact Us</Link> */}
            <Link to="/login" className="px-6 py-2 rounded-full border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors">
              Login
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-gray-900 focus:outline-none bg-transparent"
              aria-expanded={isOpen}
              aria-label="Toggle navigation"
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
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 mt-2 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="flex flex-col py-2">
            <Link to="/store" 
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-6 py-3 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Store
            </Link>
            <Link to="/about" 
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-6 py-3 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link to="/faqs" 
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-6 py-3 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              FAQs
            </Link>
            <Link to="/contact" 
              className="text-gray-600 hover:text-gray-900 hover:bg-gray-100 px-6 py-3 border-b border-gray-100"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
            <Link to="/login" 
              className="text-primary hover:bg-primary hover:text-white px-6 py-3 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;