import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/lib/servicesConfig";

const service = getServiceBySlug("additional-services");

export default function AdditionalServicesPage() {
  if (!service) {
    return null;
  }

  return <ServiceDetailPage service={service} />;
}

