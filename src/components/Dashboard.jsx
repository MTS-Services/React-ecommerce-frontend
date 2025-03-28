import { useState } from "react";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";
import Sidebar from "./sidebar";
import EditProduct from "./EditProduct";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="flex-grow p-8">
        {activeTab === "products" && <ProductList />}
        {activeTab === "add-products" && <AddProductForm />}
        {activeTab === "all-products" && <ProductList />}
        {activeTab === "edit-products" && <EditProduct />}
      </main>
    </div>
  );
};

export default Dashboard;
