import type { Metadata } from "next"
import CareersPage from "./CareersPage"

export const metadata: Metadata = {
  title: "Careers | Beacon Auto Care",
  description: "Join the Beacon Auto Care team in Doral, FL. Now hiring a Senior Automotive Technician, B Technician, DVI Inspector, and Service Writer.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers at Beacon Auto Care",
    description: "A systematic, 5-bay facility in Doral, FL hiring technicians and a service writer who value data over guessing and production over politics.",
    url: "/careers",
  },
}

export default function Page() {
  return <CareersPage />
}
