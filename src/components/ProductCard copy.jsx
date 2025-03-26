import React from "react";

const products = [
  {
    id: 1,
    name: "Men's Stylish Printed Shirt",
    description: "Men's Wear",
    price: 59.0,
    oldPrice: 79.0,
    image: "/public/img/products/1.jpg",
  },
  {
    id: 2,
    name: "Casual Denim Jacket",
    description: "Men's Wear",
    price: 89.0,
    image: "/public/img/products/1_1.jpg",
  },
  {
    id: 3,
    name: "Classic Leather Boots",
    description: "Footwear",
    price: 120.0,
    oldPrice: 150.0,
    image: "/public/img/products/1_2.jpg",
  },
  {
    id: 4,
    name: "Casual Sneakers",
    description: "Footwear",
    price: 95.0,
    image: "/public/img/products/2.jpg",
  },
  {
    id: 5,
    name: "shoes",
    description: "Footwear",
    price: 105.0,
    image: "/public/img/products/2_1.jpg",
  },
  {
    id: 6,
    name: "shoes",
    description: "Footwear",
    price: 75.0,
    oldPrice: 85.0,
    image: "/public/img/products/2_2.jpg",
  },
  {
    id: 7,
    name: "shoes",
    description: "Footwear",
    price: 170.0,
    image: "/public/img/products/5.jpg",
  },
  {
    id: 8,
    name: "shoes",
    description: "Footwear",
    price: 95.0,
    oldPrice: 120.0,
    image: "/public/img/products/3.jpg",
  },
  {
    id: 9,
    name: "shoes",
    description: "Footwear",
    price: 99.0,
    oldPrice: 133.0,
    image: "/public/img/products/3_1.jpg",
  },
  {
    id: 10,
    name: "shoes",
    description: "Footwear",
    price: 185.0,
    image: "/public/img/products/4.jpg",
  },
  {
    id: 11,
    name: "shoes",
    description: "Footwear",
    price: 77.0,
    oldPrice: 88.0,
    image: "/public/img/products/4_1.jpg",
  },
  {
    id: 12,
    name: "shoes",
    description: "Footwear",
    price: 130.0,
    image: "/public/img/products/4_2.jpg",
  },
];

const ProductCard = ({ name, description, price, oldPrice, image }) => (
  <div className="flex h-[400px] w-[300px] flex-col rounded-lg bg-[#f5f5f5] shadow-lg transition-transform duration-300 hover:scale-105">
    <div className="h-48 overflow-hidden rounded-t-lg sm:h-56 md:h-64">
      <img className="h-full w-full object-cover" src={image} alt={name} />
    </div>
    <div className="flex flex-grow flex-col justify-between p-4">
      <div>
        <p className="text-sm text-gray-500">{description}</p>
        <h2 className="line-clamp-2 text-lg font-semibold text-gray-800">
          {name}
        </h2>
      </div>
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
        <button className="w-full rounded bg-[#38bdf8] px-3 py-2 text-sm font-bold text-white shadow-[3px_3px_0_#0ea5e9] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[#0ea5e9] hover:text-[#0F172A] hover:shadow-[1px_1px_0_#0ea5e9] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none sm:w-auto md:text-base">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

const ProductList = () => (
  <div className="container mx-auto mt-20 mb-2 px-4 py-8">
    <div className="m-20 mt-0 mb-0 grid grid-cols-1 gap-2 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  </div>
);

export default ProductList;
