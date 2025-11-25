import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { FeatureCard } from "@/components/cards/FeatureCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { features } from "@/data/features";
import { testimonials } from "@/data/testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
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
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center text-white space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold tracking-tight">
            Poczuj Smak Włoch
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light max-w-2xl mx-auto opacity-90">
            Autentyczne smaki, ponadczasowe przepisy i niezapomniane doświadczenie kulinarne w sercu miasta.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6">
              <Link href="/reservations">Zarezerwuj Stolik</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black text-lg px-8 py-6">
              <Link href="/menu">Zobacz Menu</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <SectionWrapper className="bg-background">
        <SectionHeader title="Kulinarne Arcydzieła" subtitle="Nasze Specjalności" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            <Link href="/menu">Poznaj Pełne Menu</Link>
          </Button>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper className="bg-muted/30">
        <SectionHeader title="Opinie Gości" subtitle="Referencje" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </SectionWrapper>

      {/* CTA Section */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden bg-primary text-white">
        <div className="container mx-auto px-4 text-center space-y-6 relative z-10">
          <h2 className="text-3xl md:text-5xl font-heading font-bold">Gotowy na Niezapomnianą Ucztę?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Zarezerwuj swój stolik już teraz i pozwól nam zabrać Cię w kulinarną podróż przez Włochy.
          </p>
          <Button asChild size="lg" variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold text-lg px-8">
            <Link href="/reservations">Zarezerwuj Stolik</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
