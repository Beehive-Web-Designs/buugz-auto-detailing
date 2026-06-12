export type ServiceSlug =
  | "top-tier-detail"
  | "full-detail"
  | "interior-detail"
  | "exterior-detail"
  | "ceramic-coating-paint-correction"
  | "additional-services"
  | "motorcycles"
  | "rv-and-marine";

export type ServiceImage = {
  src: string;
  alt: string;
};

export type ServiceConfig = {
  slug: ServiceSlug;
  name: string;
  shortDescription?: string;
  description: string;
  price: string;
  sizes?: string;
  time?: string;
  features: string[];
  addOn?: string;
  optional?: string;
  note?: string;
  images: ServiceImage[];
};

enum Images {
  // Top Tier Detail Images
  TylerWorking = "/services/top-tier-detail/tyler-working.jpeg",

  // Shared Images
  BMWFront = "/services/shared/bmw-front.jpeg",
  BMWSide = "/services/shared/bmw-side.jpeg",
  BMWInside = "/services/shared/bmw-inside.JPG",
  BMWSeat = "/services/shared/bmw-seat.JPG",
  BMWFrontCloseup = "/services/shared/bmw-front-closeup.jpeg",

  // Full Detail Images
  BMWCleanRims = "/services/full-detail/bmw-clean-rim.jpg",
  BMWSteeringWheelSide = "/services/full-detail/bmw-steering-wheel-side.jpeg",
  BMWFloor = "/services/full-detail/bmw-floor.JPG",

  // Interior Detail Images
  Hyundai1 = "/services/interior-detail/hyundai-1.jpeg",
  Hyundai2 = "/services/interior-detail/hyundai-2.jpeg",
  Hyundai3 = "/services/interior-detail/hyundai-3.jpeg",
  Hyundai4 = "/services/interior-detail/hyundai-4.jpeg",
  Hyundai5 = "/services/interior-detail/hyundai-5.jpeg",
  Hyundai6 = "/services/interior-detail/hyundai-6.jpeg",
  Hyundai7 = "/services/interior-detail/hyundai-7.jpeg",
  Hyundai8 = "/services/interior-detail/hyundai-8.jpeg",
  Hyundai9 = "/services/interior-detail/hyundai-9.jpeg",
  Hyundai10 = "/services/interior-detail/hyundai-10.jpeg",
  Hyundai11 = "/services/interior-detail/hyundai-11.jpeg",
  Hyundai12 = "/services/interior-detail/hyundai-12.jpeg",
  Hyundai13 = "/services/interior-detail/hyundai-13.jpeg",
  Hyundai14 = "/services/interior-detail/hyundai-14.jpeg",
  Hyundai15 = "/services/interior-detail/hyundai-15.jpeg",
  Hyundai16 = "/services/interior-detail/hyundai-16.jpeg",
  Hyundai17 = "/services/interior-detail/hyundai-17.jpeg",

  // Ceramic Coating Images
  BackOfTruck = "/services/ceramic-coating-paint-correction/back-of-truck.jpeg",

  // exterior detail images
  BMWDryBackground = "/services/exterior-detail/bmw-dry-background.jpeg",
  VWSide = "/services/exterior-detail/vw-side.JPG",
  Truck1 = "/services/exterior-detail/truck-1.jpeg",
  Truck2 = "/services/exterior-detail/truck-2.jpeg",
  Truck3 = "/services/exterior-detail/truck-3.jpeg",
  Truck4 = "/services/exterior-detail/truck-4.jpeg",

  // rv and marine images
  CoveredBoat = "/services/rv-and-marine/covered-boat.JPG",
  UnCoveredBoat = "/services/rv-and-marine/uncovered-boat.jpeg",
  UnCoveredBoat2 = "/services/rv-and-marine/uncovered-boat-2.jpeg",

  // motorcycles images
  Motorcycle1 = "/services/motorcycles/motorcycle-1.jpeg",
  Motorcycle2 = "/services/motorcycles/motorcycle-2.jpeg",
  Motorcycle3 = "/services/motorcycles/motorcycle-3.jpeg",
  Motorcycle4 = "/services/motorcycles/motorcycle-4.jpeg",
  Motorcycle5 = "/services/motorcycles/motorcycle-5.jpg",

  // additional services images
  Headlight1 = "/services/additional-services/headlight-1.JPG",
  Interior1 = "/services/additional-services/interior-1.jpeg",
}

export const servicesConfig: ServiceConfig[] = [
  {
    slug: "top-tier-detail",
    name: "Top Tier Detail",
    shortDescription:
      "Our most comprehensive package for ultimate protection and shine.",
    price: "Starting at $450",
    sizes: "(M) $550 | (L) $650 | (XL) $750",
    description:
      "Top Tier Detail Package — Starting at $450. Our most comprehensive package for ultimate protection and shine.",
    time: "4.5 to 7 hours",
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
    images: [
      {
        src: Images.TylerWorking,
        alt: "Top Tier Detail — technician at work",
      },
      {
        src: Images.BMWFront,
        alt: "Top Tier Detail — front exterior finish",
      },
      {
        src: Images.BMWSide,
        alt: "Top Tier Detail — side profile",
      },
      {
        src: Images.BMWInside,
        alt: "Top Tier Detail — interior after detail",
      },
    ],
  },
  {
    slug: "full-detail",
    name: "Full Detail",
    shortDescription:
      "Comprehensive interior and exterior detailing for a full refresh.",
    price: "Starting at $300",
    sizes: "(M) $325 | (L) $350 | (XL) $375",
    description:
      "Full Detail Package — Starting at $300. Comprehensive interior and exterior detailing.",
    time: "3–5 hours",
    features: [
      "Shampoo and extraction of all carpeted areas",
      "Leather surfaces thoroughly cleaned and conditioned",
      "Door panels cleaned and protected",
      "Deep cleaning of the center console and touchpoints",
      "Clay bar treatment to decontaminate all painted exterior surfaces",
      "Exterior trim cleaned and restored to a like-new finish",
    ],
    addOn:
      "Ozone Treatment for odor removal – $50 (when combined with this package)",
    images: [
      {
        src: Images.BMWCleanRims,
        alt: "Full Detail package exterior and interior",
      },
      {
        src: Images.BMWFront,
        alt: "Top Tier Detail — front exterior finish",
      },
      {
        src: Images.BMWSide,
        alt: "Full Detail package side profile",
      },
      {
        src: Images.BMWInside,
        alt: "Deep cleaned interior surfaces",
      },
      {
        src: Images.BMWFloor,
        alt: "Full Detail package floor",
      },
      {
        src: Images.BMWSeat,
        alt: "Full Detail package seat",
      },
      {
        src: Images.BMWSteeringWheelSide,
        alt: "Full Detail package steering wheel",
      }
    ],
  },
  {
    slug: "interior-detail",
    name: "Interior Detail",
    shortDescription: "Complete interior transformation and deep cleaning.",
    price: "Starting at $200",
    sizes: "(M) $225 | (L) $250 | (XL) $275",
    description:
      "Interior Detail Package — Starting at $200. Complete interior transformation.",
    time: "2–4 hours",
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
    addOn:
      "Ozone Treatment for odor removal – $50 (when combined with this package)",
    images: [
      {
        src: Images.Hyundai2,
        alt: "Interior detail package Hyundai 2",
      },
      {
        src: Images.Hyundai13,
        alt: "Interior detail package Hyundai 13",
      },
      {
        src: Images.Hyundai1,
        alt: "Interior detail package Hyundai 1",
      },
      {
        src: Images.Hyundai10,
        alt: "Interior detail package Hyundai 10",
      },
      {
        src: Images.Hyundai6,
        alt: "Interior detail package Hyundai 6",
      },
    ],
  },
  {
    slug: "exterior-detail",
    name: "Exterior Detail",
    shortDescription: "Complete exterior protection and shine.",
    price: "Starting at $200",
    sizes: "(M) $225 | (L) $250 | (XL) $275",
    description:
      "Exterior Detail — Starting at $200. Complete exterior protection and shine.",
    time: "2–4 hours",
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
    images: [
      {
        src: Images.Truck1,
        alt: "Exterior detail package truck 1",
      },
      {
        src: Images.Truck2,
        alt: "Exterior detail package truck 2",
      },
      {
        src: Images.Truck3,
        alt: "Exterior detail package truck 3",
      },
      {
        src: Images.Truck4,
        alt: "Exterior detail package truck 4",
      },
     {
      src: Images.BMWDryBackground,
      alt: "Exterior detail package dry background",
     },
     {
      src: Images.VWSide,
      alt: "Exterior detail package VW side profile",
     }
    ],
  },
  {
    slug: "ceramic-coating-paint-correction",
    name: "Ceramic Coating Paint Correction",
    shortDescription:
      "Professional-grade ceramic coating with multi-stage paint correction.",
    price: "Starting at $1,400",
    sizes: "(M) $1,600 | (L) $1,800 | (XL) $2,000",
    description:
      "Ceramic Coating Package — Starting at $1,400. Professional-grade ceramic coating with paint correction.",
    time: "1–2 day",
    features: [
      "Meticulous hand wash",
      "Full paint surface decontamination / Clay",
      "Iron remover treatment",
      "Secondary precision wash",
      "Two-stage paint correction to pssy nerfect and prep the surface",
      "Application of professional-grade ceramic coating on all painted surfaces 9H+",
    ],
    optional:
      "Optional Add-Ons: Glass coating, Wheel coating, Plastic trim coating",
    images: [
      {
        src: Images.BMWSide,
        alt: "Ceramic coated vehicle side profile",
      },
      {
        src: Images.BMWFrontCloseup,
        alt: "Ceramic coated vehicle front closeup",
      },
      {
        src: Images.BMWInside,
        alt: "Ceramic coated vehicle front",
      },
      {
        src: Images.BMWSeat,
        alt: "Ceramic coated vehicle front",
      },
      {
        src: Images.BackOfTruck,
        alt: "Ceramic coated vehicle back of truck",
      }
    ],
  },
  {
    slug: "additional-services",
    name: "Additional Services",
    shortDescription: "Specialized services for specific needs.",
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
    images: [
      {
        src: Images.Headlight1,
        alt: "Additional services headlight 1",
      },
      {
        src: Images.Interior1,
        alt: "Additional services interior 1",
      }
    ],
  },
  {
    slug: "motorcycles",
    name: "Motorcycles",
    shortDescription:
      "Full motorcycle detailing service tailored to bike size and condition.",
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
    images: [
      {
        src: Images.Motorcycle1,
        alt: "Motorcycle service motorcycle 1",
      },
      {
        src: Images.Motorcycle2,
        alt: "Motorcycle service motorcycle 2",
      },
      {
        src: Images.Motorcycle3,
        alt: "Motorcycle service motorcycle 3",
      },
      {
        src: Images.Motorcycle4,
        alt: "Motorcycle service motorcycle 4",
      },
      {
        src: Images.Motorcycle5,
        alt: "Motorcycle service motorcycle 5",
      }
    ],
  },
  {
    slug: "rv-and-marine",
    name: "RV & Marine",
    shortDescription: "RV & boat services with flexible per-foot pricing.",
    price: "Per Foot Pricing",
    description: "RV & Boat Services with flexible pricing options.",
    note: "Call for Quote",
    features: [
      "Wash Only – Starting at $7 per foot",
      "Wash & Wax – Starting at $12 per foot",
      "Wash, Polish & Wax – Starting at $20 per foot (Ideal for oxidized gel coats)",
    ],
    images: [
      {
        src: Images.CoveredBoat,
        alt: "RV and boat service covered boat",
      },
      {
        src: Images.UnCoveredBoat,
        alt: "RV and boat service uncovered boat",
      },
      {
        src: Images.UnCoveredBoat2,
        alt: "RV and boat service uncovered boat 2",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceConfig | undefined {
  return servicesConfig.find((service) => service.slug === slug);
}

export function getAllServiceSlugs(): ServiceSlug[] {
  return servicesConfig.map((service) => service.slug);
}

