'use client';

import { useState } from 'react';
import { trackToolUsed } from '@/lib/ga4';
const Roman = require('roman-numerals-convert');

export function RomanNumeralConverterClient() {
    const [arabic, setArabic] = useState<string>('2024');
    const [roman, setRoman] = useState<string>('MMXXIV');

    const handleArabicChange = (val: string) => {
        setArabic(val);
        try {
            const num = parseInt(val);
            if (num > 0 && num < 4000) {
                setRoman(Roman.arabicToRoman(num));
            } else {
                setRoman('Invalid Range (1-3999)');
            }
        } catch (e) {
            setRoman('Error');
        }
    };

    const handleRomanChange = (val: string) => {
        const upper = val.toUpperCase();
        setRoman(upper);
        try {
            const num = Roman.romanToArabic(upper);
            if (num) {
                setArabic(num.toString());
            } else {
                setArabic('Invalid Roman');
            }
        } catch (e) {
            setArabic('Error');
        }
    };

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm items-center">
                <div className="space-y-8">
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Standard Number (Arabic)</label>
                        <input
                            type="number"
                            value={arabic}
                            onChange={(e) => handleArabicChange(e.target.value)}
                            className="w-full p-6 bg-muted/30 border border-border rounded-[1.5rem] text-3xl font-black focus:ring-2 focus:ring-orange-500/20 outline-none"
                        />
                    </div>
                    <div className="flex justify-center">
                        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground">⇄</div>
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Roman Numeral</label>
                        <input
                            type="text"
                            value={roman}
                            onChange={(e) => handleRomanChange(e.target.value)}
                            className="w-full p-6 bg-muted/30 border border-border rounded-[1.5rem] text-3xl font-black font-serif focus:ring-2 focus:ring-orange-500/20 outline-none"
                        />
                    </div>
                </div>

                <div className="flex flex-col gap-6 justify-center bg-orange-500/5 p-10 rounded-[2rem] border border-orange-500/10 text-center min-h-[350px]">
                    <span className="text-[11px] font-bold text-orange-600 uppercase tracking-widest">Historical Fact</span>
                    <div className="space-y-4">
                        <div className="p-6 bg-white border border-orange-500/10 rounded-2xl shadow-sm italic text-muted-foreground text-sm leading-relaxed">
                            "The Roman numeral system does not include a symbol for zero (0). It was developed in ancient Rome for trade and census purposes, using letters from the Latin alphabet."
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}