import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

const CheckoutForm = ({ product, total }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  console.log(total);
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    try {
      // ✅ Step 1: Create PaymentIntent without customer ID
      const response = await axios.post(
        "http://localhost:4242/create-payment-intent",
        {
          amount: Math.round(total * 100), // Convert to cents
        },
      );

      const { clientSecret } = response.data; // ✅ Correct way to get JSON data
      const cardElement = elements.getElement(CardElement);

      // ✅ Step 2: Confirm payment
      const { error, paymentIntent } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: { card: cardElement },
        },
      );

      if (error) {
        setError(error.message);
      } else if (paymentIntent.status === "succeeded") {
        alert("🎉 Payment successful!");
      }
    } catch (err) {
      setError(err.response?.data?.error || "An error occurred.");
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="">
        <label
          htmlFor="card-element"
          className="block font-medium text-gray-700"
        >
          Card details
        </label>
        <CardElement
          id="card-element"
          className="mt-2 rounded-md border border-gray-300 p-2 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
        />
      </div>

      {error && <div className="text-sm text-red-600">{error}</div>}

      <button
        type="submit"
        disabled={loading}
        className={`w-full cursor-pointer rounded-md px-4 py-2 font-semibold text-white ${
          loading ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
        } focus:ring-2 focus:ring-indigo-500 focus:outline-none`}
      >
        {loading ? "Processing..." : `Pay $${total}`}
      </button>
    </form>
  );
};

export default CheckoutForm;
