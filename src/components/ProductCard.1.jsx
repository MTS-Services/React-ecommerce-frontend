import React from "react";

export const ProductCard = ({ name, description, price, image }) => (
  <div className="flex h-[480px] w-[390px] flex-col rounded-lg bg-[#f5f5f5] shadow-lg transition-transform duration-300 hover:scale-105">
    <img
      className="h-64 w-full rounded-t-lg object-cover"
      src={image}
      alt={name}
    />
    <div className="p-4">
      <p className="text-sm text-gray-500">{description}</p>
      <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
      <div className="mt-4 flex items-center justify-between">
        <span className="text-gray-400 line-through">${oldPrice}</span>
        <span className="text-xl font-bold text-gray-900">
          ${price.toFixed(2)}
        </span>
        <button className="rounded bg-[#38bdf8] px-4 py-2 text-base font-bold text-white shadow-[3px_3px_0_#0ea5e9] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[#0ea5e9] hover:text-[#0F172A] hover:shadow-[1px_1px_0_#0ea5e9] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);
