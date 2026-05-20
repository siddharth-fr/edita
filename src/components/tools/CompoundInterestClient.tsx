'use client';

import { useState, useMemo } from 'react';
import { Button } from '@/components/ui/Button';
import { trackToolUsed } from '@/lib/ga4';
import { ChevronDown } from 'lucide-react';

export function CompoundInterestClient() {
    const [principal, setPrincipal] = useState<number>(100000);
    const [rate, setRate] = useState<number>(10);
    const [years, setYears] = useState<number>(10);
    const [frequency, setFrequency] = useState<number>(12); // Default monthly
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const FREQUENCY_OPTIONS = [
        { value: 1, label: 'Yearly' },
        { value: 4, label: 'Quarterly' },
        { value: 12, label: 'Monthly' },
        { value: 365, label: 'Daily' },
    ];

    const results = useMemo(() => {
        const P = principal;
        const r = rate / 100;
        const n = frequency;
        const t = years;

        // Compound Interest Formula: A = P(1 + r/n)^(nt)
        const totalValue = P * Math.pow(1 + r / n, n * t);
        const interestEarned = totalValue - P;

        return {
            principal: P,
            interestEarned,
            totalValue
        };
    }, [principal, rate, years, frequency]);

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
                        <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Initial Principal</label>
                        <input
                            type="number"
                            value={principal}
                            onChange={(e) => setPrincipal(Number(e.target.value))}
                            className="p-3 bg-white border border-border rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Interest Rate (Annual %)</label>
                        <input
                            type="number"
                            value={rate}
                            onChange={(e) => setRate(Number(e.target.value))}
                            className="p-3 bg-white border border-border rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
                        />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Years</label>
                            <input
                                type="number"
                                value={years}
                                onChange={(e) => setYears(Number(e.target.value))}
                                className="p-3 bg-white border border-border rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Compounding</label>
                            <div className="relative">
                                <button
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="w-full p-3 bg-white border border-border rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm flex items-center justify-between"
                                >
                                    {FREQUENCY_OPTIONS.find(o => o.value === frequency)?.label}
                                    <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {isDropdownOpen && (
                                    <>
                                        <div className="fixed inset-0 z-10" onClick={() => setIsDropdownOpen(false)} />
                                        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-border rounded-xl shadow-xl z-20 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
                                            {FREQUENCY_OPTIONS.map((opt) => (
                                                <button
                                                    key={opt.value}
                                                    onClick={() => {
                                                        setFrequency(opt.value);
                                                        setIsDropdownOpen(false);
                                                    }}
                                                    className={`w-full p-3 text-left text-sm font-bold hover:bg-muted transition-colors ${frequency === opt.value ? 'text-emerald-600 bg-emerald-50' : 'text-foreground'}`}
                                                >
                                                    {opt.label}
                                                </button>
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-8 justify-center bg-muted/20 p-6 md:p-8 rounded-[2rem] border border-border/50">
                    <div className="space-y-4 w-full">
                        <div className="flex justify-between items-center p-4 bg-white rounded-2xl border border-border/50 shadow-sm">
                            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Initial Principal</span>
                            <span className="font-bold text-foreground font-mono">{formatCurrency(results.principal)}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-2xl border border-border/50 shadow-sm">
                            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Est. Interest</span>
                            <span className="font-bold text-emerald-500 font-mono">{formatCurrency(results.interestEarned)}</span>
                        </div>
                        <div className="flex flex-col gap-2 p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                            <span className="text-[11px] font-bold text-emerald-800/60 uppercase tracking-widest">Maturity Value</span>
                            <span className="text-3xl font-black text-emerald-600 font-mono leading-none">{formatCurrency(results.totalValue)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
