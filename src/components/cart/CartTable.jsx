// Reusable Cart Table Component
import { FaTrash } from "react-icons/fa";
const CartTable = ({ cartItems, onDecrease, onIncrease, onRemove }) => (
  <table className="w-full table-auto">
    <thead className="border-b border-b-gray-200">
      <tr>
        <th className="px-4 py-2 text-left text-gray-500">Product</th>
        <th className="px-4 py-2 text-center text-gray-500">Price</th>
        <th className="px-4 py-2 text-center text-gray-500">Quantity</th>
        <th className="px-4 py-2 text-center text-gray-500">Total</th>
        <th className="px-4 py-2 text-right text-gray-500">Actions</th>
      </tr>
    </thead>
    <tbody>
      {cartItems.map((product) => (
        <tr key={product.id} className="border-b border-b-gray-200">
          <td className="flex items-center py-2 text-left">
            <img
              src={product.image}
              alt={product.name}
              className="mr-4 h-18 w-18 rounded-lg object-cover"
            />
            {product.name}
          </td>
          <td className="px-4 py-2 text-center">${product.price.toFixed(2)}</td>
          <td className="px-4 py-2 text-center">
            <QuantityControl
              quantity={product.quantity}
              onIncrease={() => onIncrease(product.id)}
              onDecrease={() => onDecrease(product.id)}
            />
          </td>
          <td className="px-4 py-2 text-center">
            ${(product.price * product.quantity).toFixed(2)}
          </td>
          <td className="px-4 py-2 text-right">
            <button
              className="cursor-pointer text-red-400 hover:text-red-700"
              onClick={() => onRemove(product.id)}
            >
              <FaTrash className="h-5 w-5" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default CartTable;
