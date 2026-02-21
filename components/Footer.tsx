"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="container mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-20">
        <div className="col-span-2">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 flex items-center justify-center overflow-hidden">
              <Image
                src="/logo.webp"
                alt="Buugz Detailing Logo"
                width={64}
                height={64}
                className="object-contain"
              />
            </div>
          </div>
          <p className="text-gray-500 max-w-md text-lg leading-relaxed">
            Professional mobile auto detailing with over a decade of experience.
            Attention to detail and a customer-first approach for a hassle-free,
            satisfying experience every time.
          </p>
        </div>
        <div>
          <h4 className="brand-font font-black text-xl mb-8 text-blue-500">
            LINKS
          </h4>
          <ul className="space-y-4 text-gray-400 font-bold">
            <li>
              <Link href="/services" className="hover:text-white transition-colors">
                SERVICES
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-white transition-colors">
                GALLERY
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white transition-colors">
                ABOUT
              </Link>
            </li>
            <li>
              <Link href="/book" className="hover:text-white transition-colors">
                BOOK NOW
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="brand-font font-black text-xl mb-8 text-blue-500">
            SOCIAL
          </h4>
          <div className="flex gap-4">
            <div className="w-12 h-12 glass-panel flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
              <Instagram className="w-5 h-5" />
            </div>
            <div className="w-12 h-12 glass-panel flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
              <Twitter className="w-5 h-5" />
            </div>
            <div className="w-12 h-12 glass-panel flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
              <Facebook className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
