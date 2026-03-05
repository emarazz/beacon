import type { Metadata } from "next"
import AboutUsPage from "./AboutUsPage"

export const metadata: Metadata = {
  title: "About Us — Trusted Auto Shop in Doral, FL",
  description: "Learn about Beacon Auto Care, your trusted NAPA AutoCare Center in Doral, FL. Built on integrity, reliability & affordability. ASE-certified technicians. 12-month/12,000-mile warranty.",
  keywords: ["NAPA AutoCare Doral FL", "ASE certified mechanic Doral", "trusted auto shop Doral", "Beacon Auto Care about", "auto repair warranty Doral"],
  alternates: { canonical: "/about-us" },
  openGraph: {
    title: "About Beacon Auto Care | Trusted NAPA AutoCare Center — Doral, FL",
    description: "ASE-certified technicians, NAPA parts, and a 12-month/12,000-mile warranty. Your trusted auto shop in Doral, FL.",
    url: "/about-us",
  },
}

export default function AboutUs() {
  return <AboutUsPage />
}
