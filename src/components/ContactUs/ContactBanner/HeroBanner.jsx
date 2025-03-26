import React from "react";

const HeroBanner = () => {
  return (
    <div
      className="relative mt-26 h-[400px] w-full bg-cover bg-center md:mt-28 lg:mt-40"
      style={{ backgroundImage: `url('/img/products/hero_1.jpg'` }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-black opacity-50"></div>

      <div className="relative z-10 flex h-full w-full items-center justify-center text-center text-white">
        <div>
          <h1 className="mb-8 text-5xl font-bold">Contact Us</h1>
          <p className="text-lg"></p>
          <a
            href="#"
            className="rounded bg-blue-500 px-4 py-2 font-semibold text-white hover:bg-blue-700"
          >
            Contact Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
