import { ReactNode } from 'react';

interface ToolLayoutProps {
    title: string;
    description: string;
    children: ReactNode;
}

export function ToolLayout({ title, description, children }: ToolLayoutProps) {
    return (
        <main className="flex-1 flex flex-col items-center w-full pb-16 sm:pb-20 relative overflow-hidden">
            {/* Ambient glow — subtle top accent */}
            <div className="pointer-events-none absolute top-0 inset-x-0 -z-10">
                <div className="absolute top-[-60px] left-1/2 -translate-x-1/2 w-[560px] h-[260px] rounded-full opacity-60"
                    style={{ background: 'radial-gradient(ellipse, rgba(5,198,255,0.18) 0%, rgba(0,85,238,0.10) 50%, transparent 80%)' }}
                />
            </div>

            <div className="max-w-4xl w-full px-4 sm:px-8">
                {/* Header */}
                <div className="text-center pt-12 sm:pt-16 pb-8 sm:pb-10">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter text-[#08101e] mb-3 sm:mb-4 leading-[0.95]">
                        {title}
                    </h1>
                    <p className="text-sm sm:text-lg text-[#647191] font-medium max-w-lg mx-auto leading-relaxed">
                        {description}
                    </p>
                </div>

                {/* Content */}
                <div className="w-full">{children}</div>
            </div>
        </main>
    );
}
