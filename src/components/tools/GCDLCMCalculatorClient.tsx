'use client';

import { useState } from 'react';
import { trackToolUsed } from '@/lib/ga4';
import * as math from 'mathjs';

export function GCDLCMCalculatorClient() {
    const [input, setInput] = useState<string>('24, 36, 48');

    const result = (() => {
        try {
            const numbers = input.split(/[,\s]+/).map(n => parseInt(n)).filter(n => !isNaN(n));
            if (numbers.length < 2) return null;

            return {
                gcd: math.gcd(...numbers),
                lcm: math.lcm(...numbers)
            };
        } catch (e) {
            return null;
        }
    })();

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm items-center">
                <div className="flex flex-col gap-6">
                    <div className="space-y-4">
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Numbers (comma separated)</label>
                        <input
                            type="text"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-mono focus:ring-2 focus:ring-green-500/20 focus:border-green-500 transition-all outline-none"
                            placeholder="e.g., 12, 18, 24"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-6 justify-center bg-green-500/5 p-8 rounded-[2rem] border border-green-500/10 min-h-[300px]">
                    <div className="text-center space-y-6">
                        <div>
                            <span className="text-[11px] font-bold text-green-600 uppercase tracking-widest block mb-4">Greatest Common Divisor (GCD)</span>
                            <div className="p-6 bg-white border border-green-500/20 rounded-2xl shadow-sm text-4xl font-black text-foreground">
                                {result?.gcd || '---'}
                            </div>
                        </div>
                        <div>
                            <span className="text-[11px] font-bold text-green-600 uppercase tracking-widest block mb-4">Least Common Multiple (LCM)</span>
                            <div className="p-6 bg-white border border-green-500/20 rounded-2xl shadow-sm text-4xl font-black text-foreground">
                                {result?.lcm || '---'}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}