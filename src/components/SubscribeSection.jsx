import React, { useState } from "react";

const SubscribeSection = ({ handleSubmit }) => {
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit(email);
  };

  return (
    <section
      id="subscribe"
      className="subscribe-section min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center shadow-md rounded p-8 my-6"
      style={{
        backgroundImage: "url(/images/subscribe-bg.jpg)",
      }}
    >
      <h2 className="text-3xl font-semibold mb-4 text-black">Stay Updated!</h2>
      <p className="mb-4 text-black">
        Join our mailing list to get the latest updates about Piggie.
      </p>
      <form onSubmit={onSubmit} className="w-full max-w-md">
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
            className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
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
