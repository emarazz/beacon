import type { Metadata } from "next"
import FleetManagementPage from "./FleetManagementPage"

export const metadata: Metadata = {
  title: "Fleet Management | Beacon Auto Care",
  description: "Corporate fleet maintenance in Doral, FL. Instant digital approvals, direct billing, and ASE-certified technicians for national fleet networks.",
  alternates: { canonical: "/fleet-management" },
  openGraph: {
    title: "Fleet Management at Beacon Auto Care",
    description: "Hassle-free corporate fleet maintenance with electronic approvals, direct billing, and ASE-certified technicians in Doral, FL.",
    url: "/fleet-management",
  },
}

export default function Page() {
  return <FleetManagementPage />
}
