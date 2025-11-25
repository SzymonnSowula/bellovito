"use client";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";

// Dynamic imports for heavy components with framer-motion
const StorySection = dynamic(() => import("@/components/sections/StorySection").then(mod => ({ default: mod.StorySection })), {
  loading: () => <div className="h-screen flex items-center justify-center">Ładowanie...</div>
});

const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection").then(mod => ({ default: mod.TestimonialsSection })), {
  loading: () => <div className="h-[600px] flex items-center justify-center">Ładowanie...</div>
});

const NewsSection = dynamic(() => import("@/components/sections/NewsSection").then(mod => ({ default: mod.NewsSection })), {
  loading: () => <div className="min-h-screen flex items-center justify-center">Ładowanie...</div>
});

import { features } from "@/data/features";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="fixed top-20 right-10 w-96 h-96 shape-blob opacity-30 pointer-events-none" />
      <div className="fixed bottom-20 left-10 w-80 h-80 shape-blob opacity-20 pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero_bg.png"
            alt="Wnętrze Restauracji BelloVito"
            fill
            sizes="100vw"
            className="object-cover"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white space-y-8 max-w-4xl">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-dancing font-bold tracking-tight">
              Poczuj Smak
              <span className="block gradient-text mt-2">Włoch</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto text-white/90 leading-relaxed">
            Autentyczne smaki, ponadczasowe przepisy i niezapomniane doświadczenie kulinarne w sercu miasta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 rounded-full shadow-xl hover:shadow-2xl transition-all">
              <Link href="/reservations">Zarezerwuj Stolik</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="glass border-white/30 text-white hover:bg-white hover:text-black text-lg px-8 py-6 rounded-full">
              <Link href="/menu">Zobacz Menu</Link>
            </Button>
          </div>
        </div>


        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="flex items-center justify-center gap-3">
            {/* Fork */}
            <svg
              width="28"
              height="56"
              viewBox="0 0 20 40"
              fill="none"
              className="text-white/80 animate-float"
            >
              <path
                d="M6 2 L6 15 M10 2 L10 15 M14 2 L14 15 M10 15 L10 38"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>

            {/* Knife */}
            <svg
              width="28"
              height="56"
              viewBox="0 0 20 40"
              fill="none"
              className="text-white/80 animate-float"
            >
              <path
                d="M10 2 L10 38 M10 2 L15 8 L10 14"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

      </section>

      {/* Story Section - Editorial Style */}
      <StorySection />

      {/* Menu Preview - Editorial Style */}
      <section className="py-16 md:py-24 bg-cream relative overflow-hidden">
        {/* Giant Typography Background */}
        <div className="absolute top-0 left-0 w-full overflow-hidden pointer-events-none opacity-[0.02]">
          <span className="text-editorial-huge font-dancing whitespace-nowrap text-primary">Menu Menu Menu</span>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

            {/* Left: Image - Hidden on mobile for performance */}
            <div className="w-full lg:w-5/12 relative group hidden md:block">
              <div className="overflow-hidden rounded-t-[10rem] rounded-b-lg shadow-xl aspect-[3/4] relative">
                <Image
                  src="/images/pasta.png"
                  alt="Domowy makaron"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500"></div>
              </div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="font-dancing text-2xl md:text-3xl">Domowa Pasta</p>
                <p className="text-sm opacity-90">Robiona ręcznie każdego ranka</p>
              </div>
            </div>

            {/* Right: Menu List */}
            <div className="w-full lg:w-7/12 lg:pl-8">
              <SectionHeader title="Wybrane Specjały" subtitle="Karta Dań" align="left" />

              <div className="space-y-6 md:space-y-8 mt-8">
                {features.map((feature) => (
                  <div key={feature.id} className="group cursor-pointer">
                    <div className="flex justify-between items-baseline border-b border-primary/10 pb-3 mb-2 group-hover:border-primary/40 transition-colors">
                      <h3 className="text-xl md:text-2xl font-dancing text-primary group-hover:text-secondary transition-colors pr-4">
                        {feature.title}
                      </h3>
                      <span className="text-lg md:text-xl font-bold text-secondary whitespace-nowrap">{feature.price}</span>
                    </div>
                    <p className="text-muted-foreground text-sm md:text-base max-w-xl group-hover:text-foreground transition-colors">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 md:mt-12">
                <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-6 md:px-8 py-5 md:py-6 text-base md:text-lg w-full md:w-auto">
                  <Link href="/menu">Zobacz Pełną Kartę</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* News Section */}
      <NewsSection />

      {/* CTA Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-primary text-white">
        <div className="container mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Gotowy na Niezapomnianą Ucztę?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Zarezerwuj swój stolik już teraz i pozwól nam zabrać Cię w kulinarną podróż przez Włochy.
          </p>
          <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 font-bold text-lg px-10 py-7 rounded-full shadow-2xl hover:shadow-3xl transition-all">
            <Link href="/reservations">Zarezerwuj Teraz →</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
