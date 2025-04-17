import React, { useState } from "react";
import { useStripe, useElements } from "@stripe/react-stripe-js";

const DELIVERY_CHARGE = 5;

const CheckoutForm = ({ product }) => {
  // Ensure cartItems is always an array
  const [cartItems, setCartItems] = useState(
    Array.isArray(product) ? product : [product],
  );

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const total = subtotal + DELIVERY_CHARGE;

  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    try {
      // Step 1: Create a Checkout session on your backend
      const response = await fetch(
        "https://e-commerce-test-ltj4.onrender.com/api/v1/stripe/checkout",
        // https://e-commerce-test-ltj4.onrender.com
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            products: cartItems.map((item) => ({
              name: item.name,
              description: item.description,
              price: item.price, // Convert to cents
              quantity: item.quantity,
            })),
          }),
        },
      );

      const { sessionId } = await response.json();

      // Step 2: Redirect to Stripe Checkout
      const { error } = await stripe.redirectToCheckout({ sessionId });

      if (error) {
        setError("An error occurred during the payment process.");
        console.error("Error during Stripe checkout:", error);
      }
    } catch (err) {
      setError(err.message || "An error occurred.");
      console.error("Error creating Stripe checkout session:", err);
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="">
      {/* Error Message */}
      {error && <div className="text-sm text-red-600">{error}</div>}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className={`flex w-full cursor-pointer items-center justify-center gap-2 rounded-md px-4 py-2 font-semibold text-white ${
          loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
        } focus:ring-2 focus:ring-indigo-500 focus:outline-none`}
      >
        {loading ? (
          <>
            <svg
              className="h-5 w-5 animate-spin text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 00-8 8h4z"
              ></path>
            </svg>
            Processing...
          </>
        ) : (
          `Pay Now $${total.toFixed(2)}`
        )}
      </button>
    </form>
  );
};

export default CheckoutForm;
