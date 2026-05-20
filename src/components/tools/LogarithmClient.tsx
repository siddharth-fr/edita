'use client';

import { useState, useMemo } from 'react';
import { trackToolUsed } from '@/lib/ga4';

export function LogarithmClient() {
    const [value, setValue] = useState<number>(100);
    const [base, setBase] = useState<string>('10');

    const result = useMemo(() => {
        if (value <= 0) return 'Invalid Value';
        
        let b: number;
        if (base === 'e') {
            b = Math.E;
        } else {
            b = Number(base);
        }

        if (b <= 0 || b === 1) return 'Invalid Base';

        const logResult = Math.log(value) / Math.log(b);
        return logResult.toLocaleString(undefined, { maximumFractionDigits: 10 });
    }, [value, base]);

    const handleCalculate = () => {
        trackToolUsed('Logarithm Tool');
    };

    return (
        <div className="w-full flex flex-col gap-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm items-start">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Number (x)</label>
                        <input
                            type="number"
                            value={value}
                            onChange={(e) => setValue(Number(e.target.value))}
                            className="p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Base (b)</label>
                        <div className="flex gap-2">
                            <button 
                                onClick={() => setBase('10')}
                                className={`flex-1 p-3 rounded-xl text-sm font-bold transition-all ${base === '10' ? 'bg-orange-500 text-white' : 'bg-muted hover:bg-muted/80'}`}
                            >
                                Base 10
                            </button>
                            <button 
                                onClick={() => setBase('e')}
                                className={`flex-1 p-3 rounded-xl text-sm font-bold transition-all ${base === 'e' ? 'bg-orange-500 text-white' : 'bg-muted hover:bg-muted/80'}`}
                            >
                                Natural (e)
                            </button>
                            <button 
                                onClick={() => setBase('2')}
                                className={`flex-1 p-3 rounded-xl text-sm font-bold transition-all ${base === '2' ? 'bg-orange-500 text-white' : 'bg-muted hover:bg-muted/80'}`}
                            >
                                Base 2
                            </button>
                        </div>
                        <div className="flex items-center gap-3 mt-2">
                            <span className="text-sm font-bold text-muted-foreground">Custom:</span>
                            <input
                                type="text"
                                value={base}
                                onChange={(e) => setBase(e.target.value)}
                                className="flex-1 p-3 bg-muted/30 border border-border rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all shadow-sm"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 justify-center bg-orange-500/5 p-8 rounded-[2rem] border border-orange-500/10 min-h-[300px]">
                    <div className="text-center space-y-4">
                        <span className="text-[11px] font-bold text-orange-600 uppercase tracking-widest">Logarithm Result</span>
                        <div className="p-8 bg-white border border-orange-500/20 rounded-2xl shadow-sm">
                            <div className="text-4xl font-black text-foreground">
                                {result}
                            </div>
                        </div>
                        <div className="text-xs text-muted-foreground">
                            log<sub>{base}</sub>({value}) = {result}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}