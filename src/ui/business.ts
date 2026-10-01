export const BUSINESS_NAME = "Beacon Auto Care"
export const LEGAL_ENTITY = "AUTOBO LLC"
export const SITE_URL = process.env.NEXT_PUBLIC_URL || "https://beaconauto.net"

export const PHONE = {
  display: "(305) 471-8400",
  href: "tel:+13054718400",
}

export const EMAIL = "shop@beaconauto.net"

export const ADDRESS = {
  street: "8701 NW 13th Terrace",
  city: "Doral, FL 33172",
}

export const SMS_PROGRAM = {
  name: `${BUSINESS_NAME} SMS Messaging Program`,
  provider: "AutoVitals",
  providerSupportEmail: "support@autovitals.com",
  stopKeyword: "STOP",
  startKeyword: "START",
  helpKeyword: "HELP",
  messageTypes: [
    "appointment reminders",
    "service reminders",
    "vehicle status updates",
    "inspection results",
    "thank-you messages",
    "one to one general messages",
    "marketing or promotional updates where applicable",
  ],
}
