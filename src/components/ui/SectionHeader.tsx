import { cn } from "@/lib/utils";

interface SectionHeaderProps {
    title: string;
    subtitle?: string;
    className?: string;
    align?: "left" | "center" | "right";
}

export function SectionHeader({ title, subtitle, className, align = "center" }: SectionHeaderProps) {
    return (
        <div className={cn("mb-12 md:mb-16 space-y-4",
            align === "center" && "text-center",
            align === "right" && "text-right",
            className
        )}>
            {subtitle && (
                <span className="text-secondary font-bold tracking-wider uppercase text-sm">
                    {subtitle}
                </span>
            )}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground">
                {title}
            </h2>
            <div className={cn("h-1 w-20 bg-primary mt-4", align === "center" && "mx-auto", align === "right" && "ml-auto")} aria-hidden="true" />
        </div>
    );
}
