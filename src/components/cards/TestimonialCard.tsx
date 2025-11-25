"use client";

import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
    testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
    const rating = testimonial.rating || 5;

    return (
        <Card className="bg-background border-none shadow-md p-6">
            <div className="flex gap-1 mb-4 text-secondary" aria-label={`Ocena: ${rating} z 5 gwiazdek`}>
                {[...Array(rating)].map((_, index) => (
                    <Star key={index} className="fill-current w-4 h-4" />
                ))}
            </div>
            <blockquote className="text-foreground/80 italic mb-6">
                "{testimonial.text}"
            </blockquote>
            <div>
                <p className="font-bold font-heading text-primary">{testimonial.name}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {testimonial.role}
                </p>
            </div>
        </Card>
    );
}
