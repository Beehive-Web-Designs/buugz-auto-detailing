"use client";

import { Zap, Shield, Clock, Star } from "lucide-react";

export default function Services() {
  const features = [
    {
      icon: Zap,
      title: "MOBILE SERVICE",
      description: "We come to you. Professional detailing at your location, on your schedule.",
    },
    {
      icon: Shield,
      title: "10+ YEARS EXPERIENCE",
      description: "Over a decade of professional detailing expertise and customer satisfaction.",
    },
    {
      icon: Clock,
      title: "EFFICIENT SERVICE",
      description: "Fast, thorough, and reliable. Get back on the road with a showroom finish.",
    },
    {
      icon: Star,
      title: "5.0 RATING",
      description: "Consistently rated 5 stars by satisfied customers who demand perfection.",
    },
  ];

  return (
    <section className="py-32 bg-[#050505] relative z-20">
      <div className="container mx-auto px-10">
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-600 text-black font-black px-4 py-1 mb-6 rotate-[-2deg] tracking-tighter italic">
            WHY BUUGZ
          </div>
          <h2 className="brand-font font-black text-5xl md:text-7xl mb-6">
            <span className="gradient-text">PREMIUM</span>
            <br />
            <span className="italic">EXPERIENCE</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
            Professional mobile auto detailing with attention to detail and a
            customer-first approach.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="glass-panel p-8 border-l-4 border-l-blue-500 hover:border-l-blue-400 transition-colors group"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 gradient-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="brand-font font-black text-xl mb-3">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-panel p-8 border-2 border-blue-500/50 text-center">
            <div className="brand-font font-black text-6xl text-blue-500 mb-2">
              10+
            </div>
            <div className="text-sm text-gray-400 font-bold tracking-widest mb-2">
              YEARS EXPERIENCE
            </div>
            <p className="text-xs text-gray-500">
              Professional expertise you can trust
            </p>
          </div>
          <div className="glass-panel p-8 border-2 border-blue-500/50 text-center">
            <div className="brand-font font-black text-6xl text-blue-500 mb-2">
              5.0
            </div>
            <div className="text-sm text-gray-400 font-bold tracking-widest mb-2">
              CUSTOMER RATING
            </div>
            <p className="text-xs text-gray-500">
              Consistently perfect reviews
            </p>
          </div>
          <div className="glass-panel p-8 border-2 border-blue-500/50 text-center">
            <div className="brand-font font-black text-6xl text-blue-500 mb-2">
              100%
            </div>
            <div className="text-sm text-gray-400 font-bold tracking-widest mb-2">
              SATISFACTION
            </div>
            <p className="text-xs text-gray-500">
              Every detail matters
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
