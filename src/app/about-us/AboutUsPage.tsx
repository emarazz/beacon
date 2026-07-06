import { Box, Container, Divider, Typography } from "@mui/material"
import { visuallyHidden } from "@mui/utils"
import Image from "next/image"
import Navbar from "@/ui/Navbar"
import AboutUsSlider from "@/ui/AboutUsSlider"
import { Colors } from "@/ui/colors"

const certifications = [
  { src: "/img/certifications/napa-autocare-gold-certified.webp", alt: "NAPA AutoCare Gold Certified" },
  { src: "/img/certifications/aaa-approved-auto-repair.webp", alt: "AAA Approved Auto Repair" },
  { src: "/img/certifications/ase-blue-seal-of-excellence.webp", alt: "ASE Blue Seal of Excellence" },
]

export default function AboutUsPage() {
  return (
    <>
      <Navbar variant="white" />
      <Box sx={visuallyHidden}>
        <Typography component="h1">About Us — Trusted Auto Shop in Doral, FL</Typography>
        <p>Learn about Beacon Auto Care, your trusted NAPA AutoCare Center in Doral, FL. Built on integrity, reliability &amp; affordability. ASE-certified technicians. 12-month/12,000-mile warranty.</p>
      </Box>
      <Box component="main" bgcolor={Colors.gray}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 4,
            paddingTop: 6,
            paddingBottom: 16,
          }}
        >

          <Box
            component="section"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box>
              <Typography variant="h2">
                <b>BEACON</b> AUTO CARE
              </Typography>

              <Divider sx={{ mt: 0.25 }} />
            </Box>

            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" }, gap: 4 }}>
              <Typography>
                At Beacon Auto Care, our vision is to provide top-quality car maintenance
                and tire services to our customers, while maintaining a commitment to
                integrity, reliability and affordability.<br /><br />

                We strive to be the go-to destination for all of our customers' automotive
                needs, and to build long-lasting relationships through exceptional service
                and attention to detail.<br /><br />

                We will continue to invest in the latest technology, equipment, and
                training for our team members to ensure that we can meet the evolving
                needs of our customers.
              </Typography>

              <AboutUsSlider />
            </Box>
          </Box>

          <Box
            component="section"
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box>
              <Typography variant="h2">
                <b>OUR</b> CERTIFICATIONS
              </Typography>

              <Divider sx={{ mt: 0.25 }} />
            </Box>

            <Box sx={{ display: "grid", gridTemplateColumns: { xs: "1fr", md: "2fr 1fr" }, gap: 4, alignItems: "center" }}>
              <Typography>
                At our repair shop, excellence isn&rsquo;t just a goal — it&rsquo;s our standard. As a NAPA
                Gold Certified AutoCare Center, we deliver premium-quality repairs backed by trusted parts
                and industry-leading service. We&rsquo;re also proud to be a AAA Approved Repair Facility,
                a distinction earned through consistent honesty, reliability, and customer satisfaction.
                Our team carries the prestigious ASE Blue Seal of Excellence, proving our technicians are
                among the most highly trained and certified professionals in the industry. These elite
                certifications reflect our commitment to delivering superior workmanship, transparent
                communication, and a service experience you can trust every time you visit.
              </Typography>

              <Box sx={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
                {certifications.map((cert) => (
                  <Box key={cert.src} sx={{ position: "relative", paddingTop: "100%" }}>
                    <Image
                      src={cert.src}
                      alt={cert.alt}
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  )
}
