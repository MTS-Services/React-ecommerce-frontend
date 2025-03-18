import React from "react";
import "./App.css";

import Header from "./components/header";
import CartView from "./pages/cart/CartView";
import CheckoutView from "./pages/Chekout/CheckoutView";

function App() {
  return (
    <section className="px-44">
      <Header />
      section <CartView />
    </section>
  );
}

export default App;
