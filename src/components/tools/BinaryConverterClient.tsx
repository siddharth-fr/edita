'use client';

import { useState } from 'react';
import { trackToolUsed } from '@/lib/ga4';

export function BinaryConverterClient() {
    const [value, setValue] = useState<string>('42');
    const [base, setBase] = useState<number>(10);

    const results = (() => {
        try {
            const num = parseInt(value, base);
            if (isNaN(num)) return null;
            return {
                decimal: num.toString(10),
                binary: num.toString(2),
                hex: num.toString(16).toUpperCase(),
                octal: num.toString(8)
            };
        } catch (e) {
            return null;
        }
    })();

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm items-start">
                <div className="flex flex-col gap-8">
                    <div className="flex bg-muted/50 p-1.5 rounded-2xl gap-1">
                        {[10, 2, 16, 8].map((b) => (
                            <button
                                key={b}
                                onClick={() => setBase(b)}
                                className={`flex-1 py-3 rounded-xl text-[10px] font-bold uppercase tracking-wider transition-all ${base === b ? 'bg-white text-indigo-600 shadow-sm' : 'text-muted-foreground'}`}
                            >
                                {b === 10 ? 'Decimal' : b === 2 ? 'Binary' : b === 16 ? 'Hex' : 'Octal'}
                            </button>
                        ))}
                    </div>

                    <div className="space-y-4">
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Input Value</label>
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-xl font-mono focus:ring-2 focus:ring-indigo-500/20 outline-none"
                        />
                    </div>
                </div>

                <div className="bg-indigo-500/5 p-8 rounded-[2rem] border border-indigo-500/10 grid grid-cols-1 gap-4">
                    <ConverterRow label="Decimal (Base 10)" value={results?.decimal || '---'} />
                    <ConverterRow label="Binary (Base 2)" value={results?.binary || '---'} />
                    <ConverterRow label="Hexadecimal (Base 16)" value={results?.hex || '---'} />
                    <ConverterRow label="Octal (Base 8)" value={results?.octal || '---'} />
                </div>
            </div>
        </div>
    );
}

function ConverterRow({ label, value }: { label: string, value: string }) {
    return (
        <div className="p-5 bg-white border border-indigo-500/10 rounded-2xl shadow-sm">
            <span className="text-[9px] font-bold text-muted-foreground uppercase tracking-widest block mb-1">{label}</span>
            <div className="text-lg font-black text-foreground break-all">{value}</div>
        </div>
    );
}