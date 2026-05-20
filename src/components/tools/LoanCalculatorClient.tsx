'use client';

import { useState } from 'react';
import { trackToolUsed } from '@/lib/ga4';

export function LoanCalculatorClient() {
    const [amount, setAmount] = useState<number>(100000);
    const [rate, setRate] = useState<number>(8.5);
    const [tenure, setTenure] = useState<number>(5);

    const monthlyRate = rate / 12 / 100;
    const months = tenure * 12;
    const emi = (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) / (Math.pow(1 + monthlyRate, months) - 1);
    const totalPayment = emi * months;
    const totalInterest = totalPayment - amount;

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm items-center">
                <div className="flex flex-col gap-8">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Loan Amount</label>
                            <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold outline-none focus:ring-2 focus:ring-emerald-500/20" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Interest Rate (%)</label>
                            <input type="number" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold outline-none focus:ring-2 focus:ring-emerald-500/20" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Tenure (Years)</label>
                            <input type="number" value={tenure} onChange={(e) => setTenure(Number(e.target.value))} className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold outline-none focus:ring-2 focus:ring-emerald-500/20" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 justify-center bg-emerald-500/5 p-8 rounded-[2rem] border border-emerald-500/10 min-h-[350px]">
                    <div className="text-center mb-4">
                        <span className="text-[11px] font-bold text-emerald-600 uppercase tracking-widest">Monthly EMI</span>
                        <div className="text-5xl font-black text-foreground mt-2">
                            {emi.toLocaleString('en-US', { maximumFractionDigits: 0 })}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                         <div className="p-4 bg-white border border-border/50 rounded-xl text-center">
                            <span className="text-[9px] font-bold text-muted-foreground uppercase block mb-1">Total Interest</span>
                            <span className="font-extrabold text-emerald-600">{totalInterest.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                        </div>
                        <div className="p-4 bg-white border border-border/50 rounded-xl text-center">
                            <span className="text-[9px] font-bold text-muted-foreground uppercase block mb-1">Total Payment</span>
                            <span className="font-extrabold text-foreground">{totalPayment.toLocaleString('en-US', { maximumFractionDigits: 0 })}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}