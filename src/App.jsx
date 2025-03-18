import "./App.css";
import HeroSection from "./component/HeroSection/HeroSection";
import CartView from "./pages/cart/CartView";
import CheckoutView from "./pages/Chekout/CheckoutView";

function App() {
  return (
    <section className="px-44">
      <HeroSection></HeroSection>

      <CartView />
    </section>
  );
}

export default App;
