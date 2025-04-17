import React from "react";
import Navbar from "./layout/Navbar";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <section className="">
      <Navbar />
      <Outlet />

      {/* <Dashboard /> */}
      {/* <Footer /> */}
    </section>
  );
}
export default App;
// In the App component, we have imported the AdminDashboard component and used it in the JSX. We have also updated the import statement to PascalCase to match the component naming convention.
import Home from "./pages/home/Home";
