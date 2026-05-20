'use client';

import { useState, useMemo } from 'react';
import { trackToolUsed } from '@/lib/ga4';
import * as math from 'mathjs';

export function DifferentiationClient() {
    const [expression, setExpression] = useState('x^2 + 2x + 1');
    const [variable, setVariable] = useState('x');

    const result = useMemo(() => {
        if (!expression) return '';
        try {
            const derivative = math.derivative(expression, variable);
            return derivative.toString();
        } catch (error) {
            return 'Invalid expression';
        }
    }, [expression, variable]);

    const handleCalculate = () => {
        trackToolUsed('Differentiation Tool');
    };

    return (
        <div className="w-full flex flex-col gap-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm items-start">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-4">
                        <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Mathematical Expression</label>
                        <input
                            type="text"
                            value={expression}
                            onChange={(e) => setExpression(e.target.value)}
                            placeholder="e.g., x^2 + 2x"
                            className="p-4 bg-muted/30 border border-border rounded-2xl text-lg font-mono focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Variable (w.r.t)</label>
                        <input
                            type="text"
                            value={variable}
                            onChange={(e) => setVariable(e.target.value)}
                            className="p-4 bg-muted/30 border border-border rounded-2xl text-lg font-mono w-24 focus:outline-none focus:ring-2 focus:ring-purple-500/20 focus:border-purple-500 transition-all"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-6 justify-center bg-purple-500/5 p-8 rounded-[2rem] border border-purple-500/10 min-h-[300px]">
                    <div className="text-center space-y-4">
                        <span className="text-[11px] font-bold text-purple-600 uppercase tracking-widest">Derivative Result</span>
                        <div className="p-6 bg-white border border-purple-500/20 rounded-2xl shadow-sm">
                            <code className="text-2xl font-black text-foreground break-all">{result}</code>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}