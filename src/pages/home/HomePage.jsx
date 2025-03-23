import React from "react";

import HeroSection from "../../components/Home/HeroSection";
import CatagoryCart from "../../components/Home/CatagoryCart";
import FastSell from "../../components/Home/FastSell";
import FreshFruits from "../../components/Home/FreshFruits";
import OfferBanner from "../../components/Home/OfferBanner";

const HomePage = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <CatagoryCart></CatagoryCart>
      <FreshFruits></FreshFruits>
      <OfferBanner></OfferBanner>
      <FastSell></FastSell>
    </div>
  );
};

export default HomePage;
