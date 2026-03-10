import Link from 'next/link';

export function Footer() {
    return (
        <footer className="border-t border-border bg-background mt-auto">
            <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground font-medium max-w-6xl">
                <p>© {new Date().getFullYear()} Edit (EDDIT). Private by design.</p>
                <div className="flex gap-4">
                    <span className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary inline-block animate-pulse"></span>
                        Files are processed locally in your browser.
                    </span>
                </div>
            </div>
        </footer>
    );
}
