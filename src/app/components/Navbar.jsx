'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import NavLink from './NavLink';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { motion } from 'framer-motion';

const navLinks = [
  { title: 'About', path: '#about' },
  { title: 'Projects', path: '#projects' },
  { title: 'Technologies', path: '#skills' },
  { title: 'Contact', path: '#contact' },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  const handleLinkClick = () => setNavbarOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);

      // Highlight active section
      navLinks.forEach(link => {
        const section = document.querySelector(link.path);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            currentScrollY >= offsetTop - 100 &&
            currentScrollY < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(link.path);
          }
        }
      });
    };

    const handleMouseMove = (e) => {
      if (e.clientY < 100) {
        setShowNavbar(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-5xl bg-black/30 backdrop-blur-md rounded-xl px-4 py-2 shadow-lg border-b-2 border-white/10"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-gradient-to-br from-blue-500 to-indigo-600 w-10 h-10 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-white text-lg font-bold">A</span>
            </div>
            <span className="text-white text-lg md:text-xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity duration-300">
              Alwin
            </span>
          </Link>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setNavbarOpen(!navbarOpen)}
            aria-label="Toggle Menu"
            className="text-white hover:text-blue-400 p-1 transition-all duration-300 ease-in-out"
          >
            {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {navLinks.map((link, index) => (
            <NavLink
              key={index}
              href={link.path}
              title={link.title}
              className={`text-sm font-medium transition-all duration-300 relative group p-2 ${
                activeSection === link.path ? 'text-blue-400' : 'text-white hover:text-blue-400'
              }`}
            >
              {/* Card Hover Effect */}
              <div className="absolute inset-0 bg-transparent group-hover:bg-blue-400 rounded-lg transition-all duration-300 transform group-hover:scale-105 group-hover:rotate-2"></div>
            </NavLink>
          ))}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden md:hidden ${navbarOpen ? 'max-h-60 mt-3' : 'max-h-0'}`}
      >
        <ul className="flex flex-col items-center space-y-3 pb-2">
          {navLinks.map((link, index) => (
            <li key={index} onClick={handleLinkClick}>
              <NavLink
                href={link.path}
                title={link.title}
                className={`text-sm transition-colors duration-200 ${
                  activeSection === link.path ? 'text-blue-400' : 'text-white hover:text-blue-400'
                }`}
              />
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
