'use client';

import { useState } from 'react';
import { trackToolUsed } from '@/lib/ga4';

export function PercentageCalculatorClient() {
    const [val1, setVal1] = useState<string>('');
    const [val2, setVal2] = useState<string>('');
    const [calcType, setCalcType] = useState<'isWhat' | 'increase' | 'difference'>('isWhat');

    const result = (() => {
        const n1 = parseFloat(val1);
        const n2 = parseFloat(val2);
        if (isNaN(n1) || isNaN(n2)) return null;

        switch (calcType) {
            case 'isWhat':
                return (n1 / 100) * n2;
            case 'increase':
                return n1 + (n1 * (n2 / 100));
            case 'difference':
                return ((n2 - n1) / Math.abs(n1)) * 100;
            default:
                return null;
        }
    })();

    const handleCalculate = () => {
        trackToolUsed('Percentage Calculator');
    };

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm items-center">
                <div className="flex flex-col gap-6">
                    <div className="flex bg-muted/50 p-1.5 rounded-2xl gap-1">
                        {(['isWhat', 'increase', 'difference'] as const).map((t) => (
                            <button
                                key={t}
                                onClick={() => setCalcType(t)}
                                className={`flex-1 py-3 px-2 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all ${calcType === t ? 'bg-white text-pink-600 shadow-sm' : 'text-muted-foreground hover:bg-white/50'}`}
                            >
                                {t === 'isWhat' ? 'What is X% of Y?' : t === 'increase' ? 'X + Y% increase' : 'Change from X to Y'}
                            </button>
                        ))}
                    </div>

                    <div className="flex flex-col gap-4">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">
                                {calcType === 'isWhat' ? 'Percentage (X%)' : calcType === 'increase' ? 'Original Value (X)' : 'Starting Value (X)'}
                            </label>
                            <input
                                type="number"
                                value={val1}
                                onChange={(e) => setVal1(e.target.value)}
                                className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all outline-none"
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">
                                {calcType === 'isWhat' ? 'Of Value (Y)' : calcType === 'increase' ? 'Percentage Increase (Y%)' : 'Final Value (Y)'}
                            </label>
                            <input
                                type="number"
                                value={val2}
                                onChange={(e) => setVal2(e.target.value)}
                                className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 transition-all outline-none"
                            />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 justify-center bg-pink-500/5 p-8 rounded-[2rem] border border-pink-500/10 min-h-[300px]">
                    <div className="text-center space-y-4">
                        <span className="text-[11px] font-bold text-pink-600 uppercase tracking-widest">Result</span>
                        <div className="p-8 bg-white border border-pink-500/20 rounded-2xl shadow-sm">
                            <div className="text-5xl font-black text-foreground">
                                {result !== null ? result.toLocaleString(undefined, { maximumFractionDigits: 4 }) : '---'}
                                {calcType === 'difference' && result !== null ? '%' : ''}
                            </div>
                        </div>
                        <p className="text-xs text-muted-foreground">
                            {calcType === 'isWhat' ? `${val1 || 'X'}% of ${val2 || 'Y'} is ${result?.toFixed(2) || '---'}` :
                             calcType === 'increase' ? `${val1 || 'X'} increased by ${val2 || 'Y'}% is ${result?.toFixed(2) || '---'}` :
                             `The percentage change from ${val1 || 'X'} to ${val2 || 'Y'} is ${result?.toFixed(2) || '---'}%`}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}