import React from "react";

const Summery = ({ productData, subtotal }) => {
  return (
    <div className="space-y-6 rounded-lg border border-gray-200 bg-[#f8f8fb] p-4">
      <div>
        <h2 className="mb-2 text-xl font-semibold text-[#4b5966]">Summary</h2>
      </div>

      <hr className="my-4 border-gray-200" />

      <div className="space-y-2">
        <div className="flex justify-between">
          <p className="text-gray-500">Sub-Total</p>
          <p className="font-semibold text-gray-600">${subtotal.toFixed(2)}</p>
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

        <div className="mt-4 mb-6 flex justify-between text-xl font-semibold">
          <p className="text-lg text-[#4b5966]">Total Amount</p>
          {/* <p className="text-lg text-[#4b5966]">${total.toFixed(2)}</p> */}
        </div>

        {/* product details */}
        <div className="space-y-3">
          {productData.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center gap-4 rounded-sm border border-gray-200"
              >
                <img
                  src={item.thumbnail}
                  alt="..."
                  className="h-28 w-28 cursor-pointer rounded-sm object-cover transition-all hover:scale-105"
                />
                <div className="flex flex-col p-4">
                  <p className="text-lg font-semibold text-gray-500">
                    {item.name}
                  </p>
                  <p className="text-sm">⭐⭐⭐⭐⭐</p>
                  <p className="text-lg font-semibold">
                    ${item.price.toFixed(2)} x {item.quantity}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Summery;
