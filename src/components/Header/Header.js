import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaBars, FaTimes,
  // FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarker
} from 'react-icons/fa';
// import { BsTwitterX } from 'react-icons/bs';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Products' },
    { path: '/ourteam', label: 'Our Team' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="w-full">
      {/* Top Contact Bar */}
      {/* <div className="hidden sm:flex justify-between items-center bg-gray-900 text-white px-4 py-1 text-xs">
        <div className="flex space-x-4">
          <span className="flex items-center gap-1"><FaPhone /> +91-1234567890</span>
          <span className="flex items-center gap-1"><FaEnvelope /> info@example.com</span>
          <span className="flex items-center gap-1"><FaMapMarker /> Jaipur, India</span>
        </div>
        <div className="flex space-x-3">
          <FaFacebookF className="cursor-pointer" />
          <FaInstagram className="cursor-pointer" />
          <FaLinkedinIn className="cursor-pointer" />
          <FaYoutube className="cursor-pointer" />
          <BsTwitterX className="cursor-pointer" />
        </div>
      </div> */}

      {/* Main Navigation */}
      <div className="bg-black text-white shadow-md px-6 py-3 rounded-full w-fit mx-auto mt-2 flex items-center space-x-8">
        {/* <div className="text-lg font-bold">DREAMTEAM</div> */}

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wider">
          {navLinks.map((link) => (
            <div key={link.path} className="relative">
              <Link to={link.path} className="text-white hover:text-yellow-400 transition">
                {link.label}
              </Link>
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-1 w-8 h-1 bg-yellow-400 rounded-full rotate-[6deg]"></span>
              )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black text-white px-6 pt-4 pb-2 rounded-xl mt-1 mx-auto max-w-[90%]">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={`block py-2 border-b border-gray-700 ${
                location.pathname === link.path ? 'text-yellow-400 font-semibold' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
