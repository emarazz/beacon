import { Box, Container, Divider, Paper, Typography } from "@mui/material"
import { visuallyHidden } from "@mui/utils"
import Image from "next/image"
import PromoSlider from "@/ui/PromoSlider"
import Navbar from "@/ui/Navbar"
import FeaturedServices from "@/ui/FeaturedServices"
import FeatureHighlights from "@/ui/FeatureHighlights"
import { Colors } from "@/ui/colors"

export default function HomePage() {
  return (
    <>
      <Box sx={visuallyHidden}>
        <Typography component="h1">Beacon Auto Care | NAPA AutoCare Center — Doral, FL</Typography>
        <p>Beacon Auto Care is a NAPA AutoCare Center in Doral, FL. Expert car maintenance, tire services, brakes, AC & auto repair. Serving Doral, Miami & surrounding areas. Call (305) 471-8400.</p>
      </Box>

      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <Box
        sx={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Background image — LCP element, no animation */}
        <Image
          src="/img/beacon-sunset-01.webp"
          alt="Beacon Auto Care - NAPA AutoCare Center"
          fill
          priority
          style={{ objectFit: "cover", zIndex: -2 }}
        />

        {/* Dark overlay */}
        <Box
          sx={{
            position: "absolute",
            inset: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: -1,
          }}
        />

        <Navbar variant="dark" />

        {/* Hero content */}
        <Container sx={{ py: 8 }}>
          <Box sx={{ display: "grid", gap: 4, gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(4, 1fr)" }, justifyContent: "flex-start" }}>
            <PromoSlider />
          </Box>
        </Container>
      </Box>

      {/* ─── Feature Highlights ───────────────────────────────────── */}
      <Box bgcolor={Colors.gray}>
        <Container component="section" sx={{ py: 10 }}>
          <FeatureHighlights />
        </Container>
      </Box>

      {/* ─── Featured Services ────────────────────────────────────── */}
      <Box bgcolor={Colors.gray}>
        <Container
          component="section"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 6,
            paddingBottom: 16,
          }}
        >
          <Box>
            <Typography variant="h2">
              <b>FEATURED</b> SERVICES
            </Typography>

            <Divider sx={{ mt: 0.25 }} />
          </Box>

          <FeaturedServices />
        </Container>
      </Box>

      {/* ─── About + Map ──────────────────────────────────────────── */}
      <Box bgcolor={Colors.gray}>
        <Container
          component="section"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)" },
            gap: 4,
            paddingBottom: 16,
          }}
        >
          <Paper
            sx={{
              padding: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
              height: "100%"
            }}
          >
            <Box>
              <Typography variant="h2">
                <b>BEACON</b> AUTO CARE
              </Typography>

              <Divider sx={{ mt: 0.25 }} />
            </Box>

            <Typography>
              Beacon Auto Care provides top-quality car maintenance and tire services while maintaining
              integrity, reliability and affordability.<br /><br />
              We aim to be the go-to destination for all automotive needs, building long-lasting
              relationships through exceptional service and attention to detail, by investing in latest technology, equipment and training.

            </Typography>
          </Paper>

          <Paper
            sx={{
              padding: 2,
              display: "flex",
              flexDirection: "column",
              gap: 2,
            }}
          >
            <Box>
              <Typography variant="h2">
                <b>VISIT</b> US
              </Typography>

              <Divider sx={{ mt: 0.25 }} />
            </Box>

            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.5472540468363!2d-80.33973092361089!3d25.785513807619004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b913ec4adab7%3A0x9c249c985ea91a7e!2sBeacon%20Auto%20Care!5e0!3m2!1sen!2sbo!4v1772642008517!5m2!1sen!2sbo"
              sx={{ border: 0, display: "block", width: "100%", flexGrow: 1, minHeight: 320 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </Paper>
        </Container>
      </Box>
    </>
  )
}
