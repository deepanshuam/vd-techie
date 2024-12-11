import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa"; // For hamburger menu
import { BsChevronDown } from "react-icons/bs"; // For dropdown arrow
import logo from "../../assets/logo.png";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // Track scroll position

  // Track scroll position to change navbar background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // Add white background when scrolled
      } else {
        setIsScrolled(false); // Remove white background when at the top
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <div
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white text-black shadow-md"
            : "bg-transparent text-white"
        }`}
      >
        <div className="container mx-auto flex justify-between items-center py-3 px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center pl-20">
            <motion.img
              src={logo} // Path to your logo
              alt="logo"
              className="h-10 w-auto object-contain"
              initial={{ scale: 1 }}
              whileHover={{
                scale: 1.2,
                transition: { duration: 0.3 },
              }}
              whileTap={{
                scale: 1.1,
              }}
            />
          </Link>

          {/* Links for larger screens */}
          <div className="hidden md:flex space-x-6 items-center text-xl font-roboto pr-20">
            <Link to="/" className="hover:text-red-500 transition-all">
              Home
            </Link>
            <div className="relative group ">
              <button className="flex items-center hover:text-red-500 transition-all">
                Courses <BsChevronDown className="ml-1" />
              </button>
              {/* Dropdown that opens on hover */}
              <div
                className={`absolute top-full mt-2 w-64 rounded-lg shadow-lg ${
                  isScrolled ? "bg-white" : "bg-gray-200"
                } transform scale-95 transition-transform duration-200 opacity-0 group-hover:opacity-100 group-hover:scale-100`}
              >
                <Link
                  to="/courses/web-development"
                  className="block px-6 py-4 text-black text-lg hover:bg-red-200 rounded-lg transition-all transform hover:scale-105"
                >
                  Web Development
                </Link>
                <Link
                  to="/courses/data-science"
                  className="block px-6 py-4 text-black text-lg hover:bg-red-200 rounded-lg transition-all transform hover:scale-105"
                >
                  Ui&Ux
                </Link>
                <Link
                  to="/courses/digital-marketing"
                  className="block px-6 py-4 text-black text-lg hover:bg-red-200 rounded-lg transition-all transform hover:scale-105"
                >
                  Digital Marketing
                </Link>
                <Link
                  to="/courses/performance-marketing"
                  className="block px-6 py-4 text-black text-lg hover:bg-red-200 rounded-lg transition-all transform hover:scale-105"
                >
                  Performance Marketing
                </Link>
                <Link
                  to="/courses/personal-branding"
                  className="block px-6 py-4 text-black text-lg hover:bg-red-200 rounded-lg transition-all transform hover:scale-105"
                >
                  Personal Branding
                </Link>
                <Link
                  to="/courses/graphics-design"
                  className="block px-6 py-4 text-black text-lg hover:bg-red-200 rounded-lg transition-all transform hover:scale-105"
                >
                  Graphics Design
                </Link>
                <Link
                  to="/courses/graphics-design"
                  className="block px-6 py-4 text-black text-lg hover:bg-red-200 rounded-lg transition-all transform hover:scale-105"
                >
                  Animation
                </Link>
                <Link
                  to="/courses/graphics-design"
                  className="block px-6 py-4 text-black text-lg hover:bg-red-200 rounded-lg transition-all transform hover:scale-105"
                >
                  Vedio Editing
                </Link>
                {/* Add more links if needed */}
              </div>
            </div>
            <Link to="/about-us" className="hover:text-red-500 transition-all">
              About Us
            </Link>
            <Link
              to="/contact-us"
              className="hover:text-red-500 transition-all"
            >
              Contact Us
            </Link>
            <Link to="/careers" className="hover:text-red-500 transition-all">
              Careers
            </Link>
            <Link
              to="/hire-from-us"
              className="hover:text-red-500 transition-all"
            >
              Hire From Us
            </Link>
          </div>

          {/* Hamburger Menu */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-700">
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-gray-600 font-roboto"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <button
              className="block w-full text-left px-4 py-2 hover:bg-gray-600 font-roboto"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses <BsChevronDown className="ml-1" />
            </button>
            <div className="ml-4">
              <Link
                to="/courses/web-development"
                className="block px-4 py-2 hover:bg-gray-600 font-roboto"
                onClick={() => setIsMenuOpen(false)}
              >
                Web Development
              </Link>
              <Link
                to="/courses/data-science"
                className="block px-4 py-2 hover:bg-gray-600 font-roboto"
                onClick={() => setIsMenuOpen(false)}
              >
                Ui&Ux
              </Link>
              <Link
                to="/courses/digital-marketing"
                className="block px-4 py-2 hover:bg-gray-600 font-roboto"
                onClick={() => setIsMenuOpen(false)}
              >
                Digital Marketing
              </Link>
              <Link
                to="/courses/performance-marketing"
                className="block px-4 py-2 hover:bg-gray-600 font-roboto"
                onClick={() => setIsMenuOpen(false)}
              >
                Performance Marketing
              </Link>
              <Link
                to="/courses/personal-branding"
                className="block px-4 py-2 hover:bg-gray-600 font-roboto"
                onClick={() => setIsMenuOpen(false)}
              >
                Personal Branding
              </Link>
              <Link
                to="/courses/graphics-design"
                className="block px-4 py-2 hover:bg-gray-600 font-roboto"
                onClick={() => setIsMenuOpen(false)}
              >
                Graphics Design
              </Link>
              <Link
                to="/courses/graphics-design"
                className="block px-4 py-2 hover:bg-gray-600 font-roboto"
                onClick={() => setIsMenuOpen(false)}
              >
                Animation
              </Link>
            </div>
            <Link
              to="/about-us"
              className="block px-4 py-2 hover:bg-gray-600 font-roboto"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className="block px-4 py-2 hover:bg-gray-600 font-roboto"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/careers"
              className="block px-4 py-2 hover:bg-gray-600 font-roboto"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              to="/hire-from-us"
              className="block px-4 py-2 hover:bg-gray-600 font-roboto"
              onClick={() => setIsMenuOpen(false)}
            >
              Hire From Us
            </Link>
          </div>
        )}
      </div>

      {/* Add padding to prevent content overlap */}
      <div className="pt-[80px]"></div>
    </>
  );
};

export default Navbar;
