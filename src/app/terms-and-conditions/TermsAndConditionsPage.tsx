import type { ReactNode } from "react"
import { Box, Container, Divider, Link, Typography } from "@mui/material"
import { visuallyHidden } from "@mui/utils"
import Navbar from "@/ui/Navbar"
import NextLink from "next/link"
import { Colors } from "@/ui/colors"
import { BUSINESS_NAME, EMAIL, PHONE, SMS_PROGRAM } from "@/ui/business"

const LAST_REVISED = new Date("2026-10-01")

interface TermsSubsection {
  title: string
  content: ReactNode
}

interface TermsSection {
  id: string
  title: string
  subsections: TermsSubsection[]
}

const SECTIONS: TermsSection[] = [
  {
    id: "sms",
    title: "SMS Messaging Program",
    subsections: [
      {
        title: "Program Name",
        content: `${SMS_PROGRAM.name}, powered by ${SMS_PROGRAM.provider}`,
      },
      {
        title: "Program Description",
        content: `${BUSINESS_NAME} uses ${SMS_PROGRAM.provider} messaging technology to send SMS text messages to customers who have opted in. Messages are sent by ${BUSINESS_NAME} to customers who have provided consent. Message types include ${SMS_PROGRAM.messageTypes.slice(0, -1).join(", ")}, and ${SMS_PROGRAM.messageTypes.at(-1)}.`,
      },
      {
        title: "Automated Technology",
        content: "Messages may be sent using automated technology. You are not required to consent to receive automated messages as a condition of purchasing any goods or services.",
      },
      {
        title: "Message Frequency",
        content: "Message frequency varies based on your vehicle activity and scheduled appointments.",
      },
      {
        title: "Message and Data Rates",
        content: "Message and data rates may apply. Please check with your mobile carrier for details.",
      },
      {
        title: "Opt-Out",
        content: (
          <>
            Reply <b>{SMS_PROGRAM.stopKeyword}</b> to cancel. You will receive one final confirmation
            message. No further messages will be sent after opting out. Reply{" "}
            <b>{SMS_PROGRAM.startKeyword}</b> to resume messages at any time.
          </>
        ),
      },
      {
        title: "Help",
        content: (
          <>
            Reply <b>{SMS_PROGRAM.helpKeyword}</b> for help or contact {BUSINESS_NAME} at{" "}
            <Link href={PHONE.href}>{PHONE.display}</Link> or{" "}
            <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>. You may also reach {SMS_PROGRAM.provider}{" "}
            support at{" "}
            <Link href={`mailto:${SMS_PROGRAM.providerSupportEmail}`}>{SMS_PROGRAM.providerSupportEmail}</Link>.
          </>
        ),
      },
      {
        title: "Carrier Disclaimer",
        content: "Carriers are not liable for any delayed or undelivered messages.",
      },
      {
        title: "Privacy Policy",
        content: (
          <>
            For information on how your data is collected and used, review the SMS Messaging section of
            our{" "}
            <Link component={NextLink} href="/privacy-policy#sms">
              Privacy Policy
            </Link>
            .
          </>
        ),
      },
    ],
  },
]

export default function TermsAndConditionsPage() {
  const lastRevised = LAST_REVISED.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  })

  return (
    <>
      <Navbar variant="white" />
      <Box sx={visuallyHidden}>
        <Typography component="h1">Terms and Conditions</Typography>
        <p>Terms and Conditions for Beacon Auto Care, including the terms of our SMS Messaging Program.</p>
      </Box>
      <Box component="main" bgcolor={Colors.gray}>
        <Container
          component="section"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            paddingTop: 6,
            paddingBottom: 16,
            maxWidth: "md",
          }}
        >
          <Box>
            <Typography variant="h2">
              <b>TERMS</b> AND CONDITIONS
            </Typography>
            <Divider sx={{ mt: 0.25 }} />
          </Box>

          <Typography variant="body2" color="text.secondary">
            Last Revised: {lastRevised}
          </Typography>

          {SECTIONS.map((section, sectionIndex) => (
            <Box key={section.id} id={section.id} sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Typography variant="subtitle1" component="h2">
                <b>{sectionIndex + 1}. {section.title}</b>
              </Typography>

              {section.subsections.map((subsection) => (
                <Box key={subsection.title}>
                  <Typography component="h3" gutterBottom><b>{subsection.title}</b></Typography>
                  <Typography>{subsection.content}</Typography>
                </Box>
              ))}
            </Box>
          ))}
        </Container>
      </Box>
    </>
  )
}
