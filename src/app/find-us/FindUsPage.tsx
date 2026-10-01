import { Box, Container, Divider, Typography } from "@mui/material"
import { visuallyHidden } from "@mui/utils"
import Navbar from "@/ui/Navbar"
import { Colors } from "@/ui/colors"
import { ADDRESS, BUSINESS_NAME, HOURS, MAPS, PHONE } from "@/ui/business"

export default function FindUsPage() {
  return (
    <>
      <Navbar variant="white" />
      <Box sx={visuallyHidden}>
        <Typography component="h1">Find Us — {ADDRESS.full}</Typography>
        <p>Visit {BUSINESS_NAME} at {ADDRESS.full}, next to Shell Gas Station. Open {HOURS.display}. Call {PHONE.display}. Get directions.</p>
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
              <b>DIRECTIONS</b>
            </Typography>

            <Divider sx={{ mt: 0.25 }} />
          </Box>

          <Box display="flex" flexDirection={"column"} gap={4}>

            <Typography>
              We are located next to Shell Gas Station.
            </Typography>

            <Box
              component="iframe"
              src={MAPS.embed}
              sx={{ border: 0, display: "block", width: "100%", flexGrow: 1, minHeight: { xs: 320, sm: 480 } }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />

          </Box>
        </Container>
      </Box>
    </>
  )
}
