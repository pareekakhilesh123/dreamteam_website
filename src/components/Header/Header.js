import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaBars, FaTimes, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube
} from 'react-icons/fa';
import { logo } from '../assest';
import { BsTwitterX } from 'react-icons/bs'; 


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
    <header className="w-full sticky top-0 z-50   px-6 py-3  ">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Logo */}
           <div
      className="flex-shrink-0 md:bg-black bg-black text-white shadow-md px-6 py-2 rounded-full  ">
          <img src={logo} alt="Logo" className="h-6" />
        </div>

        {/* Navigation - Desktop */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wider  md:bg-black sm:bg-white text-white shadow-md px-6 py-3 rounded-full">
          {navLinks.map((link) => (
            <div key={link.path} className="relative">
              <Link
                to={link.path}
                className={`hover:text-yellow-400 transition ${
                  location.pathname === link.path ? 'text-yellow-400' : ''
                }`}
              >
                {link.label}
              </Link>
              {location.pathname === link.path && (
                <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-yellow-400 rounded-full" />
              )}
            </div>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="hidden md:flex items-center space-x-4  md:bg-black sm:bg-white text-white shadow-md px-6 py-3 rounded-full">
        {/* Social Icons - Desktop */}

  <a href="https://www.facebook.com/dreamteamindia" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="cursor-pointer hover:text-yellow-400" />
  </a>
  <a href="https://www.instagram.com/dreamteam_technologies" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="cursor-pointer hover:text-yellow-400" />
  </a>
  <a href="https://www.linkedin.com/company/dreamteam-technologies/" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn className="cursor-pointer hover:text-yellow-400" />
  </a>
  <a href="https://www.youtube.com/channel/UCtCvXZQvNEpXvCc6yFEh-CQ" target="_blank" rel="noopener noreferrer">
    <FaYoutube className="cursor-pointer hover:text-yellow-400" />
  </a>
  <a href="https://x.com/DreamteamTechn1" target="_blank" rel="noopener noreferrer">
    <BsTwitterX className="cursor-pointer hover:text-yellow-400" />
  </a>


        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 bg-black text-white rounded-lg px-6 py-4 shadow-lg space-y-2">
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
          {/* Mobile Social Icons */}
        
<div className="flex justify-center space-x-4 mt-4">
  <a href="https://www.facebook.com/dreamteamindia" target="_blank" rel="noopener noreferrer">
    <FaFacebookF className="cursor-pointer hover:text-yellow-400" />
  </a>
  <a href="https://www.instagram.com/dreamteam_technologies" target="_blank" rel="noopener noreferrer">
    <FaInstagram className="cursor-pointer hover:text-yellow-400" />
  </a>
  <a href="https://www.linkedin.com/company/dreamteam-technologies/" target="_blank" rel="noopener noreferrer">
    <FaLinkedinIn className="cursor-pointer hover:text-yellow-400" />
  </a>
  <a href="https://www.youtube.com/channel/UCtCvXZQvNEpXvCc6yFEh-CQ" target="_blank" rel="noopener noreferrer">
    <FaYoutube className="cursor-pointer hover:text-yellow-400" />
  </a>
   <a href="https://x.com/DreamteamTechn1" target="_blank" rel="noopener noreferrer">
    <BsTwitterX className="cursor-pointer hover:text-yellow-400" />
  </a>
</div>

        </div>
      )}
    </header>
  );
};

export default Header;
