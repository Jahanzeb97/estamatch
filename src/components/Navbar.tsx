import { Link } from "react-router-dom";
import { Logo, SalesLink } from "./ui";

const navLinks = [
  { label: "Features", to: { pathname: "/", hash: "#features" } },
  { label: "How we work", to: { pathname: "/", hash: "#how-it-works" } },
  { label: "Automation", to: { pathname: "/", hash: "#outreach" } },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#f9f9f9]">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <Logo />

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-10 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              className="text-sm font-normal text-[#888888] transition-colors hover:text-[#2d2d2d]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <SalesLink className="px-5 py-2.5 text-sm">Connect with Sales</SalesLink>
      </div>
    </header>
  );
}
