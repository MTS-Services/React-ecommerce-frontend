import React from "react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import { Outlet } from "react-router-dom";
import ProductCard2 from "./components/Home/ProductCard2";
import SingleProduct from "./components/Home/SingleProduct";

function App() {
  return (
    <section className="">
      <Navbar />

      <ProductCard2 />
      <SingleProduct />

      {/* <CopyCart /> */}
      <Outlet />
      <Footer />
    </section>
  );
}
export default App;
