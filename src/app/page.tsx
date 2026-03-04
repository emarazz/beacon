import type { Metadata } from "next"
import HomePage from "./HomePage"

export const metadata: Metadata = {
  title: "Beacon Auto Care - NAPA AutoCare Center | Doral, FL",
  description: "Beacon Auto Care — NAPA AutoCare Center in Doral, FL. Expert car maintenance & tire services built on integrity, reliability & affordability. Visit us at 8701 NW 13th Terrace.",
}

export default function Home() {
  return <HomePage />
}
