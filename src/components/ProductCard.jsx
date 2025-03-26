import React from 'react';

const products = [
  {
    id: 1,
    name: "Men's Stylish Printed Shirt",
    description: "Men's Wear",
    price: 59.0,
    oldPrice: 79.0,
    image: '/images/product1.jpg',
  },
  {
    id: 2,
    name: 'Casual Denim Jacket',
    description: "Men's Wear",
    price: 89.0,
    image: '/images/product2.jpg',
  },
  {
    id: 3,
    name: 'Classic Leather Boots',
    description: 'Footwear',
    price: 120.0,
    oldPrice: 150.0,
    image: '/images/product3.jpg',
  },
  {
    id: 4,
    name: 'Casual Sneakers',
    description: 'Footwear',
    price: 95.0,
    image: '/images/product4.jpg',
  },
  {
    id: 5,
    name: 'shoes',
    description: 'Footwear',
    price: 105.0,
    image: '/images/product5.jpg',
  },
  {
    id: 6,
    name: 'shoes',
    description: 'Footwear',
    price: 75.0,
    oldPrice: 85.0,
    image: '/images/product6.jpg',
  },
  {
    id: 7,
    name: 'shoes',
    description: 'Footwear',
    price: 170.0,
    image: '/images/product7.jpg',
  },
  {
    id: 8,
    name: 'shoes',
    description: 'Footwear',
    price: 95.0,
    oldPrice: 120.0,
    image: '/images/product8.jpg',
  },
  {
    id: 9,
    name: 'shoes',
    description: 'Footwear',
    price: 99.0,
    oldPrice: 133.0,
    image: '/images/product9.jpg',
  },
  {
    id: 10,
    name: 'shoes',
    description: 'Footwear',
    price: 185.0,
    image: '/images/product10.jpg',
  },
  {
    id: 11,
    name: 'shoes',
    description: 'Footwear',
    price: 77.0,
    oldPrice: 88.0,
    image: '/images/product11.jpg',
  },
  {
    id: 12,
    name: 'shoes',
    description: 'Footwear',
    price: 130.0,
    image: '/images/product12.jpg',
  },
];

const ProductCard = ({ name, description, price, oldPrice, image }) => (
  <div className='flex h-[400px] w-[300px] flex-col rounded-lg bg-[#f5f5f5] shadow-lg transition-transform duration-300 hover:scale-105'>
    <img
      className='h-64 w-full rounded-t-lg object-cover'
      src={image}
      alt={name}
    />
    <div className='p-4'>
      <p className='text-sm text-gray-500'>{description}</p>
      <h2 className='text-lg font-semibold text-gray-800'>{name}</h2>
      <div className='mt-4 flex items-center justify-between gap-2'>
        <span className='text-xl font-bold text-gray-900'>
          ${price.toFixed(2)}
        </span>
        {oldPrice && (
          <span className='text-sm text-gray-500 line-through'>
            ${oldPrice.toFixed(2)}
          </span>
        )}
        <button className='rounded bg-[#38bdf8] px-4 py-2 text-base font-bold text-white shadow-[3px_3px_0_#0ea5e9] transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:bg-[#0ea5e9] hover:text-[#0F172A] hover:shadow-[1px_1px_0_#0ea5e9] active:translate-x-[3px] active:translate-y-[3px] active:shadow-none'>
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

const ProductList = () => (
  <div className='m-50 mt-2 mb-2 grid grid-cols-1 justify-center gap-6 p-10 md:grid-cols-2 lg:grid-cols-4'>
    {products.map((product) => (
      <ProductCard key={product.id} {...product} />
    ))}
  </div>
);

export default ProductList;
