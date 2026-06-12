import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/lib/servicesConfig";

const service = getServiceBySlug("motorcycles");

export default function MotorcyclesPage() {
  if (!service) {
    return null;
  }

  return <ServiceDetailPage service={service} />;
}
