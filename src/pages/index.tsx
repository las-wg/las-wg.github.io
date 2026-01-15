import { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Menu, ArrowRight, Github, Disc, BookOpen, Award, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>LAS-WG | Lightweight Agent Standard Working Group</title>
        <meta
          name="description"
          content="A lean working group that develops standards for AI agents."
        />
        <meta property="og:title" content="Lightweight Agent Standard Working Group" />
        <meta property="og:description" content="A lean working group that develops standards for AI agents." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://las-wg.org" />
        <meta property="og:image" content="" />
        <link rel="shortcut icon" href="/logo.svg" type="image/x-icon" />
      </Head>

      <div className="min-h-screen font-sans text-foreground selection:bg-primary/20 relative z-0">



        {/* Navbar */}
        <header
          className={cn(
            "fixed top-0 z-50 w-full transition-all duration-300",
            scrolled
              ? "border-b bg-white/80 backdrop-blur-md supports-[backdrop-filter]:bg-white/60"
              : "bg-transparent"
          )}
        >
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <Link href="/" className="flex items-center gap-2">
              <img src="/logo.svg" alt="LAS-WG Logo" className="h-8 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-6">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <Link href="#about-us" legacyBehavior passHref>
                      <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        About
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="https://github.com/las-wg" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        target="_blank"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        GitHub
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                  <NavigationMenuItem>
                    <Link href="https://discord.gg/wmRSNHsRAh" legacyBehavior passHref>
                      <NavigationMenuLink
                        className={navigationMenuTriggerStyle()}
                        target="_blank"
                      >
                        <Disc className="mr-2 h-4 w-4" />
                        Discord
                      </NavigationMenuLink>
                    </Link>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              <Button asChild className="rounded-full bg-primary hover:bg-primary/90">
                <Link href="#about-us">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Mobile Navigation */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="mt-8 flex flex-col gap-4">
                  <Link href="#about-us" className="text-lg font-medium hover:text-primary">
                    About
                  </Link>
                  <Link
                    href="https://github.com/las-wg"
                    className="flex items-center text-lg font-medium hover:text-primary"
                    target="_blank"
                  >
                    <Github className="mr-2 h-5 w-5" /> GitHub
                  </Link>
                  <Link
                    href="https://discord.gg/wmRSNHsRAh"
                    className="flex items-center text-lg font-medium hover:text-primary"
                    target="_blank"
                  >
                    <Disc className="mr-2 h-5 w-5" /> Discord
                  </Link>
                  <Button asChild className="mt-4 w-full">
                    <Link href="#about-us">Get Started</Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </header>

        <main className="pt-0">
          {/* Hero Section */}
          <section className="flex flex-col items-center gap-8 py-20 text-center md:py-32 relative overflow-hidden mx-0">
            {/* Hero Background Image */}
            <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none opacity-25">
              <img src="/background.svg" className="w-full h-full object-cover object-center black-to-primary block" alt="" />
            </div>
            <div className="pt-24 relative z-10 mx-auto max-w-4xl space-y-8  px-12">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl md:text-7xl">
                Lightweight Agent Standards
                <span className="block text-primary">Working Group</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
                Creating the agent standards we need today. We address concrete, immediate
                challenges by defining clear, focused guidelines.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Button asChild size="lg" className="h-12 rounded-full px-8 text-lg">
                  <Link href="https://discord.gg/wmRSNHsRAh" target="_blank">
                    Join Community
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="h-12 rounded-full px-8 text-lg hover:bg-primary/5"
                >
                  <Link href="#about-us">Learn More</Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Core Features */}
          <section id="about-us" className="bg-muted/30 py-20">
            <div className="container mx-auto px-4">
              <div className="mb-16 text-center">
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                  Small, <span className="text-primary">Specific</span> Standards
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  LAS-WG develops interoperable standards for agent communication avoiding
                  bloated protocols in favor of quick, iterative testing.
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    icon: Zap,
                    title: "Build Small",
                    content: "We focus on specific parts of agent communication.",
                  },
                  {
                    icon: Award,
                    title: "Application-Driven",
                    content:
                      "We work with major agent companies to focus on issues that matter.",
                  },
                  {
                    icon: BookOpen,
                    title: "Quick & Iterative",
                    content:
                      "We prefer testing something rather than debating if it will work.",
                  },
                ].map((feat, idx) => (
                  <Card key={idx} className="border-none shadow-md transition-all hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <feat.icon className="h-6 w-6" />
                      </div>
                      <CardTitle>{feat.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {feat.content}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* Membership Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="mb-16 text-center">
                <h3 className="text-primary font-semibold uppercase tracking-wider text-xl">
                  Membership
                </h3>
                <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
                  Members join individually. We have members from several organizations,
                  including:
                </p>
              </div>

              <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
                {[
                  { name: "LangChain", img: "langchain.png" },
                  { name: "Camel AI", img: "camelai.png" },
                  { name: "University of Oxford", img: "oxford.png" },
                  { name: "Stanford University", img: "stanford.png" },
                  { name: "MIT", img: "mit.png" },
                  { name: "Cosmos Institute", img: "cosmos.png" },
                  { name: "Wildcard", img: "wildcard.png" },
                  { name: "Agent Network Protocol", img: "anp.png" },
                  { name: "Eclipse LMOS", img: "eclipse-lmos.png" },
                  { name: "AgentOps", img: "agentops.png" },
                  { name: "Firecrawl", img: "firecrawl.png" },
                  { name: "WebAir", img: "webair.png" },
                ].map((org, idx) => (
                  <div
                    key={idx}
                    className="flex flex-col items-center justify-center gap-4 rounded-xl border bg-card p-6 shadow-sm transition-all hover:shadow-md"
                  >
                    <div className="relative h-32 w-full">
                      <img
                        src={`/orgs/${org.img}`}
                        alt={org.name}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-primary py-20 text-primary-foreground">
            <div className="container mx-auto flex flex-col items-center gap-6 px-4 text-center">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Stay updated
              </h2>
              <p className="max-w-xl text-primary-foreground/90">
                Weekly meetings on AI agent standards. Join the conversation and help shape
                the future.
              </p>
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="mt-4 rounded-full px-8 text-primary hover:bg-white"
              >
                <Link href="https://discord.gg/wmRSNHsRAh" target="_blank">
                  Join our Discord
                </Link>
              </Button>
            </div>
          </section>

          <footer className="bg-muted/50 py-12 border-t mt-12">
            <div className="container mx-auto grid gap-12 px-4 md:grid-cols-2">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <Link href="/" className="mb-6 flex items-center gap-2">
                  <img src="/logo.svg" alt="LAS-WG Logo" className="h-10 w-auto" />
                </Link>
                <p className="max-w-xs text-base text-muted-foreground leading-relaxed">
                  Lightweight Agent Standard Working Group. Developing interoperable
                  standards for the future of AI agents.
                </p>
              </div>
              <div className="flex flex-col items-center md:items-end text-center md:text-right">
                <h3 className="mb-6 font-semibold uppercase tracking-widest text-sm text-primary">Resources</h3>
                <ul className="space-y-3 text-sm font-medium text-muted-foreground">
                  <li>
                    <Link href="#about-us" className="transition-colors hover:text-primary">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="https://github.com/las-wg" className="transition-colors hover:text-primary" target="_blank">
                      GitHub
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://discord.gg/wmRSNHsRAh"
                      className="transition-colors hover:text-primary"
                      target="_blank"
                    >
                      Discord
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="container mx-auto mt-12 border-t px-4 pt-8 text-center text-xs text-muted-foreground/60">
              © {new Date().getFullYear()} LAS-WG. All rights reserved.
            </div>
          </footer>
        </main>
      </div>
    </>
  );
}