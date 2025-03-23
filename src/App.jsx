import React from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Outlet } from "react-router-dom";
import HeroSection from "./components/Testing";
import HomePage from "./pages/home/HomePage";
// -----------------
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
