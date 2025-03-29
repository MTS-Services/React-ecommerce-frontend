import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { CiRepeat } from "react-icons/ci";

import { BsCart3 } from "react-icons/bs";
import { MdOutlineStar, MdStarHalf } from "react-icons/md";

const ProductCard = ({
  name,
  description,
  price,
  oldPrice,
  image,
  hoverImage,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative flex flex-col rounded-lg bg-[#f5f5f5] shadow transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 cursor-pointer overflow-hidden rounded-t-lg sm:h-56 md:h-64">
        <img
          className="h-full w-full object-cover transition-opacity duration-300"
          src={isHovered && hoverImage ? hoverImage : image}
          alt={name}
        />

        {/* Icons that appear on hover */}
        <div className="absolute top-0 left-0 mt-26 flex h-full w-full items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex gap-1">
            <button className="cursor-pointer rounded-full bg-white p-3 shadow-lg transition-all hover:bg-gray-200">
              <FiHeart size={15} className="text-[#0EA5E9]" />
            </button>
            <button className="cursor-pointer rounded-full bg-white p-3 shadow-lg transition-all hover:bg-gray-200">
              <IoEyeOutline size={15} className="text-[#0EA5E9]" />
            </button>
            <button className="cursor-pointer rounded-full bg-white p-3 shadow-lg transition-all hover:bg-gray-200">
              <CiRepeat size={15} className="text-[#0EA5E9]" />
            </button>
            <button className="cursor-pointer rounded-full bg-white p-3 shadow-lg transition-all hover:bg-gray-200">
              <BsCart3 size={15} className="text-[#0EA5E9]" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-grow flex-col justify-between p-4">
        <div>
          <p className="text-sm text-gray-500">{description}</p>
          <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
            {name}
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
