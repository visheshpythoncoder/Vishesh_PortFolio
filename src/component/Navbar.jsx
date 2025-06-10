import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import img from "../Images/logo.png"

export default function Navbar({ activeItem, setActiveItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef();
  const navItems = ["Home", "About", "Skills", "Services", "PortFolio", "Contact"];

  const handleNavClick = (item) => {
    const section = document.getElementById(item.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setActiveItem(item); // update active item
    setIsOpen(false);    // close mobile menu
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <nav className="w-full shadow-md fixed top-0 z-50 backdrop-blur-md bg-white/30">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <img src={img} alt="Logo" className="w-[80px] object-contain" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item, idx) => (
              <motion.button
                key={idx}
                onClick={() => handleNavClick(item)}
                className={`relative group text-xl font-medium transition duration-300 ${
                  activeItem === item ? "text-pink-600" : "text-gray-900"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                {/* Underline animation */}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] bg-pink-600 transition-all duration-300 ease-in-out ${
                    activeItem === item ? "w-full" : "w-0"
                  } group-hover:w-full`}
                ></span>
              </motion.button>
            ))}
          </div>

          {/* Social Icons & Hamburger */}
          <div className="flex items-center space-x-4">
            {/* Social Icons */}
            <div className="hidden md:flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="text-3xl text-gray-800 hover:text-pink-600 transition" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-3xl text-gray-800 hover:text-pink-600 transition" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <FaLinkedinIn className="text-3xl text-gray-800 hover:text-pink-600 transition" />
              </a>
            </div>

            {/* Hamburger Button */}
            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
                {isOpen ? (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={navRef}
            className="md:hidden fixed top-20 left-4 right-4 bg-white z-40 px-4 py-6 shadow-lg rounded-2xl"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center space-y-4">
              {navItems.map((item, idx) => (
                <motion.button
                  key={idx}
                  onClick={() => handleNavClick(item)}
                  className={`relative text-lg font-semibold transition duration-300 ${
                    activeItem === item ? "text-pink-600" : "text-gray-800"
                  }`}
                  whileHover={{ scale: 1.05 }}
                >
                  {item}
                  <span
                    className={`absolute left-0 -bottom-1 h-[2px] bg-pink-600 transition-all duration-300 ease-in-out ${
                      activeItem === item ? "w-full" : "w-0"
                    } group-hover:w-full`}
                  ></span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
