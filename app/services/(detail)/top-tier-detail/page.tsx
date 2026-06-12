import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/lib/servicesConfig";

const service = getServiceBySlug("top-tier-detail");

export default function TopTierDetailPage() {
  if (!service) {
    return null;
  }

  return (
    <main className="text-white min-h-screen">
      <ServiceDetailPage service={service} />

    </main>
  );
}
