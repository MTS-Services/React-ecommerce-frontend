import React from "react";
import ProductsList from "../../components/Products/ProductsList";
import ProductOfferBanner from "../../components/Products/ProductOfferBanner/ProductOfferBanner";

const ProductsPage = () => {
  return (
    <section className="m-auto mx-auto max-w-[1577px]">
      <div className="gap-6 lg:py-24">
        <ProductOfferBanner></ProductOfferBanner>
      </div>
      <ProductsList />
    </section>
  );
};

export default ProductsPage;
