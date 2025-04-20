import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { GoMail, GoSearch } from "react-icons/go";
import {
  SlSocialFacebook,
  SlSocialLinkedin,
  SlCallEnd,
  SlSocialTwitter,
  SlSocialInstagram,
} from "react-icons/sl";
import { BsCart3 } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import { ShiftingDropDown } from "./ShiftDropDown";
import { HiMenuAlt3 } from "react-icons/hi";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: "$10", image: "/img/products/1_1.jpg" },
    { id: 2, name: "Product 2", price: "$20", image: "/img/products/1_1.jpg" },
  ]);

  const links = ["Home", "Products", "Contact", "About"];

  const toggleCart = () => setIsCartOpen(!isCartOpen);

  const addToCart = () => {
    const newItem = {
      id: cartItems.length + 1,
      name: `Product ${cartItems.length + 1}`,
      price: "$30",
      image: "/img/products/1_1.jpg",
    };
    setCartItems([...cartItems, newItem]);
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

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
        {/* Top bar */}
        <div className="mb-4 hidden items-center justify-between border-b border-gray-200 pb-2 text-sm text-gray-600 lg:flex">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex items-center">
              <GoMail className="mr-1" />
              contact@maktechsolution.com
            </span>
            <span className="flex items-center">
              <SlCallEnd className="mr-1" />
              +880 1886-159495
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="https://www.facebook.com/MakTechSolution/"
              target="_blank"
              className="hover:text-[#19B2E7]"
            >
              <SlSocialFacebook size={20} />
            </a>
            <a
              href="https://x.com/MakTechSolution"
              target="_blank"
              className="hover:text-[#19B2E7]"
            >
              <SlSocialTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/maktechsolution/"
              target="_blank"
              className="hover:text-[#19B2E7]"
            >
              <SlSocialInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/maktechsolution"
              target="_blank"
              className="hover:text-[#19B2E7]"
            >
              <SlSocialLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Logo & Navbar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <img
              className={`transition-all duration-300 ${
                isScrolled ? "h-14" : "h-20"
              }`}
              src="/img/logo/B2B.png"
              alt="Company Logo"
            />
          </Link>

          {/* Mobile toggle */}
          <button
            className="ml-auto text-gray-600 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          ></button>
          {/* Mobile toggle (react icon) */}
          <button
            className="ml-auto text-gray-600 lg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <HiMenuAlt3 size={28} />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden items-center space-x-6 font-semibold lg:flex">
            <ul className="flex items-center space-x-6 text-center">
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

              {/* <ShiftingDropDown /> exactly after About */}
              <li className="mb-8">
                <ShiftingDropDown />
              </li>
            </ul>

            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setSearchOpen(!searchOpen)}
                className="p-2 text-gray-600 transition-colors hover:text-[#19B2E7]"
              >
                <GoSearch size={25} />
              </button>
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    initial={{ opacity: 0, width: 0 }}
                    animate={{ opacity: 1, width: "300px" }}
                    exit={{ opacity: 0, width: 0 }}
                    className="absolute top-full right-0 mt-2 w-[300px] max-w-[90vw] rounded-lg bg-white shadow-lg"
                  >
                    <input
                      type="text"
                      placeholder="Search products..."
                      className="w-full rounded-md border border-gray-300 p-2 shadow-sm focus:ring-2 focus:ring-[#19B2E7] focus:outline-none"
                      autoFocus
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Cart */}
            <div className="relative">
              <button
                onClick={toggleCart}
                className="relative p-4 text-gray-600 transition-colors hover:text-[#19B2E7]"
              >
                <BsCart3 size={25} />
                <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#152550] text-[12px] text-white">
                  {cartItems.length}
                </span>
              </button>

              {isCartOpen && (
                <div className="absolute right-0 z-50 mt-4 max-h-[90vh] w-[360px] max-w-[90vw] overflow-y-auto rounded-lg border border-gray-200 bg-white p-5 shadow-xl">
                  <h3 className="mb-3 flex items-center gap-2 text-xl font-semibold text-gray-800">
                    <BsCart3 />
                    Your Cart
                  </h3>

                  {cartItems.length === 0 ? (
                    <div className="text-center text-sm text-gray-500">
                      Your cart is empty.
                    </div>
                  ) : (
                    <div className="space-y-4">
                      {cartItems.map((item) => (
                        <div
                          key={item.id}
                          className="flex items-center justify-between rounded-md border border-gray-200 bg-white p-3 shadow transition-all hover:shadow-md"
                        >
                          <div className="flex items-center gap-3">
                            <img
                              src={item.image}
                              alt={item.name}
                              className="h-14 w-14 rounded object-cover"
                            />
                            <div>
                              <h4 className="text-base font-semibold text-gray-900">
                                {item.name}
                              </h4>
                              <p className="text-sm font-medium text-gray-600">
                                {item.price}
                              </p>
                            </div>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="rounded bg-red-500 p-2 text-white hover:bg-red-600"
                          >
                            <AiOutlineDelete className="text-lg" />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-5 border-t pt-4">
                    <div className="space-y-2 text-sm text-gray-700">
                      <div className="flex justify-between font-medium">
                        <span>Sub-Total:</span>
                        <span>$2134</span>
                      </div>
                      <div className="flex justify-between font-medium">
                        <span>VAT (20%):</span>
                        <span>$427</span>
                      </div>
                      <div className="flex justify-between text-lg font-bold text-gray-900">
                        <span>Total:</span>
                        <span>$2561</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                    <Link
                      to="/checkout"
                      className="w-full rounded-md bg-blue-600 px-6 py-2 text-center text-sm text-white transition hover:bg-blue-700 sm:w-1/2"
                    >
                      Go to Checkout
                    </Link>
                    <button
                      onClick={addToCart}
                      className="w-full rounded-md bg-green-600 py-2 text-sm text-white transition hover:bg-green-700 sm:w-1/2"
                    >
                      Add Product
                    </button>
                  </div>
                </div>
              )}
            </div>
          </nav>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="mt-4 space-y-4 rounded-lg bg-white p-6 shadow-lg lg:hidden">
            <ul className="flex flex-col gap-4 font-semibold">
              {links.map((link, index) => {
                const href =
                  link.toLowerCase() === "home"
                    ? "/"
                    : `/${link.toLowerCase()}`;
                return (
                  <li key={index}>
                    <a
                      href={href}
                      className="block text-black transition-all duration-300 ease-in-out hover:text-[#19B2E7]"
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* ShiftingDropDown */}
            <div className="ml-[-34px] md:ml-[-200px]">
              <ShiftingDropDown />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
