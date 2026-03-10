import { ReactNode } from 'react';

interface ToolLayoutProps {
    title: string;
    description: string;
    children: ReactNode;
}

export function ToolLayout({ title, description, children }: ToolLayoutProps) {
    return (
        <main className="flex-1 flex flex-col items-center py-12 px-4 md:py-20 max-w-6xl mx-auto w-full relative overflow-hidden">
            <div className="absolute top-[-10%] inset-x-0 h-[400px] bg-gradient-to-b from-primary/5 to-transparent pointer-events-none -z-10" />
            <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/10 blur-[100px] rounded-full pointer-events-none -z-10" />

            <div className="text-center mb-12 w-full max-w-2xl animate-in slide-in-from-top-4 fade-in duration-700">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4 text-foreground">{title}</h1>
                <p className="text-lg md:text-xl text-muted-foreground font-medium">{description}</p>
            </div>
            <div className="w-full animate-in slide-in-from-bottom-8 fade-in duration-700 delay-150">
                {children}
            </div>
        </main>
    );
}
