"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet";

const navLinks = [
    { name: "Strona Główna", href: "/" },
    { name: "Menu", href: "/menu" },
    { name: "Rezerwacje", href: "/reservations" },
    { name: "O Nas", href: "/about" },
    { name: "Kontakt", href: "/contact" },
];

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";
    const isTransparent = isHome && !isScrolled;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "bg-background/95 backdrop-blur-sm border-border/40 shadow-sm py-2" : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link
                    href="/"
                    aria-label="BelloVito - Strona główna"
                    className={cn(
                        "text-2xl md:text-3xl font-heading font-bold transition-colors",
                        isTransparent ? "text-white" : "text-primary"
                    )}
                >
                    BelloVito
                </Link>

                {/* Desktop Nav - Visible only on LG screens and up */}
                <nav className="hidden lg:flex items-center gap-8" aria-label="Nawigacja główna">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "text-sm font-medium transition-colors",
                                isTransparent
                                    ? "text-white/90 hover:text-white"
                                    : "text-foreground/80 hover:text-primary",
                                pathname === link.href && (isTransparent ? "text-white font-bold" : "text-primary font-bold")
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Button asChild variant={isTransparent ? "secondary" : "default"} size="sm" className={cn(
                        isTransparent ? "bg-white text-primary hover:bg-white/90" : "bg-primary text-primary-foreground hover:bg-primary/90"
                    )}>
                        <Link href="/reservations">Zarezerwuj Stolik</Link>
                    </Button>
                </nav>

                {/* Mobile Nav - Visible on screens smaller than LG */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className={cn("lg:hidden", isTransparent ? "text-white hover:bg-white/20" : "")} aria-label="Otwórz menu">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                        <SheetTitle className="sr-only">Menu Nawigacji</SheetTitle>
                        <div className="flex flex-col gap-8 mt-8">
                            <Link href="/" className="text-2xl font-heading font-bold text-primary self-center" aria-label="BelloVito - Strona główna">
                                BelloVito
                            </Link>
                            <nav className="flex flex-col gap-4" aria-label="Nawigacja mobilna">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={cn(
                                            "text-lg font-medium transition-colors hover:text-primary py-2 border-b border-border/50",
                                            pathname === link.href ? "text-primary" : "text-foreground/80"
                                        )}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                                <Button asChild className="mt-4 w-full">
                                    <Link href="/reservations">Zarezerwuj Stolik</Link>
                                </Button>
                            </nav>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </header>
    );
}
