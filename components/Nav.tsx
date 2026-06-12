"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import HamburgerNav from "./HamburgerNav";
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

export default function Nav() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 px-4 sm:px-6 md:px-10 py-4">
      <div className="max-w-[1500px] mx-auto flex justify-between items-center bg-black px-8 border border-white/10">
        <Link href="/" className="flex items-center gap-4 group cursor-pointer">
          <div className="w-20 h-20 -py-1 flex items-center justify-center overflow-hidden">
            <Image
              src="/logo.webp"
              alt="Buugz Detailing Logo"
              width={80}
              height={80}
              className="object-contain"
            />
          </div>
        </Link>

        <HamburgerNav />

        <div className="hidden md:flex items-center space-x-12">
          <Link
            href="/"
            className={`brand-font text-sm font-bold tracking-widest transition-colors ${
              isActive("/")
                ? "text-focus"
                : "hover:text-focus"
            }`}
          >
            Home
          </Link>
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className={`cursor-pointer brand-font text-sm font-bold tracking-widest transition-colors flex items-center gap-1 ${
                isActive("/services") ? "text-focus" : "hover:text-focus"
              }`}
            >
              Services
              <ChevronDown
                className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`}
              />
            </button>
            <div
              className={`absolute top-full left-0 mt-2 py-2 bg-black border border-white/10 min-w-[220px] transition-all duration-200 ${
                servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              {serviceLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setServicesOpen(false)}
                  className={`block px-4 py-2 text-sm brand-font font-bold tracking-widest transition-colors ${
                    pathname === link.href ? "text-focus bg-white/5" : "text-white hover:text-focus hover:bg-white/5"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <Link
            href="/about"
            className={`brand-font text-sm font-bold tracking-widest transition-colors ${
              isActive("/about")
                ? "text-focus"
                : "hover:text-focus"
            }`}
          >
            About
          </Link>
          <Link
            href="/book"
            className={`px-8 py-3 font-black tracking-tighter hover:scale-110 transition-transform shadow-[0_0_50px_rgba(23,201,244,0.4)] ${
              isActive("/book")
                ? "gradient-bg text-black"
                : "gradient-bg text-black"
            }`}
          >
            BOOK NOW
          </Link>
        </div>
      </div>
    </nav>
  );
}
