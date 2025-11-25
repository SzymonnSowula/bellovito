"use client";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { Feature } from "@/types";

interface FeatureCardProps {
    feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
    return (
        <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow group">
            <div className="relative h-64 overflow-hidden">
                <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>
            <CardContent className="p-6 text-center space-y-3 bg-card">
                <h3 className="text-2xl font-heading font-bold text-primary">
                    {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
                {feature.price && (
                    <span className="block text-xl font-bold text-secondary">
                        {feature.price}
                    </span>
                )}
            </CardContent>
        </Card>
    );
}
