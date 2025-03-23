import React from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Outlet } from "react-router-dom";
<<<<<<< HEAD
import HeroSection from "./components/Testing";
import ProductCard2 from "./components/ProductCard2";
=======
import CopyCart from "./pages/cart/CopyCart";
>>>>>>> origin/main

function App() {
  return (
    <section className="">
<<<<<<< HEAD
      <Navbar />
      <HeroSection />
      <ProductCard2 />
=======
      <Header />
      {/* <CopyCart /> */}
>>>>>>> origin/main
      <Outlet />
      <Footer />
    </section>
  );
}
export default App;
