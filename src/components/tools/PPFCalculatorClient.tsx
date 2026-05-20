'use client';

import { useState, useMemo } from 'react';
import { ChevronDown } from 'lucide-react';
import { trackToolUsed } from '@/lib/ga4';

export function PPFCalculatorClient() {
    const [yearlyInvestment, setYearlyInvestment] = useState<number>(150000);
    const [rate, setRate] = useState<number>(7.1); // Current PPF rate
    const [years, setYears] = useState<number>(15);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const yearOptions = [
        { label: '15 Years (Standard)', value: 15 },
        { label: '20 Years (5 Yr Ext)', value: 20 },
        { label: '25 Years (10 Yr Ext)', value: 25 },
        { label: '30 Years (15 Yr Ext)', value: 30 },
    ];

    const results = useMemo(() => {
        const P = yearlyInvestment;
        const r = rate / 100;
        const n = years;
        
        // PPF interest is calculated annually but compounded annually
        // FV = P [({(1+r)^n} - 1) / r] * (1+r)
        const totalInvestment = P * n;
        const futureValue = P * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
        const interestEarned = futureValue - totalInvestment;

        return {
            totalInvestment,
            interestEarned,
            futureValue
        };
    }, [yearlyInvestment, rate, years]);

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
                        <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Yearly Investment (Max 1.5L)</label>
                        <input
                            type="number"
                            max="150000"
                            value={yearlyInvestment}
                            onChange={(e) => setYearlyInvestment(Math.min(150000, Number(e.target.value)))}
                            className="p-3 bg-white border border-border rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Current Interest Rate (%)</label>
                        <input
                            type="number"
                            value={rate}
                            onChange={(e) => setRate(Number(e.target.value))}
                            className="p-3 bg-white border border-border rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm"
                        />
                    </div>
                    <div className="flex flex-col gap-2 relative">
                        <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Extension (Years)</label>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center justify-between p-3 bg-white border border-border rounded-xl text-sm font-bold focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all shadow-sm text-left"
                        >
                            {yearOptions.find(opt => opt.value === years)?.label}
                            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {isDropdownOpen && (
                            <div className="absolute top-[calc(100%+8px)] left-0 w-full bg-white border border-border rounded-2xl shadow-xl z-20 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
                                {yearOptions.map((opt) => (
                                    <button
                                        key={opt.value}
                                        onClick={() => {
                                            setYears(opt.value);
                                            setIsDropdownOpen(false);
                                        }}
                                        className={`w-full text-left p-4 text-sm font-bold transition-colors ${years === opt.value ? 'bg-emerald-50 text-emerald-600' : 'hover:bg-muted/50 text-muted-foreground hover:text-foreground'}`}
                                    >
                                        {opt.label}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                </div>

                <div className="flex flex-col gap-8 justify-center bg-muted/20 p-6 md:p-8 rounded-[2rem] border border-border/50">
                    <div className="space-y-4 w-full">
                        <div className="flex justify-between items-center p-4 bg-white rounded-2xl border border-border/50 shadow-sm">
                            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Main Principal</span>
                            <span className="font-bold text-foreground font-mono">{formatCurrency(results.totalInvestment)}</span>
                        </div>
                        <div className="flex justify-between items-center p-4 bg-white rounded-2xl border border-border/50 shadow-sm">
                            <span className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest">Total Interest</span>
                            <span className="font-bold text-emerald-500 font-mono">{formatCurrency(results.interestEarned)}</span>
                        </div>
                        <div className="flex flex-col gap-2 p-6 bg-emerald-500/10 rounded-2xl border border-emerald-500/20">
                            <span className="text-[11px] font-bold text-emerald-800/60 uppercase tracking-widest">Maturity Wealth</span>
                            <span className="text-3xl font-black text-emerald-600 font-mono leading-none">{formatCurrency(results.futureValue)}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
