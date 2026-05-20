'use client';

import { useState } from 'react';
import { trackToolUsed } from '@/lib/ga4';

export function BMICalculatorClient() {
    const [height, setHeight] = useState<number>(170);
    const [weight, setWeight] = useState<number>(70);
    const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');

    const bmi = (() => {
        if (unit === 'metric') {
            return weight / ((height / 100) * (height / 100));
        } else {
            // weight in lbs, height in inches
            return (weight / (height * height)) * 703;
        }
    })();

    const getCategory = (b: number) => {
        if (b < 18.5) return { label: 'Underweight', color: 'text-blue-500', bg: 'bg-blue-500/10' };
        if (b < 25) return { label: 'Normal Weight', color: 'text-emerald-500', bg: 'bg-emerald-500/10' };
        if (b < 30) return { label: 'Overweight', color: 'text-orange-500', bg: 'bg-orange-500/10' };
        return { label: 'Obese', color: 'text-rose-500', bg: 'bg-rose-500/10' };
    };

    const category = getCategory(bmi);

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm items-center">
                <div className="flex flex-col gap-8">
                    <div className="flex bg-muted/50 p-1 rounded-xl">
                        <button onClick={() => setUnit('metric')} className={`flex-1 py-2 rounded-lg text-xs font-bold ${unit === 'metric' ? 'bg-white shadow-sm text-rose-600' : 'text-muted-foreground'}`}>Metric (cm/kg)</button>
                        <button onClick={() => setUnit('imperial')} className={`flex-1 py-2 rounded-lg text-xs font-bold ${unit === 'imperial' ? 'bg-white shadow-sm text-rose-600' : 'text-muted-foreground'}`}>Imperial (in/lb)</button>
                    </div>

                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Height ({unit === 'metric' ? 'cm' : 'inches'})</label>
                            <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold outline-none focus:ring-2 focus:ring-rose-500/20" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Weight ({unit === 'metric' ? 'kg' : 'lbs'})</label>
                            <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold outline-none focus:ring-2 focus:ring-rose-500/20" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 justify-center bg-rose-500/5 p-8 rounded-[2rem] border border-rose-500/10 min-h-[300px] text-center">
                    <span className="text-[11px] font-bold text-rose-600 uppercase tracking-widest">BMI Result</span>
                    <div className="p-10 bg-white border border-rose-500/20 rounded-2xl shadow-sm">
                        <div className="text-6xl font-black text-foreground mb-2">{bmi.toFixed(1)}</div>
                        <div className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${category.bg} ${category.color}`}>
                            {category.label}
                        </div>
                    </div>
                    <div className="text-xs text-muted-foreground italic px-4">
                        A normal BMI range is between 18.5 and 24.9.
                    </div>
                </div>
            </div>
        </div>
    );
}