import React from "react";
import { Fa42Group } from "react-icons/fa6";
import CheckoutForm from "../../components/checkout/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
// Load your Stripe public key
const stripePromise = loadStripe("your-publishable-key-here");

const productData = [
  {
    id: 1,
    name: "Organic Apples",
    description: "Fresh, organic apples from local farms.",
    price: 2.99,
    category: "Fruits",
    inStock: true,
    rating: 4.3,
    stock: 123,
    brand: "N/A",
    color: "Blue",
    thumbnail: "./img/products/1_1.jpg",
    images: [
      "./img/products/11_1.jpg",
      "./img/products/11_1.jpg",
      "./img/products/11_1.jpg",
    ],
  },
  {
    id: 2,
    name: "Whole Wheat Bread",
    description: "100% whole wheat, no preservatives.",
    price: 3.49,

    category: "Bakery",
    inStock: true,
    rating: 4.3,
    stock: 123,
    brand: "N/A",
    color: "Blue",
    thumbnail: "./img/products/1_2.jpg",
    images: [
      "https://dummyjson.com/image/iid/1",
      "https://dummyjson.com/image/iid/2",
      "https://dummyjson.com/image/iid/3",
    ],
  },
  {
    id: 3,
    name: "Almond Milk",
    description: "Unsweetened, 1L carton.",
    price: 4.99,

    category: "Dairy Alternatives",
    inStock: true,
    rating: 4.3,
    stock: 123,
    brand: "N/A",
    color: "Blue",
    thumbnail: "./img/products/6.jpg",
    images: [
      "https://dummyjson.com/image/iid/1",
      "https://dummyjson.com/image/iid/2",
      "https://dummyjson.com/image/iid/3",
    ],
  },
];

const CheckoutView = () => {
  return (
    <section className="p-4 lg:px-44 lg:pt-44">
      <h1 className="mb-6 text-3xl font-semibold">Checkout page</h1>
      <div className="space-y-4 md:space-y-6 lg:flex lg:gap-6">
        {/* Left-- Column */}
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          {/* Summery */}
          <div className="space-y-6 rounded-lg border border-gray-200 bg-[#f8f8fb] p-4">
            <div>
              <h2 className="mb-2 text-xl font-semibold text-[#4b5966]">
                Summary
              </h2>
            </div>

            <hr className="my-4 border-gray-200" />

            <div className="space-y-2">
              <div className="flex justify-between">
                <p className="text-gray-500">Sub-Total</p>
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

              <div className="mt-4 mb-6 flex justify-between text-xl font-semibold">
                <p className="text-lg text-[#4b5966]">Total Amount</p>
                <p className="text-lg text-[#4b5966]">$50.99</p>
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
                        <p className="text-lg font-semibold">${item.price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Delivery Method */}
          <div className="space-y-6 rounded-lg border border-gray-200 bg-[#f8f8fb] p-4">
            <div>
              <h2 className="text-xl font-semibold text-[#4b5966]">
                Delivery Method
              </h2>
              <p className="font-normal text-gray-500">
                Please select the preferred shipping method to use on this
                order.
              </p>
            </div>

            <div className="space-y-4">
              <hr className="my-4 border-gray-200" />
              <div className="">
                <div className="flex gap-10">
                  <p className="font-medium text-gray-500">Free Shipping</p>
                  <p className="font-medium text-gray-500">Flat Rate</p>
                </div>

                <div className="flex gap-9">
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
                    <span className="ml-1 text-gray-500">Rate - $120</span>
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
                    <span className="ml-1 text-gray-500">Rate - $120</span>
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
                    I have read and agree to the{" "}
                    <span>Terms &amp; Conditions.</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method-1 */}
          <div className="space-y-6 rounded-lg border border-gray-200 bg-[#f8f8fb] p-4">
            <div>
              <h2 className="text-xl font-semibold text-[#4b5966]">
                Delivery Method
              </h2>
              <p className="font-normal text-gray-500">
                Please select the preferred shipping method to use on this
                order.
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
                    I have read and agree to the{" "}
                    <span>Terms &amp; Conditions.</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Method-2 */}
          <div className="space-y-6 rounded-lg border border-gray-200 bg-[#f8f8fb] p-4">
            <h2 className="text-xl font-semibold text-[#4b5966]">
              Payment Method
            </h2>
            <img
              src="https://grabit-react-next.maraviyainfotech.com/assets/img/hero-bg/payment.png"
              alt=""
            />
          </div>
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
            <button className="cursor-pointer rounded-sm bg-blue-800 px-4 py-2 font-semibold text-white transition-all hover:bg-blue-600">
              Continue
            </button>
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckoutView;
