"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex items-center justify-center min-h-screen px-4">
            <div className="text-center space-y-6 max-w-md">
                <h2 className="text-3xl font-heading font-bold text-primary">
                    Coś poszło nie tak!
                </h2>
                <p className="text-muted-foreground">
                    Przepraszamy za niedogodności. Wystąpił nieoczekiwany błąd.
                </p>
                <Button onClick={reset} className="bg-primary hover:bg-primary/90">
                    Spróbuj ponownie
                </Button>
            </div>
        </div>
    );
}
