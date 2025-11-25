import Link from "next/link";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-primary text-primary-foreground py-12 md:py-16">
            <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="space-y-4">
                    <Link href="/" className="text-2xl font-heading font-bold">
                        BelloVito
                    </Link>
                    <p className="text-primary-foreground/80 text-sm leading-relaxed">
                        Autentyczna kuchnia włoska serwowana z pasją i tradycją. Poczuj smak Włoch w każdym kęsie.
                    </p>
                </div>

                <div>
                    <h3 className="font-heading text-lg font-semibold mb-4">Szybkie Linki</h3>
                    <ul className="space-y-2 text-sm text-primary-foreground/80">
                        <li><Link href="/" className="hover:text-white transition-colors">Strona Główna</Link></li>
                        <li><Link href="/menu" className="hover:text-white transition-colors">Menu</Link></li>
                        <li><Link href="/reservations" className="hover:text-white transition-colors">Rezerwacje</Link></li>
                        <li><Link href="/about" className="hover:text-white transition-colors">O Nas</Link></li>
                        <li><Link href="/contact" className="hover:text-white transition-colors">Kontakt</Link></li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-heading text-lg font-semibold mb-4">Kontakt</h3>
                    <ul className="space-y-2 text-sm text-primary-foreground/80">
                        <li>ul. Kulinarna 123</li>
                        <li>Warszawa, 00-001</li>
                        <li>+48 555 123 456</li>
                        <li>info@bellovito.pl</li>
                    </ul>
                </div>

                <div>
                    <h3 className="font-heading text-lg font-semibold mb-4">Godziny Otwarcia</h3>
                    <ul className="space-y-2 text-sm text-primary-foreground/80">
                        <li className="flex justify-between"><span>Pon - Czw:</span> <span>11:00 - 22:00</span></li>
                        <li className="flex justify-between"><span>Pt - Sob:</span> <span>11:00 - 23:00</span></li>
                        <li className="flex justify-between"><span>Niedz:</span> <span>12:00 - 21:00</span></li>
                    </ul>
                    <div className="flex gap-4 mt-6">
                        <Link href="#" className="hover:text-white transition-colors"><Facebook className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-white transition-colors"><Instagram className="h-5 w-5" /></Link>
                        <Link href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
                    </div>
                </div>
            </div>
            <div className="container mx-auto px-4 md:px-6 mt-12 pt-8 border-t border-primary-foreground/20 text-center text-xs text-primary-foreground/60">
                © {new Date().getFullYear()} Restauracja BelloVito. Wszelkie prawa zastrzeżone.
            </div>
        </footer>
    );
}
