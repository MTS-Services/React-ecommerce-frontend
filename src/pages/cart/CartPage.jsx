import React, { useState } from "react";

import { FaTrash } from "react-icons/fa";

const CartView = () => {
  return (
    <section className="p-4 lg:px-44">
      <h1 className="mb-6 text-3xl font-semibold">Cart page</h1>
      <div className="gap-4 lg:flex">
        {/* Left Column: Summary */}
        <div className="space-y-6 rounded-lg border border-gray-200 bg-[#f8f8fb] p-4 md:w-1/3">
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
              <p className="font-semibold text-gray-600">$45.99</p>
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
              <p>$50.99</p>
            </div>
          </div>
        </div>

        {/* Right Column: Product Item Table */}
        <div className="w-2/3 space-y-2 rounded-lg p-4">
          <h2 className="mb-4 text-xl font-semibold">Your Cart Items</h2>
          <table className="w-full table-auto">
            <thead className="border-b border-b-gray-200">
              <tr>
                <th className="px-4 py-2 text-left">Product</th>
                <th className="px-4 py-2 text-center">Price</th>
                <th className="px-4 py-2 text-center">Quantity</th>
                <th className="px-4 py-2 text-center">Total</th>
                <th className="px-4 py-2 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-b-gray-200">
                <td className="px-4 py-2 text-left">Product 1</td>
                <td className="px-4 py-2 text-center">$25.99</td>
                <td className="px-4 py-2 text-center">2</td>
                <td className="px-4 py-2 text-center">$51.98</td>
                <td className="px-4 py-2 text-right">
                  <button className="cursor-pointer">
                    <FaTrash className="h-5 w-5" />
                  </button>
                </td>
              </tr>

              <tr className="border-b border-b-gray-200">
                <td className="px-4 py-2 text-left">Product 2</td>
                <td className="px-4 py-2 text-center">$40.00</td>
                <td className="px-4 py-2 text-center">1</td>
                <td className="px-4 py-2 text-center">$40.00</td>
                <td className="px-4 py-2 text-right">
                  <button className="cursor-pointer">
                    <FaTrash className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="flex justify-between">
            <a href="#" className="cursor-pointer text-xl font-bold underline">
              Continue Shopping
            </a>
            <button className="cursor-pointer rounded-sm bg-blue-800 px-4 py-2 text-white">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CartView;
