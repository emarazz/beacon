"use client"

import { useState } from "react"
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { Box, IconButton } from "@mui/material"
import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import NextLink from "next/link"
import Image from "next/image"

const slides = [
  { src: "/img/deals/deal1.webp", alt: "Special Deal 1" },
  { src: "/img/deals/deal2.webp", alt: "Special Deal 2" },
  { src: "/img/deals/deal3.webp", alt: "Special Deal 3" },
  { src: "/img/deals/deal4.webp", alt: "Special Deal 4" },
]

export default function PromoSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      initial: 0,
      defaultAnimation: { duration: 1000, easing: (t) => t * (2 - t) },
      animationEnded(slider) {
        setCurrentSlide(slider.track.details.rel)
      },
      created() {
        setLoaded(true)
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>
        let mouseOver = false

        function clearNextTimeout() {
          clearTimeout(timeout)
        }
        function nextTimeout() {
          clearTimeout(timeout)
          if (mouseOver) return
          timeout = setTimeout(() => slider.next(), 4000)
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true
            clearNextTimeout()
          })
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false
            nextTimeout()
          })
          nextTimeout()
        })
        slider.on("dragStarted", clearNextTimeout)
        slider.on("animationEnded", nextTimeout)
        slider.on("updated", nextTimeout)
      },
    ]
  )

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 1, width: "100%", minWidth: 0, overflow: "hidden" }}>

      {/* Slider + Arrows */}
      <NextLink href="/services#specials" style={{ textDecoration: "none", display: "block" }}>
        <Box sx={{ position: "relative" }} >

          <Box ref={sliderRef} className="keen-slider" sx={{ overflow: "hidden" }}>
            {slides.map((slide, i) => (
              <Box
                key={i}
                className="keen-slider__slide"
                sx={{ position: "relative", aspectRatio: "9/16" }}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  style={{ objectFit: "contain" }}
                />
              </Box>
            ))}
          </Box>

          {/* Arrows */}
          {loaded && instanceRef.current && (
            <>
              <IconButton
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); instanceRef.current?.prev() }}
                size="small"
                sx={{
                  position: "absolute",
                  left: 4,
                  top: "55%",
                  transform: "translateY(-50%)",
                  color: "white",
                  zIndex: 1,
                  "&:hover": { backgroundColor: "rgba(0,0,0,0.3)" },
                }}
              >
                <ChevronLeft />
              </IconButton>

              <IconButton
                onClick={(e) => { e.preventDefault(); e.stopPropagation(); instanceRef.current?.next() }}
                size="small"
                sx={{
                  position: "absolute",
                  right: 4,
                  top: "55%",
                  transform: "translateY(-50%)",
                  color: "white",
                  zIndex: 1,
                  "&:hover": { backgroundColor: "rgba(0,0,0,0.3)" },
                }}
              >
                <ChevronRight />
              </IconButton>
            </>
          )}

        </Box>
      </NextLink>

      {/* Dots */}
      {loaded && instanceRef.current && (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
          {slides.map((_, idx) => (
            <Box
              key={idx}
              onClick={() => { setCurrentSlide(idx); instanceRef.current?.moveToIdx(idx) }}
              sx={{
                width: 8,
                height: 8,
                borderRadius: "50%",
                backgroundColor: idx === currentSlide ? "secondary.main" : "rgba(255,255,255,0.5)",
                cursor: "pointer",
                transition: "background-color 0.3s",
              }}
            />
          ))}
        </Box>
      )}

    </Box>
  )
}
