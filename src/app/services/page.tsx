import type { Metadata } from "next"
import ServicesPage from "./ServicesPage"

export const metadata: Metadata = {
  title: "Auto Repair & Maintenance Services — Doral, FL",
  description: "Full-service auto repair in Doral, FL: oil changes, tire services, brake repair, AC service, engine diagnostics, electrical, suspension & more. NAPA AutoCare Center. (305) 471-8400.",
  keywords: ["oil change Doral FL", "tire service Doral", "brake repair Doral FL", "AC service Doral", "engine diagnostic Doral", "auto maintenance Doral", "NAPA parts Doral"],
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Auto Repair & Maintenance Services | Beacon Auto Care — Doral, FL",
    description: "Full-service auto repair in Doral, FL: oil changes, tires, brakes, AC, diagnostics, electrical & more. NAPA AutoCare Center.",
    url: "/services",
  },
}

export default function Services() {
  return <ServicesPage />
}
