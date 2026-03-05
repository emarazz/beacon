"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import { SxProps, Theme } from "@mui/material"
import { Box } from "@mui/material"

export type AnimateVariant = "fadeUp" | "fadeIn" | "slideLeft" | "slideRight" | "grow"

const itemVariants: Record<AnimateVariant, { hidden: object; visible: object }> = {
  fadeUp:     { hidden: { opacity: 0, y: 36 },        visible: { opacity: 1, y: 0 } },
  fadeIn:     { hidden: { opacity: 0 },               visible: { opacity: 1 } },
  slideLeft:  { hidden: { opacity: 0, x: -48 },       visible: { opacity: 1, x: 0 } },
  slideRight: { hidden: { opacity: 0, x: 48 },        visible: { opacity: 1, x: 0 } },
  grow:       { hidden: { opacity: 0, scale: 0.92 },  visible: { opacity: 1, scale: 1 } },
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

// ─── Single element ───────────────────────────────────────────────────────────
interface AnimateInProps {
  children: ReactNode
  variant?: AnimateVariant
  delay?: number
  duration?: number
}

export function AnimateIn({ children, variant = "fadeUp", delay = 0, duration = 0.5 }: AnimateInProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={itemVariants[variant]}
      transition={{ duration, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  )
}

// ─── Stagger container (replaces a grid/flex Box) ────────────────────────────
const MotionBox = motion(Box)

interface AnimateInGroupProps {
  children: ReactNode
  sx?: SxProps<Theme>
}

export function AnimateInGroup({ children, sx }: AnimateInGroupProps) {
  return (
    <MotionBox
      sx={sx}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionBox>
  )
}

// ─── Item inside a stagger group ─────────────────────────────────────────────
interface AnimateInItemProps {
  children: ReactNode
  variant?: AnimateVariant
  duration?: number
}

export function AnimateInItem({ children, variant = "fadeUp", duration = 0.5 }: AnimateInItemProps) {
  return (
    <motion.div
      variants={itemVariants[variant]}
      transition={{ duration, ease: "easeOut" }}
      style={{ minWidth: 0 }}
    >
      {children}
    </motion.div>
  )
}
