import ToggleButton from "./ThemeToggleButton"
import { useState } from "react";


export default function NavBar() {
  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#project" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const [activeLink, setActiveLink] = useState("");

  return (
    <nav className="w-full border sticky top-0 z-10 backdrop-blur-md">
      <div className="mx-auto flex h-16 items-center justify-between px-8">

        {/* Name */}
        <div className="shrink-0 justify-items-start">
          <span className="text-sm md:text-lg lg:text-3xl xl:text-4xl">
            Keerthi Vasan
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden items-center gap-16 md:flex">
          {navLinks.map((link) => {
            const isActive = activeLink === link.name;

            return (
              <a
                key={link.name}
                href={link.href}
                className="text-sm transition-colors duration-300 hover:text-blue-500 md:text-sm lg:text-2xl"
                onClick={(e) => {
                  e.preventDefault();
                  setActiveLink(link.name); // Fixed: update state with the clicked link name

                  const targetElement = document.querySelector(link.href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
                }}

                
              >
                <span
                  className={`inline-block transition-all duration-300 ease-out origin-right ${
                    isActive
                      ? "opacity-100 scale-100 translate-x-0 mr-1"
                      : "opacity-0 scale-75 -translate-x-2 w-0 overflow-hidden"
                  }`}
                >
                  &lt;
                </span>

                {/* Link Name */}
                <span>{link.name}</span>

                {/* Closing Bracket with transition */}
                <span
                  className={`inline-block transition-all duration-300 ease-out origin-left ${
                    isActive
                      ? "opacity-100 scale-100 translate-x-0 ml-1"
                      : "opacity-0 scale-75 translate-x-2 w-0 overflow-hidden"
                  }`}
                >
                  &gt;
                </span>
              </a>
            );
          })}
        </div>

       <ToggleButton/>

      </div>
    </nav>
  );
}