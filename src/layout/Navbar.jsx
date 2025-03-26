import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { CgMenuRightAlt } from "react-icons/cg";
import { BsSearch, BsCart3 } from "react-icons/bs";
import { FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import TopBar from "./TopBar"; // Import TopBar

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <TopBar />
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white py-2 shadow" : "bg-white py-4 shadow"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between px-4">
          {/* Logo */}
          <div className="flex items-center">
            <img
              className={`transition-all duration-300 ${isScrolled ? "h-14" : "h-20"}`}
              src="/img/logo/B2B.png"
              alt="Company Logo"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-6 text-center font-semibold">
              {["Home", "Products", "Pages", "Contact", "About"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="relative block px-1 py-2 text-black transition-colors after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-0 after:bg-[#19B2E7] after:transition-all after:content-[''] hover:text-[#19B2E7] hover:after:w-full"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-600 hover:text-[#19B2E7]"
              >
                <BsSearch size={25} />
              </button>

              {/* Search Input Animation */}
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
                      className="w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-[#19B2E7]"
                      autoFocus
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* User Account */}
            <a href="#" className="p-2 text-gray-600 hover:text-[#19B2E7]">
              <FiUsers size={25} />
            </a>

            {/* Cart */}
            <div className="relative">
              <a href="#" className="p-2 text-gray-600 hover:text-[#19B2E7]">
                <BsCart3 size={25} />
                <span className="absolute -top-1 -right-1 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#152550] text-xs text-white">
                  3
                </span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="p-2 text-gray-600 hover:text-[#19B2E7] lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <CgMenuRightAlt size={30} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 z-50 h-full w-3/4 bg-white p-6 shadow-lg"
            >
              <button
                className="mb-4 text-xl text-gray-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                ✖ Close
              </button>
              <ul className="space-y-4 text-lg font-semibold">
                {["Home", "Products", "Pages", "Contact", "About"].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        to={`/${item.toLowerCase()}`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item}
                      </Link>
                    </li>
                  ),
                )}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;
