import React, { useState } from "react";

import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

import CartSummary from "../../components/cart/CartSummary";

const productData = [
  {
    id: 1,
    name: "Organic Apples",
    description: "Fresh, organic apples from local farms.",
    price: 80.5,
    quantity: 1,
    category: "Fruits",
    inStock: true,
    stock: 123,
    thumbnail: "./img/products/2_1.jpg",
  },
  {
    id: 2,
    name: "Whole Wheat Bread",
    description: "100% whole wheat, no preservatives.",
    price: 2.5,
    quantity: 1,
    category: "Bakery",
    inStock: true,
    stock: 123,
    thumbnail: "./img/products/2_2.jpg",
  },
  {
    id: 3,
    name: "Almond Milk",
    description: "Unsweetened, 1L carton.",
    price: 5,
    quantity: 2,
    category: "Dairy Alternatives",
    inStock: true,
    stock: 123,
    thumbnail: "./img/products/1_1.jpg",
  },
];

const DELIVERY_CHARGE = 5;

const CartView = () => {
  const [cartItems, setCartItems] = useState(productData);

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
    <section className="p-4 lg:px-10 lg:pt-44 xl:px-44">
      <h1 className="mb-6 text-3xl font-semibold">Cart page</h1>
      {cartItems.length === 0 ? (
        <div className="flex h-60 flex-col items-center justify-center text-xl font-semibold text-gray-500">
          🛒 Your cart is empty
        </div>
      ) : (
        <div className="space-y-6 lg:flex lg:gap-6">
          {/* Left Column: Summary */}
          <CartSummary subtotal={subtotal} total={total} />

          {/* Right Column: Product Item Table */}
          <div className="space-y-2 rounded-lg md:w-full lg:w-2/3">
            <table className="w-full table-auto">
              <thead className="border-b border-b-gray-200">
                <tr>
                  <th className="px-4 py-2 text-left text-gray-500">Product</th>

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
                    <td className="flex items-center text-left">
                      <img
                        src={product.thumbnail}
                        alt={product.name}
                        className="mr-4 h-18 w-18 rounded-lg object-cover"
                      />
                      <div>
                        <p className="">{product.name}</p>
                        <p className="text-md font-bold">
                          ${product.price.toFixed(2)}
                        </p>
                      </div>
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
              <Link
                to="/products"
                className="cursor-pointer font-semibold text-gray-500 underline"
              >
                Continue Shopping
              </Link>
              <Link
                to="/checkout"
                className="cursor-pointer rounded-sm bg-blue-800 px-4 py-2 font-semibold text-white transition-all hover:bg-blue-600"
              >
                Checkout
              </Link>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CartView;
