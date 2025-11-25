import type { ReactNode, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionWrapperProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    className?: string;
    id?: string;
}

export function SectionWrapper({ children, className, id, ...props }: SectionWrapperProps) {
    return (
        <section id={id} className={cn("py-16 md:py-24", className)} {...props}>
            <div className="container mx-auto px-4 md:px-6">
                {children}
            </div>
        </section>
    );
}
