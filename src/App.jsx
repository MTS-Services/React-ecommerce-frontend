import React from "react";
import "./App.css";
import Header from "./components/header";

import CheckoutView from "./pages/Chekout/CheckoutView";

function App() {
  return (
    <section className="">
      <Header />
      <CheckoutView />
      {/* <CartView /> */}
    </section>
  );
}

export default App;
