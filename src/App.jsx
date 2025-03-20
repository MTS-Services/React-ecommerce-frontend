import React from "react";
import "./App.css";
import CatagoryCart from "./component/catagoryCart/CatagoryCart";
import HeroSection from "./component/HeroSection/HeroSection";
import TopRated from "./component/TopRated/TopRated";
import CartView from "./pages/cart/CartView";
import CheckoutView from "./pages/Chekout/CheckoutView";
import Footer from "./component/Footer/Footer";
import Header from "./components/header";
import FastSell from "./component/FastSell/FastSell";

function App() {
  return (
    <section className="px-44">
      <Header />
      <HeroSection></HeroSection>
      <CatagoryCart></CatagoryCart>
      <CartView />
      {/* <TopRated></TopRated> */}
      <FastSell></FastSell>

      <Footer />
    </section>
  );
}

export default App;
