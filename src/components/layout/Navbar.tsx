import Link from 'next/link';
import { Layers, Search } from 'lucide-react';

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full">
            {/* Pure white frosted glass */}
            <div className="absolute inset-0 bg-white/90 backdrop-blur-2xl border-b border-[#e8eef8]" />

            <div className="relative container mx-auto px-4 sm:px-8 h-14 sm:h-16 flex items-center justify-between gap-4 max-w-[1400px]">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2.5 group shrink-0">
                    <div
                        className="w-8 h-8 rounded-xl flex items-center justify-center shadow-md transition-all duration-300 group-hover:scale-110"
                        style={{ background: 'linear-gradient(135deg, #05c6ff, #0055ee)' }}
                    >
                        <Layers className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-base font-black tracking-tight text-[#08101e]">Edit</span>
                </Link>

                {/* Search bar — hidden on very small screens */}
                <div className="hidden sm:flex flex-1 max-w-[440px] mx-4 relative">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8b9cbd] pointer-events-none" />
                    <input
                        type="text"
                        placeholder="Search tools — PDF, image, video…"
                        className="w-full pl-10 pr-4 py-2.5 rounded-full border border-[#dde5f0] bg-[#f4f7ff] text-sm text-[#08101e] placeholder-[#8b9cbd] font-medium focus:outline-none focus:border-[#05c6ff]/60 focus:bg-white focus:shadow-[0_0_0_3px_rgba(5,198,255,0.12)] transition-all duration-200"
                    />
                </div>

                {/* Nav actions */}
                <nav className="flex items-center gap-2 sm:gap-3 shrink-0">
                    <Link
                        href="/"
                        className="text-[#647191] hover:text-[#08101e] transition-colors hidden md:block text-sm font-semibold px-2"
                    >
                        Tools
                    </Link>
                    <div className="flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 text-emerald-700 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                        Private
                    </div>
                </nav>
            </div>
        </header>
    );
}
