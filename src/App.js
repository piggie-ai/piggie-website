import { useEffect, useState } from "react";
import SmoothScroll from "smooth-scroll";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import ProfileCard from "./components/ProfileCard";

export default function App() {
  // smooth scroll
  useEffect(() => {
    new SmoothScroll('a[href*="#"]', {
      speed: 800,
      speedAsDuration: true,
    });
  }, []);

  const [email, setEmail] = useState("");

  // TODO: setup mailchimp integration
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };

  return (
    <div className="bg-white min-h-screen flex flex-col items-center">
      <Navigation />

      <main className="flex-grow w-full pt-16">
        <section
          id="hero"
          className="hero-section min-h-screen flex flex-col justify-center items-center text-center p-10 bg-cover bg-center"
          style={{
            backgroundImage: "url(/images/hero-bg.jpg)",
          }}
        >
          <h1 className="text-6xl font-bold mb-4 text-black">
            We're changing the way people budget and save.
          </h1>
          <p className="text-2xl mb-8 text-slate-700">
            Your bank account's best friend.
          </p>
        </section>
        <section
          id="features"
          className="features-section min-h-screen bg-cover bg-center text-center p-10"
        >
          <h2 className="text-4xl font-bold mb-8 text-black">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="feature bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">
                Feature 1
              </h3>
              <p className="mb-4 text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="feature bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">
                Feature 2
              </h3>
              <p className="mb-4 text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="feature bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">
                Feature 3
              </h3>
              <p className="mb-4 text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
        </section>
        <section
          id="mission"
          className="mission-section min-h-screen bg-cover bg-center text-center p-10"
          style={{
            backgroundImage: "url(/images/mission-bg.jpg)",
          }}
        >
          <h2 className="text-4xl font-bold mb-8 text-black">Our Mission</h2>
          <p className="text-lg text-gray-700">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem.
          </p>
        </section>
        <section
          id="values"
          className="values-section min-h-screen bg-cover bg-center text-center p-10"
          style={{
            backgroundImage: "url(/images/values-bg.jpg)",
          }}
        >
          <h2 className="text-4xl font-bold mb-8 text-black">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            <div className="value bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">
                Making personal finance fun
              </h3>
              <p className="mb-4 text-gray-500">
                Finance is boring. We're here to change that.
              </p>
            </div>
            <div className="value bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">
                Empowering people to save
              </h3>
              <p className="mb-4 text-gray-500">
                Saving money is hard. We make it easy.
              </p>
            </div>
            <div className="value bg-white p-6 rounded-lg shadow-lg">
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
        <section
          id="subscribe"
          className="subscribe-section min-h-screen flex flex-col justify-center items-center text-center bg-cover bg-center shadow-md rounded p-8 my-6"
          style={{
            backgroundImage: "url(/images/subscribe-bg.jpg)",
          }}
        >
          <h2 className="text-3xl font-semibold mb-4 text-black">
            Stay Updated!
          </h2>
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
                className="mt-1 block w-full border border-gray-300 p-2 rounded-md"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white p-2 rounded-md shadow-lg"
            >
              Subscribe
            </button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}
