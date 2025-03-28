import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "../App";

import AboutPage from "../pages/about/AboutPage";
import CartPage from "../pages/cart/CartPage";
import CheckouPage from "../pages/chekout/CheckoutPage";
import ContactPage from "../pages/contact/ConatcPage";
import ProductsPage from "../pages/products/ProductsPage";
import CopyCart from "../pages/cart/CopyCart";
import HomePage from "../pages/home/HomePage";
import SuccessPage from "../pages/chekout/SuccessPage";
import CancelPage from "../pages/chekout/CancelPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomePage />} />

      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/copycart" element={<CopyCart />} />
      <Route path="/checkout" element={<CheckouPage />} />
      <Route path="/success" element={<SuccessPage />} />
      <Route path="/cancel" element={<CancelPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Route>,
  ),
);
