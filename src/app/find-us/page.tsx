import type { Metadata } from "next"
import FindUsPage from "./FindUsPage"

export const metadata: Metadata = {
  title: "Find Us — 8701 NW 13th Terrace, Doral, FL 33172",
  description: "Visit Beacon Auto Care at 8701 NW 13th Terrace, Doral, FL 33172, next to Shell Gas Station. Open Mon–Fri 7:00 AM – 6:00 PM. Call (305) 471-8400. Get directions.",
  keywords: ["Beacon Auto Care location", "auto shop Doral FL address", "8701 NW 13th Terrace Doral", "auto repair near me Doral", "directions auto shop Doral"],
  alternates: { canonical: "/find-us" },
  openGraph: {
    title: "Find Beacon Auto Care | 8701 NW 13th Terrace, Doral, FL",
    description: "Visit us at 8701 NW 13th Terrace, Doral, FL 33172 (next to Shell). Open Mon–Fri 7am–6pm. Call (305) 471-8400.",
    url: "/find-us",
  },
}

export default function FindUs() {
  return <FindUsPage />
}
