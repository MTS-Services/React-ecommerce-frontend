import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { IoEyeOutline } from "react-icons/io5";
import { CiRepeat } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiStar } from "react-icons/ci";
import { BsCart3 } from "react-icons/bs";
import { MdOutlineStar, MdStarHalf, MdStarOutline } from "react-icons/md";

const products = [
  {
    id: 1,
    name: "Men's Stylish Printed Shirt",
    description: "Men's Wear",
    price: 59.0,
    oldPrice: 79.0,
    image: "/img/products/1_1.jpg",
    hoverImage: "/img/products/1_2.jpg",
  },
  {
    id: 2,
    name: "Casual Denim Jacket",
    description: "Men's Wear",
    price: 89.0,
    image: "/img/products/2_1.jpg",
    hoverImage: "/img/products/2_2.jpg",
  },
  {
    id: 3,
    name: "Classic Leather Boots",
    description: "Footwear",
    price: 120.0,
    oldPrice: 150.0,
    image: "/img/products/4_1.jpg",
    hoverImage: "/img/products/4_2.jpg",
  },
  {
    id: 4,
    name: "Casual Sneakers",
    description: "Footwear",
    price: 95.0,
    image: "/img/products/6_1.jpg",
    hoverImage: "/img/products/6_2.jpg",
  },
  {
    id: 5,
    name: "shoes",
    description: "Footwear",
    price: 105.0,
    image: "/img/products/9_1.jpg",
    hoverImage: "/img/products/9_2.jpg",
  },
  {
    id: 6,
    name: "shoes",
    description: "Footwear",
    price: 75.0,
    oldPrice: 85.0,
    image: "/img/products/1.jpg",
  },
  {
    id: 7,
    name: "shoes",
    description: "Footwear",
    price: 170.0,
    image: "/img/products/2_12.jpg",
  },
  {
    id: 8,
    name: "shoes",
    description: "Footwear",
    price: 95.0,
    oldPrice: 120.0,
    image: "/img/products/3.jpg",
  },
  {
    id: 9,
    name: "shoes",
    description: "Footwear",
    price: 99.0,
    oldPrice: 133.0,
    image: "/img/products/3_1.jpg",
  },
  {
    id: 10,
    name: "shoes",
    description: "Footwear",
    price: 185.0,
    image: "/img/products/4.jpg",
  },
  {
    id: 11,
    name: "shoes",
    description: "Footwear",
    price: 77.0,
    oldPrice: 88.0,
    image: "/img/products/5.jpg",
  },
  {
    id: 12,
    name: "shoes",
    description: "Footwear",
    price: 130.0,
    image: "/img/products/5_1.jpg",
  },
];

const ProductCard2 = ({
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
      className="group relative flex h-[400px] w-[290px] flex-col rounded-lg bg-[#f5f5f5] shadow transition-transform duration-300 hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden rounded-t-lg sm:h-56 md:h-64">
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

const ProductList = () => (
  <div className="container mx-auto mt-44 mb-2 px-4 py-8">
    <div className="m-20 mt-0 mb-0 grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard2 key={product.id} {...product} />
      ))}
    </div>
  </div>
);

export default ProductList;
