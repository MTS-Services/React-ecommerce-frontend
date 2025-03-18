import React, { useState } from "react";

const CartView = () => {
  return (
    <section className="p-6">
      <h1 className="mb-6 text-3xl font-semibold">Cart</h1>
      <div className="flex gap-6">
        {/* Left Column: Summary */}
        <div className="w-1/3 rounded-lg border border-gray-300 bg-[#f8f8fa] p-4 shadow-md">
          <div>
            <h2 className="mb-4 text-xl font-semibold">Summary</h2>
            <h2 className="mb-4 text-xl font-semibold">Estimate Shipping</h2>
          </div>

          <div className="space-y-3">
            <div>
              <label htmlFor="name">Country *</label>
              <select className="w-full rounded-md border border-gray-300 p-2">
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
              <label htmlFor="name">State/Province</label>
              <select className="w-full rounded-md border border-gray-300 p-2">
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
              <label htmlFor="name">Zip/Postal Code</label>
              <input
                type="text"
                className="w-full rounded-md border border-gray-300 p-2"
              />
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex justify-between">
              <p className="text-lg">Subtotal</p>
              <p className="text-lg">$45.99</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg">Delivery Charges</p>
              <p className="text-lg">$5.00</p>
            </div>
            <div className="flex justify-between">
              <p className="text-lg">Coupon Discount</p>
              <p className="text-lg">Apply Discount</p>
            </div>
            <div className="mt-4 flex justify-between text-xl font-semibold">
              <p>Total</p>
              <p>$50.99</p>
            </div>
          </div>
        </div>

        {/* Right Column: Product Item Table */}
        <div className="w-2/3 rounded-lg border border-gray-300 p-4 shadow-md">
          <h2 className="mb-4 text-xl font-semibold">Your Cart Items</h2>
          <table className="w-full table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Product</th>
                <th className="px-4 py-2 text-left">Price</th>
                <th className="px-4 py-2 text-left">Quantity</th>
                <th className="px-4 py-2 text-left">Total</th>
                <th className="px-4 py-2 text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2">Product 1</td>
                <td className="px-4 py-2">$25.99</td>
                <td className="px-4 py-2">2</td>
                <td className="px-4 py-2">$51.98</td>
                <td className="px-4 py-2">
                  <button className="rounded-md bg-red-500 px-4 py-2 text-white">
                    Remove
                  </button>
                </td>
              </tr>

              <tr>
                <td className="px-4 py-2">Product 2</td>
                <td className="px-4 py-2">$40.00</td>
                <td className="px-4 py-2">1</td>
                <td className="px-4 py-2">$40.00</td>
                <td className="px-4 py-2">
                  <button className="rounded-md bg-red-500 px-4 py-2 text-white">
                    Remove
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default CartView;
