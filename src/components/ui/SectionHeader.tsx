import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: "left" | "center" | "right";
}

export function SectionHeader({ title, subtitle, className, align = "center" }: SectionHeaderProps) {
    return (
        <div className={cn("mb-16 md:mb-20 space-y-5",
            align === "center" && "text-center",
            align === "right" && "text-right",
            className
        )}>
            {subtitle && (
                <span className="inline-block px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full text-secondary font-semibold tracking-wider uppercase text-xs">
                    {subtitle}
                </span>
            )}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                {title}
            </h2>
        </div>
    );
}
