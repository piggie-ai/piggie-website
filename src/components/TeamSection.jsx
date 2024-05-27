import React from "react";
import ProfileCard from "./ProfileCard";

const TeamSection = () => (
  <section
    id="team"
    className="team-section min-h-screen bg-cover bg-center text-center p-10"
    style={{
      backgroundImage: "url(/images/team-bg.jpg)",
    }}
  >
    <h2 className="text-4xl font-bold mb-8 text-black">Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <ProfileCard
        profile_image="/images/jeremy.jpg"
        name="Jeremy Ghatan"
        role="Founder"
        linkedin="https://www.linkedin.com/in/jeremyghatan/"
      />
      <ProfileCard
        profile_image="/images/micah.jpg"
        name="Micah Kepe"
        role="Founder"
        linkedin="https://www.linkedin.com/in/micah-kepe/"
        github="https://github.com/micahkepe"
        email="micahkepe@gmail.com"
        website="https://www.micahkepe.com/"
      />
      <ProfileCard
        profile_image="/images/zach.jpg"
        name="Zach Kepe"
        role="Founder"
        linkedin="https://www.linkedin.com/in/zachary-kepe-6801b7241/"
        github="https://github.com/zachkepe"
        email="zachkepe@gmail.com"
        website="https://www.zachkepe.com/"
      />
    </div>
  </section>
);

export default TeamSection;
