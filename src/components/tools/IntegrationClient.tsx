'use client';

import { useState, useMemo } from 'react';
import { trackToolUsed } from '@/lib/ga4';
import * as math from 'mathjs';

export function IntegrationClient() {
    const [expression, setExpression] = useState('x^2');
    const [lowerLimit, setLowerLimit] = useState<number>(0);
    const [upperLimit, setUpperLimit] = useState<number>(1);

    const result = useMemo(() => {
        if (!expression) return '';
        try {
            const node = math.parse(expression);
            const code = node.compile();
            const f = (val: number) => code.evaluate({ x: val });
            
            // Simpson's 1/3 Rule
            const n = 1000; // number of intervals
            const h = (upperLimit - lowerLimit) / n;
            let sum = f(lowerLimit) + f(upperLimit);
            
            for (let i = 1; i < n; i++) {
                const x = lowerLimit + i * h;
                sum += (i % 2 === 0 ? 2 : 4) * f(x);
            }
            
            const integral = (h / 3) * sum;
            return integral.toLocaleString(undefined, { maximumFractionDigits: 6 });
        } catch (error) {
            return 'Invalid expression';
        }
    }, [expression, lowerLimit, upperLimit]);

    const handleCalculate = () => {
        trackToolUsed('Integration Tool');
    };

    return (
        <div className="w-full flex flex-col gap-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm items-start">
                <div className="flex flex-col gap-6">
                    <div className="flex flex-col gap-4">
                        <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Function f(x)</label>
                        <input
                            type="text"
                            value={expression}
                            onChange={(e) => setExpression(e.target.value)}
                            placeholder="e.g., x^2 + sin(x)"
                            className="p-4 bg-muted/30 border border-border rounded-2xl text-lg font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Lower Limit (a)</label>
                            <input
                                type="number"
                                value={lowerLimit}
                                onChange={(e) => setLowerLimit(Number(e.target.value))}
                                className="p-4 bg-muted/30 border border-border rounded-2xl text-lg font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Upper Limit (b)</label>
                            <input
                                type="number"
                                value={upperLimit}
                                onChange={(e) => setUpperLimit(Number(e.target.value))}
                                className="p-4 bg-muted/30 border border-border rounded-2xl text-lg font-mono focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 justify-center bg-emerald-500/5 p-8 rounded-[2rem] border border-emerald-500/10 min-h-[300px]">
                    <div className="text-center space-y-4">
                        <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest">Definite Integral Result</span>
                        <div className="p-6 bg-white border border-emerald-500/20 rounded-2xl shadow-sm">
                            <div className="text-3xl font-black text-foreground">
                                {result}
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground italic">
                            Calculated numerically using Simpson's 1/3 rule.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}