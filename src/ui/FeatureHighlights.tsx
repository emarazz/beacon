"use client"

import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Box, IconButton } from "@mui/material"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import Image from "next/image"

const slides = [
  { src: "/img/highlights/ase-certified-technicians-and-staff.webp", alt: "ASE certified technicians and staff" },
  { src: "/img/highlights/12-month-or-12000-miles-warranty.webp", alt: "12 month or 12000 miles warranty" },
  { src: "/img/highlights/quality-napa-autoparts.webp", alt: "Quality Napa Autoparts in our services" },
  { src: "/img/highlights/fleet-services.webp", alt: "Fleet services" },
]

// Duplicate so perView:4 always has slides to scroll into — prevents the
// "disappearing slide" glitch when slide count equals perView in loop mode.
// Need > 2×perView slides for keen-slider loop clones to work seamlessly.
// max perView = 4, so minimum is 9; tripling to 12 gives comfortable margin.
const displaySlides = [...slides, ...slides]

export default function FeatureHighlights() {
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      initial: 0,
      defaultAnimation: { duration: 1000, easing: (t) => t * (2 - t) },
      created() { setLoaded(true) },
      slides: { perView: 1, spacing: 16 },
      breakpoints: {
        "(min-width: 600px)": {
          slides: { perView: 2, spacing: 16 },
        },
        "(min-width: 900px)": {
          slides: { perView: 3, spacing: 16 },
        },
        "(min-width: 1200px)": {
          slides: { perView: 4, spacing: 16 },
        },
      },
    },
    [(slider) => {
      let timeout: ReturnType<typeof setTimeout>
      let mouseOver = false
      function clearNextTimeout() { clearTimeout(timeout) }
      function nextTimeout() {
        clearTimeout(timeout)
        if (mouseOver) return
        timeout = setTimeout(() => slider.next(), 4000)
      }
      slider.on("created", () => {
        slider.container.addEventListener("mouseover", () => { mouseOver = true; clearNextTimeout() })
        slider.container.addEventListener("mouseout", () => { mouseOver = false; nextTimeout() })
        nextTimeout()
      })
      slider.on("dragStarted", clearNextTimeout)
      slider.on("animationEnded", nextTimeout)
      slider.on("updated", nextTimeout)
    }]
  )

  return (
    <Box sx={{ position: "relative" }}>
      <Box ref={sliderRef} className="keen-slider" sx={{ overflow: "hidden" }}>
        {displaySlides.map((slide, i) => (
          <Box key={i} className="keen-slider__slide" sx={{ position: "relative", aspectRatio: "0.793" }}>
            <Image src={slide.src} alt={slide.alt} fill style={{ objectFit: "cover" }} />
          </Box>
        ))}
      </Box>
      {loaded && instanceRef.current && (
        <>
          <IconButton
            onClick={() => instanceRef.current?.prev()}
            size="small"
            sx={{
              position: "absolute", left: 4, top: "50%", transform: "translateY(-50%)",
              color: "white", zIndex: 1,
              // backgroundColor: "rgba(0,0,0,0.3)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
            }}
          >
            <ChevronLeft />
          </IconButton>
          <IconButton
            onClick={() => instanceRef.current?.next()}
            size="small"
            sx={{
              position: "absolute", right: 4, top: "50%", transform: "translateY(-50%)",
              color: "white", zIndex: 1,
              //  backgroundColor: "rgba(0,0,0,0.3)",
              "&:hover": { backgroundColor: "rgba(0,0,0,0.6)" },
            }}
          >
            <ChevronRight />
          </IconButton>
        </>
      )}
    </Box>
  )
}
