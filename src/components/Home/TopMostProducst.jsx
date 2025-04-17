import React from "react";

const TopMostProducst = () => {
  return (
    <div className="pt-20">
      <div
        className="relative h-[96%] w-full rounded-2xl bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/products/19_1.jpg')",
        }}
      >
        {/* Darker Overlay */}
        <div className="absolute inset-0 rounded-md bg-gray-900 opacity-30"></div>
        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h2 className="text-3xl font-bold text-white">Top Most Products</h2>
          <p className="mt-2 text-xl font-medium text-white">
            Products Check It Now
          </p>
          <div className="mt-4 w-full px-4">
            <button className="cursor-pointer rounded-sm bg-blue-800 px-4 py-2 font-semibold text-white transition-all hover:bg-blue-600">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopMostProducst;
