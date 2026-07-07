import { Box, Container, Divider, Link, Typography } from "@mui/material"
import { visuallyHidden } from "@mui/utils"
import Navbar from "@/ui/Navbar"
import NextLink from "next/link"
import { Colors } from "@/ui/colors"

export default function CareersPage() {
  return (
    <>
      <Navbar variant="white" />
      <Box sx={visuallyHidden}>
        <Typography component="h1">Careers — Join Our Team at Beacon Auto Care</Typography>
        <p>Beacon Auto Care in Doral, FL is hiring a Senior Automotive Technician / Diagnostic Lead. Competitive pay, weekly bonuses, and a true Monday–Friday schedule.</p>
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
              <b>JOIN OUR</b> TEAM
            </Typography>
            <Divider sx={{ mt: 0.25 }} />
          </Box>

          <Typography variant="h5">
            <b>Senior Automotive Technician</b>
          </Typography>

          <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>

            <Box>
              <Typography>
                <b>Position:</b> Senior Automotive Technician / Diagnostic Lead<br />
                <b>Location:</b> Doral, FL (Prime, High-Traffic Corner Location)<br />
                <b>Schedule:</b> Monday – Friday, 8:00 AM – 5:00 PM (Absolute Zero Weekends!)<br />
                <b>Compensation:</b> Competitive $30.00 - $35.00 / hour base rate + aggressive weekly
                volume production bonuses with a potential of making $100K+ annually.
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle1" gutterBottom><b>About Our Shop:</b></Typography>
              <Typography>
                Beacon Auto Care is a highly successful, high-volume 5-bay NAPA AutoCare Center located
                on a busy corner in Doral. We consistently turn a steady 120+ hours of labor a week, with
                the immediate potential to scale to 150 hours. We are a traditional, fast-paced, open-bay
                shop. We work hard, we pay strictly on time, and we respect our team&rsquo;s work-life balance.
              </Typography>
            </Box>

            <Box>
              <Typography variant="subtitle1" gutterBottom><b>What We Offer:</b></Typography>
              <Box component="ul" sx={{ mt: 1, pl: 3 }}>
                <li><Typography><b>Proven $100K+ Income Potential:</b> The work is already here. You step right into an established, highly profitable customer base on day one.</Typography></li>
                <li><Typography><b>No Corporate Politics or Digital Stress:</b> We do not micromanage you with complicated tablet or DVI paperwork on the shop floor. We handle the front counter and customer service completely so you can focus entirely on diagnosing, repairing cars, and turning hours.</Typography></li>
                <li><Typography><b>True Work-Life Balance:</b> Keep your weekends entirely to yourself. Clean Monday through Friday schedule.</Typography></li>
                <li><Typography><b>Beat the Heat:</b> We provide high-velocity commercial shop fans for our bays and keep a fully stocked fridge of cold drinks and electrolytes to keep our team comfortable.</Typography></li>
              </Box>
            </Box>

            <Box>
              <Typography variant="subtitle1" gutterBottom><b>What We Need:</b></Typography>
              <Box component="ul" sx={{ mt: 1, pl: 3 }}>
                <li><Typography>5+ years of professional automotive diagnostic and repair experience.</Typography></li>
                <li><Typography>Strong troubleshooting and mechanical skills to handle a heavy, steady workload.</Typography></li>
                <li><Typography>ASE certifications are highly preferred, but a proven track record of shop production matters most.</Typography></li>
              </Box>
            </Box>

            <Box>
              <Typography variant="subtitle1" gutterBottom><b>How to Apply:</b></Typography>
              <Typography>
                Ready to leave the dealership politics behind and get paid what you are worth? Call us
                directly at{" "}
                <Link component={NextLink} href="tel:+13054718400">(305) 471-8400</Link>
                {" "}or email your resume/experience to{" "}
                <Link component={NextLink} href="mailto:shop@beaconauto.net">shop@beaconauto.net</Link>.
              </Typography>
            </Box>

          </Box>
        </Container>
      </Box>
    </>
  )
}
