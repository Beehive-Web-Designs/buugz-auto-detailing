import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Sparkles, Armchair, Shield, Car, Wrench, Zap, Bike, Ship } from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      icon: Sparkles,
      title: "Top Tier Detail",
      price: "Starting at $450",
      sizes: "(M) $550 | (L) $650 | (XL) $750",
      description:
        "Top Tier Detail Package — Starting at $450. Our most comprehensive package for ultimate protection and shine.",
      features: [
        "Meticulous hand wash",
        "Clay bar decontamination of paint and glass",
        "Single-stage machine polishing",
        "Isopropyl wipe-down for surface prep",
        "Application of ceramic spray coating on paint and glass for 9–12 months of protection",
        "Exterior trim restored and rejuvenated",
        "Chrome and metal polished to a shine",
        "Light wheel polishing",
        "Crystal-clear, streak-free glass finish",
        "Deep black, long-lasting tire dressing",
        "Complete interior detail",
        "Fabric protectant applied",
        "Leather protectant applied",
      ],
      time: "4.5 to 7 hours",
    },
    {
      icon: Car,
      title: "Full Detail",
      price: "Starting at $300",
      sizes: "(M) $325 | (L) $350 | (XL) $375",
      description:
        "Full Detail Package — Starting at $300. Comprehensive interior and exterior detailing.",
      features: [
        "Shampoo and extraction of all carpeted areas",
        "Leather surfaces thoroughly cleaned and conditioned",
        "Door panels cleaned and protected",
        "Deep cleaning of the center console and touchpoints",
        "Clay bar treatment to decontaminate all painted exterior surfaces",
        "Exterior trim cleaned and restored to a like-new finish",
      ],
      time: "3–5 hours",
    },
    {
      icon: Armchair,
      title: "Interior Detail",
      price: "Starting at $200",
      sizes: "(M) $225 | (L) $250 | (XL) $275",
      description:
        "Interior Detail Package — Starting at $200. Complete interior transformation.",
      features: [
        "Thorough interior vacuuming",
        "Steam cleaning, shampooing, and extraction of all carpeted and upholstered areas",
        "Leather surfaces deep cleaned and conditioned",
        "Door panels cleaned and treated for protection",
        "Center console meticulously cleaned",
        "Headliner spot cleaned",
        "Crystal-clear, streak-free interior glass",
        "Steering wheel deeply cleaned and sanitized",
      ],
      addOn: "Ozone Treatment for odor removal – $50 (when combined with this package)",
      time: "2–4 hours",
    },
    {
      icon: Shield,
      title: "Exterior Detail",
      price: "Starting at $200",
      sizes: "(M) $225 | (L) $250 | (XL) $275",
      description:
        "Exterior Detail — Starting at $200. Complete exterior protection and shine.",
      features: [
        "Meticulous hand wash of all exterior surfaces",
        "Clay bar treatment to decontaminate paint and glass",
        "Application of a 4–6 month protective sealant",
        "Restoration of exterior trim to a like-new finish",
        "Chrome and metal surfaces polished",
        "Light polishing of wheels",
        "Streak-free glass cleaning",
        "Deep black, long-lasting tire dressing",
      ],
      time: "2–4 hours",
    },
    {
      icon: Sparkles,
      title: "Ceramic Coating Paint Correction",
      price: "Starting at $1,400",
      sizes: "(M) $1,600 | (L) $1,800 | (XL) $2,000",
      description:
        "Ceramic Coating Package — Starting at $1,400. Professional-grade ceramic coating with paint correction.",
      features: [
        "Meticulous hand wash",
        "Full paint surface decontamination / Clay",
        "Iron remover treatment",
        "Secondary precision wash",
        "Two-stage paint correction to perfect and prep the surface",
        "Application of professional-grade ceramic coating on all painted surfaces 9H+",
      ],
      optional: "Optional Add-Ons: Glass coating, Wheel coating, Plastic trim coating",
      time: "1–2 day",
    },
    {
      icon: Wrench,
      title: "Additional Services",
      price: "Various Pricing",
      description: "Specialized services for specific needs.",
      features: [
        "Ozone Treatment (eliminates odors from smoke, pets, mildew, etc.) – $100",
        "Oxidation Removal – Starting at $200",
        "Overspray Removal – Starting at $200",
        "Scratch Removal – Priced upon inspection",
        "Swirl Mark Removal – Priced upon inspection",
        "Water Spot Removal – Priced upon inspection",
        "Pet Hair Removal – Priced upon inspection",
        "Headlight Restoration – Starting at $100",
        "Engine Bay Detail – $100",
      ],
    },
    {
      icon: Bike,
      title: "Motorcycles",
      price: "$200-300",
      description:
        "$200-300 — Depending on size, condition & paint type. Full motorcycle detailing service.",
      features: [
        "Full wash to remove dirt, bugs, and grime",
        "Degreasing of engine, chain, and hard-to-reach areas",
        "Polishing of chrome and metal surfaces",
        "Paint protection with sealant",
        "Cleaning and conditioning of seats and leather parts",
        "Wheel and tire cleaning with dressing",
        "Detail work on switches, gauges, and trim",
        "Final wipe-down for a spotless, showroom finish",
      ],
    },
    {
      icon: Ship,
      title: "RV & Marine",
      price: "Per Foot Pricing",
      description: "RV & Boat Services with flexible pricing options.",
      features: [
        "Wash Only – Starting at $7 per foot",
        "Wash & Wax – Starting at $12 per foot",
        "Wash, Polish & Wax – Starting at $20 per foot (Ideal for oxidized gel coats)",
      ],
      note: "Call for Quote",
    },
  ];

  return (
    <main className="text-white selection:bg-blue-500 min-h-screen">
      <Nav />
      <section className="pt-32 pb-20 px-10">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-20">
            <div className="inline-block bg-blue-600 text-black font-black px-4 py-1 mb-6 rotate-[-2deg] tracking-tighter italic">
              OUR SERVICES
            </div>
            <h1 className="hero-title text-white mb-6">
              <span className="gradient-text">EXPLORE</span>
              <br />
              <span className="pl-20 italic">OUR SERVICES</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-light">
              Professional mobile auto detailing services with attention to detail
              and a customer-first approach.
            </p>
          </div>

          {/* Size Guide */}
          <div className="mb-12">
            <h3 className="brand-font font-black text-2xl mb-6 text-blue-400 text-center">
              VEHICLE SIZE GUIDE
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
              <div className="glass-panel p-6 border-l-4 border-l-blue-500 hover:border-l-blue-400 transition-colors">
                <div className="brand-font font-black text-6xl text-blue-500/30 mb-3 leading-none">
                  S
                </div>
                <div className="text-sm text-gray-300 font-bold mb-1">SMALL</div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  Small/compact vehicles
                </div>
              </div>
              <div className="glass-panel p-6 border-l-4 border-l-blue-500 hover:border-l-blue-400 transition-colors">
                <div className="brand-font font-black text-6xl text-blue-500/30 mb-3 leading-none">
                  M
                </div>
                <div className="text-sm text-gray-300 font-bold mb-1">MEDIUM</div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  Larger sedans & Small SUVs, Small trucks
                </div>
              </div>
              <div className="glass-panel p-6 border-l-4 border-l-blue-500 hover:border-l-blue-400 transition-colors">
                <div className="brand-font font-black text-6xl text-blue-500/30 mb-3 leading-none">
                  L
                </div>
                <div className="text-sm text-gray-300 font-bold mb-1">LARGE</div>
                <div className="text-xs text-gray-500 leading-relaxed">
                  Full Size SUV&apos;s (3 rows), Full size trucks (Extra cabs),
                  minivans
                </div>
              </div>
              <div className="glass-panel p-6 border-l-4 border-l-blue-500 hover:border-l-blue-400 transition-colors">
                <div className="brand-font font-black text-6xl text-blue-500/30 mb-3 leading-none">
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
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div
                  key={index}
                  className="glass-panel p-8 border-l-4 border-l-blue-500 hover:border-l-blue-400 transition-all duration-300 group cursor-pointer hover:scale-105 hover:shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:bg-black/60"
                >
                  <div className="flex items-start justify-between mb-6">
                    <Icon className="w-12 h-12 text-blue-500 flex-shrink-0 group-hover:text-blue-400 group-hover:scale-110 transition-all duration-300" />
                  </div>
                  <div className="mb-4">
                    <h3 className="brand-font font-black text-2xl mb-2 group-hover:text-blue-300 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <div className="relative">
                      <div className="text-blue-400 font-bold text-lg mb-1 group-hover:text-blue-300 group-hover:scale-110 transition-all duration-300 inline-block group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)]">
                        {service.price}
                      </div>
                      {service.sizes && (
                        <div className="text-sm text-gray-500 mb-2 group-hover:text-blue-400 group-hover:font-bold transition-all duration-300 mt-1 group-hover:scale-105 inline-block">
                          {service.sizes}
                        </div>
                      )}
                    </div>
                  </div>
                  <p className="text-gray-500 leading-relaxed mb-6 text-sm group-hover:text-gray-400 transition-colors duration-300">
                    {service.description}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="text-sm text-gray-400 flex items-start gap-2 group-hover:text-gray-300 transition-colors duration-300"
                      >
                        <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0 group-hover:bg-blue-400 group-hover:scale-125 transition-all duration-300" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  {service.addOn && (
                    <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300">
                      <p className="text-sm text-blue-400 font-bold group-hover:text-blue-300 transition-colors duration-300">
                        Add-On: {service.addOn}
                      </p>
                    </div>
                  )}
                  {service.optional && (
                    <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300">
                      <p className="text-sm text-blue-400 group-hover:text-blue-300 transition-colors duration-300">{service.optional}</p>
                    </div>
                  )}
                  {service.note && (
                    <div className="mt-4 p-3 bg-blue-500/10 border border-blue-500/30 group-hover:bg-blue-500/20 group-hover:border-blue-500/50 transition-all duration-300">
                      <p className="text-sm text-blue-400 font-bold italic group-hover:text-blue-300 transition-colors duration-300">
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
                </div>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <div className="glass-panel p-12 border-2 border-blue-500/50">
              <h2 className="brand-font font-black text-4xl mb-6">
                READY TO TRANSFORM YOUR VEHICLE?
              </h2>
              <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                Book your detailing service today. We also offer specials on
                multiple vehicles booked together!
              </p>
              <a
                href="/book"
                className="inline-block px-16 py-6 gradient-bg text-black font-black text-xl tracking-tighter hover:scale-110 transition-transform shadow-[0_0_50px_rgba(0,191,255,0.4)]"
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
