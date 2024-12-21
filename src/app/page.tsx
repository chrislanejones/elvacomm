import { ArrowRight, BarChart, Megaphone, Target } from "lucide-react";
import Link from "next/link";

import { AnimatedBackground } from "@/components/animated-background";
import { PortfolioSection } from "@/components/portfolio-section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Page() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">ElvaComm</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link
              href="#services"
              className="text-sm font-medium hover:text-primary"
            >
              Services
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary"
            >
              About
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium hover:text-primary"
            >
              Portfolio
            </Link>
          </nav>
          <Button>Contact Us</Button>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="container relative py-24 md:py-32">
          <AnimatedBackground />
          <div className="relative flex flex-col items-center text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              We Stand Out.{" "}
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
                We Blend In.
              </span>
            </h1>
            <p className="mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Experience Drives Brand Marketing Success. We are a full-service
              marketing agency specializing in branding, digital, design
              publicity and promotions.
            </p>
            <Button size="lg" className="mt-8">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="container py-24">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
            What We Do
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader>
                <Target className="h-12 w-12 text-orange-500" />
                <CardTitle>Brand Foundation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Strategic opportunity analysis and brand positioning to
                  establish your unique market identity.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <Megaphone className="h-12 w-12 text-orange-500" />
                <CardTitle>Marketing Communications</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive message development, content strategy, and
                  dedicated sales support.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <BarChart className="h-12 w-12 text-orange-500" />
                <CardTitle>Measured Success</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  In-depth analysis and customer feedback to ensure measurable
                  results.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-orange-500 py-24 text-white">
          <div className="container">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
              About Us
            </h2>
            <p className="mx-auto max-w-[800px] text-center text-lg leading-relaxed">
              Our team of seasoned agency and marketing professionals has served
              Americas top corporations for decades. We excel at working with
              your in-house marketing teams as well as with your top executives.
            </p>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="container py-24">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tighter sm:text-4xl">
            Our Portfolio
          </h2>
          <PortfolioSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-muted-foreground">
            © 2024 ElvaComm. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary"
            >
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
