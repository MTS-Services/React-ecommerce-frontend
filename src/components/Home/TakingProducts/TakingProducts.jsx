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
    <div className="flex items-center justify-center bg-[#FFFF] px-4 pt-8 lg:py-[100px]">
      <div className="grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="rounded-lg border border-gray-300 bg-white p-6 text-center shadow-md"
          >
            <div className="mb-3 flex justify-center text-[#1E3A8A]">
              {feature.icon}
            </div>
            <h2 className="text-lg font-semibold text-gray-800">
              {feature.title}
            </h2>
            <p className="text-sm text-gray-500">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TakingProducts;
