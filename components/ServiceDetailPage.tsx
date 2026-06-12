import { preload } from "react-dom";
import ServiceDetailLayout from "@/components/ServiceDetailLayout";
import type { ServiceConfig } from "@/lib/servicesConfig";

type Props = {
  service: ServiceConfig;
};

export default function ServiceDetailPage({ service }: Props) {
  const firstImage = service.images[0];
  if (firstImage) {
    preload(firstImage.src, { as: "image", fetchPriority: "high" });
  }

  return (
    <main className="text-white min-h-screen">
      <ServiceDetailLayout service={service} />
    </main>
  );
}
