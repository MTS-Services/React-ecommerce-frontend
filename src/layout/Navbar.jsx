import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion"; // Updated for AnimatePresence import
import { GoMail } from "react-icons/go";
import { HiOutlinePhone } from "react-icons/hi";
import { SlSocialFacebook } from "react-icons/sl";
import { TfiTwitter } from "react-icons/tfi";
import { RxInstagramLogo } from "react-icons/rx";
import { CgMenuRightAlt } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

const SocialLinks = () => (
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
);

const ContactInfo = () => (
  <div className="flex items-center space-x-4">
    <span className="flex items-center text-sm text-gray-600">
      <GoMail size={18} className="mr-1" />
      contact@maktechsolution.com
    </span>
    <span className="flex items-center text-sm text-gray-600">
      <HiOutlinePhone size={18} className="mr-1" />
      +880 1886-159495
    </span>
  </div>
);

const NavLinks = () => {
  const links = ["Home", "Products", "Pages", "Contact", "About"];
  return (
    <nav className="hidden lg:block">
      <ul className="flex space-x-6 text-center font-semibold">
        {links.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="relative block px-1 py-2 text-black transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#19B2E7] after:transition-all after:content-[''] hover:text-[#19B2E7] hover:after:w-full"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const SearchBar = ({ searchOpen, setSearchOpen }) => (
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

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

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
        <div className="mb-4 hidden items-center justify-between border-b border-gray-200 pb-2 text-lg lg:flex">
          <ContactInfo />
          <SocialLinks />
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              className={`transition-all duration-300 ${isScrolled ? "h-14" : "h-20"}`}
              src="/img/logo/B2B.png"
              alt="Company Logo"
            />
          </div>

          <NavLinks />

          <div className="flex items-center space-x-4">
            <SearchBar searchOpen={searchOpen} setSearchOpen={setSearchOpen} />

            <a
              href="#"
              className="p-2 text-gray-600 transition-colors hover:text-[#19B2E7]"
            >
              <FiUsers size={25} />
            </a>

            <div className="relative">
              <a
                href="#"
                className="p-2 text-gray-600 transition-colors hover:text-[#19B2E7]"
              >
                <BsCart3 size={25} />
                <span className="absolute -top-1 -right-1 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#152550] p-3 text-xs text-white">
                  3
                </span>
              </a>
            </div>

            <button className="p-2 text-gray-600 transition-colors hover:text-[#19B2E7] lg:hidden">
              <CgMenuRightAlt size={25} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
