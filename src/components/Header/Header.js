import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube, FaMapMarker } from 'react-icons/fa';
import { BsTwitterX } from "react-icons/bs";
import { logo } from '../assest';
import { Link } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className='sticky top-0 z-50 bg-white'>
      {/* Top Bar */}
      <div className=" bg-gradient-to-tr from-blue-100 to-blue-200 text-sm text-blue-900 px-4 py-2 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col md:flex-row gap-2 hidden md:flex">
          <span>
            <a href="tel:+917665263000" className="text-blue-600 hover:underline">
              <FaPhone className="inline text-xl" /> +91-76652-63000
            </a>,&nbsp;
            <a href="tel:+919649233222" className="text-blue-600 hover:underline">
              +91-96492-33222
            </a>
          </span>

          <br />

          <span>
            <a href="mailto:info@dreamteam.co.in" className="text-blue-600 hover:underline">
              <FaEnvelope className="inline ml-2 text-xl" /> info@dreamteam.co.in
            </a>
          </span>

          <br />

          <span>
            <a
              href="https://www.google.com/maps/search/?api=1&query=DreamTeam+Technologies,+CYB-5,+RIICO+Cyber+Park+Near+Jodhpur+Saras+Dairy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              <FaMapMarker className="inline ml-2 text-xl" /> DREAM Heights, CYB-5, RIICO Cyber Park Near Jodhpur Saras Dairy
            </a>
          </span>


        </div>
        <div className="flex gap-3 mt-2 md:mt-0">
          <span className="font-semibold">Follow Us:</span>
          <a
            href="https://www.facebook.com/dreamteamindia"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >

            <FaFacebookF className="text-xl" />
          </a>

          <a
            href="https://www.instagram.com/dreamteam_technologies"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <FaInstagram className="text-xl" />
          </a>
          <a
            href="https://www.linkedin.com/company/dreamteam-technologies/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <FaLinkedinIn className="text-xl" />
          </a>
          <a
            href="https://x.com/DreamteamTechn1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <BsTwitterX className="text-xl" />
          </a>
          <a
            href="https://www.youtube.com/channel/UCtCvXZQvNEpXvCc6yFEh-CQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            <FaYoutube className="text-xl" />
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-primary  shadow-md px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="w-44" />
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex text-background gap-6 text-sm font-semibold ">
          <Link to="/" className="hover:text-blue-500">Home</Link>
          <Link to="/services" className="hover:text-blue-500">Services</Link>
          <Link to="/products" className="hover:text-blue-500">Products</Link>
          <Link to="/our-team" className="hover:text-blue-500">Our Team</Link>
          <Link to="/blog" className="hover:text-blue-500">Blog</Link>

        </nav>

        {/* Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm">
            CONTACT US
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <svg className="w-6 h-6 text-background" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-lg px-4 py-3">
          <nav className="flex flex-col gap-3 text-blue-900 text-sm">
            <span>Home</span>
            <span> Services</span>
            <span>Products</span>
            <span>Our Team</span>
            <span>Blog</span>
            <button className="bg-orange-500 text-white py-2 rounded-full">CONTACT US</button>

          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
