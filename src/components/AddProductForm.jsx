import { useState } from "react";

const AddProductForm = () => {
  const [product, setProduct] = useState({
    title: "",
    shortDescription: "",
    longDescription: "",
    price: "",
    category: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add product submission logic here
    console.log("Product submitted:", product);
  };

  return (
    <form onSubmit={handleSubmit} className="rounded bg-white p-6 shadow-md">
      <div className="mb-4">
        <label className="mb-2 block">Title</label>
        <input
          type="text"
          name="title"
          value={product.title}
          onChange={handleInputChange}
          className="w-full rounded border p-2"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block">Short Description</label>
        <textarea
          name="shortDescription"
          value={product.shortDescription}
          onChange={handleInputChange}
          className="w-full rounded border p-2"
        />
      </div>
      <div className="mb-4">
        <label className="mb-2 block">Long Description</label>
        <textarea
          name="longDescription"
          value={product.longDescription}
          onChange={handleInputChange}
          className="h-32 w-full rounded border p-2"
        />
      </div>
      <div className="mb-4 flex space-x-4">
        <div className="w-1/2">
          <label className="mb-2 block">Price</label>
          <input
            type="text"
            name="price"
            value={product.price}
            onChange={handleInputChange}
            className="w-full rounded border p-2"
          />
        </div>
        <div className="w-1/2">
          <label className="mb-2 block">Category</label>
          <input
            type="text"
            name="category"
            value={product.category}
            onChange={handleInputChange}
            className="w-full rounded border p-2"
          />
        </div>
      </div>
      <div className="mb-4">
        <label className="mb-2 block">Image</label>
        <input
          type="file"
          name="image"
          value={product.image}
          onChange={handleInputChange}
          className="w-full rounded border p-2"
        />
      </div>
      <button
        type="submit"
        className="w-full rounded bg-teal-600 p-2 text-white hover:bg-teal-700"
      >
        Add Product
      </button>
    </form>
  );
};

export default AddProductForm;
