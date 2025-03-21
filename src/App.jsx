import React from "react";
import Header from "./layout/header";
import Footer from "./layout/Footer";
import { Outlet } from "react-router-dom";
import CopyCart from "./pages/cart/CopyCart";

function App() {
  return (
    <section className="">
      <Header />
      {/* <CopyCart /> */}
      <Outlet />
      <Footer />
    </section>
  );
}
export default App;
