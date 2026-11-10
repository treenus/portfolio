import { Geist, Geist_Mono, Playfair_Display } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { SiteBackground } from "@/components/site-background"
import { SiteFooter } from "@/components/site-footer"
import { SiteNav } from "@/components/site-nav"
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})

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
      className={cn(
        "antialiased",
        fontMono.variable,
        "font-sans",
        geist.variable,
        playfair.variable
      )}
    >
      <body className="relative min-h-svh">
        <SiteBackground />
        <ThemeProvider>
          <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
            <SiteNav />
          </header>
          <div className="relative z-10">{children}</div>
          <div className="fixed bottom-4 left-4 z-50">
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
