import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const CancelPage = () => {
  return (
    <motion.div className="flex h-screen flex-col items-center justify-center bg-red-100">
      {/* Animated Cross Icon */}
      <motion.div
        className="flex h-16 w-16 items-center justify-center rounded-full bg-red-500"
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
            d="M6.225 4.811a1 1 0 011.414 0L12 9.172l4.361-4.361a1 1 0 011.415 1.414L13.415 10.586l4.36 4.361a1 1 0 01-1.414 1.414L12 12l-4.361 4.361a1 1 0 11-1.414-1.414l4.36-4.361-4.36-4.361a1 1 0 010-1.414z"
          />
        </motion.svg>
      </motion.div>

      <motion.h1
        className="mt-4 text-3xl font-bold text-red-600"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Payment Cancelled
      </motion.h1>

      <motion.p
        className="mt-4 text-lg text-gray-700"
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
      >
        Your payment was not completed.
      </motion.p>

      <motion.div
        className="mt-6 flex space-x-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <Link
          to="/checkout"
          className="rounded-lg bg-red-600 px-6 py-3 text-white shadow-lg transition hover:bg-red-700"
        >
          Try Again
        </Link>
        <Link
          to="/"
          className="rounded-lg bg-gray-600 px-6 py-3 text-white shadow-lg transition hover:bg-gray-700"
        >
          Go Back to Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default CancelPage;
