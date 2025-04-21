import { useState, useEffect } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import ProductDetailsTabs from "../../components/Products/single/ProductDetailsTabs";

import LoadingSpinner from "../../components/common/LoadingSpinner";
import ErrorState from "../../components/common/ErrorState";
import EmptyState from "../../components/common/EmptyState";
import axios from "axios";
import { BsArrowLeft } from "react-icons/bs";

const SingleProducts = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const navigate = useNavigate();

  // Example usage of history
  const handleGoBack = () => {
    navigate(-1); // Goes back to previous page
  };

  // Fetch product data from API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`,
        );
        setProduct(response.data);
      } catch (err) {
        setError(err.message || "Failed to fetch product");
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const images = product
    ? [
        product.image,
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      ]
    : [];

  const relatedProducts = [
    {
      id: 1,
      name: "Premium Slim Fit T-Shirts",
      rating: 4.1,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      price: 22.3,
    },
    {
      id: 2,
      name: "Mens Casual Premium Slim Fit T-Shirts",
      rating: 4.1,
      image:
        "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      price: 22.3,
    },
    {
      id: 3,
      name: "Mens Cotton Jacket",
      rating: 4.7,
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      price: 55.99,
    },
    {
      id: 4,
      name: "Mens Casual Slim Fit",
      rating: 4.1,
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      price: 15.99,
    },
  ];

  const decreaseQuantity = () => quantity > 1 && setQuantity(quantity - 1);
  const increaseQuantity = () => setQuantity(quantity + 1);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorState error={error} />;
  if (!product) return <EmptyState />;

  return (
    <div className="mx-auto max-w-[1577px] p-4 pt-44">
      {/* Main Product Section */}

      <button
        onClick={handleGoBack}
        className="mb-6 flex items-center text-gray-600 hover:text-blue-500"
      >
        <BsArrowLeft className="mr-2" /> Back to Products
      </button>

      <section className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div>
          <div className="mb-4 flex h-[500px] items-center justify-center rounded-lg bg-gray-50 shadow-sm">
            <img
              src={images[selectedImage]}
              alt={product.title}
              className="h-full w-full object-contain"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {images.map((thumb, index) => (
              <button
                key={index}
                className={`h-20 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${selectedImage === index ? "border-green-500" : "border-gray-200 hover:border-gray-300"}`}
                onClick={() => setSelectedImage(index)}
              >
                <img
                  src={thumb}
                  alt={`Thumbnail ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div>
          <h1 className="mb-3 text-2xl font-bold text-gray-800">
            {product.title}
          </h1>

          <div className="mb-4 flex items-center gap-4">
            <div className="flex items-center">
              <span className="mr-1 text-yellow-400">★</span>
              <span className="text-gray-600">
                {product.rating?.rate || 4.5}
              </span>
              <span className="mx-1 text-gray-400">|</span>
              <span className="text-gray-600">
                {product.rating?.count || 120} reviews
              </span>
            </div>
            <span className="text-gray-400">|</span>
            <span className="text-green-600">
              In Stock ({Math.floor(Math.random() * 50) + 10})
            </span>
          </div>

          <hr className="my-4 border-gray-200" />

          <div className="mb-6">
            <div className="mb-1 text-sm font-medium text-gray-500">Price</div>
            <div className="flex items-end gap-3">
              <div className="text-3xl font-bold text-emerald-700">
                ${product.price}
              </div>
              <div className="text-lg text-gray-400 line-through">
                ${(product.price * 1.2).toFixed(2)}
              </div>
              <div className="rounded bg-emerald-100 px-2 py-1 text-sm font-medium text-emerald-800">
                20% OFF
              </div>
            </div>
          </div>

          <p className="mb-6 text-gray-700">{product.description}</p>
          <div className="mb-6">
            <div className="mb-2 text-sm font-medium text-gray-700">
              Select Size:
            </div>
            <div className="flex gap-2">
              {["55g", "110g", "200g"].map((size) => (
                <button
                  key={size}
                  className="rounded border border-gray-300 px-4 py-2 text-sm transition-colors hover:bg-gray-100 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <div className="mb-2 text-sm font-medium text-gray-700">
              Quantity:
            </div>
            <div className="flex items-center">
              <button
                onClick={decreaseQuantity}
                className="flex h-10 w-10 items-center justify-center rounded-l-lg border border-gray-300 hover:bg-gray-100 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                -
              </button>
              <div className="flex h-10 w-12 items-center justify-center border-y border-gray-300">
                {quantity}
              </div>
              <button
                onClick={increaseQuantity}
                className="flex h-10 w-10 items-center justify-center rounded-r-lg border border-gray-300 hover:bg-gray-100 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="flex-1 rounded-lg bg-blue-800 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
              🛒 ADD TO CART
            </button>
            <button className="flex-1 rounded-lg bg-blue-900 px-6 py-3 font-medium text-white transition-colors hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:outline-none">
              CHECKOUT
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-lg border border-gray-300 text-xl hover:bg-gray-100 focus:ring-2 focus:ring-gray-500 focus:outline-none">
              ♡
            </button>
          </div>
        </div>
      </section>

      {/* Product Details & Reviews Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-bold text-gray-800">
          Details & Reviews
        </h2>
        <ProductDetailsTabs product={product} />
      </section>

      {/* Related Products Section */}
      <section className="mb-16">
        <h2 className="mb-8 text-2xl font-bold text-gray-800">
          You may also like
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="cursor-pointer overflow-hidden rounded-lg border border-gray-200 transition-all hover:shadow-md"
            >
              <div className="flex h-56 items-center justify-center bg-gray-50 p-2">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-contain"
                />
              </div>
              <div className="p-4">
                <h3 className="mb-1 font-medium text-gray-800">
                  {product.name}
                </h3>
                <div className="mb-2 flex items-center">
                  <span className="mr-1 text-yellow-400">★</span>
                  <span className="text-sm text-gray-600">
                    {product.rating}
                  </span>
                </div>
                <div className="text-lg font-bold text-emerald-600">
                  ${product.price}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default SingleProducts;
