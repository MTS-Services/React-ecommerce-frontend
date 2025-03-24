import React from "react";

import HeroSection from "../../components/Home/HeroSection";
import CatagoryCart from "../../components/Home/CatagoryCart";
import FastSell from "../../components/Home/FastSell";
import FreshFruits from "../../components/Home/FreshFruits";
import OfferBanner from "../../components/Home/OfferBanner";
import ProductCard2 from "../../components/ProductCard2";
import LatestBlog from "../../components/Home/LatestBlog/LatestBlog";

const HomePage = () => {
  return (
    <div className="">
      <HeroSection />
      <CatagoryCart />
      <FreshFruits />
      <ProductCard2 />

      <OfferBanner />
      <FastSell />
      <LatestBlog></LatestBlog>
    </div>
  );
};

export default HomePage;
