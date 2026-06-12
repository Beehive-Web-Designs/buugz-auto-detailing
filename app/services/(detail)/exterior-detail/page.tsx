import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/lib/servicesConfig";

const service = getServiceBySlug("exterior-detail");

export default function ExteriorDetailPage() {
  if (!service) {
    return null;
  }

  return <ServiceDetailPage service={service} />;
}
