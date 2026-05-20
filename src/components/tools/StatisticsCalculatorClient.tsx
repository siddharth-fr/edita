'use client';

import { useState, useMemo } from 'react';
import { trackToolUsed } from '@/lib/ga4';
import * as ss from 'simple-statistics';

export function StatisticsCalculatorClient() {
    const [input, setInput] = useState<string>('12, 19, 3, 5, 2, 3, 10, 8');

    const stats = useMemo(() => {
        try {
            const data = input.split(/[,\s]+/).map(n => parseFloat(n)).filter(n => !isNaN(n));
            if (data.length === 0) return null;

            return {
                mean: ss.mean(data),
                median: ss.median(data),
                mode: ss.mode(data),
                variance: ss.variance(data),
                stdDev: ss.standardDeviation(data),
                min: ss.min(data),
                max: ss.max(data),
                sum: ss.sum(data),
                count: data.length
            };
        } catch (e) {
            return null;
        }
    }, [input]);

    return (
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm items-start">
                <div className="flex flex-col gap-6">
                    <div className="space-y-4">
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Enter Dataset (comma or space separated)</label>
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            rows={6}
                            className="w-full p-6 bg-muted/30 border border-border rounded-[1.5rem] text-lg font-mono focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all outline-none resize-none"
                            placeholder="e.g., 1, 2, 3, 4, 5"
                        />
                    </div>
                    <div className="p-5 bg-blue-500/5 rounded-2xl border border-blue-500/10 text-xs text-muted-foreground italic">
                        The tool automatically parses your input and calculates key descriptive statistics using the simple-statistics library.
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {stats ? (
                        <>
                            <StatCard label="Mean" value={stats.mean.toFixed(2)} color="blue" />
                            <StatCard label="Median" value={stats.median.toString()} color="blue" />
                            <StatCard label="Mode" value={String(stats.mode)} color="indigo" />
                            <StatCard label="Std Dev" value={stats.stdDev.toFixed(2)} color="indigo" />
                            <StatCard label="Variance" value={stats.variance.toFixed(2)} color="purple" />
                            <StatCard label="Count" value={stats.count.toString()} color="purple" />
                            <StatCard label="Sum" value={stats.sum.toString()} color="emerald" />
                            <StatCard label="Range" value={`${stats.min} - ${stats.max}`} color="emerald" />
                        </>
                    ) : (
                        <div className="col-span-2 flex items-center justify-center p-20 bg-muted/20 rounded-3xl border border-dashed border-border text-muted-foreground italic">
                            Enter valid numbers to see analysis
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

function StatCard({ label, value, color }: { label: string, value: string, color: string }) {
    return (
        <div className="p-6 bg-white border border-border/50 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <span className="text-[9px] font-black text-muted-foreground uppercase tracking-tighter mb-2 block">{label}</span>
            <div className="text-xl font-black text-foreground truncate">{value}</div>
        </div>
    );
}