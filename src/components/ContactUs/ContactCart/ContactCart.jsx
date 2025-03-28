import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaEnvelope size={40} />,
    title: "Email",
    desc: "contact@yourcompany.com",
  },
  {
    id: 2,
    icon: <FaPhone size={40} />,
    title: "Phone",
    desc: "+123 456 7890",
  },
  {
    id: 3,
    icon: <FaMapMarkerAlt size={40} />,
    title: "Address",
    desc: "123 Main Street, City, Country",
  },
];

const ContactCart = () => {
  return (
    <div className="mt-20 flex items-center justify-center bg-[#FFFF] px-4">
      <div className="grid grid-cols-1 gap-6 px-4 hover:bg-blend-color-burn md:grid-cols-2 lg:w-[1492px] lg:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="rounded-lg border border-gray-200 bg-white p-6 text-center shadow"
          >
            <div className="mb-3 flex justify-center text-[#1447E6]">
              {feature.icon}
            </div>
            <h2 className="text-[20px] font-semibold text-gray-800">
              {feature.title}
            </h2>
            <p className="text-[20px] text-gray-500">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactCart;
