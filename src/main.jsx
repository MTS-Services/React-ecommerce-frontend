import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { CartProvider } from "./context/cartContext.jsx";
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>,
);
