import React from "react";

import "./freshFruits.css"; // Import the styles

const OfferBanner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="w-full max-w-[1527px] gap-6 px-4 sm:grid-cols-1 md:grid-cols-1">
        {[1].map((index) => (
          <div
            key={index}
            className="group relative h-[390px] overflow-hidden rounded-[6px] bg-white"
          >
            {/* Background Image */}
            <div
              className="h-full w-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('/img/products/hero_1.jpg')`,
              }}
            >
              {/* Always Visible Overlay */}
              <div className="absolute inset-0 bg-black opacity-30"></div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-blue-800 opacity-0 transition-opacity"></div>
            </div>

            {/* Content inside the banner */}
            <div className="absolute inset-0 flex items-center justify-end p-4">
              <div className="max-w-md pr-8 pl-16 text-right">
                <h2 className="text-3xl font-extrabold text-[#FFF]">
                  Fresh Fruits Healthy Products
                </h2>
                <h3 className="mt-4 text-[24px] font-extrabold text-gray-800">
                  <span className="text-[24px] font-extrabold text-[#1E3A8A]">
                    30% off sale
                  </span>{" "}
                  Hurry up!!!
                </h3>
                <div className="mt-4">
                  <button className="cursor-pointer rounded-sm bg-blue-800 px-4 py-2 font-semibold text-white transition-all hover:bg-blue-600">
                    Shop Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferBanner;
