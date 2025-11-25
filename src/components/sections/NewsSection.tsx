"use client";

import Image from "next/image";
import Link from "next/link";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { Button } from "@/components/ui/button";

const newsItems = [
    {
        id: 1,
        title: "Najlepsza pizza w mieście",
        date: "01 kwietnia 2024",
        excerpt: "Najlepsza pizza w mieście? Jeśli szukasz prawdziwie włoskiej pizzy w BelloVito, to nasza restauracja jest idealnym miejscem dla Ciebie. Oferujemy pyszną pizzę prosto z pieca opalanego drewnem...",
        image: "/images/pizza.png",
        slug: "/blog/najlepsza-pizza"
    },
    {
        id: 2,
        title: "BelloVito na każdą pogodę",
        date: "07 września 2023",
        excerpt: "BelloVito to miejsce na każdą porę! Gdy pogoda nie dopisuje, a lato postanowiło zrobić sobie małą przerwę... Wizyta u nas to doskonałe i wyśmienite rozwiązanie na spędzenie czasu w deszczowe dni!",
        image: "/images/hero_bg.png",
        slug: "/blog/na-kazda-pogode"
    },
    {
        id: 3,
        title: "Wynos z odbiorem osobistym",
        date: "11 listopada 2023",
        excerpt: "Dania i pizza na wynos z odbiorem osobistym! Szczególnie polecamy świeże, ręcznie robione makarony i ravioli. Zamów w restauracji lub pod numerem telefonu. Zapraszamy...",
        image: "/images/pasta.png",
        slug: "/blog/wynos"
    }
];

export function NewsSection() {
    return (
        <SectionWrapper className="bg-background py-24">
            <div className="container mx-auto px-4">

                {/* Custom Header matching the design */}
                <div className="text-center mb-16 space-y-4">
                    <h3 className="text-3xl md:text-4xl font-dancing text-primary">
                        Aktualności
                    </h3>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground uppercase tracking-wide">
                        Z NASZEJ RESTAURACJI I PIZZERII
                    </h2>
                    <div className="w-16 h-px bg-border mx-auto mt-6" />
                </div>

                {/* News Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-16">
                    {newsItems.map((item) => (
                        <div key={item.id} className="group flex flex-col">
                            {/* Image Container */}
                            <div className="relative aspect-square w-full overflow-hidden mb-6 bg-muted">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                            </div>

                            {/* Content */}
                            <div className="flex flex-col flex-grow items-start text-left space-y-4">
                                <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                                    {item.title}
                                </h3>

                                <p className="text-muted-foreground text-sm leading-relaxed line-clamp-4">
                                    {item.excerpt}
                                </p>

                                <div className="mt-auto pt-2 space-y-3 w-full">
                                    <p className="text-xs text-muted-foreground/60 uppercase tracking-wider">
                                        {item.date}
                                    </p>

                                    <Link
                                        href={item.slug}
                                        className="inline-flex items-center text-sm font-bold text-foreground hover:text-primary transition-colors group/link"
                                    >
                                        — więcej
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Button */}
                <div className="text-center">
                    <Button
                        asChild
                        variant="outline"
                        className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-10 py-6 text-sm font-bold tracking-widest uppercase transition-all duration-300"
                    >
                        <Link href="/blog">
                            ZOBACZ WSZYSTKIE
                        </Link>
                    </Button>
                </div>

            </div>
        </SectionWrapper>
    );
}
