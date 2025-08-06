import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaBars, FaTimes, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube
} from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { motion } from 'framer-motion';
import { logo } from '../assest';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // Animation state
  const [showHeader, setShowHeader] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Faster animation trigger
    const timer1 = setTimeout(() => {
      setShowHeader(true);
      const timer2 = setTimeout(() => {
        setShowContent(true);
      }, 500); // reduced delay
      return () => clearTimeout(timer2);
    }, 500); // reduced initial delay
    return () => clearTimeout(timer1);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/products', label: 'Products' },
    { path: '/ourteam', label: 'Our Team' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.header
      initial={{ scale: 0.8, opacity: 0 }}
      animate={showHeader ? { scale: 1, opacity: 1 } : {}}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="w-full fixed left-0 z-50 top-0 px-6 py-3 "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-evenly">
        {/* Logo - From center to left */}
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={showContent ? { x: -80, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="flex-shrink-0 bg-white shadow-md px-6 py-2 rounded-full ml-20"
        >
          <img src={logo} alt="Logo" className="h-6" />
        </motion.div>

        {/* Navigation - Fade in */}
        <motion.nav
          initial={{ opacity: 0 }}
          animate={showContent ? { opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.4 }}
          className="hidden md:flex items-center space-x-8 text-sm font-semibold tracking-wider bg-white text-black shadow-md px-6 py-3 rounded-full"
        >
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
        </motion.nav>

        {/* Social Icons - From center to right */}
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          animate={showContent ? { x: 80, opacity: 1 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="hidden md:flex items-center space-x-4 bg-white text-black shadow-md px-6 py-3 rounded-full"
        >
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
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden bg-white p-2 h-[40px] rounded-[10px]">
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
    </motion.header>
  );
};

export default Header;
