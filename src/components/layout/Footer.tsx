import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-cream text-foreground py-12 md:py-16 border-t border-border/40">
            <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <Link href="/" className="text-2xl font-dancing font-bold text-primary">
                        BelloVito
                    </Link>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                        Autentyczna kuchnia włoska serwowana z pasją i tradycją. Poczuj smak Włoch w każdym kęsie.
                    </p>
                </div>

                <div>
                    <h3 className="font-heading text-lg font-semibold mb-4 text-primary">Szybkie Linki</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li><Link href="/" className="hover:text-primary transition-colors">Strona Główna</Link></li>
                        <li><Link href="/menu" className="hover:text-primary transition-colors">Menu</Link></li>
                        <li><Link href="/reservations" className="hover:text-primary transition-colors">Rezerwacje</Link></li>
                        <li><Link href="/about" className="hover:text-primary transition-colors">O Nas</Link></li>
                        <li><Link href="/contact" className="hover:text-primary transition-colors">Kontakt</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-heading text-lg font-semibold mb-4 text-primary">Kontakt</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>ul. Kulinarna 123</li>
                        <li>Warszawa, 00-001</li>
                        <li>+48 555 123 456</li>
                        <li>info@bellovito.pl</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-heading text-lg font-semibold mb-4 text-primary">Godziny Otwarcia</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex justify-between"><span>Pon - Czw:</span> <span>11:00 - 22:00</span></li>
                        <li className="flex justify-between"><span>Pt - Sob:</span> <span>11:00 - 23:00</span></li>
                        <li className="flex justify-between"><span>Niedz:</span> <span>12:00 - 21:00</span></li>
                    </ul>
                    <div className="flex gap-4 mt-6">
                        <Link href="#facebook" className="text-muted-foreground hover:text-primary transition-colors"><Facebook className="h-5 w-5" /></Link>
                        <Link href="#instagram" className="text-muted-foreground hover:text-primary transition-colors"><Instagram className="h-5 w-5" /></Link>
                        <Link href="#twitter" className="text-muted-foreground hover:text-primary transition-colors"><Twitter className="h-5 w-5" /></Link>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-border/40 text-center text-xs text-muted-foreground">
                © {new Date().getFullYear()} Restauracja BelloVito. Wszelkie prawa zastrzeżone.
            </div>
        </footer>
    );
}
