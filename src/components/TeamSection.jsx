import React from "react";
import ProfileCard from "./ProfileCard";

const TeamSection = () => (
  <section
    id="team"
    className="team-section parallax"
    style={{
      backgroundImage: "url(/images/team-bg.webp)",
    }}
  >
    <h2 className="text-4xl font-bold mb-8 text-black">Our Team</h2>
    <div className="flex flex-wrap justify-center gap-6">
      <ProfileCard
        profile_image="/images/jeremy.jpg"
        name="Jeremy Ghatan"
        role="Marketing Lead"
        linkedin="https://www.linkedin.com/in/jeremyghatan/"
      />
      <ProfileCard
        profile_image="/images/micah.jpg"
        name="Micah Kepe"
        role="Software Engineer"
        linkedin="https://www.linkedin.com/in/micah-kepe/"
        github="https://github.com/micahkepe"
      />
      <ProfileCard
        profile_image="/images/zach.jpg"
        name="Zach Kepe"
        role="Software Engineer"
        linkedin="https://www.linkedin.com/in/zachary-kepe-6801b7241/"
        github="https://github.com/zachkepe"
      />
      <ProfileCard
        profile_image="/images/freya.jpg"
        name="Freya Zhang"
        role="UX Designer"
        linkedin="https://www.linkedin.com/in/freya-zhang-184617260/"
      />
    </div>
  </section>
);

export default TeamSection;
