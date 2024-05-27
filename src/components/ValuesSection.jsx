import React from "react";

const ValuesSection = () => (
  <section
    id="values"
    className="values-section min-h-screen bg-cover bg-center text-center p-10"
    style={{
      backgroundImage: "url(/images/values-bg.jpg)",
    }}
  >
    <h2 className="text-4xl font-bold mb-8 text-black">Our Values</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      <div className="value bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
        <h3 className="text-2xl font-semibold mb-4 text-black">
          Making personal finance fun
        </h3>
        <p className="mb-4 text-gray-500">
          Finance is boring. We're here to change that.
        </p>
      </div>
      <div className="value bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
        <h3 className="text-2xl font-semibold mb-4 text-black">
          Empowering people to save
        </h3>
        <p className="mb-4 text-gray-500">
          Saving money is hard. We make it easy.
        </p>
      </div>
      <div className="value bg-white p-6 rounded-lg shadow-lg hover:shadow-xl">
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
