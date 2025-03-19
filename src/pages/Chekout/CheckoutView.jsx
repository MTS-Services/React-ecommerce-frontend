import React from "react";

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
    thumbnail: "./img/products/1.jpg",
    images: [
      "https://dummyjson.com/image/iid/1",
      "https://dummyjson.com/image/iid/2",
      "https://dummyjson.com/image/iid/3",
    ],
  },
];
const CheckoutView = () => {
  return (
    <section className="p-4 lg:px-44">
      <h1 className="mb-6 text-3xl font-semibold">Checkout page</h1>
      <div className="gap-4 lg:flex">
        {/* Left Column: Summary */}
        <div className="space-y-6 rounded-lg border border-gray-200 bg-[#f8f8fb] p-4 md:w-1/3">
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
            <div className="mt-4 flex justify-between text-xl font-semibold">
              <p>Total</p>
              <p>$50.99</p>
            </div>

            {/* product details */}
            <div className="border">
              {productData.map((item) => {
                return (
                  <div key={item.id} className="flex items-center gap-4 border">
                    <img src={item.thumbnail} alt="..." className="h-16 w-16" />
                    <p>{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Product Item Table */}
        <div className="h-[200px] w-2/3 space-y-2 rounded-lg border border-gray-200 bg-[#ffffff] p-4">
          <h2 className="mb-4 text-xl font-semibold">New Customer</h2>

          <p className="font-semibold">Checkout Option</p>

          <div className="flex justify-between">
            <div className="flex space-x-10">
              <div className="flex gap-2">
                <input type="checkbox" name="product" id="" />
                Guest Account
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="product" id="" />
                Guest Account
              </div>
              <div className="flex gap-2">
                <input type="checkbox" name="product" id="" />
                Guest Account
              </div>
            </div>
          </div>

          <button className="cursor-pointer rounded-sm bg-blue-800 px-4 py-2 text-white">
            Continue
          </button>
        </div>
      </div>
    </section>
  );
};

export default CheckoutView;
