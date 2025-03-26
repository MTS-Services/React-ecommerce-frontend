// Main CartView Component
import React, { useState } from "react";
import CartSummary from "../../components/cart/CartSummary";
import CartTable from "../../components/cart/CartTable";

// Mock data
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
const CopyCart = () => {
  const [cartItems, setCartItems] = useState(products);

  const incrementItemQuantity = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item,
      ),
    );
  };

  const handleDecrease = (itemId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item,
      ),
    );
  };

  const handleRemove = (itemId) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  const total = subtotal + DELIVERY_CHARGE;

  return (
    <section className="p-4 lg:px-10 xl:px-44">
      <h1 className="mb-6 text-3xl font-semibold">Cart Page</h1>
      {cartItems.length === 0 ? (
        <div className="flex h-60 flex-col items-center justify-center text-xl font-semibold text-gray-500">
          🛒 Your cart is empty
        </div>
      ) : (
        <div className="space-y-6 lg:flex lg:gap-6">
          {/* Left Column: Summary */}
          <div className="space-y-6 rounded-lg border border-gray-200 bg-[#f8f8fb] p-4 md:w-full lg:w-1/3">
            <h2 className="mb-2 text-xl font-semibold text-[#4b5966]">
              Summary
            </h2>
            <hr className="my-4 border-gray-200" />
            <CartSummary
              subtotal={subtotal}
              deliveryCharge={DELIVERY_CHARGE}
              total={total}
            />
          </div>

          {/* Right Column: Product Item Table */}
          <div className="space-y-2 rounded-lg md:w-full lg:w-2/3">
            <CartTable
              cartItems={cartItems}
              onDecrease={handleDecrease}
              onIncrease={incrementItemQuantity}
              onRemove={handleRemove}
            />
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

export default CopyCart;
