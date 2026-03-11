import Link from 'next/link';
import { Layers } from 'lucide-react';

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full">
            {/* Pure white frosted glass — always light */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-2xl border-b border-[#dde5f0]" />
            <div className="relative container mx-auto px-4 sm:px-8 h-14 sm:h-16 flex items-center justify-between max-w-6xl">
                <Link href="/" className="flex items-center gap-2.5 group">
                    <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-primary/30"
                        style={{ background: 'linear-gradient(135deg, #05c6ff, #0055ee)' }}
                    >
                        <Layers className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-base font-black tracking-tight text-[#08101e]">Edit</span>
                </Link>

                <nav className="flex items-center gap-3 sm:gap-5 text-sm font-semibold">
                    <Link
                        href="/"
                        className="text-[#647191] hover:text-[#08101e] transition-colors hidden sm:block text-sm"
                    >
                        Tools
                    </Link>
                    <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-bold">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Private
                    </div>
                </nav>
            </div>
        </header>
    );
}
