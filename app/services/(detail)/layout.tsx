import type { ReactNode } from "react";
import Footer from "@/components/Footer";
import CTA from "@/components/CTA";


export default function ServicesDetailLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <main className="text-white min-h-screen">
      {children}
      <CTA />
      <Footer />
    </main>
  );
}