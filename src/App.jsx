import React from "react";
import "./App.css";
import CatagoryCart from "./component/catagoryCart/CatagoryCart";
import HeroSection from "./component/HeroSection/HeroSection";
import TopRated from "./component/TopRated/TopRated";
import CartView from "./pages/cart/CartView";
import CheckoutView from "./pages/Chekout/CheckoutView";
import Footer from "./component/Footer/Footer";
import Header from "./components/header";

function App() {
  return (
    <section className="px-44">
      <Header />
      <HeroSection></HeroSection>
      <CatagoryCart></CatagoryCart>
      <CartView />
      <TopRated></TopRated>
      <Footer />
    </section>
  );
}

export default App;
