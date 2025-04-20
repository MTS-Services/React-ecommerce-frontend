import React from "react";
import { FaHeadphones, FaTruck, FaUndo, FaLock } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaHeadphones size={40} />,
    title: "24/7 Support",
    desc: "We're always here to help you.",
  },
  {
    id: 2,
    icon: <FaTruck size={40} />,
    title: "Free Shipping",
    desc: "On all orders above $200.",
  },
  {
    id: 3,
    icon: <FaUndo size={40} />,
    title: "Easy Returns",
    desc: "Hassle-free 7-day returns.",
  },
  {
    id: 4,
    icon: <FaLock size={40} />,
    title: "Secure Payment",
    desc: "Your payments are safe with us.",
  },
];

const TakingProducts = () => {
  return (
    <div className="mx-auto w-full max-w-[1577px] px-4 pb-8 md:px-8 md:pb-12 lg:px-10 lg:pb-20">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="flex flex-col items-center justify-center gap-4 rounded-xl border border-gray-200 bg-white p-6 shadow transition-shadow duration-300 ease-in-out hover:shadow-lg"
          >
            <div className="text-[#1E3A8A]">{feature.icon}</div>
            <h2 className="text-center text-lg font-semibold text-gray-800">
              {feature.title}
            </h2>
            <p className="text-center text-sm text-gray-500">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TakingProducts;
