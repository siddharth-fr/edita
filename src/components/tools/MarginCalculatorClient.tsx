'use client';

import { useState } from 'react';
import { trackToolUsed } from '@/lib/ga4';

export function MarginCalculatorClient() {
    const [cost, setCost] = useState<number>(100);
    const [revenue, setRevenue] = useState<number>(150);

    const profit = revenue - cost;
    const margin = (profit / revenue) * 100;
    const markup = (profit / cost) * 100;

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm items-center">
                <div className="flex flex-col gap-8">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Cost Price</label>
                            <input type="number" value={cost} onChange={(e) => setCost(Number(e.target.value))} className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold outline-none focus:ring-2 focus:ring-blue-500/20" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Revenue / Selling Price</label>
                            <input type="number" value={revenue} onChange={(e) => setRevenue(Number(e.target.value))} className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold outline-none focus:ring-2 focus:ring-blue-500/20" />
                        </div>
                    </div>
                </div>

                <div className="bg-blue-500/5 p-8 rounded-[2rem] border border-blue-500/10 grid grid-cols-1 gap-4">
                    <div className="text-center p-6 bg-white border border-blue-500/20 rounded-2xl shadow-sm">
                        <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest block mb-2">Gross Margin</span>
                        <div className="text-5xl font-black text-foreground">{margin.toFixed(2)}%</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 bg-white border border-border/50 rounded-xl text-center shadow-sm">
                            <span className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Profit</span>
                            <span className="text-xl font-black text-blue-600">${profit.toLocaleString()}</span>
                        </div>
                        <div className="p-4 bg-white border border-border/50 rounded-xl text-center shadow-sm">
                            <span className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Markup</span>
                            <span className="text-xl font-black text-foreground">{markup.toFixed(1)}%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}