import { Sun } from "lucide-react";

export default function NavBar() {

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="w-full border-2 ">

      <div className="mx-auto flex h-16  items-center justify-between px-8 ">

        {/* Name */}
        <div className="shrink-0 justify-items-start ">
          <span className="text-2xl ">
            Keerthi Vasan
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-2xl    transition-colors hover:text-blue-500"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Theme Button */}
        <button>
          <Sun className="text-2xl"/>
        </button>

      </div>
    </nav>
  );
}