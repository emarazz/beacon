import type { Metadata } from "next"
import HomePage from "./HomePage"

export const metadata: Metadata = {
  title: "Beacon Auto Care | NAPA AutoCare Center — Doral, FL",
  description: "Beacon Auto Care is a NAPA AutoCare Center in Doral, FL. Expert car maintenance, tire services, brakes, AC & auto repair. Serving Doral, Miami & surrounding areas. Call (305) 471-8400.",
  keywords: ["auto repair Doral FL", "NAPA AutoCare Doral", "car maintenance Doral FL", "tire service Doral", "oil change Doral FL", "brake repair Doral", "auto shop near me Doral"],
  alternates: { canonical: "/" },
}

export default function Home() {
  return <HomePage />
}
