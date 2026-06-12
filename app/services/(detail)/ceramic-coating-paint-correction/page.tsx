import ServiceDetailPage from "@/components/ServiceDetailPage";
import { getServiceBySlug } from "@/lib/servicesConfig";

const service = getServiceBySlug("ceramic-coating-paint-correction");

export default function CeramicCoatingPaintCorrectionPage() {
  if (!service) {
    return null;
  }

  return <ServiceDetailPage service={service} />;
}
