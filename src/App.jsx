import React from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import { Outlet } from "react-router-dom";

import ScrollToTop from "./components/common/ScrollToTop";

function App() {
  return (
    <section className="">
      <ScrollToTop />
      <Navbar />
      <Outlet />
      <Footer />
    </section>
  );
}
export default App;
