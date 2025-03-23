import React from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <section className="">
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}
export default App;
