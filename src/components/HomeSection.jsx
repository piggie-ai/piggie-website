import React from "react";
import { FaArrowRight } from "react-icons/fa6";

const HomeSection = () => (
  <section
    id="home"
    className="home-section min-h-screen flex flex-col justify-center items-center text-center p-10 bg-cover bg-center parallax"
    style={{
      backgroundImage: "url(/images/hero-bg.jpg)",
    }}
  >
    <div className="text-slate-500 py-2 px-4 rounded-full mb-4 shadow outline decoration-slate-400">
      <p className="text-sm">
        Coming soon! <span className="text-blue-600 font-bold">Stay tuned</span>
      </p>
    </div>
    <h1 className="text-6xl font-bold mb-4 text-black">
      We're changing the way people budget and save.
    </h1>
    <p className="text-2xl mb-8 text-slate-700">
      Your bank account's best friend.
    </p>
    <div className="space-x-4">
      {/* <a
        href="#subscribe"
        className="bg-black hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg"
      >
        Subscribe
      </a> */}
      <a
        href="#features"
        className="text-black font-bold py-3 px-4 rounded-lg inline-flex items-center"
      >
        Learn More <FaArrowRight className="ml-2" />
      </a>
    </div>
  </section>
);

export default HomeSection;
