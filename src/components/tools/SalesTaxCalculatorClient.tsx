'use client';

import { useState } from 'react';
import { trackToolUsed } from '@/lib/ga4';

export function SalesTaxCalculatorClient() {
    const [amount, setAmount] = useState<number>(1000);
    const [taxRate, setTaxRate] = useState<number>(7.5);

    const taxAmount = (amount * taxRate) / 100;
    const total = amount + taxAmount;

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm items-center">
                <div className="flex flex-col gap-8">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Net Amount (Before Tax)</label>
                            <input type="number" value={amount} onChange={(e) => setAmount(Number(e.target.value))} className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold outline-none focus:ring-2 focus:ring-orange-500/20" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Sales Tax Rate (%)</label>
                            <input type="number" step="0.1" value={taxRate} onChange={(e) => setTaxRate(Number(e.target.value))} className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold outline-none focus:ring-2 focus:ring-orange-500/20" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 justify-center bg-orange-500/5 p-8 rounded-[2rem] border border-orange-500/10 min-h-[300px]">
                    <div className="text-center mb-2">
                        <span className="text-[11px] font-bold text-orange-600 uppercase tracking-widest">Gross Total</span>
                        <div className="text-6xl font-black text-foreground mt-2">
                            {total.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </div>
                    </div>
                    <div className="p-4 bg-white border border-orange-500/10 rounded-xl text-center shadow-sm">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Tax Collected</span>
                        <span className="text-xl font-black text-orange-600">{taxAmount.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}