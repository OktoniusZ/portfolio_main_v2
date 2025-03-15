import React, { useState} from "react";
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
            <a href="#home" className="text-white font-bold text-lg">
              Tes
            </a>
          </div>

          {/* Links on the right (desktop) */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-white hover:text-orange-600">
              Home
            </a>
            <a href="#experiences" className="text-white hover:text-orange-600">
              Experiences
            </a>
            <a href="#projects" className="text-white hover:text-orange-600">
              Projects
            </a>
            <a href="#footer" className="text-white hover:text-orange-600">
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
                className={`transition-transform duration-300 ${
                  isOpen ? "rotate-90" : "rotate-0"
                }`}
              />
            </button>
          </div>
        </div>

        {/* Mobile menu (dropdown) */}
        <div
          className={`md:hidden bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="flex flex-col space-y-4 p-4">
            <a
              href="/"
              className="text-gray-800 hover:text-orange-600 font-bold"
            >
              Home
            </a>
            <a href="/about" className="text-gray-800 hover:text-orange-600">
              About
            </a>
            <a href="/service" className="text-gray-800 hover:text-orange-600">
              Services
            </a>
            <a href="/article" className="text-gray-800 hover:text-orange-600">
              Articles
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
