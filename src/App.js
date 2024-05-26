import { useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import SmoothScroll from "smooth-scroll";

const navigation = [
  { name: "Home", href: "#hero", current: true },
  { name: "Features", href: "#features", current: false },
  { name: "Mission", href: "#mission", current: false },
  { name: "Values", href: "#values", current: false },
  { name: "Team", href: "#team", current: false },
  { name: "Subscribe", href: "#subscribe", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

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
      <Disclosure as="nav" className="bg-white w-full fixed top-0 z-20">
        {({ open }) => (
          <>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="flex h-16 items-center justify-between">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8"
                      src="/images/logo.png"
                      alt="Piggie"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className={classNames(
                            item.current
                              ? "bg-gray-900 text-white"
                              : "text-gray-300 hover:bg-gray-700 hover:text-white",
                            "rounded-md px-3 py-2 text-sm font-medium"
                          )}
                          aria-current={item.current ? "page" : undefined}
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md border-gray-800 bg-white p-2 text-gray-400 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "bg-gray-900 text-white"
                        : "text-gray-300 hover:bg-gray-700 hover:text-white",
                      "block rounded-md px-3 py-2 text-base font-medium"
                    )}
                    aria-current={item.current ? "page" : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>

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
            Your financial future starts here.
          </p>
        </section>
        <section
          id="features"
          className="features-section min-h-screen bg-cover bg-center text-center p-10"
          style={{
            backgroundImage: "url(/images/bank.jpg)",
          }}
        >
          <h2 className="text-4xl font-bold mb-8 text-black">Our Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="feature bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">Feature 1</h3>
              <p className="mb-4 text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="feature bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">Feature 2</h3>
              <p className="mb-4 text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="feature bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">Feature 3</h3>
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="value bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">Value 1</h3>
              <p className="mb-4 text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="value bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">Value 2</h3>
              <p className="mb-4 text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="value bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">Value 3</h3>
              <p className="mb-4 text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
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
            <div className="team-member bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">
                Member 1
              </h3>
              <p className="mb-4 text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="team-member bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">
                Member 2
              </h3>
              <p className="mb-4 text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
            <div className="team-member bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold mb-4 text-black">
                Member 3
              </h3>
              <p className="mb-4 text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
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
      <footer className="w-full p-4 bg-white text-gray-700 text-center font-thin">
        <p>&copy; 2024 Piggie. All rights reserved.</p>
      </footer>
    </div>
  );
}
