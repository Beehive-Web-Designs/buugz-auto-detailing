import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/lib/servicesConfig";

const service = getServiceBySlug("rv-and-marine");

export default function RvAndMarinePage() {
  if (!service) {
    return null;
  }

  return <ServiceDetailPage service={service} />;
}

