import React from "react";
import Navbar from "./layout/Navbar";
import { Outlet } from "react-router-dom";
<<<<<<< HEAD
import ProductCard from "./components/Home/ProductCard";
import SingleProduct from "./components/Home/SingleProduct";
=======
import HeroSection from "./components/Testing";
import ProductCard2 from "./components/ProductCard2";
>>>>>>> e2175d820dce247c34b2de010a6e5b88654652d4

function App() {
  return (
    <section className="">
      <Navbar />
<<<<<<< HEAD
      <ProductCard />
      <SingleProduct />

      {/* <CopyCart /> */}
=======
      <HeroSection />
      <ProductCard2 />
>>>>>>> e2175d820dce247c34b2de010a6e5b88654652d4
      <Outlet />
    </section>
  );
}
export default App;
