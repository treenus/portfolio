import Link from "next/link"

import GlassSurface from "@/components/GlassSurface"

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 pt-28 pb-24">
      <section aria-labelledby="notfound-heading">
        <h1
          id="notfound-heading"
          className="text-center font-heading text-4xl leading-tight font-bold tracking-tight text-balance sm:text-5xl"
        >
          Page Not Found
        </h1>

        <GlassSurface
          width="100%"
          height="auto"
          borderRadius={24}
          refraction={false}
          backgroundOpacity={0.9}
          saturation={1.2}
          className="mt-8"
        >
          <div className="space-y-6 p-6 text-center text-base/snug text-foreground/80">
            <p
              aria-hidden="true"
              className="font-heading text-6xl font-bold tracking-tight text-foreground/25"
            >
              404
            </p>
            <p>Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
            <p>You may have mistyped the URL, or the page has been moved by the Beast.</p>
            <p>
              <Link
                href="/"
                className="font-medium text-foreground underline decoration-from-font underline-offset-4 transition-opacity hover:opacity-70"
              >
                Go back to the homepage?
              </Link>
            </p>
          </div>
        </GlassSurface>
      </section>
    </main>
  )
}