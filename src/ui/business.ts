export const BUSINESS_NAME = "Beacon Auto Care"
export const LEGAL_ENTITY = "AUTOBO LLC"
export const SITE_URL = process.env.NEXT_PUBLIC_URL || "https://beaconauto.net"

export const PHONE = {
  display: "(305) 471-8400",
  href: "tel:+13054718400",
  e164: "+13054718400",
}

export const EMAIL = "shop@beaconauto.net"

const STREET = "8701 NW 13th Terrace"
const LOCALITY = "Doral"
const REGION = "FL"
const POSTAL_CODE = "33172"

export const ADDRESS = {
  street: STREET,
  locality: LOCALITY,
  region: REGION,
  postalCode: POSTAL_CODE,
  country: "US",
  city: `${LOCALITY}, ${REGION} ${POSTAL_CODE}`,
  full: `${STREET}, ${LOCALITY}, ${REGION} ${POSTAL_CODE}`,
}

export const GEO = {
  latitude: 25.7855,
  longitude: -80.3397,
}

export const MAPS = {
  link: "https://goo.gl/maps/6tNDNvLRrgVAR2z27",
  embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.5472540468363!2d-80.33973092361089!3d25.785513807619004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b913ec4adab7%3A0x9c249c985ea91a7e!2sBeacon%20Auto%20Care!5e0!3m2!1sen!2sbo!4v1772642008517!5m2!1sen!2sbo",
}

export const HOURS = {
  display: "Mon – Fri: 7:00 AM – 6:00 PM",
  short: "Mon–Fri 7am–6pm",
  days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
  opens: "07:00",
  closes: "18:00",
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
