"use client"

import GlassSurface from "@/components/GlassSurface"

/**
 * Footer pinned to the bottom-left corner. Uses the same GlassSurface settings
 * as the navbar (refractive, not the frosted fallback) so the two bookend the
 * viewport with one visual language.
 */
export function SiteFooter() {
  return (
    <GlassSurface
      width="auto"
      height="auto"
      borderRadius={999}
      blur={14}
      opacity={0.9}
      saturation={1.5}
      backgroundOpacity={0.06}
      className="shadow-lg"
    >
      <p className="px-4 py-2 text-xs text-foreground/70">
        &copy; 2026 Burak Arslan. All rights reserved.
      </p>
    </GlassSurface>
  )
}