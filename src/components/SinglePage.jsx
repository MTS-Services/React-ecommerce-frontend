import React, { useState } from "react";

const ProductSinglePage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "/api/placeholder/400/400",
    "/api/placeholder/400/400",
    "/api/placeholder/400/400",
    "/api/placeholder/400/400",
  ];

  const thumbnails = [
    "/api/placeholder/80/80",
    "/api/placeholder/80/80",
    "/api/placeholder/80/80",
    "/api/placeholder/80/80",
  ];

  const relatedProducts = [
    {
      name: "Some Snack Pack",
      rating: 4.5,
      image: "/api/placeholder/100/100",
    },
    {
      name: "Corn Chips Pouch",
      rating: 4,
      image: "/api/placeholder/100/100",
    },
    {
      name: "Roasted Snack",
      rating: 4.5,
      image: "/api/placeholder/100/100",
    },
  ];

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="mx-auto max-w-6xl p-4">
      {/* Product Overview Section */}
      <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div>
          <div className="mb-4 rounded-lg bg-gray-100 p-4">
            <img
              src={images[selectedImage]}
              alt="Product Image"
              className="h-auto w-full object-contain"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto">
            {thumbnails.map((thumb, index) => (
              <div
                key={index}
                className={`h-16 w-16 cursor-pointer rounded border-2 ${selectedImage === index ? "border-green-500" : "border-gray-200"}`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="mb-2 text-xl font-semibold">
            Potato Chips 55g: American Cream & Onion Flavour | Crunchy Chips &
            Snacks
          </h1>

          <div className="mb-4">
            <span className="text-gray-500">Product ID:</span>
          </div>

          <div className="mb-6 flex items-center justify-between">
            <div className="text-2xl font-bold">₹58.00</div>
            <div className="text-gray-500 line-through">₹65.00 MRP</div>
          </div>

          <div className="mb-6">
            <p className="mb-4 text-gray-700">
              Experience the perfect blend of American cream and onion flavors
              in these crispy potato chips. A delightful crunchy snack for movie
              nights and casual gatherings.
            </p>
          </div>

          <div className="mb-6">
            <div className="mb-2 font-medium">Select Size</div>
            <div className="flex gap-2">
              <button className="rounded bg-green-500 px-4 py-2 text-white">
                55g
              </button>
              <button className="rounded border border-gray-300 px-4 py-2">
                110g
              </button>
              <button className="rounded border border-gray-300 px-4 py-2">
                200g
              </button>
            </div>
          </div>

          <div className="mb-6">
            <div className="mb-2 font-medium">Quantity</div>
            <div className="flex items-center">
              <button
                onClick={decreaseQuantity}
                className="flex h-10 w-10 items-center justify-center rounded-l border border-gray-300"
              >
                -
              </button>
              <div className="flex h-10 w-12 items-center justify-center border-t border-b border-gray-300">
                {quantity}
              </div>
              <button
                onClick={increaseQuantity}
                className="flex h-10 w-10 items-center justify-center rounded-r border border-gray-300"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 rounded-md bg-green-500 px-6 py-3 font-medium text-white">
              ADD TO CART
            </button>
            <button className="rounded-md border border-gray-300 px-6 py-3">
              ♡
            </button>
          </div>
        </div>
      </div>

      {/* Related Products */}
      <div className="mb-8">
        <h2 className="mb-4 text-xl font-semibold">You may also like</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
          {relatedProducts.map((product, index) => (
            <div key={index} className="rounded-lg border border-gray-200 p-4">
              <img
                src={product.image}
                alt={product.name}
                className="mb-2 h-32 w-full object-contain"
              />
              <div className="text-sm font-medium">{product.name}</div>
              <div className="mb-2 flex items-center text-sm text-yellow-400">
                {"★".repeat(Math.floor(product.rating))}
                {product.rating % 1 !== 0 ? "½" : ""}
                {"☆".repeat(5 - Math.ceil(product.rating))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Product Description Tabs */}
      <div>
        <div className="mb-4 border-b border-gray-200">
          <div className="flex">
            <button className="rounded-t bg-green-500 px-6 py-2 font-medium text-white">
              Description
            </button>
            <button className="px-6 py-2 text-gray-500 hover:text-gray-700">
              Reviews
            </button>
            <button className="px-6 py-2 text-gray-500 hover:text-gray-700">
              Shipping
            </button>
          </div>
        </div>

        <div className="prose max-w-none">
          <p className="mb-4">
            Our premium chips are made with the finest quality potatoes,
            carefully selected for their exceptional flavor and crunchiness.
            Each chip is delicately seasoned with our signature American cream
            and onion flavoring, creating a perfect balance of savory and tangy
            notes.
          </p>

          <ul className="mb-4 list-disc pl-5">
            <li>
              Premium quality potatoes, thinly sliced for the perfect crunch
            </li>
            <li>Authentic American cream & onion flavoring</li>
            <li>Convenient 55g pack - perfect for individual consumption</li>
            <li>No artificial preservatives</li>
            <li>Sealed for freshness packaging</li>
          </ul>

          <p>
            Whether you're enjoying them alone or sharing with friends, these
            chips are guaranteed to satisfy your snack cravings. Perfect for
            parties, movie nights, or as an everyday treat. Each bite delivers
            that satisfying crunch you crave, along with our signature cream and
            onion seasoning that keeps you coming back for more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductSinglePage;
