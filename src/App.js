import { useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HeroSection from "./components/HomeSection";
import FeaturesSection from "./components/FeaturesSection";
import MissionSection from "./components/MissionSection";
import ValuesSection from "./components/ValuesSection";
import TeamSection from "./components/TeamSection";
import SubscribeSection from "./components/SubscribeSection";

export default function App() {
  // smooth scroll
  useEffect(() => {
    new SmoothScroll('a[href*="#"]', {
      speed: 800,
      speedAsDuration: true,
    });
  }, []);

  const handleSubmit = (email) => {
    console.log("Email submitted:", email);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <Navigation />
      <main className="flex-grow w-full pt-16">
        <HeroSection />
        <FeaturesSection />
        <MissionSection />
        <ValuesSection />
        <TeamSection />
        <SubscribeSection handleSubmit={handleSubmit} />
      </main>
      <Footer />
    </div>
  );
}
