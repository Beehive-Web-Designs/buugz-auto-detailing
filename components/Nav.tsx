"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Nav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(path);
  };

  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center bg-black px-8 border border-white/10">
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

        <div className="hidden md:flex items-center space-x-12">
          <Link
            href="/"
            className={`brand-font text-sm font-bold tracking-widest transition-colors ${
              isActive("/")
                ? "text-blue-400"
                : "hover:text-blue-400"
            }`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`brand-font text-sm font-bold tracking-widest transition-colors ${
              isActive("/services")
                ? "text-blue-400"
                : "hover:text-blue-400"
            }`}
          >
            Services
          </Link>
          <Link
            href="/about"
            className={`brand-font text-sm font-bold tracking-widest transition-colors ${
              isActive("/about")
                ? "text-blue-400"
                : "hover:text-blue-400"
            }`}
          >
            About
          </Link>
          <Link
            href="/book"
            className={`px-8 py-3 font-black tracking-tighter hover:scale-110 transition-transform shadow-[0_0_50px_rgba(0,191,255,0.4)] ${
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
