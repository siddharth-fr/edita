'use client';

import { useState } from 'react';
import { trackToolUsed } from '@/lib/ga4';
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
dayjs.extend(duration);

export function AgeCalculatorClient() {
    const [birthDate, setBirthDate] = useState<string>('2000-01-01');
    const [targetDate, setTargetDate] = useState<string>(dayjs().format('YYYY-MM-DD'));

    const result = (() => {
        if (!birthDate) return null;
        const start = dayjs(birthDate);
        const end = dayjs(targetDate);
        if (!start.isValid() || !end.isValid()) return null;

        const diff = dayjs.duration(end.diff(start));
        
        return {
            years: Math.floor(diff.asYears()),
            months: diff.months(),
            days: diff.days(),
            totalDays: Math.floor(diff.asDays()),
            totalWeeks: Math.floor(diff.asWeeks()),
            totalHours: Math.floor(diff.asHours())
        };
    })();

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm items-center">
                <div className="flex flex-col gap-8">
                    <div className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Date of Birth</label>
                            <input type="date" value={birthDate} onChange={(e) => setBirthDate(e.target.value)} className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold outline-none focus:ring-2 focus:ring-emerald-500/20" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Age at Date of</label>
                            <input type="date" value={targetDate} onChange={(e) => setTargetDate(e.target.value)} className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold outline-none focus:ring-2 focus:ring-emerald-500/20" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-6 justify-center bg-emerald-500/5 p-8 rounded-[2rem] border border-emerald-500/10 min-h-[350px]">
                    {result ? (
                        <div className="space-y-4">
                            <div className="p-8 bg-white border border-emerald-500/20 rounded-2xl shadow-sm text-center">
                                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-2">Detailed Age</span>
                                <div className="text-3xl font-black text-foreground">
                                    {result.years} <span className="text-xl text-muted-foreground">Y</span> {result.months} <span className="text-xl text-muted-foreground">M</span> {result.days} <span className="text-xl text-muted-foreground">D</span>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-4 bg-white border border-border/50 rounded-xl text-center">
                                    <span className="text-[9px] font-bold text-muted-foreground uppercase block mb-1">Total Weeks</span>
                                    <span className="font-bold">{result.totalWeeks.toLocaleString()}</span>
                                </div>
                                <div className="p-4 bg-white border border-border/50 rounded-xl text-center">
                                    <span className="text-[9px] font-bold text-muted-foreground uppercase block mb-1">Total Hours</span>
                                    <span className="font-bold text-xs">{result.totalHours.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="text-center text-muted-foreground italic">Select dates to see result</div>
                    )}
                </div>
            </div>
        </div>
    );
}