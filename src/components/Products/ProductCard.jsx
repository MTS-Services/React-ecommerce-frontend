import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiHeart } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { CiRepeat } from "react-icons/ci";

import { BsCart3 } from "react-icons/bs";
import { MdOutlineStar, MdStarHalf } from "react-icons/md";

const ProductCard = ({ id, title, price, oldPrice, image }) => {
  return (
    <div className="group relative flex flex-col rounded-lg bg-[#f5f5f5] shadow transition-transform duration-300 hover:scale-105">
      <div className="relative h-44 cursor-pointer overflow-hidden rounded-t-lg sm:h-56 md:h-64">
        <Link to={`/products/${id}`}>
          <img
            className="h-full w-full object-contain transition-opacity duration-300"
            src={image}
            alt={title}
          />
        </Link>

        {/* Icons that appear on hover */}
        {/* Icons that appear on hover */}
        <div className="absolute top-0 left-0 mt-14 flex h-full w-full items-center justify-center opacity-0 transition-opacity group-hover:opacity-100 lg:mt-24">
          <div className="flex gap-1">
            <div className="cursor-pointer rounded-full border border-gray-200 bg-white p-2 shadow-lg transition-all hover:bg-gray-200 lg:p-4">
              <FiHeart className="size-5 text-[#0EA5E9]" />
            </div>
            <Link
              to={`/products/${id}`}
              className="cursor-pointer rounded-full border border-gray-300 bg-white p-2 shadow-lg transition-all hover:bg-gray-200 lg:p-4"
            >
              <IoEyeOutline className="size-5 text-[#0EA5E9]" />
            </Link>
            <div className="cursor-pointer rounded-full border border-gray-300 bg-white p-2 shadow-lg transition-all hover:bg-gray-200 lg:p-4">
              <CiRepeat className="size-5 text-[#0EA5E9]" />
            </div>
            <div className="cursor-pointer rounded-full border border-gray-300 bg-white p-2 shadow-lg transition-all hover:bg-gray-200 lg:p-4">
              <BsCart3 className="size-5 text-[#0EA5E9]" />
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-grow flex-col justify-between p-4">
        <div>
          <h2 className="line-clamp-2 font-semibold text-gray-800 lg:text-lg">
            {title}
          </h2>
        </div>
        <p className="flex items-center text-amber-600">
          <MdOutlineStar size={18} />
          <MdOutlineStar size={18} />
          <MdOutlineStar size={18} />
          <MdOutlineStar size={18} />
          <MdStarHalf size={18} />
        </p>

        <div className="mt-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <div className="mb-2 flex items-center gap-2 sm:mb-0">
            <span className="text-xl font-bold text-gray-900">
              ${price.toFixed(2)}
            </span>
            {oldPrice && (
              <span className="text-sm text-gray-500 line-through">
                ${oldPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
