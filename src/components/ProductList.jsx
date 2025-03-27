import { useState } from "react";
import { BiEdit, BiTrash } from "react-icons/bi";

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "https://via.placeholder.com/50",
      title: "Burger",
      price: "150$",
      category: "Food",
    },
  ]);

  const handleDelete = (id) => {
    setProducts((prev) => prev.filter((product) => product.id !== id));
  };

  return (
    <div className="rounded bg-white shadow-md">
      <table className="w-full">
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
                  <BiTrash size={20} />
                </button>
                <button className="text-blue-500 hover:text-blue-700">
                  <BiEdit size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductList;
