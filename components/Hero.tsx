"use client";

import Image from "next/image";
import Link from "next/link";
import { Zap } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Skewed background image */}
      <div className="absolute right-0 top-0 w-3/4 h-full z-0 skew-box translate-x-20 origin-top-right">
        <div className="w-full h-full bg-black relative overflow-hidden border-l border-blue-500/30">
          <Image
            src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=2070&auto=format&fit=crop"
            alt="Luxury Car"
            fill
            className="object-cover opacity-60 scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent" />
        </div>
      </div>

      <div className="container mx-auto px-10 relative z-10">
        <div className="max-w-4xl">
          <div className="inline-block bg-blue-600 text-black font-black px-3 py-1 mb-6 mt-8 rotate-[-2deg] tracking-tighter italic">
            OVER A DECADE OF EXPERIENCE
          </div>
          <h1 className="text-white mb-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black italic leading-tight">
            SHINE ON WITH<br />
            <span className="gradient-text">OUR MOBILE AUTO</span>
            <br />
            <span className="italic">DETAILING SERVICES</span>
          </h1>

          <div className="flex items-start gap-12 mt-12">
            <div className="max-w-sm">
              <p className="text-xl text-gray-400 leading-relaxed font-light mb-8">
                Professional mobile auto detailing services. Attention to detail
                and a customer-first approach for a hassle-free, satisfying
                experience every time.
              </p>
              <div className="flex gap-6">
                <Link
                  href="/book"
                  className="px-10 py-5 gradient-bg text-black font-black text-xl tracking-tighter flex items-center gap-3 hover:scale-110 transition-transform shadow-[0_0_50px_rgba(0,191,255,0.4)]"
                >
                  START YOUR DETAIL
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
