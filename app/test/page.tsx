"use client";

import { useState } from "react";

export default function TestPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const initializePayment = async () => {
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/paystack/initialize", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: "customer@example.com",
          amount: 5000 * 100,
        }),
      });

      const data = await response.json();

      console.log(data);

      if (data.status) {
        setMessage(data.message || "Payment initialized successfully");
        console.log("Payment URL:", data.data?.authorization_url);
      } else {
        setMessage(data.message || "Payment initialization failed");
      }
    } catch (error) {
      console.error(error);
      setMessage("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold">Paystack Test</h1>

      <button
        onClick={initializePayment}
        disabled={loading}
        className="mt-5 rounded bg-black px-5 py-3 text-white"
      >
        {loading ? "Processing..." : "Initialize Payment"}
      </button>

      {message && <p className="mt-5">{message}</p>}
    </main>
  );
}