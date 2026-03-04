import type { Metadata } from "next"
import FindUsPage from "./FindUsPage"

export const metadata: Metadata = {
  title: "Find Us | Beacon Auto Care - NAPA AutoCare Center",
  description: "Visit Beacon Auto Care at 8701 NW 13th Terrace, Doral, FL 33172. Open Monday–Friday 7:00 AM – 6:00 PM. Call us at (305) 471-8400.",
}

export default function FindUs() {
  return <FindUsPage />
}
