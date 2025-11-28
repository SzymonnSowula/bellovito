"use client";

import { FormEvent, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

export function ReservationForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitted(true);

        // Reset form after showing the message
        setTimeout(() => {
            setIsSubmitted(false);
            (e.target as HTMLFormElement).reset();
        }, 5000);
    };

    // Show success message if form was submitted
    if (isSubmitted) {
        return (
            <Card className="border-none shadow-lg">
                <CardContent className="p-8">
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                            <svg
                                className="w-8 h-8 text-green-600"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <h3 className="text-2xl font-bold text-green-800">
                            Dziękujemy!
                        </h3>
                        <p className="text-lg text-gray-700">
                            Otrzymaliśmy Twoją rezerwację!
                        </p>
                        <p className="text-gray-600">
                            Skontaktujemy się w ciągu 24h
                        </p>
                    </div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card className="border-none shadow-lg">
            <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium">Imię i Nazwisko</label>
                            <Input id="name" placeholder="Jan Kowalski" required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium">Email</label>
                            <Input id="email" type="email" placeholder="jan@przykład.pl" required />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="phone" className="text-sm font-medium">Telefon</label>
                            <Input id="phone" type="tel" placeholder="+48 555 123 456" required />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="guests" className="text-sm font-medium">Liczba Gości</label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Wybierz liczbę gości" />
                                </SelectTrigger>
                                <SelectContent>
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                                        <SelectItem key={num} value={num.toString()}>{num} {num === 1 ? 'Osoba' : num < 5 ? 'Osoby' : 'Osób'}</SelectItem>
                                    ))}
                                    <SelectItem value="more">8+ (Zadzwoń do nas)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label htmlFor="date" className="text-sm font-medium">Data</label>
                            <Input id="date" type="date" required className="block" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="time" className="text-sm font-medium">Godzina</label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Wybierz godzinę" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="17:00">17:00</SelectItem>
                                    <SelectItem value="17:30">17:30</SelectItem>
                                    <SelectItem value="18:00">18:00</SelectItem>
                                    <SelectItem value="18:30">18:30</SelectItem>
                                    <SelectItem value="19:00">19:00</SelectItem>
                                    <SelectItem value="19:30">19:30</SelectItem>
                                    <SelectItem value="20:00">20:00</SelectItem>
                                    <SelectItem value="20:30">20:30</SelectItem>
                                    <SelectItem value="21:00">21:00</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="notes" className="text-sm font-medium">Specjalne Życzenia</label>
                        <Textarea id="notes" placeholder="Alergie, specjalna okazja, itp." />
                    </div>

                    <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-lg py-6">
                        Potwierdź Rezerwację
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
