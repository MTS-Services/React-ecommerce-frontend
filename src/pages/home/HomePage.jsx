import React from "react";

import HeroSection from "../../components/Home/HeroSection";
import CatagoryCart from "../../components/Home/CatagoryCart";
import FastSell from "../../components/Home/FastSell";
import FreshFruits from "../../components/Home/FreshFruits";
import OfferBanner from "../../components/Home/OfferBanner";
import LatestBlog from "../../components/Home/LatestBlog/LatestBlog";
import TakingProducts from "../../components/Home/TakingProducts/TakingProducts";
import DayOfTheDeal from "../../components/Home/DayOfTheDeal/DayOfTheDeal";
import NewArrivalsProductsList from "../../components/Home/NewArrivals/NewArrivalsProductsList";
import NewArrivals from "../../components/Home/NewArrivals/NewArrivals";

const HomePage = () => {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <CatagoryCart />

      <DayOfTheDeal></DayOfTheDeal>
      <FreshFruits />
      <NewArrivalsProductsList></NewArrivalsProductsList>
      <TakingProducts />
      <OfferBanner />
      <FastSell />
      <LatestBlog />
    </div>
  );
};

export default HomePage;
