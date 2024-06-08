import React from "react";

const MissionSection = () => (
  <section
    id="mission"
    className="mission-section parallax"
    style={{
      backgroundImage: "url(/images/mission-bg.webp)",
    }}
  >
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl font-bold mb-8 text-black">Our Mission</h2>
      <p className="text-lg text-gray-700 mb-8">
        At <strong>Piggie</strong>, our mission is to empower individuals to take control of
        their finances through innovative tools and a supportive community. We
        believe that everyone deserves the knowledge and resources to make
        informed financial decisions and achieve their financial goals.
      </p>
      <img
        src="/images/community.webp"
        alt="Our Mission"
        className="rounded-lg w-full max-w-screen-md mx-auto shadow-lg"
      />
    </div>
  </section>
);

export default MissionSection;
