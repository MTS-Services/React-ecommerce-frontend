const EmptyState = ({ message = "Product not found" }) => (
  <div className="flex h-screen flex-col items-center justify-center pt-56">
    <div className="mb-4 text-gray-400">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-16 w-16"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <h2 className="text-xl font-semibold text-gray-800">{message}</h2>
    <p className="mt-2 text-gray-600">
      We couldn't find what you're looking for
    </p>
    <Link
      to="/products"
      className="mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      Browse Products
    </Link>
  </div>
);

export default EmptyState;
