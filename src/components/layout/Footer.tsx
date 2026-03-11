import { ShieldCheck } from 'lucide-react';

export function Footer() {
    return (
        <footer className="border-t border-[#dde5f0] bg-white mt-auto">
            <div className="container mx-auto px-4 sm:px-8 py-5 sm:py-6 flex flex-col sm:flex-row justify-between items-center gap-2.5 text-sm text-[#647191] max-w-6xl">
                <p className="font-medium text-center sm:text-left">
                    © {new Date().getFullYear()}{' '}
                    <span className="text-[#08101e] font-bold">Edit</span> — Private by design.
                </p>
                <div className="flex items-center gap-2 font-medium">
                    <ShieldCheck className="w-4 h-4 text-emerald-500" />
                    Files processed locally · Never uploaded
                </div>
            </div>
        </footer>
    );
}
