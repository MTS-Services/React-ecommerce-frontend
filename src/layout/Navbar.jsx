import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GoMail } from "react-icons/go";
import { HiOutlinePhone } from "react-icons/hi";
import { SlSocialFacebook } from "react-icons/sl";
import { TfiTwitter } from "react-icons/tfi";
import { RxInstagramLogo } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";

const SearchBar = ({ searchOpen, setSearchOpen }) => {
  return (
    <div className="relative">
      <button
        onClick={() => setSearchOpen(!searchOpen)}
        className="p-2 text-gray-600 transition-colors hover:text-[#19B2E7]"
      >
        <BsSearch size={25} />
      </button>

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
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  const links = ["Home", "Products", "Pages", "Contact", "About"];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white py-2 shadow" : "bg-white py-4 shadow"
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
              <SlSocialFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 transition-colors hover:text-[#19B2E7]"
            >
              <TfiTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-gray-600 transition-colors hover:text-[#19B2E7]"
            >
              <RxInstagramLogo size={20} />
            </a>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              className={`transition-all duration-300 ${
                isScrolled ? "h-14" : "h-20"
              }`}
              src="/img/logo/B2B.png"
              alt="Company Logo"
            />
          </div>

          {/* Navigation links */}
          <nav className="hidden items-center space-x-6 font-semibold lg:flex">
            <ul className="flex space-x-6 text-center">
              {links.map((link, index) => {
                const href =
                  link.toLowerCase() === "home"
                    ? "/"
                    : `/${link.toLowerCase()}`;
                return (
                  <li key={index}>
                    <a
                      href={href}
                      className="relative block px-1 py-2 text-black transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#19B2E7] after:transition-all after:content-[''] hover:text-[#19B2E7] hover:after:w-full"
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
            {/* Search Icon */}
            <SearchBar searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
