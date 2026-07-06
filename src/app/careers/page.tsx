import type { Metadata } from "next"
import CareersPage from "./CareersPage"

export const metadata: Metadata = {
  title: "Careers — We're Hiring! | Beacon Auto Care",
  description: "Beacon Auto Care in Doral, FL is hiring a Senior Automotive Technician / Diagnostic Lead. Competitive pay, weekly bonuses, and a true Monday–Friday schedule.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers at Beacon Auto Care — We're Hiring!",
    description: "Senior Automotive Technician / Diagnostic Lead — Doral, FL. $30-$35/hr base + bonuses, Monday–Friday, no weekends.",
    url: "/careers",
  },
}

export default function Page() {
  return <CareersPage />
}
