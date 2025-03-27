import React from "react";

const TopMostProducts = () => {
  return (
    <div className="mt-8 px-4">
      <div
        className="relative h-[300px] w-full rounded-2xl bg-cover bg-center md:h-[400px] lg:h-[400px]"
        style={{
          backgroundImage: "url('/img/products/4_12.jpg')",
        }}
      >
        {/* Darker Overlay */}
        <div className="absolute inset-0 bg-black opacity-75"></div>

        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
          <h1 className="text-2xl font-bold text-white md:text-3xl lg:text-4xl xl:text-5xl">
            Our Top Most
          </h1>
          <p className="mt-2 text-lg text-white md:text-xl lg:text-2xl">
            Products Check It Now
          </p>
          <div className="mt-4">
            <button className="cursor-pointer rounded-md bg-blue-800 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-blue-600 md:text-base lg:text-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMostProducts;
