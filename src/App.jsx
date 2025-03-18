import "./App.css";
import CatagoryCart from "./component/catagoryCart/CatagoryCart";
import HeroSection from "./component/HeroSection/HeroSection";
import CartView from "./pages/cart/CartView";
import CheckoutView from "./pages/Chekout/CheckoutView";

function App() {
  return (
    <section className="px-44">
      <HeroSection></HeroSection>
      <CatagoryCart></CatagoryCart>
      <CartView />
    </section>
  );
}

export default App;
