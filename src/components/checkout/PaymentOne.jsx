import React from "react";

const PaymentOne = () => {
  return (
    <div className="space-y-6 rounded-lg border border-gray-200 bg-[#f8f8fb] p-4">
      <div>
        <h2 className="text-xl font-semibold text-[#4b5966]">
          Delivery Method
        </h2>
        <p className="font-normal text-gray-500">
          Please select the preferred shipping method to use on this order.
        </p>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <div className="flex gap-18">
            <label className="flex cursor-pointer items-center">
              <input
                type="radio"
                name="dlivery"
                value=""
                className="peer hidden"
              />
              <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-gray-400 transition-all peer-checked:border-gray-100 peer-checked:bg-blue-400 peer-checked:ring-2 peer-checked:ring-blue-300">
                <div className="hidden h-3 w-3 rounded-full bg-white peer-checked:block"></div>
              </div>
              <span className="ml-1 font-medium text-gray-600">
                Cash On Delivery
              </span>
            </label>
          </div>
        </div>

        <div className="space-y-2">
          <p className="font-medium text-gray-500">
            Add Comments About Your Order
          </p>
          <textarea
            className="h-32 w-full rounded-lg border-1 border-gray-200 p-3 transition-all focus:border-gray-300 focus:ring-1 focus:ring-blue-100 focus:outline-none"
            placeholder="Enter your text here..."
          ></textarea>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-1 border-gray-100 text-blue-900 transition-all checked:border-transparent checked:bg-blue-500 focus:ring-2 focus:ring-blue-300"
            />

            <a href="#" className="text-md text-gray-500">
              I have read and agree to the <span>Terms &amp; Conditions.</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentOne;
