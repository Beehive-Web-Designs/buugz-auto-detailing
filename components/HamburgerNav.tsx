"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const serviceLinks = [
  { href: "/services", label: "All Services" },
  { href: "/services/top-tier-detail", label: "Top Tier Detail" },
  { href: "/services/full-detail", label: "Full Detail" },
  { href: "/services/interior-detail", label: "Interior Detail" },
  { href: "/services/exterior-detail", label: "Exterior Detail" },
  { href: "/services/ceramic-coating-paint-correction", label: "Ceramic Coating & Paint Correction" },
  { href: "/services/additional-services", label: "Additional Services" },
  { href: "/services/motorcycles", label: "Motorcycles" },
  { href: "/services/rv-and-marine", label: "RV & Marine" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/book", label: "BOOK NOW", isCta: true },
];

export default function HamburgerNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const pathname = usePathname();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative w-10 h-10 flex flex-col justify-center items-center gap-1.5 z-[60] focus:outline-none focus:ring-2 focus:ring-focus rounded"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
            isOpen ? "opacity-0 scale-0" : ""
          }`}
        />
        <span
          className={`block w-6 h-0.5 bg-white transition-all duration-300 ease-out ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Menu panel */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-black border-l border-white/10 z-50 transform transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <nav className="flex flex-col pt-24 px-8 gap-6">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className={`brand-font text-lg font-bold tracking-widest transition-colors py-2 ${
              pathname === "/" ? "text-focus" : "text-white hover:text-focus"
            }`}
          >
            Home
          </Link>
          <div>
            <button
              onClick={() => setServicesExpanded(!servicesExpanded)}
              className={`brand-font text-lg font-bold tracking-widest transition-colors py-2 flex items-center gap-2 ${
                pathname.startsWith("/services") ? "text-focus" : "text-white hover:text-focus"
              }`}
            >
              Services
              <ChevronDown
                className={`w-5 h-5 transition-transform ${servicesExpanded ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-200 ${
                servicesExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="flex flex-col pl-4 pt-2 gap-2 border-l border-white/20 ml-1">
                {serviceLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                      setIsOpen(false);
                      setServicesExpanded(false);
                    }}
                    className={`brand-font text-base tracking-widest transition-colors py-2 ${
                      pathname === link.href ? "text-focus" : "text-gray-300 hover:text-focus"
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {navLinks.filter((l) => l.href !== "/").map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`brand-font text-lg font-bold tracking-widest transition-colors py-2 ${
                link.isCta
                  ? "px-8 py-3 gradient-bg text-black w-fit hover:scale-105 transition-transform shadow-[0_0_50px_rgba(23,201,244,0.4)]"
                  : isActive(link.href)
                    ? "text-focus"
                    : "text-white hover:text-focus"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
