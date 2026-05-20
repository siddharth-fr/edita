'use client';

import { useState } from 'react';
import { trackToolUsed } from '@/lib/ga4';
import Chance from 'chance';

const chance = new Chance();

export function RandomGeneratorClient() {
    const [min, setMin] = useState<number>(1);
    const [max, setMax] = useState<number>(100);
    const [count, setCount] = useState<number>(1);
    const [results, setResults] = useState<number[]>([]);

    const generateNumbers = () => {
        try {
            const newResults: number[] = [];
            for (let i = 0; i < count; i++) {
                newResults.push(chance.integer({ min, max }));
            }
            setResults(newResults);
            trackToolUsed('Random Number Generator');
        } catch (e) {
            // handle err
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm items-start">
                <div className="flex flex-col gap-8">
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Min</label>
                            <input type="number" value={min} onChange={(e) => setMin(Number(e.target.value))} className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold outline-none focus:ring-2 focus:ring-purple-500/20" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Max</label>
                            <input type="number" value={max} onChange={(e) => setMax(Number(e.target.value))} className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold outline-none focus:ring-2 focus:ring-purple-500/20" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Quantity</label>
                        <input type="number" value={count} min={1} max={100} onChange={(e) => setCount(Number(e.target.value))} className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold outline-none focus:ring-2 focus:ring-purple-500/20" />
                    </div>

                    <button
                        onClick={generateNumbers}
                        className="w-full py-5 bg-purple-500 text-white rounded-[1.5rem] font-black text-lg hover:bg-purple-600 transition-all shadow-xl shadow-purple-500/20 active:scale-[0.98]"
                    >
                        Generate Random!
                    </button>
                </div>

                <div className="flex flex-col gap-4 justify-center bg-purple-500/5 p-8 rounded-[2rem] border border-purple-500/10 min-h-[300px]">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {results.length > 0 ? results.map((r, i) => (
                            <div key={i} className="w-16 h-16 bg-white border border-purple-500/20 rounded-[1.2rem] flex items-center justify-center text-xl font-black text-foreground shadow-sm animate-in fade-in zoom-in duration-300">
                                {r}
                            </div>
                        )) : (
                            <div className="text-center text-muted-foreground italic">Click the button to roll</div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}