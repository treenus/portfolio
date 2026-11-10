import AccordionGallery from "@/components/AccordionGallery"
import GlassSurface from "@/components/GlassSurface"

type Project = {
  title: string
  company: string
  year: string
  yearISO: string
  description: string
  photosLabel: string
  photos: { image: string; label: string }[]
}

const PROJECTS: Project[] = [
  {
    title: "Check-in App",
    company: "Modal Motors",
    year: "2026",
    yearISO: "2026",
    description:
      "When I started at Modal, we had a paper sheet that had to be replaced daily, and our Chief of Staff Jen mentioned that it would be nice to have something more modern as an e-motor company; this is the result!",
    photosLabel: "Before/After",
    photos: [
      { image: "/assets/IMG_2592.jpg", label: "Check-in Paper Sheet" },
      { image: "/assets/IMG_2689.jpg", label: "Check-in App Homepage" },
    ],
  },
  {
    title: "D600 Pro -> Duet6XD + 2x 1LC Conversion",
    company: "Modal Motors",
    year: "2025-26",
    yearISO: "2025-26",
    description:
      "During my first stint at Modal, I spent some time using this machine, and found it had numerous shortcomings. I then formulated a plan to revitalize the machine with a modern controller and presented it to my leadership. This is the result!",
    photosLabel: "Some Pictures",
    photos: [
      { image: "/assets/IMG_2673.jpg", label: "Printing in Action!" },
      { image: "/assets/IMG_2670.jpg", label: "Better view of buildplate" },
      { image: "/assets/IMG_2567.jpg", label: "View of new motherboard" },
      { image: "/assets/IMG_2597.jpg", label: "Leveling with software (Revolutionary)" },
      { image: "/assets/IMG_2491.jpg", label: "Fan Duct Iterations" },
      { image: "/assets/IMG_2690.jpg", label: "First Successful Print" },
    ],
  },
]

export default function ProjectsPage() {
  return (
    <main className="mx-auto flex min-h-svh max-w-4xl flex-col px-6 pt-28 pb-24">
      <h1
        id="projects-heading"
        className="text-center font-heading text-4xl leading-tight font-bold tracking-tight text-balance sm:text-5xl"
      >
        Projects Showcase
      </h1>

      <div className="mt-8 flex flex-col gap-8">
        {PROJECTS.map(project => (
          <GlassSurface
            key={project.title}
            width="100%"
            height="auto"
            borderRadius={24}
            refraction={false}
            backgroundOpacity={0.9}
            saturation={1.2}
          >
            <article className="w-full p-6 text-center text-base/snug text-foreground/80">
              <header className="space-y-1">
                <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground">
                  {project.title}
                </h2>
                <p className="text-sm text-foreground/70">At: {project.company}</p>
                <p className="text-xs text-foreground/50">
                  Year: <time dateTime={project.yearISO}>{project.year}</time>
                </p>
              </header>

              <p className="mt-4">{project.description}</p>

              <div className="mt-6">
                <p className="mb-3 text-xs tracking-wide text-foreground/60 uppercase">
                  {project.photosLabel}
                </p>

                {/* `defaultIndex={0}`: the gallery's stock default is 2, which lands
                    mid-set and implies a random "hero" photo. */}
                <AccordionGallery
                  items={project.photos}
                  defaultIndex={0}
                  height={420}
                  radius={16}
                  gap={8}
                  expandRatio={0.55}
                  duration={0.5}
                  showLabels
                  grayscale={false}
                  accentColor="var(--color-accent, #930b24)"
                />
              </div>
            </article>
          </GlassSurface>
        ))}
      </div>
    </main>
  )
}