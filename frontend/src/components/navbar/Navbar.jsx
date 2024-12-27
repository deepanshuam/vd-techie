import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { BsChevronDown } from "react-icons/bs";
import logo from "../../assets/logo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);

  const handleMouseEnter = () => {
    if (dropdownTimeout) clearTimeout(dropdownTimeout);
    setIsCoursesOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setIsCoursesOpen(false);
    }, 200); // Delay closing to allow smooth hover transition
    setDropdownTimeout(timeout);
  };

  return (
    <>
      {/* Navbar */}
      <div className="fixed top-0 w-full bg-white z-50 shadow-md">
        <div className="container mx-auto flex justify-between items-center py-3 pl-48">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="logo" className="h-10 w-auto object-contain" />
          </Link>

          {/* Links for larger screens */}
          <div className="hidden md:flex space-x-6 items-center text-lg font-medium pr-48">
            <Link to="/" className="hover:text-red-500 transition">
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className="flex items-center hover:text-red-500 transition"
                aria-haspopup="true"
              >
                Courses <BsChevronDown className="ml-1" />
              </button>
              {/* Dropdown menu */}
              {isCoursesOpen && (
                <div className="absolute top-full mt-2 w-64 bg-gray-100 rounded-lg shadow-lg">
                  <Link
                    to="/courses/web-development"
                    className="block px-6 py-4 hover:bg-gray-200"
                  >
                    Web Development
                  </Link>
                  <Link
                    to="/courses/ui-ux"
                    className="block px-6 py-4 hover:bg-gray-200"
                  >
                    UI/UX
                  </Link>
                  <Link
                    to="/courses/digital-marketing"
                    className="block px-6 py-4 hover:bg-gray-200"
                  >
                    Digital Marketing
                  </Link>
                  <Link
                    to="/courses/performance-marketing"
                    className="block px-6 py-4 hover:bg-gray-200"
                  >
                    Performance Marketing
                  </Link>
                  <Link
                    to="/courses/personal-branding"
                    className="block px-6 py-4 hover:bg-gray-200"
                  >
                    Personal Branding
                  </Link>
                  <Link
                    to="/courses/graphics-design"
                    className="block px-6 py-4 hover:bg-gray-200"
                  >
                    Graphics Design
                  </Link>
                  <Link
                    to="/courses/animation"
                    className="block px-6 py-4 hover:bg-gray-200"
                  >
                    Animation
                  </Link>
                  <Link
                    to="/courses/video-editing"
                    className="block px-6 py-4 hover:bg-gray-200"
                  >
                    Video Editing
                  </Link>
                </div>
              )}
            </div>
            <Link to="/" className="hover:text-red-500 transition">
              About Us
            </Link>
            <Link to="/" className="hover:text-red-500 transition">
              Contact Us
            </Link>
            <Link to="/" className="hover:text-red-500 transition">
              Careers
            </Link>
            <Link to="/" className="hover:text-red-500 transition">
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
          <div className="md:hidden bg-gray-100 shadow-md">
            <Link
              to="/"
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <button
              className=" w-full text-left px-4 py-2 hover:bg-gray-200 flex items-center justify-between"
              onClick={() => setIsCoursesOpen(!isCoursesOpen)}
            >
              Courses <BsChevronDown className={`ml-1 ${isCoursesOpen ? "rotate-180" : ""}`} />
            </button>
            {isCoursesOpen && (
              <div className="ml-4">
                <Link
                  to="/courses/web-development"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Web Development
                </Link>
                <Link
                  to="/courses/ui-ux"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  UI/UX
                </Link>
                <Link
                  to="/courses/digital-marketing"
                  className="block px-4 py-2 hover:bg-gray-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Digital Marketing
                </Link>
              </div>
            )}
            <Link
              to="/about-us"
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </Link>
            <Link
              to="/contact-us"
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </Link>
            <Link
              to="/careers"
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Careers
            </Link>
            <Link
              to="/hire-from-us"
              className="block px-4 py-2 hover:bg-gray-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Hire From Us
            </Link>
          </div>
        )}
      </div>

      {/* Padding to prevent content overlap */}
      <div className="pt-16"></div>
    </>
  );
};

export default Navbar;
