import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const lato = Lato({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BelloVito | Autentyczna Kuchnia Włoska",
  description: "Doświadcz najlepszej włoskiej kuchni w BelloVito. Świeże składniki, tradycyjne przepisy i niezapomniana atmosfera.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body
        className={`${playfair.variable} ${lato.variable} antialiased bg-background text-foreground font-body flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
