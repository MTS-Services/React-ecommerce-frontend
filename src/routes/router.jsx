import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import App from "../App";
import HomePage from "../pages/home/Home";
import AboutPage from "../pages/about/AboutPage";
import CartPage from "../pages/cart/CartPage";
import CheckouPage from "../pages/chekout/CheckoutPage";
import ContactPage from "../pages/contact/ConatcPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/service" element={<CartPage />} />
      <Route path="/service" element={<CheckouPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Route>,
  ),
);
