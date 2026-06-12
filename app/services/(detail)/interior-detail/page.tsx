import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/lib/servicesConfig";

const service = getServiceBySlug("interior-detail");

export default function InteriorDetailPage() {
  if (!service) {
    return null;
  }

  return <ServiceDetailPage service={service} />;
}