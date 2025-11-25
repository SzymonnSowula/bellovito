import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center min-h-screen px-4">
            <div className="text-center space-y-6 max-w-md">
                <h1 className="text-6xl font-heading font-bold text-primary">404</h1>
                <h2 className="text-2xl font-heading font-bold">
                    Strona nie została znaleziona
                </h2>
                <p className="text-muted-foreground">
                    Przepraszamy, ale strona której szukasz nie istnieje.
                </p>
                <Button asChild className="bg-primary hover:bg-primary/90">
                    <Link href="/">Wróć do strony głównej</Link>
                </Button>
            </div>
        </div>
    );
}
