import React, { useState } from "react";
import CheckoutForm from "../../components/checkout/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import DeliveryComponent from "../../components/checkout/DeliveryComponent";
import PaymentOne from "../../components/checkout/PaymentOne";
import PaymentTwo from "../../components/checkout/PaymentTwo";
import Summery from "../../components/checkout/Summery";
// Load your Stripe public key
const stripePromise = loadStripe(
  "pk_test_51R61J0CZ2kLTrYVYE9WQTKQfW3pfUXk24wvYy2ZnBiylVvfjMdCXhTPuDnFIzJhbAOG45ZC0EN45mqH5Kqsr4HPw005XK2Dm4F",
);

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
    rating: 4.3,
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

const CheckoutView = () => {
  const [cartItems, setCartItems] = useState(productData);

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const total = subtotal + DELIVERY_CHARGE;

  return (
    <section className="p-4 pt-32 lg:px-44 lg:pt-44">
      <h1 className="mb-6 text-3xl font-semibold">Checkout page</h1>
      <div className="space-y-4 md:space-y-6 lg:flex lg:gap-6">
        {/* Left-- Column */}
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          {/* Summery */}
          <Summery productData={productData} subtotal={total} />
          {/* Delivery Method */}
          <DeliveryComponent />
          {/* Payment Method-1 */}
          <PaymentOne />
          {/* Payment Method-2 */}
          <PaymentTwo />
        </div>

        {/* Right-- Column */}
        <div className="w-full lg:w-2/3">
          <div className="space-y-4 rounded-lg border border-gray-200 p-4">
            <h2 className="mb-4 text-xl font-semibold text-gray-800">
              New Customer
            </h2>
            <p className="font-bold text-gray-600">Checkout Option</p>
            <div className="flex gap-8">
              <label className="flex cursor-pointer items-center">
                <input
                  type="radio"
                  name="option"
                  value="1"
                  className="peer hidden"
                />
                <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-gray-400 transition-all peer-checked:border-gray-100 peer-checked:bg-blue-400 peer-checked:ring-2 peer-checked:ring-blue-300">
                  <div className="hidden h-3 w-3 rounded-full bg-white peer-checked:block"></div>
                </div>
                <span className="ml-2 text-gray-500">Geust Account</span>
              </label>

              <label className="flex cursor-pointer items-center">
                <input
                  type="radio"
                  name="option"
                  value="2"
                  className="peer hidden"
                />
                <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-gray-400 transition-all peer-checked:border-gray-100 peer-checked:bg-blue-400 peer-checked:ring-2 peer-checked:ring-blue-300">
                  <div className="hidden h-3 w-3 rounded-full bg-white peer-checked:block"></div>
                </div>
                <span className="ml-2 text-gray-500">Register Account</span>
              </label>

              <label className="flex cursor-pointer items-center">
                <input
                  type="radio"
                  name="option"
                  value="2"
                  className="peer hidden"
                />
                <div className="flex h-4 w-4 items-center justify-center rounded-full border-2 border-gray-400 transition-all peer-checked:border-gray-100 peer-checked:bg-blue-400 peer-checked:ring-2 peer-checked:ring-blue-300">
                  <div className="hidden h-3 w-3 rounded-full bg-white peer-checked:block"></div>
                </div>
                <span className="ml-2 text-gray-500">Login Account</span>
              </label>
            </div>

            <p className="text-gray-500">
              By creating an account you will be able to shop faster, be up to
              date on an order`s status, <br /> and keep track of the orders you
              have previously made.
            </p>

            <div className="flex w-full gap-4">
              <button className="cursor-pointer rounded-sm bg-blue-800 px-4 py-2 font-semibold text-white transition-all hover:bg-blue-600">
                Continue
              </button>

              <Elements stripe={stripePromise}>
                <CheckoutForm product={cartItems} />
              </Elements>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutView;
