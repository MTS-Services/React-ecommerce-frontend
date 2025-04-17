import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const SuccessPage = () => {
  return (
    <motion.div
      className="flex h-screen flex-col items-center justify-center bg-green-100"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Animated Checkmark */}
      <motion.div
        className="flex h-24 w-24 items-center justify-center rounded-full bg-green-500"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 120 }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="white"
          width="50"
          height="50"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <path
            fillRule="evenodd"
            d="M9 16.2l-4.5-4.5L3 13.2 9 19 21 7l-1.5-1.5L9 16.2z"
          />
        </motion.svg>
      </motion.div>

      <motion.h1
        className="mt-4 text-3xl font-bold text-green-600"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Payment Successful!
      </motion.h1>
      <motion.p
        className="mt-4 text-lg text-gray-700"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Thank you for your purchase.
      </motion.p>

      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Link
          to="/"
          className="rounded-lg bg-green-600 px-6 py-3 text-white shadow-lg transition hover:bg-green-700"
        >
          Go Back to Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default SuccessPage;
