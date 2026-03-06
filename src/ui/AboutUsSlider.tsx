"use client"

import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Box, IconButton } from "@mui/material"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import Image from "next/image"

const slides = [
  { src: "/img/beacon-staff.webp", alt: "Beacon Auto Care shop" },
  { src: "/img/beacon-sunset-01.webp", alt: "Beacon Auto Care team" },
]

export default function AboutUsSlider() {
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      initial: 0,
      defaultAnimation: { duration: 1000, easing: (t) => t * (2 - t) },
      created() { setLoaded(true) },
      slides: { perView: 1 },
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
    <Box sx={{ position: "relative", minWidth: 0, width: "100%" }}>
      <Box ref={sliderRef} className="keen-slider" sx={{ overflow: "hidden" }}>
        {slides.map((slide, i) => (
          <Box key={i} className="keen-slider__slide" sx={{ position: "relative", paddingTop: "75%", minHeight: "320px" }}>
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
