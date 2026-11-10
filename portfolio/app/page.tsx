import Link from "next/link"

import GlassSurface from "@/components/GlassSurface"

export default function Page() {
  return (
    <main className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 pt-28 pb-24">
      <section aria-labelledby="home-heading">
        <h1
          id="home-heading"
          className="text-center font-heading text-4xl leading-tight font-bold tracking-tight text-balance sm:text-5xl"
        >
          Welcome to Portfolio 2.0!
        </h1>

        {/* `refraction={false}` switches GlassSurface to its frosted backing so the
            dot field cannot compete with the body copy for legibility. */}
        <GlassSurface
          width="100%"
          height="auto"
          borderRadius={24}
          refraction={false}
          backgroundOpacity={0.9}
          saturation={1.2}
          className="mt-8"
        >
          <div className="space-y-6 px-6 py-8 text-center text-base/snug text-foreground/80">
            <p>Somewhat accomplished SWE with a passion for creating innovative solutions.</p>
            <p>Explore my projects, learn about my journey, and feel free to reach out!</p>
            <p>
              I&apos;m most interested in small form-factor products and embedded systems, often
              utilizing 3D printing and IoT technologies to bring ideas to reality.
            </p>
            <p>
              Check out my{" "}
              <Link
                href="/projects"
                className="font-medium text-foreground underline decoration-from-font underline-offset-4 transition-opacity hover:opacity-70"
              >
                projects
              </Link>{" "}
              for some pretty pictures!
            </p>
          </div>
        </GlassSurface>
      </section>
    </main>
  )
}