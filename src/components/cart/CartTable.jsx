import { FaTrash } from "react-icons/fa";

const CartTable = ({ cartItems = [], onDecrease, onIncrease, onRemove }) => {
  // Validate required props
  if (!onRemove || typeof onRemove !== "function") {
    console.error("onRemove is not a function or not provided");
    return (
      <div className="rounded-md bg-red-100 p-4 text-red-500">
        Error: Cart functionality not available. Please try refreshing the page.
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="rounded-md bg-gray-100 p-4 text-center text-gray-500">
        Your cart is empty
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto">
        <thead className="border-b border-b-gray-200">
          <tr>
            <th className="px-4 py-3 text-left font-medium text-gray-600">
              Product
            </th>
            <th className="px-4 py-3 text-center font-medium text-gray-600">
              Price
            </th>
            <th className="px-4 py-3 text-center font-medium text-gray-600">
              Quantity
            </th>
            <th className="px-4 py-3 text-center font-medium text-gray-600">
              Total
            </th>
            <th className="px-4 py-3 text-right font-medium text-gray-600">
              Action
            </th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((product) => (
            <tr
              key={product.id}
              className="border-b border-b-gray-200 hover:bg-gray-50"
            >
              <td className="flex items-center px-4 py-4">
                <img
                  src={product.thumbnail}
                  alt={product.name}
                  className="mr-4 h-16 w-16 rounded-lg object-cover sm:h-20 sm:w-20"
                  onError={(e) => {
                    e.target.src = "/img/placeholder-product.jpg";
                  }}
                />
                <div>
                  <p className="font-medium text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-500">{product.category}</p>
                </div>
              </td>

              <td className="px-4 py-4 text-center font-medium text-gray-900">
                ${product.price.toFixed(2)}
              </td>

              <td className="px-4 py-4 text-center">
                <div className="flex items-center justify-center gap-2">
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 font-bold text-gray-600 hover:bg-gray-100 disabled:opacity-50"
                    onClick={() => onDecrease(product.id)}
                    disabled={product.quantity <= 1}
                    aria-label={`Decrease quantity of ${product.name}`}
                  >
                    −
                  </button>
                  <span className="w-8 text-center">{product.quantity}</span>
                  <button
                    className="flex h-8 w-8 items-center justify-center rounded border border-gray-300 font-bold text-gray-600 hover:bg-gray-100"
                    onClick={() => onIncrease(product.id)}
                    aria-label={`Increase quantity of ${product.name}`}
                  >
                    +
                  </button>
                </div>
              </td>

              <td className="px-4 py-4 text-center font-medium text-gray-900">
                ${(product.price * product.quantity).toFixed(2)}
              </td>

              <td className="px-4 py-4 text-right">
                <button
                  className="rounded-full p-2 text-gray-400 hover:bg-red-50 hover:text-red-600"
                  onClick={() => onRemove(product.id)}
                  aria-label={`Remove ${product.name} from cart`}
                >
                  <FaTrash className="h-5 w-5" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CartTable;
