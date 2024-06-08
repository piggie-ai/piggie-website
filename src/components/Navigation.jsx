import { useEffect, useState } from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "Mission", href: "#mission" },
  { name: "Values", href: "#values" },
  { name: "Team", href: "#team" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPosition = window.scrollY + 200; // Adjust this value for your needs

      sections.forEach((section) => {
        if (
          section.offsetTop <= scrollPosition &&
          section.offsetTop + section.offsetHeight > scrollPosition
        ) {
          setActiveSection(section.getAttribute("id"));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Disclosure
      as="nav"
      className="bg-white w-full fixed top-0 z-20 border-b border-gray-200"
    >
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-8 w-8 rounded-full"
                    src="/images/logo-pink.png"
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
                          activeSection === item.href.substring(1)
                            ? "underline text-black"
                            : "text-gray-500 hover:bg-slate-100 hover:text-black transition duration-200",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                        aria-current={
                          activeSection === item.href.substring(1)
                            ? "page"
                            : undefined
                        }
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md border-gray-800 bg-white p-2 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-400">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden bg-gray-50">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    activeSection === item.href.substring(1)
                      ? "underline text-black"
                      : "text-gray-500 hover:bg-slate-100 hover:text-black transition duration-200",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={
                    activeSection === item.href.substring(1)
                      ? "page"
                      : undefined
                  }
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
