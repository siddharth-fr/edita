'use client';

import { useState, useMemo } from 'react';
import { trackToolUsed } from '@/lib/ga4';
import convert from 'convert-units';

export function UnitConverterClient() {
    const [value, setValue] = useState<number>(1);
    const [measure, setMeasure] = useState<any>('length');
    const [fromUnit, setFromUnit] = useState<string>('m');
    const [toUnit, setToUnit] = useState<string>('ft');

    const measures = convert().measures();
    const units = useMemo(() => convert().possibilities(measure), [measure]);

    const result = useMemo(() => {
        try {
            return convert(value).from(fromUnit).to(toUnit);
        } catch (e) {
            return null;
        }
    }, [value, fromUnit, toUnit]);

    const handleMeasureChange = (m: string) => {
        setMeasure(m);
        const newUnits = convert().possibilities(m);
        setFromUnit(newUnits[0]);
        setToUnit(newUnits[1] || newUnits[0]);
    };

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
            <div className="bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm">
                <div className="flex bg-muted/50 p-1.5 rounded-2xl gap-1 mb-10 overflow-x-auto no-scrollbar">
                    {measures.map((m: string) => (
                        <button
                            key={m}
                            onClick={() => handleMeasureChange(m)}
                            className={`flex-none py-2 px-4 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all ${measure === m ? 'bg-white text-blue-600 shadow-sm' : 'text-muted-foreground'}`}
                        >
                            {m}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">From</label>
                            <div className="flex gap-2">
                                <input
                                    type="number"
                                    value={value}
                                    onChange={(e) => setValue(Number(e.target.value))}
                                    className="flex-1 p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold outline-none focus:ring-2 focus:ring-blue-500/20"
                                />
                                <select
                                    value={fromUnit}
                                    onChange={(e) => setFromUnit(e.target.value)}
                                    className="p-4 bg-muted/30 border border-border rounded-2xl text-sm font-bold outline-none"
                                >
                                    {units.map((u: string) => <option key={u} value={u}>{u}</option>)}
                                </select>
                            </div>
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">To</label>
                            <select
                                value={toUnit}
                                onChange={(e) => setToUnit(e.target.value)}
                                className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-sm font-bold outline-none"
                            >
                                {units.map((u: string) => <option key={u} value={u}>{u}</option>)}
                            </select>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 justify-center bg-blue-500/5 p-8 rounded-[2rem] border border-blue-500/10 text-center min-h-[250px]">
                        <span className="text-[11px] font-bold text-blue-600 uppercase tracking-widest">Result</span>
                        <div className="p-8 bg-white border border-blue-500/20 rounded-2xl shadow-sm">
                            <div className="text-4xl font-black text-foreground truncate">
                                {result !== null ? result.toLocaleString(undefined, { maximumFractionDigits: 6 }) : '---'}
                                <span className="text-lg text-muted-foreground ml-2 font-bold">{toUnit}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}