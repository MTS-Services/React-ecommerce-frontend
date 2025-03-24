import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion"; // You'll need to install framer-motion
import { GoMail } from "react-icons/go";
import { HiOutlinePhone } from "react-icons/hi";
import { SlSocialFacebook } from "react-icons/sl";
import { TfiTwitter } from "react-icons/tfi";
import { RxInstagramLogo } from "react-icons/rx";
import { CgMenuRightAlt } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = () => {
  // State to manage visibility of dropdown menus
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white py-0 shadow" : "bg-white py-4 shadow"
      }`}
    >
      <div className="container mx-auto px-4">
        {/* Top bar with contact and social info */}
        <div className="mb-4 hidden items-center justify-between border-b border-gray-200 pb-2 text-lg lg:flex">
          <div className="flex items-center space-x-4">
            <span className="flex items-center text-gray-600">
              <span className="mr-1">
                <GoMail size={20} />
              </span>
              contact@maktechsolution.com
            </span>
            <span className="flex items-center text-gray-600">
              <span className="mr-1">
                <HiOutlinePhone size={20} />
              </span>
              +880 1886-159495
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="#"
              className="text-gray-600 transition-colors hover:text-[#19B2E7]"
            >
              <span alt="Facebook">
                <SlSocialFacebook size={20} />
              </span>
            </a>
            <a
              href="#"
              className="text-gray-600 transition-colors hover:text-[#19B2E7]"
            >
              <span alt="Twitter">
                <TfiTwitter size={20} />
              </span>
            </a>
            <a
              href="#"
              className="text-gray-600 transition-colors hover:text-[#19B2E7]"
            >
              <span alt="Instagram">
                <RxInstagramLogo size={20} />
              </span>
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              className={`transition-all duration-300 ${isScrolled ? "h-14" : "h-20"}`}
              src="/img/logo/B2B.png" // Adjust the path as needed
              alt="Company Logo"
            />
          </div>

          {/* Main navigation links */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-6 text-center font-semibold">
              <li>
                <Link
                  to="/"
                  className="relative block px-1 py-2 text-black transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#19B2E7] after:transition-all after:content-[''] hover:text-[#19B2E7] hover:after:w-full"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/products"
                  className="relative block px-1 py-2 text-black transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#19B2E7] after:transition-all after:content-[''] hover:text-[#19B2E7] hover:after:w-full"
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  to="/cart"
                  className="relative block px-1 py-2 text-black transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#19B2E7] after:transition-all after:content-[''] hover:text-[#19B2E7] hover:after:w-full"
                >
                  Cart
                </Link>
              </li>
              <li>
                <Link
                  to="/checkout"
                  className="relative block px-1 py-2 text-black transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#19B2E7] after:transition-all after:content-[''] hover:text-[#19B2E7] hover:after:w-full"
                >
                  Checkout
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="relative block px-1 py-2 text-black transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#19B2E7] after:transition-all after:content-[''] hover:text-[#19B2E7] hover:after:w-full"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Right side elements: search, user, cart */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-600 transition-colors hover:text-[#19B2E7]"
              >
                <span className="text-xl">
                  <BsSearch size={25} />
                </span>
              </button>

              {/* Search input with animation */}
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "300px" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="absolute top-full right-0 mt-2"
                  >
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full rounded-md border border-gray-300 p-2 shadow-sm focus:border-transparent focus:ring-2 focus:ring-[#19B2E7] focus:outline-none"
                      autoFocus
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* User account */}
            <a
              href="#"
              className="p-2 text-gray-600 transition-colors hover:text-[#19B2E7]"
            >
              <span>
                <FiUsers size={25} />
              </span>
            </a>

            {/* Shopping cart */}
            <div className="relative">
              <a
                href="#"
                className="p-2 text-gray-600 transition-colors hover:text-[#19B2E7]"
              >
                <span>
                  <BsCart3 size={25} />
                </span>
                <span className="absolute -top-1 -right-1 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#152550] p-3 text-xs text-white">
                  3
                </span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button className="p-2 text-gray-600 transition-colors hover:text-[#19B2E7] lg:hidden">
              <span className="text-xl">
                <CgMenuRightAlt />
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
