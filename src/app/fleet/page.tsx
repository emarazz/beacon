import type { Metadata } from "next"
import FleetPage from "./FleetPage"

export const metadata: Metadata = {
  title: "Fleet | Beacon Auto Care",
  description: "Corporate fleet maintenance in Doral, FL. Instant digital approvals, direct billing, and ASE-certified technicians for national fleet networks.",
  alternates: { canonical: "/fleet" },
  openGraph: {
    title: "Fleet at Beacon Auto Care",
    description: "Hassle-free corporate fleet maintenance with electronic approvals, direct billing, and ASE-certified technicians in Doral, FL.",
    url: "/fleet",
  },
}

export default function Page() {
  return <FleetPage />
}
