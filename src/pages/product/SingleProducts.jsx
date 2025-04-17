import { useState } from "react";

const relatedProducts = [
  {
    name: "Some Snack Pack",
    rating: 4.5,
    image: "/img/products/11_1.jpg",
  },
  {
    name: "Corn Chips Pouch",
    rating: 4,
    image: "/img/products/11_1.jpg",
  },
  {
    name: "Roasted Snack",
    rating: 4.5,
    image: "/img/products/11_1.jpg",
  },
];
function SingleProducts() {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);

  const images = [
    "/img/products/11_1.jpg",
    "/img/products/18_1.jpg",
    "/img/products/19_1.jpg",
    "/img/products/23_1.jpg",
  ];

  const thumbnails = images;

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className="mx-auto max-w-2/3 p-4 pt-56">
      <section className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <div className="mb-4 rounded bg-gray-100 shadow">
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

        <div>
          <h1 className="mb-2 text-xl font-semibold text-gray-500">
            Potato Chips 55g: American Cream & Onion Flavour | Crunchy Chips &
            Snacks Potato Chips 55g: American Cream
          </h1>
          <div className="">
            <div className="mb-2 flex items-end gap-2">
              <p className="text-gray-500">Rating (⭐ 4.5)</p> |
              <p className="text-gray-500">In stock (10)</p> |
              <p className="text-gray-500">Category: Fruits</p>
            </div>
          </div>
          <hr className="my-4 border-gray-200" />
          <div className="mb-6 flex items-end gap-1">
            <div className="text-4xl font-bold text-emerald-600">$58.00</div>
            <div className="text-gray-500 line-through">$65.00</div>
          </div>
          <p className="mb-4 text-gray-700">
            Experience the perfect blend of American cream and onion flavors in
            these crispy potato chips. A delightful crunchy snack for movie
            nights and casual gatherings.
          </p>
          <div className="mb-6">
            <div className="mb-2 font-medium">Select Size</div>
            <div className="flex gap-2">
              <button className="cursor-pointer rounded border border-gray-300 px-4 py-2 hover:bg-gray-100">
                55g
              </button>
              <button className="cursor-pointer rounded border border-gray-300 px-4 py-2 hover:bg-gray-100">
                110g
              </button>
              <button className="cursor-pointer rounded border border-gray-300 px-4 py-2 hover:bg-gray-100">
                200g
              </button>
            </div>
          </div>
          <div className="mb-6">
            <div className="mb-2 font-medium">Quantity</div>
            <div className="flex items-center">
              <button
                onClick={decreaseQuantity}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-l border border-gray-300"
              >
                -
              </button>
              <div className="flex h-10 w-12 items-center justify-center border-t border-b border-gray-300">
                {quantity}
              </div>
              <button
                onClick={increaseQuantity}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-r border border-gray-300"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex gap-4">
            <button className="flex-1 cursor-pointer rounded-md bg-blue-800 px-6 py-3 font-medium text-white hover:bg-blue-600">
              ADD TO CART
            </button>
            <button className="cursor-pointer rounded-md border border-gray-300 px-6 py-3 text-xl font-medium hover:bg-gray-100">
              ♡
            </button>
          </div>
        </div>
      </section>

      <hr className="my-28 border-gray-200" />

      <section className="mb-8">
        <h2 className="mb-4 text-4xl font-semibold">You may also like</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
          {relatedProducts.map((product, index) => (
            <div key={index} className="rounded-lg border border-gray-200 p-4">
              <img
                src={product.image}
                alt={product.name}
                className="mb-2 h-32 w-full object-contain"
              />
              <div className="text-sm font-medium">{product.name}</div>
              <div className="mb-2 text-sm text-yellow-400">
                ★ {product.rating}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default SingleProducts;
