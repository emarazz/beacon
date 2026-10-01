import { Box, Container, Divider, Link, Typography } from "@mui/material"
import { visuallyHidden } from "@mui/utils"
import Navbar from "@/ui/Navbar"
import NextLink from "next/link"
import { Colors } from "@/ui/colors"
import { ADDRESS, EMAIL, PHONE, SMS_PROGRAM } from "@/ui/business"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar variant="white" />
      <Box sx={visuallyHidden}>
        <Typography component="h1">Privacy Policy</Typography>
        <p>Privacy Policy for Beacon Auto Care. Learn how we collect and use anonymized analytics data on our website.</p>
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
              <b>PRIVACY</b> POLICY
            </Typography>
            <Divider sx={{ mt: 0.25 }} />
          </Box>

          <Typography variant="body2" color="text.secondary">
            Last updated: October 2026
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>

            <Box>
              <Typography variant="subtitle1" gutterBottom><b>1. Introduction</b></Typography>
              <Typography>
                Beacon Auto Care ("we," "us," or "our"), operated by AUTOBO LLC, is committed to protecting
                your privacy. This Privacy Policy explains how we collect, use, and safeguard information
                when you visit our website at{" "}
                <Link component={NextLink} href="/" sx={{ color: "primary.main" }}>
                  beaconauto.net
                </Link>
                . By using our site, you agree to the practices described here.
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle1" gutterBottom><b>2. Information We Collect</b></Typography>
              <Typography>
                We do not collect any personally identifiable information unless you voluntarily provide
                it (e.g., by calling us or emailing us). Through Google Analytics, we automatically
                collect anonymized usage data, including:
              </Typography>
              <Box component="ul" sx={{ mt: 1, pl: 3 }}>
                <li><Typography>Pages visited and time spent on each page</Typography></li>
                <li><Typography>Browser type, device type, and operating system</Typography></li>
                <li><Typography>General geographic location (city/region level — no precise location)</Typography></li>
                <li><Typography>Referring website or search engine</Typography></li>
              </Box>
              <Typography sx={{ mt: 1 }}>
                This data is aggregated and cannot be used to identify you personally.
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle1" gutterBottom><b>3. Cookies</b></Typography>
              <Typography>
                Our website uses cookies — small text files stored on your device — for the following purposes:
              </Typography>
              <Box component="ul" sx={{ mt: 1, pl: 3 }}>
                <li><Typography><b>Analytics cookies</b> (_ga, _gid): set by Google Analytics to measure site traffic and usage patterns. These cookies do not store personally identifiable information.</Typography></li>
                <li><Typography><b>Preference cookies</b> (cookieConsent): set by us to remember your cookie consent choice.</Typography></li>
              </Box>
              <Typography sx={{ mt: 1 }}>
                You can accept or decline analytics cookies using the banner displayed on your first visit.
                You may also manage or delete cookies through your browser settings at any time.
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle1" gutterBottom><b>4. How We Use Your Information</b></Typography>
              <Typography>
                We use the anonymized analytics data solely to understand how visitors interact with our
                website so we can improve its content and user experience. We do not sell, rent, or share
                this data with third parties for marketing purposes.
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle1" gutterBottom><b>5. Third-Party Services</b></Typography>
              <Typography>
                We use Google Analytics, provided by Google LLC. Google may process data on servers
                located outside the United States. For more information on how Google handles data,
                please review{" "}
                <Link href="https://policies.google.com/privacy" target="_blank" rel="noopener">
                  Google's Privacy Policy
                </Link>
                . We have enabled IP anonymization so your full IP address is never stored by Google.
              </Typography>
            </Box>

            <Box id="sms">
              <Typography variant="subtitle1" gutterBottom><b>6. SMS Messaging</b></Typography>
              <Typography>
                If you opt in to the {SMS_PROGRAM.name}, we collect your mobile phone number and the
                consent you provide in order to send you the messages described in our{" "}
                <Link component={NextLink} href="/terms-and-conditions#sms">
                  Terms and Conditions
                </Link>
                . Messages are sent through {SMS_PROGRAM.provider}, which processes this information on
                our behalf solely to deliver those messages.
              </Typography>
              <Typography sx={{ mt: 1 }}>
                No mobile information will be shared with third parties or affiliates for marketing or
                promotional purposes. Text messaging originator opt-in data and consent will not be shared
                with any third parties. You can opt out at any time by replying{" "}
                <b>{SMS_PROGRAM.stopKeyword}</b>.
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle1" gutterBottom><b>7. Your Choices</b></Typography>
              <Typography>
                You may opt out of analytics tracking at any time by:
              </Typography>
              <Box component="ul" sx={{ mt: 1, pl: 3 }}>
                <li><Typography>Clicking "Decline" on the cookie consent banner</Typography></li>
                <li><Typography>Installing the{" "}
                  <Link href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener">
                    Google Analytics Opt-out Browser Add-on
                  </Link>
                </Typography></li>
                <li><Typography>Disabling cookies in your browser settings</Typography></li>
              </Box>
            </Box>

            <Box>
              <Typography variant="subtitle1" gutterBottom><b>8. Florida Residents</b></Typography>
              <Typography>
                Florida residents may have additional rights under the Florida Digital Bill of Rights
                (FDBR), effective July 1, 2024. As a small business, we do not engage in the sale of
                personal data and do not meet the thresholds that trigger FDBR obligations. However,
                we remain committed to transparency about our data practices.
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle1" gutterBottom><b>9. Data Security</b></Typography>
              <Typography>
                We do not store personal data on our servers. All analytics data is processed by Google
                on our behalf. We take reasonable measures to ensure our website and communications
                remain secure.
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle1" gutterBottom><b>10. Changes to This Policy</b></Typography>
              <Typography>
                We may update this Privacy Policy from time to time. The "Last updated" date at the top
                of this page will reflect any changes. We encourage you to review this page periodically.
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle1" gutterBottom><b>11. Contact Us</b></Typography>
              <Typography>
                If you have any questions about this Privacy Policy, please contact us:
              </Typography>
              <Box component="ul" sx={{ mt: 1, pl: 3 }}>
                <li><Typography>Email:{" "}
                  <Link href={`mailto:${EMAIL}`}>{EMAIL}</Link>
                </Typography></li>
                <li><Typography>Phone:{" "}
                  <Link href={PHONE.href}>{PHONE.display}</Link>
                </Typography></li>
                <li><Typography>Address: {ADDRESS.street}, {ADDRESS.city}</Typography></li>
              </Box>
            </Box>

          </Box>
        </Container>
      </Box>
    </>
  )
}
