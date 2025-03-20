import React from "react";
import "./App.css";
import Footer from "./component/Footer/Footer";
import ProductCard from "./components/ProductCard";
import SinglePage from "./components/SinglePage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <section className="">
      <Navbar />
      <ProductCard />
      <SinglePage />
      <Footer />
    </section>
  );
}
export default App;
