import type { Metadata } from "next"
import PrivacyPolicyPage from "./PrivacyPolicyPage"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Beacon Auto Care. Learn how we collect and use anonymized analytics data on our website.",
  alternates: { canonical: "/privacy-policy" },
  robots: { index: false, follow: false },
}

export default function Page() {
  return <PrivacyPolicyPage />
}
