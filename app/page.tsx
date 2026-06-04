import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import HeroAnimations from "@/components/animations/hero-animations";
import ScrollReveal from "@/components/animations/scroll-reveal";
import Counter from "@/components/animations/counter";
import Parallax from "@/components/animations/parallax";
import SectionHeading from "@/components/shared/section-heading";
import {
  ArrowRight,
  Globe2,
  LifeBuoy,
  Menu,
  Orbit,
  Waves,
} from "lucide-react";

const species = [
  {
    name: "Bottlenose Dolphin",
    description: "Iconic coastal species known for curiosity and intelligence.",
    region: "Atlantic, Pacific",
    lifespan: "40-50 years",
    image: "/images/dol1.png",
  },
  {
    name: "Spinner Dolphin",
    description: "Acrobatic swimmers celebrated for spiral leaps above waves.",
    region: "Tropical Oceans",
    lifespan: "20-30 years",
    image: "/images/dol3.png",
  },
  {
    name: "Common Dolphin",
    description: "Fast-moving pods that thrive in open ocean conditions.",
    region: "Temperate Waters",
    lifespan: "20-25 years",
    image: "/images/dol3.jpg",
  },
  {
    name: "Orca",
    description: "Powerful apex predators with complex family structures.",
    region: "Worldwide",
    lifespan: "50-90 years",
    image: "/images/dol1.png",
  },
];

const communicationCards = [
  {
    title: "Echolocation",
    detail: "Precision sonar reveals prey, depth, and marine terrain.",
  },
  {
    title: "Click Sounds",
    detail: "Short bursts create a navigational map of the water column.",
  },
  {
    title: "Whistles",
    detail: "Signature whistles act like names within dolphin communities.",
  },
  {
    title: "Group Coordination",
    detail: "Hunting strategies are shared through synchronized movements.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col bg-[#0B1220] text-[var(--ocean-text)]">
      <HeroAnimations />
      <Parallax selector=".hero-bg" strength={60} />
      <Parallax selector=".parallax-soft" strength={30} />

      <main className="flex flex-col">
        <section id="top" className="relative min-h-screen overflow-hidden">
          <div className="fixed left-0 top-0 z-30 w-full" role="navigation" aria-label="Primary">
            <div className="absolute inset-0 bg-[#0B1220]/70 backdrop-blur-md" />
            <div className="absolute inset-x-0 bottom-0 h-px bg-white/10" />
            <div className="relative mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-5">
              <a
                href="#top"
                className="text-sm uppercase tracking-[0.3em] text-white/70 hover:text-white"
              >
                Dolphin Explorer
              </a>
              <NavigationMenu className="flex-1 justify-center">
                <NavigationMenuList className="hidden items-center gap-6 md:flex">
                  {[
                    { label: "About", href: "#about" },
                    { label: "Species", href: "#species" },
                    { label: "Intelligence", href: "#intelligence" },
                    { label: "Conservation", href: "#conservation" },
                  ].map((item) => (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuLink
                        href={item.href}
                        className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white"
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
              <div className="hidden items-center gap-3 md:flex">
                <Button
                  variant="outline"
                  className="rounded-full border-white/30 bg-white/10 px-4 text-xs uppercase tracking-[0.2em] text-white hover:bg-white/20"
                >
                  Join Research
                </Button>
              </div>
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="md:hidden border-white/30 bg-white/10 text-white hover:bg-white/20"
                  >
                    <Menu className="size-4" />
                  </Button>
                </SheetTrigger>
                <SheetContent className="border-white/10 bg-[#0B1220] text-white">
                  <SheetHeader>
                    <SheetTitle className="text-white">
                      Dolphin Explorer
                    </SheetTitle>
                  </SheetHeader>
                  <div className="mt-6 flex flex-col gap-4 text-sm uppercase tracking-[0.2em] text-white/70">
                    <a href="#about" className="hover:text-white">
                      About
                    </a>
                    <a href="#species" className="hover:text-white">
                      Species
                    </a>
                    <a href="#intelligence" className="hover:text-white">
                      Intelligence
                    </a>
                    <a href="#communication" className="hover:text-white">
                      Communication
                    </a>
                    <a href="#conservation" className="hover:text-white">
                      Conservation
                    </a>
                    <a href="#facts" className="hover:text-white">
                      Fun Facts
                    </a>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          <div className="absolute inset-0 hero-bg scale-[1.15]">
            <Image
              src="/images/bg.jpg"
              alt="Aerial ocean view"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#02040A]/70 via-[#0B1220]/50 to-[#0B1220]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(72,202,228,0.3),transparent_45%)]" />
            <div className="absolute inset-0 grain-mask" />
          </div>

          <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-16 px-6 pb-16 pt-36 lg:flex-row lg:items-center">
            <div className="flex w-full flex-col gap-8 lg:w-1/2">
              <Badge className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.2em] text-white/80">
                Marine Intelligence Research
              </Badge>
              <h1
                className="hero-heading font-heading text-4xl font-semibold leading-tight text-white md:text-5xl lg:text-6xl"
                aria-label="Discover The Hidden World Of Dolphins"
              >
                {"Discover The Hidden World Of Dolphins"
                  .split(" ")
                  .map((word, index, arr) => (
                    <span key={`${word}-${index}`} className="inline-block">
                      <span className="hero-word inline-block">{word}</span>
                      {index < arr.length - 1 ? " " : ""}
                    </span>
                  ))}
              </h1>
              <p className="hero-subtitle max-w-xl text-lg text-white/80">
                Explore the intelligence, communication, behavior, and
                conservation of one of the ocean&apos;s most fascinating species.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="hero-actions rounded-full bg-[var(--ocean-accent)] px-6 py-6 text-sm font-semibold text-[#04111F] hover:bg-[#5dd4ef]">
                  Explore Species
                  <ArrowRight className="ml-2 size-4" />
                </Button>
                <Button
                  variant="outline"
                  className="hero-actions rounded-full border-white/30 bg-white/5 px-6 py-6 text-sm font-semibold text-white hover:bg-white/10"
                >
                  Learn More
                </Button>
              </div>
            </div>

            <div className="hero-card flex w-full flex-col gap-4 lg:w-1/2">
              <Card className="glass-card rounded-2xl border-white/10 bg-white/10 text-white shadow-2xl">
                <CardHeader className="space-y-2">
                  <CardTitle className="text-sm uppercase tracking-[0.3em] text-white/60">
                    Species Index
                  </CardTitle>
                  <CardDescription className="text-2xl font-semibold text-white">
                    Global Dolphin Snapshot
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 md:grid-cols-3">
                  <div className="space-y-2">
                    <p className="text-3xl font-semibold text-white">40+</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Species
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-3xl font-semibold text-white">20-50</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Years Lifespan
                    </p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-3xl font-semibold text-white">
                      Worldwide
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                      Ocean Coverage
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="about"
          className="bg-ocean relative scroll-mt-24 overflow-hidden py-24"
        >
          <div className="absolute inset-0 opacity-60">
            <div className="absolute left-0 top-10 h-64 w-64 rounded-full bg-[rgba(72,202,228,0.15)] blur-3xl" />
            <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-[rgba(0,150,199,0.2)] blur-3xl" />
          </div>
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
              <ScrollReveal animation="fade-up">
                <Image
                  src="/images/dol1.png"
                  alt="Dolphin underwater"
                  width={560}
                  height={420}
                  className="parallax-soft w-full rounded-2xl object-cover shadow-2xl"
                />
              </ScrollReveal>
            </div>
            <div className="w-full lg:w-1/2">
              <ScrollReveal animation="fade-up">
                <Card className="glass-card rounded-2xl border-white/10 bg-white/5 text-white shadow-xl transition-transform duration-300 hover:-translate-y-2">
                  <CardHeader>
                    <CardTitle className="text-2xl font-semibold text-white">
                      About Dolphins
                    </CardTitle>
                    <CardDescription className="text-white/70">
                      Intelligent, social, and deeply connected to their ocean
                      ecosystems.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-5 text-sm text-white/70">
                    <p>
                      Dolphins are marine mammals known for their streamlined
                      bodies, playful behavior, and remarkable cognitive ability.
                    </p>
                    <p>
                      They inhabit coastal and deep ocean regions, traveling in
                      pods that can span dozens of individuals.
                    </p>
                    <p>
                      Social bonds are essential, with communication patterns that
                      include clicks, whistles, and touch-based cues.
                    </p>
                    <p>
                      Their adaptability makes them a vital indicator of ocean
                      health and biodiversity.
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="species" className="relative scroll-mt-24 py-24">
          <div className="mx-auto w-full max-w-6xl px-6">
            <SectionHeading
              eyebrow="Species"
              title="Dolphin Species Showcase"
              description="From shallow reefs to deep ocean voyages, each species tells a unique story."
            />
            <ScrollReveal animation="fade-up" stagger={0.12}>
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {species.map((item) => (
                  <Card
                    key={item.name}
                    className="glass-card rounded-2xl border-white/10 bg-white/5 text-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-white/30"
                  >
                    <CardHeader className="space-y-3">
                      <CardTitle className="text-lg font-semibold text-white">
                        {item.name}
                      </CardTitle>
                      <CardDescription className="text-white/70">
                        {item.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2 text-xs uppercase tracking-[0.2em] text-white/50">
                      <div className="flex items-center justify-between">
                        <span>Region</span>
                        <span className="text-white/70 normal-case tracking-normal">
                          {item.region}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Lifespan</span>
                        <span className="text-white/70 normal-case tracking-normal">
                          {item.lifespan}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section
          id="intelligence"
          className="bg-ocean relative scroll-mt-24 overflow-hidden py-24"
        >
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
              <ScrollReveal animation="fade-up">
                <Image
                  src="/images/dol2.png"
                  alt="Dolphin intelligence"
                  width={520}
                  height={420}
                  className="parallax-soft w-full rounded-2xl object-cover shadow-2xl"
                />
              </ScrollReveal>
            </div>
            <div className="w-full lg:w-1/2">
              <ScrollReveal animation="fade-up">
                <SectionHeading
                  eyebrow="Intelligence"
                  title="Inside the Dolphin Mind"
                  description="From self-awareness to complex problem solving, dolphins display a rare blend of curiosity and empathy."
                />
                <div className="mt-10 grid gap-6">
                  <div className="glass-card rounded-2xl border-white/10 bg-white/5 p-6">
                    <p className="text-3xl font-semibold text-white">
                      <Counter value={95} suffix="%" />
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/60">
                      Complex Social Behaviour
                    </p>
                  </div>
                  <div className="glass-card rounded-2xl border-white/10 bg-white/5 p-6">
                    <p className="text-3xl font-semibold text-white">
                      <Counter value={40} suffix="+" />
                    </p>
                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/60">
                      Distinct Vocalizations
                    </p>
                  </div>
                  <div className="glass-card rounded-2xl border-white/10 bg-white/5 p-6">
                    <p className="text-3xl font-semibold text-white">Advanced</p>
                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-white/60">
                      Problem Solving Skills
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="communication" className="relative scroll-mt-24 py-24">
          <div className="mx-auto w-full max-w-6xl px-6">
            <SectionHeading
              eyebrow="Communication"
              title="Ocean Communication"
              description="Sound travels faster underwater. Dolphins harness it for collaboration, navigation, and play."
            />
            <ScrollReveal animation="fade-up" stagger={0.12}>
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                {communicationCards.map((card) => (
                  <Card
                    key={card.title}
                    className="relative overflow-hidden rounded-2xl border-white/10 bg-white/5 text-white shadow-lg"
                  >
                    <div className="absolute inset-0 opacity-40 wave-divider" />
                    <CardHeader className="relative">
                      <CardTitle className="text-lg font-semibold">
                        {card.title}
                      </CardTitle>
                      <CardDescription className="text-white/70">
                        {card.detail}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section
          id="conservation"
          className="relative scroll-mt-24 overflow-hidden bg-[linear-gradient(180deg,#031a33_0%,#021126_100%)] py-24"
        >
          <div className="absolute inset-0 opacity-50">
            <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-[rgba(0,150,199,0.2)] blur-3xl" />
            <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[rgba(72,202,228,0.15)] blur-3xl" />
          </div>
          <div className="relative mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row lg:items-center">
            <div className="w-full lg:w-1/2">
              <ScrollReveal animation="fade-up">
                <SectionHeading
                  eyebrow="Conservation"
                  title="Protecting Dolphins For Future Generations"
                  description="The health of dolphin populations reflects the health of our oceans. Conservation efforts protect the entire marine ecosystem."
                />
                <div className="mt-10 grid gap-4 text-sm text-white/70">
                  <div className="flex items-center gap-3">
                    <Waves className="size-5 text-[var(--ocean-accent)]" />
                    Ocean pollution and microplastics threaten habitats.
                  </div>
                  <div className="flex items-center gap-3">
                    <Orbit className="size-5 text-[var(--ocean-accent)]" />
                    Fishing nets cause accidental bycatch and injury.
                  </div>
                  <div className="flex items-center gap-3">
                    <LifeBuoy className="size-5 text-[var(--ocean-accent)]" />
                    Climate change shifts migratory routes and food sources.
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe2 className="size-5 text-[var(--ocean-accent)]" />
                    Conservation programs rebuild coastal resilience.
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <div className="w-full lg:w-1/2">
              <ScrollReveal animation="fade-up">
                <Image
                  src="/images/dol4.png"
                  alt="Dolphin conservation"
                  width={520}
                  height={420}
                  className="parallax-soft w-full rounded-2xl object-cover shadow-2xl"
                />
                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="glass-card rounded-2xl border-white/10 bg-white/5 p-5">
                    <p className="text-3xl font-semibold text-white">
                      <Counter value={8} suffix="M+" />
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">
                      Tons of Plastic Enter Oceans Yearly
                    </p>
                  </div>
                  <div className="glass-card rounded-2xl border-white/10 bg-white/5 p-5">
                    <p className="text-3xl font-semibold text-white">
                      <Counter value={60} suffix="%" />
                    </p>
                    <p className="mt-2 text-xs uppercase tracking-[0.2em] text-white/60">
                      Coastal Habitats Under Stress
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>


        <section
          id="facts"
          className="relative scroll-mt-24 bg-[#050a14] py-24"
        >
          <div className="mx-auto w-full max-w-5xl px-6">
            <SectionHeading
              eyebrow="Fun Facts"
              title="Dolphin Intelligence Insights"
              description="Quick discoveries that reveal just how extraordinary dolphins can be."
              align="center"
            />
            <div className="mt-12">
              <Accordion type="single" collapsible className="space-y-4">
                {[
                  "Dolphins have names.",
                  "Dolphins sleep with half their brain.",
                  "Dolphins recognize themselves in mirrors.",
                  "Dolphins can learn symbols.",
                ].map((fact) => (
                  <AccordionItem
                    key={fact}
                    value={fact}
                    className="rounded-2xl border border-white/10 bg-white/5 px-6"
                  >
                    <AccordionTrigger className="text-left text-white">
                      {fact}
                    </AccordionTrigger>
                    <AccordionContent className="text-white/70">
                      Dolphins demonstrate advanced cognition and memory, making
                      them one of the most studied marine species.
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative overflow-hidden bg-[#02040b]">
        <div className="h-16 wave-divider" />
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:justify-between">
          <div className="space-y-3">
            <p className="font-heading text-2xl text-white">Dolphin Explorer</p>
            <p className="text-sm text-white/60">
              Immersive storytelling for the guardians of the ocean.
            </p>
          </div>
          <div className="flex flex-col gap-4 md:flex-row md:gap-12">
            <div className="space-y-2 text-sm text-white/70">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                Navigation
              </p>
              <NavigationMenu>
                <NavigationMenuList className="flex flex-col items-start gap-2">
                  {[
                    { label: "Species", href: "#species" },
                    { label: "Intelligence", href: "#intelligence" },
                    { label: "Conservation", href: "#conservation" },
                  ].map((item) => (
                    <NavigationMenuItem key={item.label}>
                      <NavigationMenuLink
                        href={item.href}
                        className="text-white/70 hover:text-white"
                      >
                        {item.label}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </div>
            <div className="space-y-2 text-sm text-white/70">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                Quick Links
              </p>
              <ul className="space-y-1">
                <li>Research</li>
                <li>Media</li>
                <li>Field Notes</li>
              </ul>
            </div>
            <div className="space-y-2 text-sm text-white/70">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                Conservation Resources
              </p>
              <ul className="space-y-1">
                <li>Ocean Cleanup</li>
                <li>Wildlife Fund</li>
                <li>Local Sanctuaries</li>
              </ul>
            </div>
          </div>
        </div>
        <Separator className="bg-white/10" />
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 text-xs text-white/50">
          <p>Credits: Oceanic Research Collective</p>
          <p>© 2026 Dolphin Explorer</p>
        </div>
      </footer>
    </div>
  );
}
