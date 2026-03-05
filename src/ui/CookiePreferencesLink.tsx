"use client"

import { Link } from "@mui/material"
import { Colors } from "@/ui/colors"

export default function CookiePreferencesLink() {
  function handleClick() {
    window.dispatchEvent(new Event("show-cookie-banner"))
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })
  }

  return (
    <Link
      onClick={handleClick}
      sx={{ color: Colors.white, typography: "body2", "&:hover": { color: Colors.yellow } }}
    >
      Cookie Preferences
    </Link>
  )
}
