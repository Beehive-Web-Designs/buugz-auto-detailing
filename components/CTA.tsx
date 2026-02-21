"use client";

import Link from "next/link";
import { Star } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-40 bg-black relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="grid grid-cols-12 h-full">
          <div className="border-r border-white/5 h-full" />
          <div className="border-r border-white/5 h-full" />
          <div className="border-r border-white/5 h-full" />
          <div className="border-r border-white/5 h-full" />
          <div className="border-r border-white/5 h-full" />
          <div className="border-r border-white/5 h-full" />
          <div className="border-r border-white/5 h-full" />
          <div className="border-r border-white/5 h-full" />
          <div className="border-r border-white/5 h-full" />
          <div className="border-r border-white/5 h-full" />
          <div className="border-r border-white/5 h-full" />
          <div className="h-full" />
        </div>
      </div>
      <div className="container mx-auto px-10 relative z-10 text-center">
        <h2 className="brand-font font-black text-7xl md:text-9xl mb-12 tracking-tighter">
          BOOK<br />
          <span className="gradient-text italic">NOW</span>
        </h2>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Have questions about our services? We also offer specials on multiple
          vehicles booked together!
        </p>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
          <Link
            href="/book"
            className="px-16 py-8 gradient-bg text-black font-black text-2xl tracking-tighter hover:scale-110 transition-transform shadow-[0_0_50px_rgba(0,191,255,0.4)]"
          >
            BOOK NOW
          </Link>
          <div className="flex flex-col items-start px-6 border-l-2 border-blue-500">
            <span className="text-white font-bold text-xl">5.0 RATING</span>
            <div className="flex text-blue-400">
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
              <Star className="w-5 h-5 fill-current" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
