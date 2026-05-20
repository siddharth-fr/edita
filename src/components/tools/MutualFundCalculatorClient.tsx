'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/Button';
import { trackToolUsed } from '@/lib/ga4';

export function MutualFundCalculatorClient() {
    const [type, setType] = useState<'sip' | 'lumpsum'>('sip');
    const [amount, setAmount] = useState<number>(5000);
    const [rate, setRate] = useState<number>(12);
    const [years, setYears] = useState<number>(10);

    const results = useMemo(() => {
        if (type === 'sip') {
            const P = amount;
            const i = rate / 100 / 12;
            const n = years * 12;
            const totalInvestment = P * n;
            const futureValue = P * ((Math.pow(1 + i, n) - 1) / i) * (1 + i);
            return { totalInvestment, estimatedReturns: futureValue - totalInvestment, futureValue };
        } else {
            const P = amount;
            const r = rate / 100;
            const t = years;
            const futureValue = P * Math.pow(1 + r, t);
            return { totalInvestment: P, estimatedReturns: futureValue - P, futureValue };
        }
    }, [type, amount, rate, years]);

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
                    <div className="flex p-1.5 bg-muted/50 rounded-2xl gap-1.5 border border-border/50">
                        <button 
                            onClick={() => setType('sip')}
                            className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 ${type === 'sip' ? 'bg-white text-emerald-600 shadow-sm border border-emerald-100' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            SIP
                        </button>
                        <button 
                            onClick={() => setType('lumpsum')}
                            className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all duration-300 ${type === 'lumpsum' ? 'bg-white text-emerald-600 shadow-sm border border-emerald-100' : 'text-muted-foreground hover:text-foreground'}`}
                        >
                            Lumpsum
                        </button>
                    </div>

                    <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">{type === 'sip' ? 'Monthly Investment' : 'Total Investment'}</label>
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(Number(e.target.value))}
                            className="p-3 bg-white border border-border rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Expected Return Rate (% p.a.)</label>
                        <input
                            type="number"
                            value={rate}
                            onChange={(e) => setRate(Number(e.target.value))}
                            className="p-3 bg-white border border-border rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Time Period (Years)</label>
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
                            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Total Invested</span>
                            <span className="font-bold text-foreground font-mono">{formatCurrency(results.totalInvestment)}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-2xl border border-border/50 shadow-sm">
                            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Est. Returns</span>
                            <span className="font-bold text-emerald-500 font-mono">{formatCurrency(results.estimatedReturns)}</span>
                        </div>
                        <div className="flex flex-col gap-2 p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                            <span className="text-[11px] font-bold text-emerald-800/60 uppercase tracking-widest">Total Gain</span>
                            <span className="text-3xl font-black text-emerald-600 font-mono leading-none">{formatCurrency(results.futureValue)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
