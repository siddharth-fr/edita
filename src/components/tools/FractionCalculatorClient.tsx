'use client';

import { useState } from 'react';
import { trackToolUsed } from '@/lib/ga4';
import Fraction from 'fraction.js';

export function FractionCalculatorClient() {
    const [frac1, setFrac1] = useState<string>('1/2');
    const [frac2, setFrac2] = useState<string>('1/4');
    const [op, setOp] = useState<'+' | '-' | '*' | '/'>('+');

    const result = (() => {
        try {
            const f1 = new Fraction(frac1);
            const f2 = new Fraction(frac2);
            let res: Fraction;

            switch (op) {
                case '+': res = f1.add(f2); break;
                case '-': res = f1.sub(f2); break;
                case '*': res = f1.mul(f2); break;
                case '/': res = f1.div(f2); break;
            }

            return {
                fraction: res.toFraction(true), // e.g., "3/4" or "1 1/2"
                decimal: res.valueOf(),
                simplified: res.toFraction(false)
            };
        } catch (e) {
            return null;
        }
    })();

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm items-center">
                <div className="flex flex-col gap-8">
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Fraction 1 (e.g., 3/4 or 1.5)</label>
                            <input
                                type="text"
                                value={frac1}
                                onChange={(e) => setFrac1(e.target.value)}
                                className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-xl font-mono focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none text-center"
                            />
                        </div>

                        <div className="flex justify-center gap-2">
                            {(['+', '-', '*', '/'] as const).map((operation) => (
                                <button
                                    key={operation}
                                    onClick={() => setOp(operation)}
                                    className={`w-12 h-12 rounded-xl font-black text-xl transition-all ${op === operation ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/20' : 'bg-muted hover:bg-muted/80'}`}
                                >
                                    {operation === '*' ? '×' : operation === '/' ? '÷' : operation}
                                </button>
                            ))}
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Fraction 2</label>
                            <input
                                type="text"
                                value={frac2}
                                onChange={(e) => setFrac2(e.target.value)}
                                className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-xl font-mono focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all outline-none text-center"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 justify-center bg-orange-500/5 p-8 rounded-[2rem] border border-orange-500/10 min-h-[300px]">
                    <div className="text-center space-y-6">
                        <span className="text-[11px] font-bold text-orange-600 uppercase tracking-widest">Calculated Result</span>
                        <div className="grid grid-cols-1 gap-4">
                            <div className="p-6 bg-white border border-orange-500/20 rounded-2xl shadow-sm">
                                <span className="text-[10px] block text-muted-foreground uppercase mb-2">Mixed / Simplified</span>
                                <div className="text-4xl font-black text-foreground">{result?.fraction || '---'}</div>
                            </div>
                            <div className="p-6 bg-white border border-orange-500/20 rounded-2xl shadow-sm">
                                <span className="text-[10px] block text-muted-foreground uppercase mb-2">Decimal Value</span>
                                <div className="text-2xl font-bold text-foreground">{result?.decimal?.toLocaleString(undefined, { maximumFractionDigits: 6 }) || '---'}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}