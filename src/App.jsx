import { useEffect } from "react";
import SmoothScroll from "smooth-scroll";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomeSection from "./components/HomeSection";
import FeaturesSection from "./components/FeaturesSection";
import MissionSection from "./components/MissionSection";
import ValuesSection from "./components/ValuesSection";
import TeamSection from "./components/TeamSection";

export default function App() {
  useEffect(() => {
    new SmoothScroll('a[href*="#"]', {
      speed: 800,
      speedAsDuration: true,
    });
  }, []);

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <Navigation />
      <main className="flex-grow w-full pt-16">
        <HomeSection />
        <FeaturesSection />
        <MissionSection />
        <ValuesSection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  );
}
