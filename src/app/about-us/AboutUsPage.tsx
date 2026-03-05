import { Box, Container, Divider, Typography } from "@mui/material"
import { visuallyHidden } from "@mui/utils"
import Navbar from "@/ui/Navbar"
import AboutUsSlider from "@/ui/AboutUsSlider"
import { Colors } from "@/ui/colors"

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
        </Container>
      </Box>
    </>
  )
}
