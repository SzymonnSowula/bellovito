"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const currentTestimonial = testimonials[currentIndex];

    return (
        <section className="relative h-[600px] w-full overflow-hidden flex items-center justify-center">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/testimonials_bg.png"
                    alt="Włoski piec do pizzy"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60" />
            </div>

            {/* Content Container */}
            <div className="container mx-auto px-4 relative z-10 h-full flex flex-col justify-center">

                <div className="flex items-center justify-between gap-4 md:gap-12">

                    {/* Left Arrow */}
                    <button
                        onClick={prevTestimonial}
                        className="hidden md:flex w-12 h-12 rounded-full border border-white/30 items-center justify-center text-white hover:bg-white/20 hover:border-white transition-all duration-300 group"
                        aria-label="Poprzednia opinia"
                    >
                        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
                    </button>

                    {/* Testimonial Content */}
                    <div className="flex-1 max-w-4xl mx-auto text-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.5 }}
                                className="space-y-8"
                            >
                                <h2 className="text-3xl md:text-5xl font-heading text-white mb-8">
                                    Każdy znajdzie coś dla siebie
                                </h2>

                                <div className="relative">
                                    {/* Quote Icon Background */}
                                    <Quote className="absolute -top-8 -left-4 w-16 h-16 text-white/10 rotate-180 hidden md:block" />

                                    <p className="text-lg md:text-2xl text-white/90 font-serif italic leading-relaxed px-4 md:px-12">
                                        "{currentTestimonial.text}"
                                    </p>

                                    <Quote className="absolute -bottom-8 -right-4 w-16 h-16 text-white/10 hidden md:block" />
                                </div>

                                <div className="pt-4">
                                    <div className="w-16 h-px bg-primary mx-auto mb-4" />
                                    <p className="text-white font-bold text-lg tracking-wide">
                                        — {currentTestimonial.name}, {currentTestimonial.role} —
                                    </p>
                                    <div className="flex justify-center gap-1 mt-2">
                                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                                            <span key={i} className="text-primary text-sm">★</span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Right Arrow */}
                    <button
                        onClick={nextTestimonial}
                        className="hidden md:flex w-12 h-12 rounded-full border border-white/30 items-center justify-center text-white hover:bg-white/20 hover:border-white transition-all duration-300 group"
                        aria-label="Następna opinia"
                    >
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
                    </button>

                </div>

                {/* Mobile Navigation (Dots) */}
                <div className="flex justify-center gap-3 mt-12 md:hidden">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-primary w-6" : "bg-white/30"
                                }`}
                            aria-label={`Przejdź do opinii ${index + 1}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
