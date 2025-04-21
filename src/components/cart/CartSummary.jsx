// Reusable Cart Summary Component
const CartSummary = ({ subtotal, deliveryCharge, total }) => {
  return (
    <div className="space-y-6 rounded-lg border border-gray-200 bg-[#f8f8fb] p-4 md:w-full lg:w-1/3">
      <div>
        <h2 className="mb-2 text-xl font-semibold text-[#4b5966]">Summary</h2>
        <h2 className="text-xl font-semibold text-[#777]">Estimate Shipping</h2>
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
          <p className="font-semibold text-gray-600">${subtotal.toFixed(2)}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-500">Delivery Charges</p>
          <p className="font-semibold text-gray-600">{deliveryCharge}</p>
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
  );
};

export default CartSummary;
