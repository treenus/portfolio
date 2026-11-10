import { Geist, Geist_Mono } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import DotField from "@/components/DotField"
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", geist.variable)}
    >
      <body className="relative min-h-svh">
        <div className="fixed inset-0">
          <DotField
            style={{ width: "100%", height: "100%" }}
            gradientFrom="#5227FF"
            gradientTo="#FF9FFC"
            dotRadius={1.5}
            dotSpacing={14}
            cursorRadius={240}
            bulgeStrength={0.6}
            glowRadius={160}
            pattern="grid"
            glowColor="#ffffff"
            gradientAngle={135}
            twist={0}
            glowIntensity={0.8}
            baseOpacity={0.55}
            waveAmplitude={4}
            speed={1}
            sparkle={false}
            interactive
            holdToZoom
            intro
            lightMode={false}
          />
        </div>
        <ThemeProvider>
          <div className="relative z-10">{children}</div>
        </ThemeProvider>
      </body>
    </html>
  )
}
