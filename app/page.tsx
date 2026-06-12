import { preload } from "react-dom";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("@/components/Testimonials"));

export default function Home() {
  preload("/hero.jpg", { as: "image", fetchPriority: "high" });

  return (
    <main className="text-white">
      <Hero />
      <Services />
      <Testimonials/>
      {/* <Marquee /> */}
      <CTA />
      <Footer />
    </main>
  );
}
