import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import type { Feature } from "@/types";

interface FeatureCardProps {
    feature: Feature;
}

export function FeatureCard({ feature }: FeatureCardProps) {
    return (
        <Card className="overflow-hidden border-none shadow-xl hover:shadow-2xl transition-all duration-500 group bg-card/50 backdrop-blur-sm" role="listitem">
            <div className="relative h-72 overflow-hidden">
                <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <CardContent className="p-8 text-center space-y-4 bg-card">
                <h3 className="text-2xl font-bold text-primary group-hover:text-secondary transition-colors duration-300">
                    {feature.title}
                </h3>
                <p className="text-foreground/70 font-medium leading-relaxed">{feature.description}</p>
                {feature.price && (
                    <div className="pt-4">
                        <span className="inline-block px-6 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-secondary text-xl font-bold">
                            {feature.price}
                        </span>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}
