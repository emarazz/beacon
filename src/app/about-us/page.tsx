import type { Metadata } from "next"
import AboutUsPage from "./AboutUsPage"

export const metadata: Metadata = {
  title: "About Us | Beacon Auto Care - NAPA AutoCare Center",
  description: "Learn about Beacon Auto Care, your trusted NAPA AutoCare Center in Doral, FL. Built on integrity, reliability, and affordability.",
}

export default function AboutUs() {
  return <AboutUsPage />
}
