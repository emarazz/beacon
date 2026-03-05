"use client"

import { useState, useEffect } from "react"
import { Box, Button, Container, Link, Typography } from "@mui/material"
import NextLink from "next/link"
import { Colors } from "@/ui/colors"

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!localStorage.getItem("cookieConsent")) setVisible(true)

    function onShowBanner() {
      localStorage.removeItem("cookieConsent")
      setVisible(true)
    }
    window.addEventListener("show-cookie-banner", onShowBanner)
    return () => window.removeEventListener("show-cookie-banner", onShowBanner)
  }, [])

  function handleAccept() {
    localStorage.setItem("cookieConsent", "accepted")
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ; (window as any).gtag?.("consent", "update", { analytics_storage: "granted" })
    setVisible(false)
  }

  function handleDecline() {
    localStorage.setItem("cookieConsent", "declined")
    setVisible(false)
  }

  if (!visible) return null

  return (
    <Box
      sx={{
        position: "sticky",
        bottom: 0,
        backgroundColor: Colors.blue,
        color: Colors.white,
        zIndex: 9999,
        py: 2,
      }}
    >
      <Container
        sx={{
          display: "flex",
          alignItems: { xs: "flex-start", sm: "center" },
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
          justifyContent: "space-between",
        }}
      >
        <Typography variant="body2">
          We use cookies to collect anonymized usage data. See our{" "}
          <Link component={NextLink} href="/privacy-policy" sx={{ color: Colors.yellow }}>
            Privacy Policy
          </Link>{" "}
          for details.
        </Typography>

        <Box sx={{ display: "flex", gap: 1, flexShrink: 0 }}>
          <Button
            variant="outlined"
            size="small"
            onClick={handleDecline}
            sx={{
              color: Colors.white,
              borderColor: Colors.white,
              "&:hover": { borderColor: Colors.yellow, color: Colors.yellow },
            }}
          >
            Decline
          </Button>
          <Button
            variant="contained"
            size="small"
            onClick={handleAccept}
            color="secondary"
            sx={{ color: Colors.black }}
          >
            Accept
          </Button>
        </Box>
      </Container>
    </Box>
  )
}
