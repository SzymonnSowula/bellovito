import Image from "next/image";
import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nasza Historia | BelloVito",
    description: "Poznaj historię i tradycję stojącą za autentyczną kuchnią włoską BelloVito.",
};

export default function AboutPage() {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <SectionHeader title="Nasza Historia" subtitle="Tradycja & Pasja" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="relative h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="/images/chef_cooking.png"
                            alt="Szef kuchni gotuje"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="space-y-6">
                        <h3 className="text-2xl font-heading font-bold text-primary">Dziedzictwo Smaku</h3>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Założona w 2010 roku, BelloVito rozpoczęła działalność z prostą misją: przynieść autentyczny smak Włoch do naszej społeczności. Nasze przepisy są przekazywane z pokolenia na pokolenie, zachowując kulinarne sekrety Starego Świata.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            Wierzymy, że świetne jedzenie zaczyna się od świetnych składników. Dlatego pozyskujemy nasze produkty od lokalnych rolników i importujemy nasze specjały bezpośrednio z Włoch. Każde danie to dzieło miłości, tworzone z dbałością o każdy szczegół.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            W BelloVito nie jesteś tylko klientem; jesteś rodziną. Zapraszamy Cię, abyś dołączył do nas, zjadł z nami chleb i tworzył wspomnienia, które zostaną na całe życie.
                        </p>

                        <div className="pt-6">
                            <h4 className="font-heading font-bold text-xl mb-2">Szef Kuchni Antonio Vito</h4>
                            <p className="text-sm text-muted-foreground uppercase tracking-wide">Główny Szef Kuchni i Założyciel</p>
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
