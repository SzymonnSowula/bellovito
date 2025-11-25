"use client";

import { useState } from "react";
import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

const stories = [
    {
        year: "1985",
        title: "Neapol",
        subtitle: "Początki Tradycji",
        description1: "W sercu Neapolu, Nonna Maria otworzyła swoją pierwszą małą trattorię. To tam, wśród gwaru ulicy i zapachu świeżej bazylii, narodziła się nasza pasja do autentycznej kuchni.",
        description2: "Pierwsza lokalizacja była skromna, ale szybko zyskała uznanie dzięki bezkompromisowej jakości składników sprowadzanych prosto z Włoch.",
        image1: "/images/chef_cooking.png",
        image2: "/images/hero_bg.png"
    },
    {
        year: "2005",
        title: "Kraków",
        subtitle: "Nowy Rozdział",
        description1: "Vito przybył do Krakowa z jedną walizką i głową pełną marzeń. Zakochał się w polskiej gościnności i postanowił podzielić się smakami swojego dzieciństwa.",
        description2: "Sekretne przepisy na sos pomidorowy i ręcznie robiony makaron były przekazywane z pokolenia na pokolenie, stając się fundamentem tego, co robimy dzisiaj.",
        image1: "/images/pizza.png",
        image2: "/images/pasta.png"
    },
    {
        year: "2024",
        title: "BelloVito",
        subtitle: "Współczesna Klasyka",
        description1: "Dziś BelloVito to połączenie tradycji z nowoczesnością. Szanujemy korzenie, ale nie boimy się eksperymentować, tworząc miejsce z prawdziwą duszą.",
        description2: "Każdy gość jest dla nas jak rodzina. Nasza restauracja to przestrzeń, gdzie historia spotyka się z teraźniejszością na talerzu.",
        image1: "/images/tiramisu.png",
        image2: "/images/chef_cooking.png"
    }
];

export function StorySection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextStory = () => {
        setCurrentIndex((prev) => (prev + 1) % stories.length);
    };

    const prevStory = () => {
        setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
    };

    const currentStory = stories[currentIndex];

    return (
        <SectionWrapper className="bg-background relative overflow-hidden py-24 md:py-32">
            <div className="container mx-auto px-4">

                {/* Header & Timeline */}
                <div className="mb-20 space-y-12">
                    <h2 className="text-6xl md:text-8xl font-dancing text-primary text-center md:text-left">
                        Nasza <span className="text-foreground">Historia</span>
                    </h2>

                    {/* Horizontal Timeline */}
                    <div className="relative pt-8">
                        <div className="absolute top-[45px] left-0 w-full h-px bg-border hidden md:block" />
                        <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-0 relative z-10">
                            {stories.map((story, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center md:items-start group cursor-pointer"
                                    onClick={() => setCurrentIndex(index)}
                                >
                                    <span className={`text-4xl md:text-5xl font-dancing transition-colors duration-500 mb-4 bg-background pr-4 ${index === currentIndex ? "text-primary scale-110" : "text-primary/30 hover:text-primary/60"}`}>
                                        {story.year}
                                    </span>
                                    <div className={`w-3 h-3 rounded-full mb-4 hidden md:block ring-4 ring-background transition-colors duration-500 ${index === currentIndex ? "bg-primary" : "bg-border"}`} />
                                    <h3 className={`text-lg font-bold uppercase tracking-widest transition-opacity duration-500 ${index === currentIndex ? "opacity-100" : "opacity-50"}`}>{story.title}</h3>
                                    <p className="text-muted-foreground text-sm hidden md:block">{story.subtitle}</p>
                                </div>
                            ))}

                            {/* Navigation Arrows */}
                            <div className="hidden md:flex gap-4 items-center bg-background pl-4">
                                <button
                                    onClick={prevStory}
                                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary/10 hover:border-secondary transition-colors"
                                    aria-label="Poprzednia historia"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                </button>
                                <button
                                    onClick={nextStory}
                                    className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-secondary/10 hover:border-secondary transition-colors"
                                    aria-label="Następna historia"
                                >
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Grid with AnimatePresence */}
                <div className="min-h-[600px]"> {/* Fixed height container to prevent layout shifts */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20"
                        >

                            {/* Left Column: Portrait Image + Text */}
                            <div className="space-y-8">
                                <div className="relative aspect-[4/5] w-full overflow-hidden">
                                    <Image
                                        src={currentStory.image1}
                                        alt={currentStory.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="space-y-4">
                                    <h3 className="text-2xl font-dancing text-primary md:hidden">{currentStory.subtitle}</h3>
                                    <p className="text-lg leading-relaxed text-foreground/80 font-serif">
                                        {currentStory.description1}
                                    </p>
                                </div>
                            </div>

                            {/* Right Column: Landscape Image + Text */}
                            <div className="space-y-8 md:pt-24">
                                <div className="relative aspect-square w-full overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 ease-in-out">
                                    <Image
                                        src={currentStory.image2}
                                        alt="Atmosfera BelloVito"
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                                </div>
                                <div className="space-y-4">
                                    <p className="text-sm leading-relaxed text-muted-foreground">
                                        {currentStory.description2}
                                    </p>
                                </div>
                            </div>

                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </SectionWrapper>
    );
}
