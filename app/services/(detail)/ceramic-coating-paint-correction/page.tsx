import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { getServiceBySlug } from "@/lib/servicesConfig";

const service = getServiceBySlug("ceramic-coating-paint-correction");

export default function CeramicCoatingPaintCorrectionPage() {
  if (!service) {
    return null;
  }

  return (
    <main className="text-white min-h-screen">
      <ServiceDetailLayout service={service} />
    </main>
  );
}
