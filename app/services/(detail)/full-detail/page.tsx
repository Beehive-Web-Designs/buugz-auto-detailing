import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/lib/servicesConfig";

const service = getServiceBySlug("full-detail");

export default function FullDetailPage() {
  if (!service) {
    return null;
  }

  return <ServiceDetailPage service={service} />;
}
