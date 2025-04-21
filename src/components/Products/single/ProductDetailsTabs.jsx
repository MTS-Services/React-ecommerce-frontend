import { useState } from "react";

const ProductDetailsTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { id: "description", label: "Description" },
    { id: "specifications", label: "Specifications" },
    { id: "reviews", label: "Reviews" },
  ];

  return (
    <div className="mb-16 rounded-lg border border-gray-200 bg-white">
      {/* Tab Navigation */}
      <div className="flex border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`px-6 py-3 text-sm font-medium transition-colors lg:text-base ${activeTab === tab.id ? "border-b-2 border-blue-600 text-blue-600" : "text-gray-500 hover:text-gray-700"}`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-6">
        {activeTab === "description" && (
          <div>
            <h3 className="mb-4 text-lg font-semibold">Product Description</h3>
            <p className="text-gray-700">{product.description}</p>
          </div>
        )}

        {activeTab === "specifications" && (
          <div>
            <h3 className="mb-4 text-lg font-semibold">Specifications</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="space-y-2">
                <div className="flex">
                  <span className="w-32 font-medium text-gray-600">Brand</span>
                  <span className="text-gray-700">
                    {product.brand || "Generic"}
                  </span>
                </div>
                <div className="flex">
                  <span className="w-32 font-medium text-gray-600">
                    Category
                  </span>
                  <span className="text-gray-700 capitalize">
                    {product.category}
                  </span>
                </div>
                <div className="flex">
                  <span className="w-32 font-medium text-gray-600">Weight</span>
                  <span className="text-gray-700">55g</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex">
                  <span className="w-32 font-medium text-gray-600">
                    Dimensions
                  </span>
                  <span className="text-gray-700">10 × 5 × 2 cm</span>
                </div>
                <div className="flex">
                  <span className="w-32 font-medium text-gray-600">SKU</span>
                  <span className="text-gray-700">PRD-{product.id}</span>
                </div>
                <div className="flex">
                  <span className="w-32 font-medium text-gray-600">Stock</span>
                  <span className="text-gray-700">
                    {Math.floor(Math.random() * 50) + 10} units
                  </span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div>
            <h3 className="mb-4 text-lg font-semibold">Customer Reviews</h3>
            <div className="mb-6 flex items-center">
              <div className="mr-4">
                <span className="text-4xl font-bold">
                  {product.rating?.rate || 4.5}
                </span>
                <span className="text-gray-500">/5</span>
              </div>
              <div>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      {i < Math.floor(product.rating?.rate || 4.5) ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  Based on {product.rating?.count || 120} reviews
                </p>
              </div>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].slice(0, 3).map((review) => (
                <div
                  key={review}
                  className="border-b border-gray-100 pb-4 last:border-0"
                >
                  <div className="mb-2 flex items-center">
                    <div className="mr-2 flex">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className="text-yellow-400">
                          {i < 4 ? "★" : "☆"}
                        </span>
                      ))}
                    </div>
                    <span className="text-sm font-medium">
                      Customer {review}
                    </span>
                  </div>
                  <p className="text-gray-700">
                    {review === 1 && "Great product, exactly as described!"}
                    {review === 2 && "Good quality for the price."}
                    {review === 3 && "Fast shipping and good packaging."}
                  </p>
                  <p className="mt-1 text-sm text-gray-500">2 days ago</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === "shipping" && (
          <div>
            <h3 className="mb-4 text-lg font-semibold">Shipping & Returns</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800">
                  Shipping Information
                </h4>
                <ul className="mt-2 list-inside list-disc space-y-1 text-gray-700">
                  <li>Free shipping on orders over $50</li>
                  <li>Estimated delivery: 2-5 business days</li>
                  <li>Express shipping available at checkout</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Return Policy</h4>
                <ul className="mt-2 list-inside list-disc space-y-1 text-gray-700">
                  <li>30-day money-back guarantee</li>
                  <li>Items must be unused and in original packaging</li>
                  <li>Customer pays return shipping</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailsTabs;
