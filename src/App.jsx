import React from "react";
import "./App.css";
import Header from "./components/header";
import Footer from "./component/Footer/Footer";

import CheckoutView from "./pages/Chekout/CheckoutView";

function App() {
  return (
    <section className="">
      <Header />
      <CheckoutView />
      {/* <CartView /> */}
      <Footer />
    </section>
  );
}
export default App;
