import React from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Outlet } from "react-router-dom";
import HeroSection from "./components/Testing"; // Keep this import
import HomePage from "./pages/home/HomePage"; // Keep this import

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
