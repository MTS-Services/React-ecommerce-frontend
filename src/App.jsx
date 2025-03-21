import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./component/Footer/Footer";
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
