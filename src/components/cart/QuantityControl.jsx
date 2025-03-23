// Reusable Quantity Control Component
const QuantityControl = ({ quantity, onIncrease, onDecrease }) => (
  <div className="flex items-center justify-center gap-2">
    <button
      className="cursor-pointer rounded bg-gray-200 px-2 py-0 font-bold hover:bg-gray-400"
      onClick={onDecrease}
    >
      -
    </button>
    <span className="px-3">{quantity}</span>
    <button
      className="cursor-pointer rounded bg-gray-200 px-2 py-0 font-bold hover:bg-gray-400"
      onClick={onIncrease}
    >
      +
    </button>
  </div>
);

export default QuantityControl;
