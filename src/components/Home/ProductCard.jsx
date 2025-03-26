// components/ProductCard.js
// Removed duplicate import
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

        {/* Hover Icons */}
        <div className="absolute top-0 left-0 mt-26 flex h-full w-full items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
          <div className="flex gap-1">
            {[FiHeart, IoEyeOutline, CiRepeat, BsCart3].map((Icon, index) => (
              <button
                key={index}
                className="cursor-pointer rounded-full bg-white p-3 shadow-lg transition-all hover:bg-gray-200"
              >
                <Icon size={15} className="text-[#0EA5E9]" />
              </button>
            ))}
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
          {[...Array(4)].map((_, i) => (
            <MdOutlineStar key={i} size={18} />
          ))}
          <MdStarHalf size={18} />
        </p>
        <div className="mt-4 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
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
  );
};

export { ProductCard };

// components/CategorySidebar.js
import React, { useState } from "react";

const CategorySidebar = () => {
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [weightOpen, setWeightOpen] = useState(false);

  const categories = [
    "Dried Fruit",
    "Cookies",
    "Foods",
    "Fresh Fruit",
    "Tuber Root",
    "Vegetables",
    "Snacks",
    "Unicafe",
    "Jewellery",
  ];
  const weightOptions = ["2kg", "5kg", "10kg", "15kg", "2pack"];

  const renderDropdown = (label, isOpen, setIsOpen, items) => (
    <div
      className="cursor-pointer border-b border-gray-200 p-4"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center justify-between">
        <span className="font-medium text-gray-700">{label}</span>
        <span className="text-gray-500">{isOpen ? "▼" : "▶"}</span>
      </div>
      {isOpen && (
        <div className="p-2">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex cursor-pointer items-center gap-2 p-2 hover:bg-gray-100"
            >
              <input type="checkbox" className="h-4 w-4" />
              <span className="text-gray-600">{item}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  return (
    <div className="mt-20 mb-6 rounded-lg border border-gray-200 bg-gray-50">
      {renderDropdown("Category", categoryOpen, setCategoryOpen, categories)}
      {renderDropdown("Weight", weightOpen, setWeightOpen, weightOptions)}
    </div>
  );
};

export { CategorySidebar };

// ProductList.js
// Removed duplicate import of ProductCard
// Removed redundant import of CategorySidebar

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

const ProductList = () => (
  <div className="container mx-auto mt-20 mb-2 px-1 py-6">
    <div className="flex flex-col gap-8 lg:flex-row">
      <div className="w-full lg:w-1/5">
        <CategorySidebar />
      </div>
      <div className="w-full lg:w-4/5">
        <div className="mt-20 grid grid-cols-1 gap-x-25 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  </div>
);

export default ProductList;
