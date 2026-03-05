import type { Metadata } from "next"
import PrivacyPolicyPage from "./PrivacyPolicyPage"

export const metadata: Metadata = {
  title: "Privacy Policy - Beacon Auto Care",
  description: "Privacy Policy for Beacon Auto Care. Learn how we collect and use data on our website.",
}

export default function Page() {
  return <PrivacyPolicyPage />
}
