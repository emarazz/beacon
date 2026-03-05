import { Box, Container, Divider, Typography } from "@mui/material"
import { visuallyHidden } from "@mui/utils"
import Navbar from "@/ui/Navbar"
import { AnimateIn } from "@/ui/AnimateIn"

export default function FindUsPage() {
  return (
    <>
      <Navbar variant="white" />
      <Box sx={visuallyHidden}>
        <Typography component="h1">Find Us — 8701 NW 13th Terrace, Doral, FL 33172</Typography>
        <p>Visit Beacon Auto Care at 8701 NW 13th Terrace, Doral, FL 33172, next to Shell Gas Station. Open Mon–Fri 7:00 AM – 6:00 PM. Call (305) 471-8400. Get directions.</p>
      </Box>
      <Box component="main">
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
          <AnimateIn variant="fadeUp">
            <Box>
              <Typography variant="h2">
                <b>DIRECTIONS</b>
              </Typography>

              <Divider sx={{ mt: 0.25 }} />
            </Box>
          </AnimateIn>

          <Box display="flex" flexDirection={"column"} gap={4}>

            <AnimateIn variant="fadeUp">
              <Typography>
                We are located next to Shell Gas Station.
              </Typography>
            </AnimateIn>

            <AnimateIn variant="fadeIn">
              <Box
                component="iframe"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.5472540468363!2d-80.33973092361089!3d25.785513807619004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b913ec4adab7%3A0x9c249c985ea91a7e!2sBeacon%20Auto%20Care!5e0!3m2!1sen!2sbo!4v1772642008517!5m2!1sen!2sbo"
                sx={{ border: 0, display: "block", width: "100%", flexGrow: 1, minHeight: { xs: 320, sm: 480 } }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </AnimateIn>

          </Box>
        </Container>
      </Box>
    </>
  )
}
