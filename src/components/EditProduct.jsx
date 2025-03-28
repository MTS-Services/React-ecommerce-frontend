import { useState } from "react";

const EditProduct = ({ product, onSave, onCancel }) => {
  const [title, setTitle] = useState(product.title);
  const [price, setPrice] = useState(product.price);
  const [category, setCategory] = useState(product.category);

  // Submit edited product
  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...product, title, price, category });
  };

  return (
    <div className="mt-4 rounded bg-gray-200 p-4">
      <h3 className="mb-2 text-lg font-bold">Edit Product</h3>
      <form onSubmit={handleSubmit} className="flex gap-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full border p-2"
          placeholder="Title"
        />
        <input
          type="text"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="w-full border p-2"
          placeholder="Price"
        />
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border p-2"
          placeholder="Category"
        />
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white"
        >
          Save
        </button>
        <button
          type="button"
          onClick={onCancel}
          className="rounded bg-gray-400 px-4 py-2 text-white"
        >
          Cancel
        </button>
      </form>
    </div>
  );
};

export default EditProduct;
