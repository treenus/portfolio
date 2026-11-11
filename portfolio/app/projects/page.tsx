import AccordionGallery from "@/components/AccordionGallery"
import GlassSurface from "@/components/GlassSurface"

type Media = {
  image: string
  label: string
  /** Optional: 'video' is inferred from the file extension when omitted. */
  type?: "image" | "video"
  poster?: string
}

type Project = {
  title: string
  company: string
  year: string
  yearISO: string
  description: string
  photosLabel: string
  /**
   * Order here is the order shown in the accordion, left to right.
   * The first entry is the one expanded on load (see `defaultIndex` below).
   */
  photos: Media[]
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
      { image: "/assets/movement/IMG_2653.jpg", label: "Proof of Concept" },
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
    photosLabel: "Development Scrapbook:",
    photos: [
      { image: "/assets/movement/bot-photos/IMG_1880_2.jpg", label: "Factory Mainboard" },
      { image: "/assets/IMG_2567.jpg", label: "New Mainboard" },
      { image: "/assets/movement/bot-photos/IMG_2350.jpg", label: "New Toolhead Wiring" },
      { image: "/assets/movement/bot-photos/IMG_1988.jpg", label: "First Boot!" },
      { image: "/assets/movement/bot-photos/IMG_2365.jpg", label: "Initial Fan Duct Design" },
      { image: "/assets/movement/bot-photos/IMG_2378.jpg", label: "Section of Duct ~10" },
      { image: "/assets/movement/bot-photos/IMG_2464.jpg", label: "Near-Final Model" },
      { image: "/assets/IMG_2491.jpg", label: "Fan Duct Iterations" },
      { image: "/assets/IMG_2597.jpg", label: "Leveling with software (Revolutionary)" },
      { image: "/assets/IMG_2673.jpg", label: "Printing" },
      { image: "/assets/IMG_2670.jpg", label: "Better view of buildplate" },
      { image: "/assets/IMG_2690.jpg", label: "First Successful Print" },
      { image: "/assets/IMG_2671.mp4", label: "Printing in Motion", type: "video" },
    ],
  },
  {
    title: "FANUC SR3iA Custom EOAT Controller",
    company: "Modal Motors",
    year: "2026",
    yearISO: "2026",
    description: "I was enlisted to assist in the development of a 'bridge controller' to enable our robot to perform pick-and-place tasks. I designed and implemented a STM32-based controller to interface with the robot and the EOAT's motor, enabling much faster cycling and precise control than the previous solution.",
    photosLabel: "Miscellaenous photos of the controller and its components",
    photos: [
      { image: "/assets/movement/st-photos/IMG_2552.jpg", label: "STM dev board" },
      { image: "/assets/movement/st-photos/IMG_2611.jpg", label: "Stepper Driver" },
      { image: "/assets/movement/st-photos/IMG_2612.jpg", label: "Diagram of STM32 interaction" },
      { image: "/assets/movement/st-photos/IMG_2625.jpg", label: "Alpha EOAT" },
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
                  grayscale
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