"use client"

import { useTheme } from "next-themes"

import DotField from "@/components/DotField"

// Shared motion/geometry tuning. Colors are theme-dependent and set below.
const SHARED = {
  dotRadius: 1.5,
  dotSpacing: 14,
  // Lens radius: the area around the pointer that bulges. Was 240, which read as
  // oversized next to the cursor itself.
  cursorRadius: 110,
  bulgeStrength: 0.6,
  glowRadius: 160,
  pattern: "grid",
  gradientAngle: 135,
  twist: 0,
  glowIntensity: 0.8,
  baseOpacity: 0.55,
  waveAmplitude: 4,
  speed: 1,
  sparkle: false,
  interactive: true,
  holdToZoom: true,
  intro: true,
} as const

// Light-mode dot ink: --color-secondary from the legacy Wada Sanzo No. 276 palette.
const LIGHT_INK = "#f37f94"

export function SiteBackground() {
  // `resolvedTheme` is undefined during SSR and the first client render, so the
  // server and client agree (both default to the dark palette) and there is no
  // hydration mismatch.
  const { resolvedTheme } = useTheme()
  const light = resolvedTheme === "light"

  return (
    <div className="fixed inset-0" aria-hidden="true">
      <DotField
        {...SHARED}
        style={{ width: "100%", height: "100%" }}
        gradientFrom={light ? LIGHT_INK : "#5227FF"}
        gradientTo={light ? LIGHT_INK : "#FF9FFC"}
        glowColor={light ? LIGHT_INK : "#ffffff"}
        lightMode={light}
      />
    </div>
  )
}