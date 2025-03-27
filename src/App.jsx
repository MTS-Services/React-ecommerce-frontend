import React from "react";
import Navbar from "./layout/Navbar";
import { Outlet } from "react-router-dom";
import ProductCard from "./components/Home/ProductCard";
import SingleProduct from "./components/Home/SingleProduct";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <section className="">
      <Navbar />
      <ProductCard />
      <SingleProduct />
      <Dashboard />
      {/* <CopyCart /> */}
      <Outlet />
    </section>
  );
}
export default App;
// In the App component, we have imported the AdminDashboard component and used it in the JSX. We have also updated the import statement to PascalCase to match the component naming convention.
