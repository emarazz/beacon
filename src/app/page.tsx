import { Box, Container, IconButton, Link, Stack, Typography } from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import { Colors } from "@/ui/colors";
import { visuallyHidden } from "@mui/utils";


export default function Home() {
  return (

    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >

      <Image
        src="/img/beacon-sunset-01.webp"
        alt="Beacon Auto Care - NAPA AutoCare Center"
        fill
        style={{
          objectFit: "cover",
          zIndex: -2,
        }}
      />

      {/* Overlay */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(0,0,0,0.55)",
          zIndex: -1,
        }}
      />

      <Container maxWidth="sm" sx={{ display: "flex", flexDirection: "column", alignItems: "center", paddingY: 2 }}>
        <Stack alignItems="center" >
          <Image
            src="/img/beacon-napa-01.webp"
            alt="Beacon Auto Care - NAPA AutoCare Center"
            width={360}
            height={108}
            style={{
              objectFit: "contain",
            }}
          />
        </Stack>

        <Box paddingTop={4} paddingBottom={4}>
          <Box padding={2}>
            <Typography variant="h1" component="h1" align="center" sx={visuallyHidden}>
              Beacon Auto Care - NAPA AutoCare Center
            </Typography>

            <Typography sx={visuallyHidden}>
              Beacon Auto Care — NAPA AutoCare Center in Doral, FL. Expert car maintenance & tire services built on integrity, reliability & affordability. Visit us at 8701 NW 13th Terrace.
            </Typography>

            <Stack gap={2}>
              <Typography align="center" variant="subtitle1" color={Colors.white}>
                <b>We'll Be Right Back</b>
              </Typography>

              <Typography align="center" variant="subtitle1" color={Colors.white}>
                Our website is currently undergoing scheduled maintenance. We apologize for any inconvenience and appreciate your patience.<br />
                In the meantime, we're still open and ready to serve you!<br />
              </Typography>
            </Stack>

            <br />

            <Stack justifyContent="center">
              <Typography component='span' variant="subtitle1" align="center" color={Colors.white}>
                <Stack gap={1}>
                  <Box>
                    <b>Hours</b><br />
                    Mon – Fri: 7:00 AM – 6:00 PM<br />
                  </Box>

                  <Box>
                    <b>Call Us</b><br />
                    <Link color={Colors.white} component={NextLink} href={"tel:+13054718400"} target="_blank" rel="noopener">(305) 471-8400</Link><br />
                  </Box>

                  <Box>
                    <b>Visit Us</b><br />
                    <Link color={Colors.white} component={NextLink} href={"https://goo.gl/maps/6tNDNvLRrgVAR2z27"} target="_blank" rel="noopener">8701 NW 13th Terrace<br />Doral, FL 33172</Link><br />
                  </Box>
                </Stack>
              </Typography>
            </Stack>

            <br />

            <Typography color={Colors.white} variant="subtitle1">
              Copyright © 2026 Beacon Auto Care by AUTOBO LLC
            </Typography>
          </Box>
        </Box>

      </Container >
    </Box >
  );
}
