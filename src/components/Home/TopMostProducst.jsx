import React from "react";

const TopMostProducts = () => {
  return (
    <div className="mt-4 px-2 md:px-4 lg:px-4 xl:px-4">
      <div
        className="relative flex h-[250px] w-full flex-col items-center justify-start rounded-2xl bg-cover bg-center p-6 md:h-[350px] md:p-8 lg:h-[375px] lg:p-12 xl:h-[415px]"
        style={{
          backgroundImage: "url('/img/products/19_1.jpg')",
        }}
      >
        {/* Semi-transparent gradient for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent"></div>

        {/* Text Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          <h1 className="text-sm font-semibold text-white sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
            Our Top Most
          </h1>
          <p className="mt-1 text-xs text-white sm:text-sm md:text-base lg:text-lg">
            Products Check It Now
          </p>
          <div className="mt-4">
            <button className="cursor-pointer rounded-full bg-blue-700 px-5 py-2 text-xs font-medium text-white transition-all hover:bg-blue-500 sm:px-6 sm:py-3 sm:text-sm md:text-base lg:text-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMostProducts;
