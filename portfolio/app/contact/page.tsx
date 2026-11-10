import GlassSurface from "@/components/GlassSurface"

export default function ContactPage() {
  return (
    <main className="mx-auto flex min-h-svh max-w-3xl flex-col justify-center px-6 pt-28 pb-24">
      <section aria-labelledby="contact-heading">
        <h1
          id="contact-heading"
          className="text-center font-heading text-4xl leading-tight font-bold tracking-tight text-balance sm:text-5xl"
        >
          Contact Me
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
            <p>Feel free to reach out to me through linkedin or email!</p>
            <p>
              Email:{" "}
              <a
                href="mailto:barslan008@gmail.com"
                className="font-medium text-foreground underline decoration-from-font underline-offset-4 transition-opacity hover:opacity-70"
              >
                barslan008@gmail.com
              </a>
            </p>
            <p>
              <a
                href="https://www.linkedin.com/in/burakarslan1/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline decoration-from-font underline-offset-4 transition-opacity hover:opacity-70"
              >
                Connect with me on LinkedIn!
              </a>
            </p>
          </div>
        </GlassSurface>
      </section>
    </main>
  )
}