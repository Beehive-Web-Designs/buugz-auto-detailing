import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { getServiceBySlug } from "@/lib/servicesConfig";

const service = getServiceBySlug("interior-detail");

export default function InteriorDetailPage() {
  if (!service) {
    return null;
  }

  return (
    <main className="text-white min-h-screen">
      <ServiceDetailLayout service={service} />
    </main>
  );
}