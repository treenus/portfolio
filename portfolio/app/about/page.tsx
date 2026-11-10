/*Created by Burak Arslan in collaboration with deepseek 4.1 Flash */
import GlassSurface from "@/components/GlassSurface"

export default function AboutPage() {
  return (
    <main className="mx-auto flex min-h-svh max-w-4xl flex-col justify-center px-6 pt-28 pb-24">
      <section aria-labelledby="about-heading">
        <h1
          id="about-heading"
          className="text-center font-heading text-4xl leading-tight font-bold tracking-tight text-balance sm:text-5xl"
        >
          About
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
          <div className="flex w-full flex-col gap-6 text-center text-base/snug text-foreground/80">
            {/* The headshot is a wide landscape crop, so it sits above the copy rather
                than competing for a column. `h-auto` keeps its ratio.

                GlassSurface's own `.glass-surface__content` already adds 0.5rem (8px) of
                padding, so the figure sits a uniform 8px inside the panel. Concentric
                radius = outer (24px) - gap (8px) = 16px. Keep these in sync if either changes. */}
            <figure className="flex flex-col items-center gap-2">
              <img
                src="/assets/headshotBA.jpg"
                alt="Profile photo of Burak Arslan"
                className="h-auto w-full rounded-[16px] object-cover"
              />
              <figcaption className="text-xs text-foreground/60">Photo of Me</figcaption>
            </figure>

            <div className="space-y-6 pb-4 text-center">
              <p>
                I&apos;m a software engineer with a few internships under my belt, and have
                experience with mobile development (e.g. Kotlin, Swift, React) as well as embedded
                systems like STM&apos;s cubeIDE and cubeMX. I&apos;ve also worked on ESP32-based
                projects focused on IoT applications, configured network cameras for livestreaming,
                and completed prototypes with functional if not aesthetically pleasing enclosures
                ready for production environments.
              </p>
              <p>
                I&apos;m most intrigued by the interaction between humans and my products; and I
                thrive in a project with a physical element that I can iteratively improve.
              </p>
              <p>In my free time, I enjoy tinkering with IoT devices and 3D printing furniture!</p>
              <p>
                My journey was first at Veolectra, where I evaluated various client prototypes,
                identifying pain points. After that, I joined Modal Motors, where I began my
                CreatBot conversion work. Then I moved on to another role in Modal Motors, working
                on the FANUC Educational Deployment in order to facilitate teach pendant-&gt;EOAT
                communication.
              </p>
            </div>
          </div>
        </GlassSurface>
      </section>
    </main>
  )
}