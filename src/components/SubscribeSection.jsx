import React, { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    try {
      const response = await fetch("/.netlify/functions/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        console.log("Subscription successful");
      } else {
        console.error("Subscription failed");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
    }
  };

  return (
    <section
      id="subscribe"
      className="subscribe-section min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center shadow-md rounded p-8 my-6"
    >
      <h2 className="text-3xl font-semibold mb-4 text-black">Stay Updated!</h2>
      <p className="mb-4 text-black">
        Join our mailing list to get the latest updates about Piggie.
      </p>
      <form onSubmit={handleSubmit} className="w-full max-w-md">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-base font-bold text-gray-700"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md text-gray-900"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-black text-white p-2 rounded-md shadow-lg hover:bg-gray-700"
        >
          Subscribe
        </button>
      </form>
    </section>
  );
};

export default SubscribeSection;
