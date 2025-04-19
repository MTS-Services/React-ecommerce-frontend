import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Product 1", price: "$10", image: "/img/products/1_1.jpg" },
    { id: 2, name: "Product 2", price: "$20", image: "/img/products/1_1.jpg" },
  ]);

  const links = ["Home", "Products", "Pages", "Contact", "About"];

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
                <SlCallEnd size={20} />
              </span>
              +880 1886-159495
            </span>
          </div>
          <div className="flex items-center space-x-3">
            <a
              href="https://www.facebook.com/MakTechSolution/"
              target="_blank"
              className="text-gray-600 transition-colors hover:text-[#19B2E7]"
            >
              <SlSocialFacebook size={20} />
            </a>
            <a
              href="https://x.com/MakTechSolution"
              target="_blank"
              className="text-gray-600 transition-colors hover:text-[#19B2E7]"
            >
              <SlSocialTwitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/maktechsolution/"
              target="_blank"
              className="text-gray-600 transition-colors hover:text-[#19B2E7]"
            >
              <SlSocialInstagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/maktechsolution"
              target="_blank"
              className="text-gray-600 transition-colors hover:text-[#19B2E7]"
            >
              <SlSocialLinkedin size={20} />
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
                    className="absolute top-full right-0 mt-2 rounded-lg bg-white shadow-lg"
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
                <span className="absolute -top-1 -right-1 mt-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#152550] p-3 text-xs text-white">
                  {cartItems.length}
                </span>
              </button>
              <AnimatePresence>
                {isCartOpen && (
                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="absolute right-0 z-10 mt-4 h-screen w-[350px] rounded-lg bg-white p-4 shadow-lg"
                  >
                    <h3 className="mb-2 font-semibold">Your Cart</h3>
                    {cartItems.length === 0 ? (
                      <p>Your cart is empty.</p>
                    ) : (
                      <div>
                        {cartItems.map((item) => (
                          <div key={item.id} className="mb-4 flex items-center">
                            <div className="flex w-full items-center justify-between rounded-lg border border-gray-300 bg-white p-4 shadow-md transition-all duration-300 hover:shadow-lg">
                              <div className="flex gap-4">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="h-16 w-16 rounded-lg object-cover"
                                />
                                <div>
                                  <h4 className="text-xl font-semibold text-gray-900">
                                    {item.name}
                                  </h4>
                                  <p className="text-sm font-medium text-gray-600">
                                    {item.price}
                                  </p>
                                </div>
                              </div>
                              <button
                                onClick={() => removeFromCart(item.id)}
                                className="rounded-md bg-red-600 p-2 text-sm font-medium text-white transition-all duration-300 hover:bg-red-700"
                              >
                                <AiOutlineDelete className="text-[20px]" />
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                    <div className="border-t-2 border-gray-200 py-6">
                      <div className="flex flex-col space-y-4 px-4">
                        <div className="flex items-center justify-between">
                          <p className="text-[18px] font-bold text-gray-500">
                            Sub-Total:
                          </p>
                          <p className="text-[20px] font-bold text-[#545454]">
                            $2134
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-[18px] font-bold text-gray-500">
                            Vat (20%):
                          </p>
                          <p className="text-[20px] font-bold text-[#545454]">
                            $2134
                          </p>
                        </div>
                        <div className="flex items-center justify-between">
                          <p className="text-[18px] font-bold text-gray-500">
                            Total:
                          </p>
                          <p className="text-[20px] font-bold text-[#545454]">
                            $2134
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-2 text-center">
                      <button className="w-full rounded bg-blue-500 py-2 text-[10px] text-white">
                        Go to Checkout
                      </button>
                      <button
                        onClick={addToCart}
                        className="w-full rounded bg-green-500 py-2 text-[10px] text-white"
                      >
                        Add New Product
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
