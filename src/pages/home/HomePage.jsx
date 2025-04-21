import React, { useEffect, useState } from "react";

import axios from "axios";
import HeroSection from "../../components/Home/HeroSection";
import CatagoryCart from "../../components/Home/CatagoryCart";
import FastSell from "../../components/Home/FastSell";
import FreshFruits from "../../components/Home/FreshFruits";
import OfferBanner from "../../components/Home/OfferBanner";
import LatestBlog from "../../components/Home/LatestBlog/LatestBlog";
import TakingProducts from "../../components/Home/TakingProducts/TakingProducts";
import ProductCard from "../../components/Products/ProductCard";
import DayOfTheDeal from "../../components/Home/DayOfTheDeal/DayOfTheDeal";
import LoadingSpinner from "../../components/common/LoadingSpinner";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="overflow-hidden">
      <HeroSection />
      <CatagoryCart />

      <DayOfTheDeal />
      <FreshFruits products={products} />
      <div className="m-auto mx-auto max-w-[1577px] px-4 py-12 md:px-10 lg:py-22">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5">
          {loading ? (
            <LoadingSpinner />
          ) : error ? (
            <p className="text-red-500">{error}</p>
          ) : (
            products
              .slice(0, 10)
              .map((product) => <ProductCard key={product.id} {...product} />)
          )}
        </div>
      </div>
      {/* {loading ? <LoadingSpinner /> : ""} */}
      <TakingProducts />
      <OfferBanner />
      <FastSell />
      <LatestBlog />
    </div>
  );
};

export default HomePage;
