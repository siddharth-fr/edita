'use client';

import { useState } from 'react';
import { trackToolUsed } from '@/lib/ga4';

export function DiscountCalculatorClient() {
    const [price, setPrice] = useState<number>(1000);
    const [discount, setDiscount] = useState<number>(20);

    const savings = (price * discount) / 100;
    const finalPrice = price - savings;

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm items-center">
                <div className="flex flex-col gap-8">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Original Price</label>
                            <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold outline-none focus:ring-2 focus:ring-rose-500/20" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Discount (%)</label>
                            <input type="number" value={discount} onChange={(e) => setDiscount(Number(e.target.value))} className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold outline-none focus:ring-2 focus:ring-rose-500/20" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 justify-center bg-rose-500/5 p-8 rounded-[2rem] border border-rose-500/10 min-h-[300px]">
                    <div className="text-center mb-2">
                        <span className="text-[11px] font-bold text-rose-600 uppercase tracking-widest">Final Price</span>
                        <div className="text-6xl font-black text-foreground mt-2">
                            {finalPrice.toLocaleString('en-US')}
                        </div>
                    </div>
                    <div className="p-4 bg-white border border-rose-500/10 rounded-xl text-center shadow-sm">
                        <span className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Total Savings</span>
                        <span className="text-xl font-black text-rose-600">{savings.toLocaleString('en-US')}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}