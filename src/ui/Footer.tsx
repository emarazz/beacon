import { Box, Container, Divider, Link, Typography } from "@mui/material"
import {
  AccessTime as AccessTimeIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
  Email as EmailIcon,
} from "@mui/icons-material"
import Image from "next/image"
import NextLink from "next/link"
import { Colors } from "@/ui/colors"
import CookiePreferencesLink from "@/ui/CookiePreferencesLink"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about-us" },
  { label: "Find Us", href: "/find-us" },
]

export default function Footer() {
  return (
    <Box component="footer" sx={{ backgroundColor: Colors.black, color: Colors.white }}>
      <Container sx={{ display: "flex", flexDirection: "column", gap: 8, paddingTop: 8, paddingBottom: 1 }}>
        {/* Main footer grid */}
        <Box sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr 1fr" },
          gap: 4,

        }}>

          {/* Logo */}
          <Box display="flex" justifyContent={{ xs: "center", sm: "flex-start" }}>
            <NextLink href="/">
              <Image
                src="/img/beacon-napa-01.webp"
                alt="Beacon Auto Care - NAPA AutoCare Center"
                width={220}
                height={66}
                style={{ objectFit: "contain", display: "block" }}
              />
            </NextLink>
          </Box>

          {/* Contact info */}
          <Box
            justifySelf={"center"}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              // alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <AccessTimeIcon sx={{ color: Colors.yellow, }} />
              <Typography variant="body1">Mon – Fri: 7:00 AM – 6:00 PM</Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <PhoneIcon sx={{ color: Colors.yellow, }} />
              <Link component={NextLink} href="tel:+13054718400" sx={{ color: Colors.white, typography: "body1" }}>
                (305) 471-8400
              </Link>
            </Box>
            <Box sx={{ display: "flex", alignItems: "flex-start", gap: 1 }}>
              <LocationOnIcon sx={{ color: Colors.yellow }} />
              <Link
                component={NextLink}
                href="https://goo.gl/maps/6tNDNvLRrgVAR2z27"
                target="_blank"
                rel="noopener"
                sx={{ color: Colors.white }}
              >
                <Typography variant="body1">8701 NW 13th Terrace</Typography>
                <Typography variant="body1">Doral, FL 33172</Typography>
              </Link>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <EmailIcon sx={{ color: Colors.yellow, }} />
              <Link component={NextLink} href="mailto:service@beaconauto.net" sx={{ color: Colors.white, typography: "body1" }}>
                service@beaconauto.net
              </Link>
            </Box>
          </Box>

          {/* Nav links */}
          <Box
            justifySelf={{ xs: "center", sm: "flex-end" }}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 1,
              alignItems: { xs: "center", md: "flex-start" },
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                component={NextLink}
                href={link.href}
                sx={{
                  color: Colors.white,
                  typography: "button",
                  "&:hover": { color: Colors.yellow },
                }}
              >
                {link.label.toUpperCase()}
              </Link>
            ))}
          </Box>
        </Box>

        {/* Copyright bar */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 1 }}>
          <Typography variant="body2">
            Copyright © {new Date().getFullYear()} Beacon Auto Care by AUTOBO LLC
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Link
              component={NextLink}
              href="/privacy-policy"
              sx={{ color: Colors.white, typography: "body2", "&:hover": { color: Colors.yellow } }}
            >
              Privacy Policy
            </Link>
            <CookiePreferencesLink />
          </Box>
        </Box>
      </Container>
    </Box >
  )
}
