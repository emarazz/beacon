"use client"

import { useState } from "react"
import { usePathname } from "next/navigation"
import {
  Box,
  Container,
  Typography,
  IconButton,
  Collapse,
  Link,
  Divider,
  ButtonGroup,
  Button,
} from "@mui/material"
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Phone as PhoneIcon,
  LocationOn as LocationOnIcon,
  AccessTime as AccessTimeIcon,
} from "@mui/icons-material"
import Image from "next/image"
import NextLink from "next/link"
import { Colors } from "@/ui/colors"

type NavbarVariant = "dark" | "white"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about-us" },
  { label: "Find Us", href: "/find-us" },
]

export default function Navbar({ variant = "white" }: { variant?: NavbarVariant }) {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const pathname = usePathname()
  const isDark = variant === "dark"

  const bg = isDark ? "transparent" : Colors.white
  const textColor = isDark ? Colors.white : Colors.black
  const iconColor = Colors.yellow
  const dividerColor = Colors.darkGray

  return (
    <Box
      component="header"
      sx={{
        backgroundColor: bg,
      }}
    >
      {/* Top bar */}
      <Container>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", md: "1fr 1fr 1fr" },
            alignItems: "center",
            paddingY: 4,
            gap: { xs: 4, md: 1 },
          }}
        >

          {/* Logo */}
          <Box display="flex" justifyContent={{ xs: "center", sm: "flex-start" }}>
            <NextLink href="/">
              <Image
                src={isDark ? "/img/beacon-napa-01.webp" : "/img/beacon-napa-02.webp"}
                alt="Beacon Auto Care - NAPA AutoCare Center"
                width={250}
                height={75}
                style={{ objectFit: "contain", display: "block" }}
              />
            </NextLink>
          </Box>

          <Box
            gridColumn={{ xs: "span 1", md: "span 2" }}
            display={{ xs: "flex", md: "grid" }}
            flexDirection="column"
            alignItems="flex-start"
            width={{ xs: 'fit-content', md: '100%' }}
            justifySelf={{ xs: "center", sm: "flex-end", md: "center" }}
            gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
            gap={1}
          >
            {/* Hours */}
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: { xs: "flex-start", md: "center" }, gap: 1 }}>
              <AccessTimeIcon sx={{ color: iconColor }} />
              <Typography variant="body1" color={textColor}>
                Mon – Fri: 7:00 AM – 6:00 PM
              </Typography>
            </Box>

            {/* Phone + Address */}
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "flex-start", md: "flex-end" },
              }}
            >
              <Box display="flex" flexDirection="column" gap={1}>
                <Box sx={{ display: "grid", gridTemplateColumns: "auto auto", justifyContent: "flex-start", gap: 1 }}>
                  <PhoneIcon sx={{ color: iconColor }} />
                  <Typography variant="body1" color={textColor}>
                    Call Us:{" "}
                    <Link
                      component={NextLink}
                      href="tel:+13054718400"
                      sx={{ color: textColor }}
                    >
                      (305) 471-8400
                    </Link>
                  </Typography>
                </Box>

                <Box sx={{ display: "grid", gridTemplateColumns: "auto auto auto", alignItems: "flex-start", gap: 1 }}>
                  <LocationOnIcon sx={{ color: iconColor }} />
                  <Typography variant="body1" color={textColor}>Visit Us:</Typography>
                  <Link
                    component={NextLink}
                    href="https://goo.gl/maps/6tNDNvLRrgVAR2z27"
                    target="_blank"
                    rel="noopener"
                    sx={{ color: textColor }}
                  >
                    <Typography variant="body1">8701 NW 13th Terrace</Typography>
                    <Typography variant="body1">Doral, FL 33172</Typography>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>

      <Divider sx={{ borderColor: dividerColor }} />

      {/* Main nav */}
      <Container >

        {/* Desktop */}
        <Box
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            justifyContent: "flex-end",
          }}
        >

          {/* Nav links */}
          <ButtonGroup
            variant="text"
            sx={{
              "& .MuiButtonGroup-grouped:not(:last-of-type)": {
                borderColor: isDark ? "rgba(255,255,255,0.3)" : "rgba(0,0,0,0.2)",
              },
            }}
          >
            {navLinks.map((link) => {
              const isSelected = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
              return (
                <Button
                  key={link.href}
                  component={NextLink}
                  href={link.href}
                  sx={{
                    width: 128,
                    color: isSelected ? Colors.black : textColor,
                    backgroundColor: isSelected ? Colors.yellow : "transparent",
                    borderRadius: 0,
                    "&:hover": {
                      backgroundColor: Colors.black,
                      color: Colors.white,
                    },
                  }}
                >
                  {link.label}
                </Button>
              )
            })}
          </ButtonGroup>
        </Box>

        {/* Mobile */}
        <Box sx={{ display: { xs: "flex", sm: "none" }, flexDirection: "column", gap: 2 }}>

          {/* Hamburger */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "auto",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <IconButton onClick={() => setDrawerOpen((prev) => !prev)} sx={{ color: iconColor }}>
              {drawerOpen ? <CloseIcon /> : <MenuIcon />}
            </IconButton>
          </Box>

        </Box>
      </Container>

      <Divider sx={{ borderColor: dividerColor }} />

      {/* Mobile collapse menu */}
      <Collapse in={drawerOpen}>
        <Box sx={{ backgroundColor: isDark ? "rgba(0,0,0,0.92)" : Colors.white }}>
          <Container>
            <Box sx={{ display: "flex", flexDirection: "column", paddingY: 1 }}>
              {navLinks.map((link) => {
                const isSelected = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
                return (
                  <Button
                    key={link.href}
                    component={NextLink}
                    href={link.href}
                    fullWidth
                    onClick={() => setDrawerOpen(false)}
                    sx={{
                      justifyContent: "flex-start",
                      color: isSelected ? Colors.black : (isDark ? Colors.white : Colors.black),
                      backgroundColor: isSelected ? Colors.yellow : "transparent",
                      borderRadius: 0,
                      fontWeight: 600,
                      paddingX: 2,
                      paddingY: 1.5,
                      "&:hover": {
                        backgroundColor: Colors.black,
                        color: Colors.white,
                      },
                    }}
                  >
                    {link.label}
                  </Button>
                )
              })}
            </Box>
          </Container>
        </Box>
      </Collapse>

    </Box>
  )
}
