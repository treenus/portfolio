"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import GlassSurface from "@/components/GlassSurface"
import { ThemeToggle } from "@/components/theme-toggle"

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const

export function SiteNav() {
  const pathname = usePathname()

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
      <nav aria-label="Main navigation" className="flex items-center gap-1 px-1.5 py-0.5">
        <ul className="flex items-center gap-0.5">
          {LINKS.map(({ href, label }) => {
            const active = pathname === href

            return (
              <li key={href}>
                <Link
                  href={href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "inline-flex items-center rounded-full px-3.5 py-2 text-sm transition-colors",
                    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:outline-none",
                    active
                      ? "bg-foreground/10 font-medium text-foreground"
                      : "text-foreground/70 hover:bg-foreground/5 hover:text-foreground",
                  ].join(" ")}
                >
                  {label}
                </Link>
              </li>
            )
          })}
        </ul>

        <span aria-hidden="true" className="mx-1 h-5 w-px bg-foreground/15" />

        <ThemeToggle />
      </nav>
    </GlassSurface>
  )
}