import type { Metadata } from "next"
import TermsAndConditionsPage from "./TermsAndConditionsPage"

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Terms and Conditions for Beacon Auto Care, including the terms of our SMS Messaging Program.",
  alternates: { canonical: "/terms-and-conditions" },
  robots: { index: false, follow: false },
}

export default function Page() {
  return <TermsAndConditionsPage />
}
