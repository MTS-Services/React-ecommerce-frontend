import React, { useState, useEffect, useRef } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";

// Constants for images, sizes, categories, and weight options
const images = [
  "img/products/11_1.jpg",
  "img/products/10_1.jpg",
  "img/products/12_1.jpg",
  "img/products/13_1.jpg",
];

const thumbnails = [
  "img/products/10_1.jpg",
  "img/products/11_1.jpg",
  "img/products/12_1.jpg",
  "img/products/13_1.jpg",
];

const sizes = ["55g", "100g", "200g"];
const categories = [
  { name: "Dried Fruit" },
  { name: "Cookies" },
  { name: "Foods" },
  { name: "Fresh Fruit" },
  { name: "Tuber Root" },
  { name: "Vegetables" },
  { name: "Snacks" },
  { name: "Unicafe" },
  { name: "Jewellery" },
];

const weightOptions = ["2kg", "10kg", "1kg", "2pack"];

const relatedProducts = [
  {
    name: "Some Snack Pack",
    rating: 4.5,
    image: "img/products/17_1.jpg",
  },
  {
    name: "Corn Chips Pouch",
    rating: 4,
    image: "img/products/18_1.jpg",
  },
  {
    name: "Roasted Snack",
    rating: 4.5,
    image: "img/products/19_1.jpg",
  },
];

const ProductSinglePage = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("55g");
  const [activeTab, setActiveTab] = useState("Description");
  const sliderRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Dropdown state for category and weight
  const [categoryOpen, setCategoryOpen] = useState(true);
  const [weightOpen, setWeightOpen] = useState(false);

  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);
  const increaseQuantity = () => setQuantity(quantity + 1);

  const navigateSlider = (direction) => {
    const newSlide =
      direction === "next"
        ? (currentSlide + 1) % thumbnails.length
        : (currentSlide - 1 + thumbnails.length) % thumbnails.length;
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    setSelectedImage(currentSlide);
  }, [currentSlide]);

  // Category Sidebar Component
  const CategorySidebar = () => (
    <div className="mb-6 rounded-lg border border-gray-200 bg-gray-50">
      {/* Category Dropdown */}
      <div
        className="cursor-pointer border-b border-gray-200 p-4"
        onClick={() => setCategoryOpen(!categoryOpen)}
      >
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-700">Category</span>
          <span className="text-gray-500">{categoryOpen ? "▼" : "▶"}</span>
        </div>
      </div>

      {categoryOpen && (
        <div className="p-2">
          {categories.map((category, index) => (
            <div
              key={index}
              className="flex cursor-pointer items-center gap-2 p-2 hover:bg-gray-100"
            >
              <input type="checkbox" className="h-4 w-4" />
              <span className="text-gray-600">{category.name}</span>
            </div>
          ))}
        </div>
      )}

      {/* Weight Dropdown */}
      <div
        className="cursor-pointer border-b border-gray-200 p-4"
        onClick={() => setWeightOpen(!weightOpen)}
      >
        <div className="flex items-center justify-between">
          <span className="font-medium text-gray-700">Weight</span>
          <span className="text-gray-500">{weightOpen ? "▼" : "▶"}</span>
        </div>
      </div>

      {weightOpen && (
        <div className="p-2">
          {weightOptions.map((weight, index) => (
            <div
              key={index}
              className="flex cursor-pointer items-center gap-2 p-2 hover:bg-gray-100"
            >
              <input type="checkbox" className="h-4 w-4" />
              <span className="text-gray-600">{weight}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  // Product Image Slider Component
  const ImageSlider = () => (
    <div>
      <div className="mb-4 rounded-lg bg-gray-100 shadow">
        <img
          src={images[selectedImage]}
          alt="Product"
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Thumbnail Slider */}
      <div className="relative my-4 flex items-center justify-center">
        <button
          onClick={() => navigateSlider("prev")}
          className="absolute left-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md"
        >
          <span className="text-gray-600">&lt;</span>
        </button>

        <div
          ref={sliderRef}
          className="flex w-full items-center justify-center gap-2 px-12"
        >
          {thumbnails.map((thumb, index) => {
            const isVisible =
              index === currentSlide ||
              index === (currentSlide + 1) % thumbnails.length ||
              index ===
                (currentSlide - 1 + thumbnails.length) % thumbnails.length;

            return (
              <div
                key={index}
                className={`h-16 w-16 flex-shrink-0 cursor-pointer rounded border-2 transition-all duration-300 ${selectedImage === index ? "border-green-500" : "border-gray-200"} ${isVisible ? "opacity-100" : "absolute opacity-0"}`}
                onClick={() => {
                  setSelectedImage(index);
                  setCurrentSlide(index);
                }}
                style={{ display: isVisible ? "block" : "none" }}
              >
                <img
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </div>
            );
          })}
        </div>

        <button
          onClick={() => navigateSlider("next")}
          className="absolute right-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white shadow-md"
        >
          <span className="text-gray-600">&gt;</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="mx-auto max-w-6xl p-4">
      <div className="flex flex-col gap-8 md:flex-row">
        {/* Sidebar */}
        <div className="md:w-1/4">
          <CategorySidebar />
        </div>

        {/* Main Product Content */}
        <div className="md:w-3/4">
          <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-2">
            <ImageSlider />

            {/* Product Details */}
            <div>
              <h1 className="mb-2 text-xl font-semibold">
                Potato Chips 55g: American Cream & Onion Flavour | Crunchy Chips
                & Snacks
              </h1>
              <div className="mb-4">
                <span className="text-gray-500">Product ID:</span>
              </div>
              <div className="mb-6 flex items-center justify-between">
                <div className="text-2xl font-bold">₹58.00</div>
                <div className="text-gray-500 line-through">₹65.00 MRP</div>
              </div>

              <p className="mb-4 text-gray-700">
                Experience the perfect blend of American cream and onion
                flavors...
              </p>

              {/* Size Selector */}
              <div className="mb-6">
                <div className="mb-2 font-medium">Select Size</div>
                <div className="flex gap-2">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`rounded border px-4 py-2 ${selectedSize === size ? "border-green-500 bg-green-500 text-white" : "border-gray-300"}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Cart Section */}
              <div className="mb-6 rounded-lg border border-gray-200 p-4">
                <div className="flex items-center gap-2">
                  <button
                    onClick={decreaseQuantity}
                    className="flex h-6 w-6 items-center justify-center rounded border border-gray-300 text-lg font-semibold"
                  >
                    -
                  </button>
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
                    className="h-10 w-10 rounded border border-gray-300 text-center"
                  />
                  <button
                    onClick={increaseQuantity}
                    className="flex h-6 w-6 items-center justify-center rounded border border-gray-300 text-lg font-semibold"
                  >
                    +
                  </button>
                  <button className="ml-2 flex-1 rounded bg-gray-700 px-4 py-2 text-center font-medium text-white">
                    ADD TO CART
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded border border-gray-300">
                    <IoMdHeartEmpty />
                  </button>
                  <button className="flex h-10 w-10 items-center justify-center rounded border border-gray-300">
                    <MdOutlineRemoveRedEye />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-semibold">You may also like</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-3">
              {relatedProducts.map((product, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 p-4"
                >
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

          {/* Tabs for Product Details */}
          <div className="mb-4 border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab("Description")}
                className={`px-6 py-2 font-medium ${activeTab === "Description" ? "bg-green-500 text-white" : "text-gray-500 hover:text-gray-700"}`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab("Reviews")}
                className={`px-6 py-2 font-medium ${activeTab === "Reviews" ? "bg-green-500 text-white" : "text-gray-500 hover:text-gray-700"}`}
              >
                Reviews
              </button>
              <button
                onClick={() => setActiveTab("Shipping")}
                className={`px-6 py-2 font-medium ${activeTab === "Shipping" ? "bg-green-500 text-white" : "text-gray-500 hover:text-gray-700"}`}
              >
                Shipping
              </button>
            </div>
          </div>

          <div className="prose max-w-none">
            {activeTab === "Description" && (
              <p className="mb-4">
                Our premium chips are made with the finest quality potatoes...
              </p>
            )}
            {activeTab === "Reviews" && <p>These chips are fantastic...</p>}
            {activeTab === "Shipping" && <p>Shipping details coming soon...</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSinglePage;
