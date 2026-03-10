import Link from 'next/link';
import { Layers } from 'lucide-react';

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between max-w-6xl">
                <Link href="/" className="flex items-center gap-2 font-bold group">
                    <div className="bg-primary/10 p-1.5 rounded-lg group-hover:bg-primary transition-colors duration-300">
                        <Layers className="w-5 h-5 text-primary group-hover:text-background transition-colors duration-300" />
                    </div>
                    <span className="text-xl tracking-tight text-foreground">Edit</span>
                </Link>
                <nav className="flex items-center gap-6 text-sm font-medium text-muted-foreground">
                    <Link href="/" className="hover:text-primary transition-colors hidden sm:block">Tools</Link>
                    <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <p className="text-xs font-semibold text-primary">Private Engine</p>
                    </div>
                </nav>
            </div>
        </header>
    );
}
