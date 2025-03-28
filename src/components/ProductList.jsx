import { useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";
import EditProduct from "./EditProduct";

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      title: "Burger",
      price: "150$",
      category: "Food",
    },
    {
      id: 2,
      image: "https://via.placeholder.com/50",
      title: "Pizza",
      price: "200$",
      category: "Food",
    },
  ]);

  const [editProduct, setEditProduct] = useState(null);

  // Delete product
  const handleDelete = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  // Open edit form
  const handleEdit = (product) => {
    setEditProduct(product);
  };

  // Save updated product
  const handleSave = (updatedProduct) => {
    setProducts(
      products.map((p) => (p.id === updatedProduct.id ? updatedProduct : p)),
    );
    setEditProduct(null);
  };

  return (
    <div className="rounded bg-white p-6 shadow-md">
      <table className="w-full border-collapse">
        <thead className="border-b bg-gray-100">
          <tr>
            <th className="p-4 text-left">Image</th>
            <th className="p-4 text-left">Title</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4 text-left">Category</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id} className="border-b hover:bg-gray-50">
              <td className="p-4">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-12 w-12 rounded object-cover"
                />
              </td>
              <td className="p-4">{product.title}</td>
              <td className="p-4">{product.price}</td>
              <td className="p-4">{product.category}</td>
              <td className="flex space-x-2 p-4">
                <button
                  onClick={() => handleDelete(product.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <BiTrash size={25} />
                </button>
                <button
                  onClick={() => handleEdit(product)}
                  className="text-blue-500 hover:text-blue-700"
                >
                  <BiEdit size={25} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Show edit form if a product is being edited */}
      {editProduct && (
        <EditProduct
          product={editProduct}
          onSave={handleSave}
          onCancel={() => setEditProduct(null)}
        />
      )}
    </div>
  );
};

export default ProductList;
