import type { Metadata } from "next"
import ServicesPage from "./ServicesPage"

export const metadata: Metadata = {
  title: "Services | Beacon Auto Care - NAPA AutoCare Center",
  description: "Expert auto repair and maintenance services in Doral, FL. Oil changes, tire services, brake repair, and more at Beacon Auto Care.",
}

export default function Services() {
  return <ServicesPage />
}
