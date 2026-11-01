import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import { Menu, ArrowRight, Github, Disc } from "lucide-react";
import { cn } from "@/lib/utils";

export default function SiteHeader({ currentPage }: { currentPage?: "leadership" }) {
  const [scrolled, setScrolled] = useState(false);
  const [headerOpen, setHeaderOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
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
        <div className="hidden lg:flex lg:items-center lg:gap-6">
          <NavigationMenu aria-label="Main navigation">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/#about-us" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    About
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/leadership" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()} aria-current={currentPage === "leadership" ? "page" : undefined}>
                    Leadership and activities
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
            <Link href="/#about-us">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={headerOpen} onOpenChange={setHeaderOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent aria-describedby={undefined}>
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="mt-8 flex flex-col gap-4">
              <Link href="/#about-us" onClick={() => setHeaderOpen(false)} className="text-lg font-medium hover:text-primary">
                About
              </Link>
              <Link href="/leadership" className="text-lg font-medium hover:text-primary" aria-current={currentPage === "leadership" ? "page" : undefined} onClick={() => setHeaderOpen(false)}>
                Leadership and activities
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
                <Link href="/#about-us" onClick={() => setHeaderOpen(false)}>Get Started</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
