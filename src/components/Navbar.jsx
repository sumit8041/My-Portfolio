import React, { useState, useEffect } from "react";
import { FiSun, FiMoon, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const Navbar = ({ toggleDarkMode, darkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 70) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-transparent dark:bg-transparent fixed w-full z-10 top-0 ${
        scrolled ? "hidden" : "block"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          {/* Left-hand side */}
          <div className="flex items-center">
            <div className="logo">
              <div className="logo-text size-8">
                <img src={logo} alt="Logo" />
              </div>
            </div>
            <a
              href="/"
              className="ml-2 text-xl lg:text-2xl font-bold font-roboto text-gray-900 dark:text-white hover:rainbow-text"
            >
              Sumit Gupta | Portfolio
            </a>
          </div>
        </div>
        {/* Right-hand side */}
        <div className="flex items-center">
          <div className="hidden lg:block">
            <div className="flex items-baseline space-x-2 md:space-x-4">
              <a
                href="#about"
                className="text-sm md:text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-300 px-2 md:px-3 py-1 md:py-2 rounded-md transition duration-300 "
              >
                About
              </a>
              <a
                href="#experience"
                className="text-sm md:text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-300 px-2 md:px-3 py-1 md:py-2 rounded-md transition duration-300 "
              >
                Experience
              </a>
              <a
                href="#education"
                className="text-sm md:text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-300 px-2 md:px-3 py-1 md:py-2 rounded-md transition duration-300"
              >
                Education
              </a>
              <a
                href="#projects"
                className="text-sm md:text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-300 px-2 md:px-3 py-1 md:py-2 rounded-md transition duration-300"
              >
                Projects
              </a>
              <a
                href="#certifications"
                className="text-sm md:text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-300 px-2 md:px-3 py-1 md:py-2 rounded-md transition duration-300 "
              >
                Certifications
              </a>
              <a
                href="#contact"
                className="text-sm md:text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-300 px-2 md:px-3 py-1 md:py-2 rounded-md transition duration-300"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="flex items-center">
            <button
              onClick={toggleDarkMode}
              className="text-gray-900 dark:text-white focus:outline-none mr-4"
            >
              {darkMode ? <FiSun size={24} /> : <FiMoon size={24} />}
            </button>
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-900 dark:text-white focus:outline-none"
              >
                {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#about"
              className="text-sm md:text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-300 block px-3 py-2 rounded-md transition duration-300"
            >
              About
            </a>
            <a
              href="#experience"
              className="text-sm md:text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-300 block px-3 py-2 rounded-md transition duration-300"
            >
              Experience
            </a>
            <a
              href="#education"
              className="text-sm md:text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-300 block px-3 py-2 rounded-md transition duration-300"
            >
              Education
            </a>
            <a
              href="#projects"
              className="text-sm md:text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-300 block px-3 py-2 rounded-md transition duration-300"
            >
              Projects
            </a>
            <a
              href="#certifications"
              className="text-sm md:text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-yellow-300 block px-3 py-2 rounded-md transition duration-300"
            >
              Certifications
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
