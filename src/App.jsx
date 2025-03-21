import React from "react";
import Header from "./layout/header";
import Footer from "./layout/Footer";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <section className="">
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
}
export default App;
