import React from "react";

const ValuesSection = () => (
  <section
    id="values"
    className="values-section"
  >
    <h2 className="text-4xl font-bold mb-8 text-black">Our Values</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      <div className="value flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeLinecap="1.5"
          stroke="currentColor"
          className="w-10 h-10 mb-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z"
          />
        </svg>

        <h3 className="text-2xl font-semibold mb-4 text-black">
          Making personal finance fun
        </h3>
        <p className="mb-4 text-gray-500">
          Finance is boring. We're here to change that.
        </p>
      </div>
      <div className="value flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 mb-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
          />
        </svg>
        <h3 className="text-2xl font-semibold mb-4 text-black">
          Empowering people to save
        </h3>
        <p className="mb-4 text-gray-500">
          Saving money is hard. We make it easy.
        </p>
      </div>
      <div className="value flex flex-col items-center bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-10 h-10 mb-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
        <h3 className="text-2xl font-semibold mb-4 text-black">
          Building a community
        </h3>
        <p className="mb-4 text-gray-500">
          It might not take a village to save, but it's more fun with one.
        </p>
      </div>
    </div>
    <img
      src="/images/friends.jpg"
      alt="Friends"
      className="rounded-lg w-full max-w-screen-md mx-auto shadow-lg"
    />
  </section>
);

export default ValuesSection;
