const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="h-screen w-64 bg-teal-600 p-4">
      <h2 className="mb-6 text-2xl font-bold text-white">Dashboard</h2>
      <nav>
        <button
          className={`mb-2 w-full rounded p-2 text-left ${
            activeTab === "products"
              ? "bg-white text-teal-600"
              : "text-white hover:bg-teal-500"
          }`}
          onClick={() => setActiveTab("products")}
        >
          Products
        </button>
        <button
          className={`mb-2 w-full rounded p-2 text-left ${
            activeTab === "all-products"
              ? "bg-white text-teal-600"
              : "text-white hover:bg-teal-500"
          }`}
          onClick={() => setActiveTab("all-products")}
        >
          All Products
        </button>
        <button
          className={`w-full rounded p-2 text-left ${
            activeTab === "add-products"
              ? "bg-white text-teal-600"
              : "text-white hover:bg-teal-500"
          }`}
          onClick={() => setActiveTab("add-products")}
        >
          Add Products
        </button>
      </nav>
    </div>
  );
};

export default Sidebar;
