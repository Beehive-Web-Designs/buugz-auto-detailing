import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import { getServiceBySlug } from "@/lib/servicesConfig";

const service = getServiceBySlug("top-tier-detail");

export default function TopTierDetailPage() {
  if (!service) {
    return null;
  }

  return (
    <main className="text-white min-h-screen">
      <ServiceDetailLayout service={service} />

    </main>
  );
}
