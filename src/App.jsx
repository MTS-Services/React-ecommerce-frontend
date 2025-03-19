import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./component/Footer/Footer";

import CheckoutView from "./pages/Chekout/CheckoutView";
import HeroSection from "./component/HeroSection/HeroSection";
import Testing from "./component/HeroSection/testing/Testing.jsx";

function App() {
  return (
    <section className="">
      <Header />
      <HeroSection></HeroSection>
      <CheckoutView />
      {/* <CartView /> */}
      <Footer />
    </section>
  );
}

export default App;
