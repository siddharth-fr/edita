'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/Button';
import { trackToolUsed } from '@/lib/ga4';

export function SIPCalculatorClient() {
    const [monthlyInvestment, setMonthlyInvestment] = useState<number>(5000);
    const [expectedRate, setExpectedRate] = useState<number>(12);
    const [years, setYears] = useState<number>(10);

    const results = useMemo(() => {
        const P = monthlyInvestment;
        const i = expectedRate / 100 / 12;
        const n = years * 12;

        // SIP Formula: FV = P × ({[1 + i]^n - 1} / i) × (1 + i)
        const totalInvestment = P * n;
        const futureValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
        const estimatedReturns = futureValue - totalInvestment;

        return {
            totalInvestment,
            estimatedReturns,
            futureValue
        };
    }, [monthlyInvestment, expectedRate, years]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    const handleCalculate = () => {
        trackToolUsed('SIP Calculator');
    };

    return (
        <div className="w-full flex flex-col gap-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm items-start">
                {/* Inputs Section */}
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">
                            <label className="text-foreground">Monthly Investment</label>
                            <span className="text-emerald-600 font-mono">{formatCurrency(monthlyInvestment)}</span>
                        </div>
                        <input
                            type="range"
                            min="500"
                            max="100000"
                            step="500"
                            value={monthlyInvestment}
                            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                            className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-emerald-500 my-2"
                        />
                        <input
                            type="number"
                            value={monthlyInvestment}
                            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
                            className="mt-2 p-3 bg-white border border-border rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">
                            <label className="text-foreground">Expected Return Rate (p.a)</label>
                            <span className="text-emerald-600">{expectedRate}%</span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="30"
                            step="0.5"
                            value={expectedRate}
                            onChange={(e) => setExpectedRate(Number(e.target.value))}
                            className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-emerald-500 my-2"
                        />
                        <input
                            type="number"
                            value={expectedRate}
                            onChange={(e) => setExpectedRate(Number(e.target.value))}
                            className="mt-2 p-3 bg-white border border-border rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between items-center text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">
                            <label className="text-foreground">Time Period (Years)</label>
                            <span className="text-emerald-600">{years} Yr</span>
                        </div>
                        <input
                            type="range"
                            min="1"
                            max="40"
                            value={years}
                            onChange={(e) => setYears(Number(e.target.value))}
                            className="w-full h-1.5 bg-muted rounded-lg appearance-none cursor-pointer accent-emerald-500 my-2"
                        />
                        <input
                            type="number"
                            value={years}
                            onChange={(e) => setYears(Number(e.target.value))}
                            className="mt-2 p-3 bg-white border border-border rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
                        />
                    </div>
                </div>

                {/* Results Section */}
                <div className="flex flex-col gap-6 justify-center bg-muted/20 p-6 md:p-8 rounded-[2rem] border border-border/50">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-muted/30 rounded-2xl border border-border/50">
                            <span className="text-sm text-muted-foreground">Invested Amount</span>
                            <span className="font-bold text-foreground">{formatCurrency(results.totalInvestment)}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-muted/30 rounded-2xl border border-border/50">
                            <span className="text-sm text-muted-foreground">Est. Returns</span>
                            <span className="font-bold text-emerald-500">{formatCurrency(results.estimatedReturns)}</span>
                        </div>
                        <div className="flex justify-between items-center p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                            <span className="text-lg font-bold text-foreground">Total Value</span>
                            <span className="text-2xl font-black text-emerald-600">{formatCurrency(results.futureValue)}</span>
                        </div>
                    </div>

                    <div className="p-4 bg-blue-500/5 rounded-2xl border border-blue-500/10 text-xs text-muted-foreground text-center">
                        Compounding works best when you stay invested for a long time. 
                        In {years} years, your wealth could potentially grow by {Math.round((results.estimatedReturns / results.totalInvestment) * 100)}%.
                    </div>
                </div>
            </div>
        </div>
    );
}