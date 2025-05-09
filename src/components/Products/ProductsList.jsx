import React from "react";
import ProductCard from "./ProductCard";
import FilterSidebar from "./FilterSidebar/FilterSidebar";
import ViewToggleAndSort from "./ViewToggleAndSort/ViewToggleAndSort";

const ProductsList = ({ products }) => {
  return (
    <div className="flex flex-col-reverse gap-6 px-4 pb-6 md:px-6 lg:flex-row lg:px-6">
      {/* Sidebar - Mobile/Tablet: full width, Desktop: 1/4 */}
      <div className="w-full lg:w-1/4">
        <FilterSidebar />
      </div>

      {/* Main Content - Mobile/Tablet: full width, Desktop: 3/4 */}
      <div className="w-full py-5 md:py-4 lg:w-3/4 lg:py-0">
        <ViewToggleAndSort />

        <div className="py-4 md:py-6 lg:py-8">
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
