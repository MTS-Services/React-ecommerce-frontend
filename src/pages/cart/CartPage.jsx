import React, { useState } from "react";

import { FaTrash } from "react-icons/fa";

const products = [
  {
    id: 1,
    name: "Product 1",
    price: 25.99,
    quantity: 2,
    image: "/img/products/1_1.jpg",
  },
  {
    id: 2,
    name: "Product 2",
    price: 40.0,
    quantity: 1,
    image: "/img/products/1_2.jpg",
  },
];

const DELIVERY_CHARGE = 5;

const CartView = () => {
  const [cartItems, setCartItems] = useState(products);

  const incrementItemQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const handleDecrease = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const handleRemove = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const total = subtotal + DELIVERY_CHARGE;

  return (
    <section className="p-4 lg:px-10 xl:px-44">
      <h1 className="mb-6 text-3xl font-semibold">Cart page</h1>
      {cartItems.length === 0 ? (
        <div className="flex h-60 flex-col items-center justify-center text-xl font-semibold text-gray-500">
          🛒 Your cart is empty
        </div>
      ) : (
        <div className="space-y-6 lg:flex lg:gap-6">
          {/* Left Column: Summary */}
          <div className="space-y-6 rounded-lg border border-gray-200 bg-[#f8f8fb] p-4 md:w-full lg:w-1/3">
            <div>
              <h2 className="mb-2 text-xl font-semibold text-[#4b5966]">
                Summary
              </h2>
              <h2 className="text-xl font-semibold text-[#777]">
                Estimate Shipping
              </h2>
            </div>
            <hr className="my-4 border-gray-200" />
            <div className="space-y-6">
              <p className="font-normal text-gray-500">
                Enter your destination to get a shipping estimate
              </p>
              <div>
                <label className="text-gray-600" htmlFor="name">
                  Country *
                </label>
                <select className="h-[50px] w-full rounded-md border border-gray-200 bg-white p-2 font-normal text-gray-600">
                  <option value="USA">United States</option>
                  <option value="CAN">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AUS">Australia</option>
                  <option value="GER">Germany</option>
                  <option value="FRA">France</option>
                  <option value="IND">India</option>
                  <option value="BAN">Bangladesh</option>
                </select>
              </div>

              <div>
                <label className="text-gray-600" htmlFor="name">
                  State/Province
                </label>
                <select className="h-[50px] w-full rounded-md border border-gray-200 bg-white p-2 text-gray-600">
                  <option value="USA"></option>
                  <option value="USA">United States</option>
                  <option value="CAN">Canada</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AUS">Australia</option>
                  <option value="GER">Germany</option>
                  <option value="FRA">France</option>
                  <option value="IND">India</option>
                  <option value="BAN">Bangladesh</option>
                </select>
              </div>
              <div>
                <label className="text-gray-600" htmlFor="name">
                  Zip/Postal Code
                </label>
                <input
                  type="text"
                  className="h-[50px] w-full rounded-md border border-gray-200 p-2"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="text-gray-500">Subtotal</p>
                <p className="font-semibold text-gray-600">
                  ${subtotal.toFixed(2)}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Delivery Charges</p>
                <p className="font-semibold text-gray-600">$5.00</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-500">Coupon Discount</p>
                <p className="cursor-pointer font-semibold text-blue-500 underline">
                  Apply Discount
                </p>
              </div>
              <hr className="my-4 border-gray-200" />
              <div className="mt-4 flex justify-between text-xl font-semibold">
                <p>Total</p>
                <p>${total.toFixed(2)}</p>
              </div>
            </div>
          </div>

          {/* Right Column: Product Item Table */}
          <div className="space-y-2 rounded-lg md:w-full lg:w-2/3">
            <table className="w-full table-auto">
              <thead className="border-b border-b-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-500">Product</th>
                  <th className="px-4 py-2 text-center text-gray-500">Price</th>
                  <th className="px-4 py-2 text-center text-gray-500">
                    Quantity
                  </th>
                  <th className="px-4 py-2 text-center text-gray-500">Total</th>
                  <th className="px-4 py-2 text-right text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((product) => (
                  <tr key={product.id} className="border-b border-b-gray-200">
                    <td className="py- flex items-center text-left">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="mr-4 h-18 w-18 rounded-lg object-cover"
                      />
                      {product.name}
                    </td>
                    <td className="px-4 py-2 text-center">
                      ${product.price.toFixed(2)}
                    </td>
                    <td className="px-4 py-2 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          className="cursor-pointer rounded bg-gray-200 px-2 py-0 font-bold hover:bg-gray-400"
                          onClick={() => handleDecrease(product.id)}
                        >
                          -
                        </button>
                        <span className="px-3">{product.quantity}</span>
                        <button
                          className="cursor-pointer rounded bg-gray-200 px-2 py-0 font-bold hover:bg-gray-400"
                          onClick={() => incrementItemQuantity(product.id)}
                        >
                          +
                        </button>
                      </div>
                    </td>

                    <td className="px-4 py-2 text-center">
                      ${(product.price * product.quantity).toFixed(2)}
                    </td>
                    <td className="px-4 py-2 text-right">
                      <button
                        className="cursor-pointer text-red-400 hover:text-red-700"
                        onClick={() => handleRemove(product.id)}
                      >
                        <FaTrash className="h-5 w-5" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex items-center justify-between">
              <a
                href="#"
                className="cursor-pointer font-semibold text-gray-500 underline"
              >
                Continue Shopping
              </a>
              <button className="cursor-pointer rounded-sm bg-blue-800 px-4 py-2 font-semibold text-white transition-all hover:bg-blue-600">
                Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartView;
