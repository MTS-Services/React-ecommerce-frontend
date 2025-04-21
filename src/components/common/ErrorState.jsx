const ErrorState = ({ error }) => (
  <div className="flex h-screen flex-col items-center justify-center">
    <div className="mb-4 text-red-500">
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
          d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    </div>
    <h2 className="text-xl font-semibold text-gray-800">
      Oops! Something went wrong
    </h2>
    <p className="mt-2 text-gray-600">{error}</p>
    <button
      onClick={() => window.location.reload()}
      className="mt-4 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
    >
      Try Again
    </button>
  </div>
);

export default ErrorState;
