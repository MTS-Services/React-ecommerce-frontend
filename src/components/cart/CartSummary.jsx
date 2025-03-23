// Reusable Cart Summary Component
const CartSummary = ({ subtotal, deliveryCharge, total }) => (
  <div className="space-y-2">
    <div className="flex justify-between">
      <p className="text-gray-500">Subtotal</p>
      <p className="font-semibold text-gray-600">${subtotal.toFixed(2)}</p>
    </div>
    <div className="flex justify-between">
      <p className="text-gray-500">Delivery Charges</p>
      <p className="font-semibold text-gray-600">
        ${deliveryCharge.toFixed(2)}
      </p>
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
);

export default CartSummary;
