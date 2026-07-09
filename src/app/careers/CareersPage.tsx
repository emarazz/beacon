import { Box, Container, Divider, Link, Typography } from "@mui/material"
import { visuallyHidden } from "@mui/utils"
import Navbar from "@/ui/Navbar"
import NextLink from "next/link"
import { Colors } from "@/ui/colors"

const roles = [
  {
    title: "Senior Automotive Technician",
    tagline: "The Producer.",
    text: "You are a veteran with 10+ years of experience who is tired of dealer politics and wasted time. You want a shop where your productivity is rewarded, your equipment is top-tier, and you are supported by digital workflows (TRACS) that keep you turning hours without administrative headaches.",
  },
  {
    title: "B Technician",
    tagline: "The Growth Professional.",
    text: "You are technically skilled, reliable, and ready to take the next step. You understand that “good enough” isn’t the standard. You are looking for a shop that respects your work, provides a clear path for advancement, and uses data-driven systems to help you maximize your potential.",
  },
  {
    title: "DVI Inspector / Tech C (The Beacon Academy)",
    tagline: "The Future Pro.",
    text: "You are a trade school student or recent grad looking for a professional start. You will master Digital Vehicle Inspections (DVI) and our shop management systems. We provide the mentorship you need to grow—and if you are pursuing your ASE certifications, you are exactly who we are looking for.",
  },
  {
    title: "Service Writer",
    tagline: "The Process Gatekeeper.",
    text: "You are the bridge between our high-level technical team and our customers. You don’t just “take orders”—you manage the process. You are tech-savvy, comfortable with matrix pricing, and you understand that accurate documentation and clear, honest communication are what drive our shop’s success.",
  },
]

export default function CareersPage() {
  return (
    <>
      <Navbar variant="white" />
      <Box sx={visuallyHidden}>
        <Typography component="h1">Careers — Join the Beacon Auto Care Team</Typography>
        <p>Beacon Auto Care in Doral, FL is hiring Automotive Technicians, a DVI Inspector, and a Service Writer. Call or text (305) 471-8400 to schedule a private shop tour.</p>
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
          }}
        >
          <Box>
            <Typography variant="h2">
              <b>JOIN THE</b> BEACON AUTO CARE TEAM
            </Typography>
            <Divider sx={{ mt: 0.25 }} />
          </Box>

          <Typography maxWidth="md">
            We aren&rsquo;t your typical garage. We are a systematic, 5-bay facility in Doral dedicated
            to high-efficiency repairs and professional standards. We value data over guessing, systems
            over chaos, and production over politics. If you are looking for a career, not just a job,
            we want to talk to you.
          </Typography>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" }, gap: 4 }}>
            {roles.map((role) => (
              <Box
                key={role.title}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                  padding: 2,
                  height: "100%",
                  backgroundColor: Colors.white,
                }}
              >
                <Box display="flex" bgcolor={Colors.black} justifyContent="center">
                  <Typography variant="button" color={Colors.white} px={2} py={0.75} textAlign="center">
                    {role.title}
                  </Typography>
                </Box>

                <Typography>
                  <b>{role.tagline}</b> {role.text}
                </Typography>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, maxWidth: "md" }}>
            <Typography variant="h4">
              <b>Ready to</b> Make the Move?
            </Typography>

            <Typography>
              We don&rsquo;t believe in long, drawn-out hiring processes. If you&rsquo;re a professional
              who wants a seat in a shop that finally works as hard as you do, let&rsquo;s have a
              confidential conversation.
            </Typography>

            <Box sx={{ display: "flex", flexDirection: "column", gap: 0.5, mt: 1 }}>
              <Typography>
                <b>Phone/Text:</b>{" "}
                <Link component={NextLink} href="tel:+13054718400">305-471-8400</Link>
              </Typography>
              <Typography>
                <b>Email:</b>{" "}
                <Link component={NextLink} href="mailto:shop@beaconauto.net">shop@beaconauto.net</Link>
              </Typography>
              <Typography>
                <b>Visit Us:</b> 8701 NW 13th Ter, Doral FL 33172
              </Typography>
            </Box>

            <Typography sx={{ mt: 1 }}>
              Call or text to schedule a private shop tour. See for yourself how we do things at Beacon.
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  )
}
