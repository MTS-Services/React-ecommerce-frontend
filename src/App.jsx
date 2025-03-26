import React from "react";
import Navbar from "./layout/Navbar";
import { Outlet } from "react-router-dom";
import ProductCard from "./components/Home/ProductCard";
import SingleProduct from "./components/Home/SingleProduct";

function App() {
  return (
    <section className="">
      <Navbar />
      <ProductCard />
      <SingleProduct />

      {/* <CopyCart /> */}
      <Outlet />
    </section>
  );
}
export default App;
