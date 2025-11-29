import type { ReactNode } from "react";
import type { Metadata } from "next";
import { Poppins, Dancing_Script } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Chatbot from "@/components/chat/Chatbot";
import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const dancingScript = Dancing_Script({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-dancing",
  display: "swap",
});


export const metadata: Metadata = {
  title: "BelloVito | Autentyczna Kuchnia Włoska",
  description: "Doświadcz najlepszej włoskiej kuchni w BelloVito. Świeże składniki, tradycyjne przepisy i niezapomniana atmosfera.",
  openGraph: {
    title: "BelloVito | Autentyczna Kuchnia Włoska",
    description: "Doświadcz najlepszej włoskiej kuchni w BelloVito.",
    locale: "pl_PL",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pl">
      <body
        className={`${poppins.variable} ${dancingScript.variable} antialiased bg-background text-foreground font-sans flex flex-col min-h-screen`}
      >
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
