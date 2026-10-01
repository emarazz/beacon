import type { Metadata } from "next"
import FindUsPage from "./FindUsPage"
import { ADDRESS, BUSINESS_NAME, HOURS, PHONE } from "@/ui/business"

export const metadata: Metadata = {
  title: `Find Us — ${ADDRESS.full}`,
  description: `Visit ${BUSINESS_NAME} at ${ADDRESS.full}, next to Shell Gas Station. Open ${HOURS.display}. Call ${PHONE.display}. Get directions.`,
  keywords: ["Beacon Auto Care location", "auto shop Doral FL address", `${ADDRESS.street} ${ADDRESS.locality}`, "auto repair near me Doral", "directions auto shop Doral"],
  alternates: { canonical: "/find-us" },
  openGraph: {
    title: `Find ${BUSINESS_NAME} | ${ADDRESS.street}, ${ADDRESS.locality}, ${ADDRESS.region}`,
    description: `Visit us at ${ADDRESS.full} (next to Shell). Open ${HOURS.short}. Call ${PHONE.display}.`,
    url: "/find-us",
  },
}

export default function FindUs() {
  return <FindUsPage />
}
