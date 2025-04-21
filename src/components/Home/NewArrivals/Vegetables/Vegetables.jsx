import React from "react";
import ProductCard from "../../../Products/ProductCard";

const Vegetables = () => {
  const products = [
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
      id: 1,
      name: "Men's Stylish Printed Shirt",
      description: "Men's Wear",
      price: 59.0,
      oldPrice: 79.0,
      image: "/img/products/1_1.jpg",
      hoverImage: "/img/products/1_2.jpg",
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
      name: "Foods With Dringk",
      description: "Footwear",
      price: 105.0,
      image: "/img/products/13_1.jpg",
      hoverImage: "/img/products/9_2.jpg",
    },
    {
      id: 6,
      name: "Union Shoes",
      description: "Footwear",
      price: 75.0,
      oldPrice: 85.0,
      image: "/img/products/19_1.jpg",
      hoverImage: "/img/products/9_2.jpg",
    },
    {
      id: 6,
      name: "Union Shoes",
      description: "Footwear",
      price: 75.0,
      oldPrice: 85.0,
      image: "/img/products/19_1.jpg",
      hoverImage: "/img/products/9_2.jpg",
    },
    {
      id: 7,
      name: "Orange Shoes",
      description: "Footwear",
      price: 170.0,
      image: "/img/products/18_1.jpg",
      hoverImage: "/img/products/9_2.jpg",
    },
    {
      id: 8,
      name: "Bedona Shoes",
      description: "Footwear",
      price: 95.0,
      oldPrice: 120.0,
      image: "/img/products/23_1.jpg",
      hoverImage: "/img/products/9_2.jpg",
    },
  ];
  return (
    <div className="">
      <div className="">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Vegetables;
