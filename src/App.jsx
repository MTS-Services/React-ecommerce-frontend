import React from "react";
import "./App.css";
// import HeroSection from "./components/Home/HeroSection";
// import TopRated from "./components/Home/TopRated";
import CartView from "./pages/cart/CartView";
// import CheckoutView from "./pages/Chekout/CheckoutView";
import Footer from "./component/Footer/Footer";
import Header from "./components/header";

// import FreshFruits from "./pages/home/FreshFruits/FreshFruits";
// import OfferBanner from "./pages/home/OfferBanner/OfferBanner";
// import CatagoryCart from "./components/Home/CatagoryCart";
// import FastSell from "./pages/home/FastSell/FastSell";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <section className="px-44">
      <Header />
      {/* <HeroSection></HeroSection>
      <CatagoryCart />
      <FreshFruits /> */}
      <HomePage></HomePage>
      <CartView />
      {/* <OfferBanner /> */}

      {/* <TopRated></TopRated> */}

      {/* <FastSell></FastSell> */}

      <Footer />
    </section>
  );
}

export default App;
