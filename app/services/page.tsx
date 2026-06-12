import Link from "next/link";
import Footer from "@/components/Footer";
import {
  Sparkles,
  Armchair,
  Shield,
  Car,
  Wrench,
  Bike,
  Ship,
} from "lucide-react";
import { servicesConfig } from "@/lib/servicesConfig";

const iconBySlug: Record<string, React.ComponentType<{ className?: string }>> = {
  "top-tier-detail": Sparkles,
  "full-detail": Car,
  "interior-detail": Armchair,
  "exterior-detail": Shield,
  "ceramic-coating-paint-correction": Sparkles,
  "additional-services": Wrench,
  motorcycles: Bike,
  "rv-and-marine": Ship,
};

export default function ServicesPage() {
  const services = servicesConfig;

  return (
    <main className="text-white min-h-screen">
      <section className="pt-32 pb-20 px-4 sm:px-6 md:px-10">
        <div className="container mx-auto ">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-focus text-black font-black px-4 py-1 mb-6 rotate-[-2deg] tracking-tighter italic">
              OUR SERVICES
            </div>
            <h1 className="hero-title font-bold text-white mb-6 text-center">
              <span className="text-white">EXPLORE</span>
              <br />
              <span className="italic">OUR </span>
              <span className="italic gradient-text">SERVICES</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Professional mobile auto detailing services with attention to detail
              and a customer-first approach.
            </p>
          </div>

          {/* Size Guide */}
          <div className="mb-12">
            <h3 className="brand-font font-black text-2xl mb-6 text-focus text-center">
              VEHICLE SIZE GUIDE
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="glass-panel p-6 border-l-4 border-l-focus hover:border-l-focus/80 transition-colors">
                <div className="brand-font font-black text-6xl text-focus/30 mb-3 leading-none">
                  S
                </div>
                <div className="text-sm text-gray-300 font-bold mb-1">SMALL</div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  Small/compact vehicles
                </div>
              </div>
              <div className="glass-panel p-6 border-l-4 border-l-focus hover:border-l-focus/80 transition-colors">
                <div className="brand-font font-black text-6xl text-focus/30 mb-3 leading-none">
                  M
                </div>
                <div className="text-sm text-gray-300 font-bold mb-1">MEDIUM</div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  Larger sedans & Small SUVs, Small trucks
                </div>
              </div>
              <div className="glass-panel p-6 border-l-4 border-l-focus hover:border-l-focus/80 transition-colors">
                <div className="brand-font font-black text-6xl text-focus/30 mb-3 leading-none">
                  L
                </div>
                <div className="text-sm text-gray-300 font-bold mb-1">LARGE</div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  Full Size SUV&apos;s (3 rows), Full size trucks (Extra cabs),
                  minivans
                </div>
              </div>
              <div className="glass-panel p-6 border-l-4 border-l-focus hover:border-l-focus/80 transition-colors">
                <div className="brand-font font-black text-6xl text-focus/30 mb-3 leading-none">
                  XL
                </div>
                <div className="text-sm text-gray-300 font-bold mb-1">EXTRA LARGE</div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  Dually Trucks, Large Vans, Oversized trucks/suvs
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-gray-500 italic">
              Exotics are priced after visual inspection
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => {
              const Icon = iconBySlug[service.slug];
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="glass-panel p-8 border-l-4 border-l-focus hover:border-l-focus/80 transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-[0_0_30px_rgba(23,201,244,0.3)] hover:bg-black/60"
                >
                  {Icon && (
                    <div className="flex items-start justify-between mb-6">
                      <Icon className="w-12 h-12 text-focus flex-shrink-0 group-hover:text-focus group-hover:scale-110 transition-all duration-300" />
                    </div>
                  )}
                  <div className="mb-4">
                    <h3 className="brand-font font-black text-2xl mb-2 group-hover:text-focus transition-colors duration-300">
                      {service.name}
                    </h3>
                    <div className="relative">
                      <div className="text-focus font-bold text-lg mb-1 group-hover:text-focus group-hover:scale-110 transition-all duration-300 inline-block group-hover:drop-shadow-[0_0_8px_rgba(23,201,244,0.6)]">
                        {service.price}
                      </div>
                      {service.sizes && (
                        <div className="text-sm text-gray-500 mb-2 group-hover:text-focus group-hover:font-bold transition-all duration-300 mt-1 group-hover:scale-105 inline-block">
                          {service.sizes}
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-6 text-sm group-hover:text-gray-400 transition-colors duration-300">
                    {service.shortDescription ?? service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-gray-400 flex items-start gap-2 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <span className="w-1.5 h-1.5 bg-focus rounded-full mt-1.5 flex-shrink-0 group-hover:bg-focus group-hover:scale-125 transition-all duration-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.addOn && (
                    <div className="mt-4 p-3 bg-focus/10 border border-focus/30 group-hover:bg-focus/20 group-hover:border-focus/50 transition-all duration-300">
                      <p className="text-sm text-focus font-bold group-hover:text-focus transition-colors duration-300">
                        Add-On: {service.addOn}
                      </p>
                    </div>
                  )}
                  {service.optional && (
                    <div className="mt-4 p-3 bg-focus/10 border border-focus/30 group-hover:bg-focus/20 group-hover:border-focus/50 transition-all duration-300">
                      <p className="text-sm text-focus group-hover:text-focus transition-colors duration-300">
                        {service.optional}
                      </p>
                    </div>
                  )}
                  {service.note && (
                    <div className="mt-4 p-3 bg-focus/10 border border-focus/30 group-hover:bg-focus/20 group-hover:border-focus/50 transition-all duration-300">
                      <p className="text-sm text-focus font-bold italic group-hover:text-focus transition-colors duration-300">
                        {service.note}
                      </p>
                    </div>
                  )}
                  {service.time && (
                    <div className="mt-4 text-xs text-gray-500 group-hover:text-gray-400 transition-colors duration-300">
                      <span className="font-bold">Estimated service time:</span>{" "}
                      {service.time}
                    </div>
                  )}
                </Link>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="glass-panel p-12 border-2 border-focus/50">
              <h2 className="brand-font font-black text-4xl mb-6">
                READY TO TRANSFORM YOUR VEHICLE?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Book your detailing service today. We also offer specials on
                multiple vehicles booked together!
              </p>
              <a
                href="/book"
                className="inline-block px-16 py-6 gradient-bg text-black font-black text-xl tracking-tighter hover:scale-110 transition-transform shadow-[0_0_50px_rgba(23,201,244,0.4)]"
              >
                BOOK NOW
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
