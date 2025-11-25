import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Kontakt | BelloVito",
    description: "Skontaktuj się z BelloVito. Znajdź naszą lokalizację, godziny otwarcia i dane kontaktowe.",
};

export default function ContactPage() {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <SectionHeader title="Skontaktuj się z Nami" subtitle="Kontakt" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <Card className="border-none shadow-md">
                            <CardContent className="p-6 flex items-start gap-4">
                                <MapPin className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-heading font-bold text-lg mb-2">Lokalizacja</h3>
                                    <p className="text-muted-foreground">ul. Kulinarna 123<br />Warszawa, 00-001</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md">
                            <CardContent className="p-6 flex items-start gap-4">
                                <Phone className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-heading font-bold text-lg mb-2">Telefon</h3>
                                    <p className="text-muted-foreground">+48 555 123 456</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md">
                            <CardContent className="p-6 flex items-start gap-4">
                                <Mail className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-heading font-bold text-lg mb-2">Email</h3>
                                    <p className="text-muted-foreground">info@bellovito.pl</p>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="border-none shadow-md">
                            <CardContent className="p-6 flex items-start gap-4">
                                <Clock className="w-6 h-6 text-primary mt-1" />
                                <div>
                                    <h3 className="font-heading font-bold text-lg mb-2">Godziny Otwarcia</h3>
                                    <div className="text-muted-foreground space-y-1">
                                        <p className="flex justify-between w-48"><span>Pon - Czw:</span> <span>11:00 - 22:00</span></p>
                                        <p className="flex justify-between w-48"><span>Pt - Sob:</span> <span>11:00 - 23:00</span></p>
                                        <p className="flex justify-between w-48"><span>Niedz:</span> <span>12:00 - 21:00</span></p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    <div className="h-[400px] md:h-auto bg-muted rounded-lg overflow-hidden relative">
                        {/* Placeholder for Map */}
                        <div className="absolute inset-0 flex items-center justify-center bg-muted-foreground/10">
                            <p className="text-muted-foreground">Miejsce na integrację mapy</p>
                        </div>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes%20Square!5e0!3m2!1sen!2sus!4v1620000000000!5m2!1sen!2sus"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            className="grayscale hover:grayscale-0 transition-all duration-500"
                        ></iframe>
                    </div>
                </div>
            </SectionWrapper>
        </div>
    );
}
