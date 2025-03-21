import React from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Outlet } from "react-router-dom";
import HeroSection from "./components/Testing";
import ProductCard2 from "./components/ProductCard2";

function App() {
  return (
    <section className="">
      <Navbar />
      <HeroSection />
      <ProductCard2 />
      <Outlet />
      <Footer />
    </section>
  );
}
export default App;
