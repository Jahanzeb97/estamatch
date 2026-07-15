import { Link } from "react-router-dom";
import { Logo, SalesLink } from "./ui";

const companyLinks = [
  { label: "Features", to: { pathname: "/", hash: "#features" } },
  { label: "How we work", to: { pathname: "/", hash: "#how-it-works" } },
  { label: "Automation", to: { pathname: "/", hash: "#outreach" } },
];

const helpLinks = [
  "Customer Support",
  "Delivery Details",
  "Terms & Conditions",
  "Privacy Policy",
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#F0FCFC]/40 via-[#F4F5F9]/40 to-[#FFF0F5]/40 py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-5 lg:pr-8">
            <Logo />
            <p className="mt-6 max-w-[380px] text-[15px] leading-[1.6] text-[#475569]">
              This AI-powered real estate platform streamlines buyer matching by scoring
              and ranking leads based on property fit. It automates outreach, ensuring
              targeted communication with the right buyers.
            </p>
          </div>

          {/* Company Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[16px] font-semibold text-[#1E293B]">Company</h4>
            <ul className="mt-6 space-y-4">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-[15px] text-[#475569] transition-colors hover:text-[#1E293B]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help Links */}
          <div className="lg:col-span-2">
            <h4 className="text-[16px] font-semibold text-[#1E293B]">Help</h4>
            <ul className="mt-6 space-y-4">
              {helpLinks.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-[15px] text-[#475569] transition-colors hover:text-[#1E293B]"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="lg:col-span-3">
            <h4 className="text-[16px] font-semibold text-[#1E293B]">Newsletter</h4>
            <form
              className="mt-6 flex flex-col gap-3"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full rounded-lg border border-gray-200 bg-white px-4 py-3.5 text-[15px] text-gray-900 outline-none placeholder:text-gray-400 focus:border-gray-400 focus:ring-1 focus:ring-gray-400"
              />
              <SalesLink className="w-full justify-center rounded-lg px-4 py-3.5 text-[15px]">
                Connect with Sales
              </SalesLink>
            </form>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-20 border-t border-gray-200/80 pt-8 text-center">
          <p className="text-[14px] text-[#475569]">
            &copy; Copyright 2022, All Rights Reserved by ClarityU
          </p>
        </div>
      </div>
    </footer>
  );
}