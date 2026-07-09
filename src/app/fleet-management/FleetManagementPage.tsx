import { Box, Container, Divider, Link, Typography } from "@mui/material"
import { visuallyHidden } from "@mui/utils"
import Navbar from "@/ui/Navbar"
import ImageSlider from "@/ui/ImageSlider"
import NextLink from "next/link"
import { Colors } from "@/ui/colors"

const fleetSlides = [
  { src: "/img/beacon-fleet-management-01.webp", alt: "Beacon Auto Care Fleet Management" },
]

const whyUs = [
  {
    title: "Instant Digital Approvals",
    text: "We use eRepair and electronic bid platforms to submit estimates directly to your fleet manager. No long phone holds. No delayed approvals.",
  },
  {
    title: "National Fleet Compliance",
    text: "Our facility is an approved vendor for the country’s largest fleet management networks.",
  },
  {
    title: "Consolidated Direct Billing",
    text: "All invoices are processed electronically through your fleet provider's portal. Your drivers simply drop off the keys and get back to work.",
  },
  {
    title: "ASE-Certified Technicians",
    text: "From routine preventative maintenance to complex diagnostics, our certified team ensures your vehicles meet strict safety and DOT compliance standards.",
  },
]

const networks = [
  "Enterprise Fleet Management (via the Enterprise Maintenance Partner portal)",
  "ARI / Holman Logistics",
  "Element Fleet Management",
  "Wheels",
  "LeasePlan",
]

export default function FleetManagementPage() {
  return (
    <>
      <Navbar variant="white" />
      <Box sx={visuallyHidden}>
        <Typography component="h1">Fleet Management — Corporate Fleet Maintenance in Doral, FL</Typography>
        <p>Beacon Auto Care partners with corporate fleets for hassle-free maintenance: instant digital approvals, direct billing, and ASE-certified technicians. Doral, FL.</p>
      </Box>
      <Box component="main" bgcolor={Colors.gray}>
        <Container
          component="section"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            paddingTop: 6,
            paddingBottom: 16,
          }}
        >
          <Box>
            <Typography variant="h2">
              <b>FLEET</b> MANAGEMENT
            </Typography>
            <Divider sx={{ mt: 0.25 }} />
          </Box>

          <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)" }, gap: 4 }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
              <Box>
                <Typography variant="h5" gutterBottom>
                  <b>Partner With Us for Hassle-Free Fleet Maintenance</b>
                </Typography>
                <Typography>
                  Keeping your corporate vehicles on the road requires speed, precision, and seamless
                  communication. Our shop is fully integrated with the industry&rsquo;s leading fleet
                  management platforms, ensuring lightning-fast electronic order approvals and direct
                  billing that completely eliminates out-of-pocket expenses for your drivers.
                </Typography>
              </Box>

              <Box>
                <Typography variant="subtitle1" gutterBottom><b>Why Corporate Fleets Choose Us</b></Typography>
                <Box component="ul" sx={{ mt: 1, pl: 3 }}>
                  {whyUs.map((item) => (
                    <li key={item.title}>
                      <Typography><b>{item.title}:</b> {item.text}</Typography>
                    </li>
                  ))}
                </Box>
              </Box>

              <Box>
                <Typography variant="subtitle1" gutterBottom><b>Supported Fleet Management Networks</b></Typography>
                <Typography gutterBottom>
                  We seamlessly process service authorizations, purchase orders, and electronic billing with:
                </Typography>
                <Box component="ul" sx={{ mt: 1, pl: 3 }}>
                  {networks.map((network) => (
                    <li key={network}><Typography>{network}</Typography></li>
                  ))}
                </Box>
              </Box>

              <Box>
                <Typography variant="subtitle1" gutterBottom><b>Get Your Fleet Account Set Up Today</b></Typography>
                <Typography>
                  Minimize your vehicle downtime and streamline your corporate bookkeeping. Contact our
                  Fleet Service Desk today to register your vehicles in our system or to verify your
                  specific fleet network integration at{" "}
                  <Link component={NextLink} href="tel:+13054718400">(305) 471-8400</Link>
                  {" "}or{" "}
                  <Link component={NextLink} href="mailto:service@beaconauto.net">service@beaconauto.net</Link>.
                </Typography>
              </Box>
            </Box>

            <ImageSlider slides={fleetSlides} />
          </Box>
        </Container>
      </Box>
    </>
  )
}
