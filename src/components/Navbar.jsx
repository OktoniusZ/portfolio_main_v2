import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-[#04152d] shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo on the left */}
          <div className="flex-shrink-0">
            <a className="text-2xl mb-12 font-bold text-white drop-shadow-md relative">
              <span className="bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
                Simanungkalit
              </span>
              <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full"></span>
            </a>
          </div>

          {/* Links on the right (desktop) */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-white hover:text-purple-400">
              Home
            </a>
            <a href="#experiences" className="text-white hover:text-purple-400">
              Experiences
            </a>
            <a href="#projects" className="text-white hover:text-purple-400">
              Projects
            </a>
            <a href="#footer" className="text-white hover:text-purple-400">
              Contact Me
            </a>
          </div>

          {/* Hamburger menu (mobile) */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              <FontAwesomeIcon
                icon={isOpen ? faTimes : faBars}
                size="lg"
                className={`text-white transition-transform duration-300 ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu (dropdown) */}
        <div
          className={`md:hidden bg-[#04152d]  shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-4 p-4">
            <a href="/" className="text-white hover:text-purple-400">
              Home
            </a>
            <a href="/about" className="text-white hover:text-purple-400">
              About
            </a>
            <a href="/service" className="text-white hover:text-purple-400">
              Services
            </a>
            <a href="/article" className="text-white hover:text-purple-400">
              Articles
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
