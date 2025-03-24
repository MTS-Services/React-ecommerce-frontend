import React from "react";

const TopMostProducst = () => {
  return (
    <div className="mt-10">
      <div
        className="relative h-[96%] w-full rounded-2xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://img.freepik.com/free-photo/vegetables-multicolored-fresh-ripe-salad-top-view-green-rustic-wooden-surface_140725-14216.jpg?semt=ais_hybrid')",
        }}
      >
        {/* Darker Overlay */}
        <div className="absolute inset-0 bg-black opacity-75"></div>
        {/* Centered Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold text-white">Our Top Most</h1>
          <p className="mt-2 text-2xl text-white">Products Check It Now</p>
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
