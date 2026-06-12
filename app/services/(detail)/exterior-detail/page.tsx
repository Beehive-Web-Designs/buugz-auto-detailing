import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { getServiceBySlug } from "@/lib/servicesConfig";

const service = getServiceBySlug("exterior-detail");

export default function ExteriorDetailPage() {
  if (!service) {
    return null;
  }

  return (
    <main className="text-white min-h-screen">
      <ServiceDetailLayout service={service} />
    </main>
  );
}
