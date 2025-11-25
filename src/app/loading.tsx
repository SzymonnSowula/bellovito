export default function Loading() {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <div className="text-center space-y-4">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary mx-auto"></div>
                <p className="text-muted-foreground">Ładowanie...</p>
            </div>
        </div>
    );
}
