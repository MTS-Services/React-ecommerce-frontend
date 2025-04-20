import React, { useState, useEffect } from "react";

import { CgMenuRightAlt } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import { CartModal } from "../components/cart/CartModals";
import SearchComponent from "../components/common/SearchComponent";
import Topbar from "./Topbar";

const Navbar = () => {
  // State to manage visibility of dropdown menus
  const [isScrolled, setIsScrolled] = useState(false);

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
      <div className="container mx-auto">
        {/* Top bar with contact and social info */}
        <Topbar isScrolled={isScrolled} />
        {/* Main navigation */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <img
              className={`transition-all duration-300 ${isScrolled ? "h-14" : "h-16"}`}
              src="/img/logo/B2B.png" // Adjust the path as needed
              alt="Company Logo"
            />
          </div>

          {/* Main navigation links */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-6 text-center text-lg font-bold">
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
            <SearchComponent />

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
            <CartModal />

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
