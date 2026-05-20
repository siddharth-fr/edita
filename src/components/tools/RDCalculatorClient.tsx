'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/Button';
import { trackToolUsed } from '@/lib/ga4';

export function RDCalculatorClient() {
    const [monthlyDeposit, setMonthlyDeposit] = useState<number>(5000);
    const [rate, setRate] = useState<number>(6.5);
    const [years, setYears] = useState<number>(2);

    const results = useMemo(() => {
        const P = monthlyDeposit;
        const R = rate / 100;
        const n = 4; // Quarterly compounding
        const t = years;

        // RD Maturity Value Formula
        // M = P * [( (1 + r/n)^(n*t) - 1 ) / ( 1 - (1 + r/n)^(-1/3) )]
        // Approx: Sum of all monthly deposits + compound interest on each
        let maturityValue = 0;
        const totalMonths = t * 12;
        for (let i = 1; i <= totalMonths; i++) {
            // Each monthly installment earns interest for the remaining period
            // t_i = i/12
            maturityValue += P * Math.pow(1 + R / n, n * (i / 12));
        }

        const totalInvestment = P * totalMonths;
        const interestEarned = maturityValue - totalInvestment;

        return {
            totalInvestment,
            interestEarned,
            maturityValue
        };
    }, [monthlyDeposit, rate, years]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0,
        }).format(amount);
    };

    return (
        <div className="w-full flex flex-col gap-8 max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm items-start">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Monthly Deposit</label>
                        <input
                            type="number"
                            value={monthlyDeposit}
                            onChange={(e) => setMonthlyDeposit(Number(e.target.value))}
                            className="p-3 bg-white border border-border rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Interest Rate (% p.a.)</label>
                        <input
                            type="number"
                            step="0.1"
                            value={rate}
                            onChange={(e) => setRate(Number(e.target.value))}
                            className="p-3 bg-white border border-border rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Duration (Years)</label>
                        <input
                            type="number"
                            value={years}
                            onChange={(e) => setYears(Number(e.target.value))}
                            className="p-3 bg-white border border-border rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-8 justify-center bg-muted/20 p-6 md:p-8 rounded-[2rem] border border-border/50">
                    <div className="space-y-4 w-full">
                        <div className="flex justify-between items-center p-4 bg-white rounded-2xl border border-border/50 shadow-sm">
                            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Amount Invested</span>
                            <span className="font-bold text-foreground font-mono">{formatCurrency(results.totalInvestment)}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-2xl border border-border/50 shadow-sm">
                            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Interest Earned</span>
                            <span className="font-bold text-emerald-500 font-mono">{formatCurrency(results.interestEarned)}</span>
                        </div>
                        <div className="flex flex-col gap-2 p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                            <span className="text-[11px] font-bold text-emerald-800/60 uppercase tracking-widest">Total Maturity</span>
                            <span className="text-3xl font-black text-emerald-600 font-mono leading-none">{formatCurrency(results.maturityValue)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
