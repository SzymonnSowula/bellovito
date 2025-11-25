import { SectionWrapper } from "@/components/layout/SectionWrapper";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ReservationForm } from "@/components/reservations/ReservationForm";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Rezerwacje | BelloVito",
    description: "Zarezerwuj stolik w BelloVito. Doświadcz wykwintnej włoskiej kuchni na Twoją specjalną okazję.",
};

export default function ReservationsPage() {
    return (
        <div className="pt-20">
            <SectionWrapper>
                <SectionHeader title="Zarezerwuj Stolik" subtitle="Rezerwacje" />
                <div className="max-w-2xl mx-auto">
                    <ReservationForm />
                </div>
            </SectionWrapper>
        </div>
    );
}
