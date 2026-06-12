import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { getServiceBySlug } from "@/lib/servicesConfig";

const service = getServiceBySlug("rv-and-marine");

export default function RvAndMarinePage() {
  if (!service) {
    return null;
  }

  return (
    <main className="text-white min-h-screen">
      <ServiceDetailLayout service={service} />
    </main>
  );
}

