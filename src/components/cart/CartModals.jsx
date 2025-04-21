import React, { useState } from "react";
import { BsCart3 } from "react-icons/bs";
import { FiX } from "react-icons/fi";

export const CartModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  // Sample cart data - replace with your actual cart state
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      img: "/img/products/1_1.jpg",
      name: "Product 1",
      price: 19.99,
      quantity: 2,
    },
    {
      id: 2,
      img: "/img/products/1_1.jpg",
      name: "Product 2",
      price: 29.99,
      quantity: 1,
    },
    {
      id: 3,
      img: "/img/products/1_1.jpg",
      name: "Product 3",
      price: 59.99,
      quantity: 8,
    },
  ]);

  const toggleModal = () => setIsOpen(!isOpen);

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  return (
    <div className="relative">
      {/* Cart Icon Button */}

      <button
        onClick={toggleModal}
        className="cursor-pointer p-2 text-gray-600 transition-colors hover:text-[#19B2E7]"
      >
        <span>
          <BsCart3 size={25} />
        </span>
        <span className="absolute -top-1 -right-2 mt-0 flex h-4 w-4 cursor-pointer items-center justify-center rounded-full bg-[#152550] p-3 text-xs text-white">
          3
        </span>
      </button>

      {/* Modal Overlay */}
      {isOpen && (
        <div
          className="bg-opacity-90 fixed inset-0 z-40 bg-slate-900 opacity-50"
          onClick={toggleModal}
        ></div>
      )}

      {/* Cart Modal */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-92 transform bg-white shadow-lg transition-transform duration-300 ease-in-out md:w-96 ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex h-full flex-col p-4">
          {/* Modal Header */}
          <div className="flex w-full items-center justify-between border-b border-b-gray-300 pb-4">
            <h2 className="text-xl font-bold">Your Cart</h2>
            <button
              onClick={toggleModal}
              className="text-gray-500 hover:text-gray-700"
              aria-label="Close cart"
            >
              <FiX className="cursor-pointer text-2xl font-semibold" />
            </button>
          </div>

          {/* Cart Items Table */}
          <div className="flex-1 overflow-x-auto py-4">
            {cartItems.length === 0 ? (
              <p className="py-8 text-center text-gray-500">
                Your cart is empty
              </p>
            ) : (
              <table className="min-w-full table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-left text-sm font-semibold text-gray-700">
                    <th className="p-3">Image</th>
                    <th className="p-3">Name</th>
                    <th className="p-3">Quantity</th>
                    <th className="p-3">Total</th>
                    <th className="p-3 text-center">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 text-sm">
                  {cartItems.map((item) => (
                    <tr key={item.id} className="items-center space-y-6">
                      <td className="">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="h-16 w-16 rounded object-cover"
                        />
                      </td>

                      <td className="font-medium">
                        {item.name} ${item.price.toFixed(2)}
                      </td>

                      <td className="text-center">{item.quantity}</td>
                      <td className="text-center">
                        ${(item.price * item.quantity).toFixed(2)}
                      </td>
                      <td className="text-center">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700"
                          aria-label={`Remove ${item.name} from cart`}
                        >
                          <FiX />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>

          {/* Cart Footer */}
          {cartItems.length > 0 && (
            <div className="border-t pt-4">
              <div className="mb-4 flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <button className="w-full rounded bg-blue-900 py-2 text-white transition hover:bg-blue-700">
                Proceed to Checkout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
