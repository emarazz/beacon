import { Box, Container, Divider, Typography } from "@mui/material"
import Image from "next/image"
import PromoSlider from "@/ui/PromoSlider"
import Navbar from "@/ui/Navbar"
import FeaturedServices from "@/ui/FeaturedServices"

export default function HomePage() {
  return (
    <>

      {/* ─── Hero ─────────────────────────────────────────────────── */}
      <Box
        sx={{
          position: "relative",
          // height: "600px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Background image */}
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
            backgroundColor: "rgba(0,0,0,0.55)",
            zIndex: -1,
          }}
        />

        <Navbar variant="dark" />

        {/* Hero content */}
        <Container sx={{ py: 8 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <PromoSlider />
          </Box>
        </Container>
      </Box>

      {/* ─── Feature Highlights ───────────────────────────────────── */}
      <Box component="section">
        <Container>
          {/* 4 image tiles */}
        </Container>
      </Box>

      {/* ─── Featured Services ────────────────────────────────────── */}
      <Box component="section">
        <Container>
          <Typography variant="h2">
            <b>FEATURED</b> SERVICES
          </Typography>

          <Divider />

          <FeaturedServices />

        </Container>
      </Box>

      {/* ─── About + Map ──────────────────────────────────────────── */}
      <Box component="section">
        <Container>
          {/* 2 column: about text + Google Maps embed */}
        </Container>
      </Box>

    </>
  )
}
