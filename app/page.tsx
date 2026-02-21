import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Marquee from "@/components/Marquee";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Testimonials from "@/components/Testimonials";

export default function Home() {
  return (
    <main className="text-white selection:bg-blue-500">
      <Nav />
      <Hero />
      <Services />
      <Testimonials/>
      {/* <Marquee /> */}
      <CTA />
      <Footer />
    </main>
  );
}
