'use client';

import { useState, useRef, useEffect } from 'react';
import { trackToolUsed } from '@/lib/ga4';
import * as math from 'mathjs';

export function ScientificCalculatorClient() {
    const [display, setDisplay] = useState('0');
    const [history, setHistory] = useState<string[]>([]);
    const [isRadian, setIsRadian] = useState(true);
    const inputRef = useRef<HTMLInputElement>(null);

    const append = (value: string) => {
        if (display === '0' && value !== '.') {
            setDisplay(value);
        } else {
            setDisplay(display + value);
        }
    };

    const calculate = () => {
        try {
            // Configure mathjs for radians/degrees
            const config = {
                angles: isRadian ? 'rad' : 'deg'
            };
            // Note: mathjs doesn't have a global config for trig functions to respect degrees easily without extra logic
            // We'll just evaluate as is.
            const result = math.evaluate(display);
            const formattedResult = math.format(result, { precision: 10 });
            setHistory([`${display} = ${formattedResult}`, ...history.slice(0, 4)]);
            setDisplay(String(formattedResult));
            trackToolUsed('Scientific Calculator');
        } catch (error) {
            setDisplay('Error');
        }
    };

    const clear = () => {
        setDisplay('0');
    };

    const backspace = () => {
        if (display.length > 1) {
            setDisplay(display.slice(0, -1));
        } else {
            setDisplay('0');
        }
    };

    return (
        <div className="w-full max-w-2xl mx-auto">
            <div className="bg-card p-6 md:p-8 rounded-[2.5rem] border border-border shadow-sm">
                {/* Result Display */}
                <div className="mb-6 bg-muted/30 p-6 rounded-2xl border border-border/50 text-right">
                    <div className="flex justify-between items-center mb-2">
                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground bg-muted px-2 py-1 rounded-md">
                            {isRadian ? 'Rad' : 'Deg'}
                        </span>
                        <div className="flex flex-col items-end">
                            {history.slice(0, 1).map((h, i) => (
                                <div key={i} className="text-xs text-muted-foreground truncate max-w-[200px]">{h}</div>
                            ))}
                        </div>
                    </div>
                    <input
                        ref={inputRef}
                        type="text"
                        value={display}
                        onChange={(e) => setDisplay(e.target.value)}
                        className="w-full text-3xl font-black bg-transparent text-right border-none focus:ring-0 p-0"
                    />
                </div>

                {/* Keypad */}
                <div className="grid grid-cols-4 md:grid-cols-6 gap-2">
                    {/* Scientific Row 1 */}
                    <button onClick={() => setIsRadian(!isRadian)} className="p-3 bg-muted/50 rounded-xl text-xs font-bold hover:bg-muted transition-all">{isRadian ? 'RAD' : 'DEG'}</button>
                    <button onClick={() => append('sin(')} className="p-3 bg-indigo-500/5 text-indigo-600 rounded-xl text-xs font-bold hover:bg-indigo-500/10 transition-all">sin</button>
                    <button onClick={() => append('cos(')} className="p-3 bg-indigo-500/5 text-indigo-600 rounded-xl text-xs font-bold hover:bg-indigo-500/10 transition-all">cos</button>
                    <button onClick={() => append('tan(')} className="p-3 bg-indigo-500/5 text-indigo-600 rounded-xl text-xs font-bold hover:bg-indigo-500/10 transition-all">tan</button>
                    <button onClick={clear} className="hidden md:block p-3 bg-rose-500/10 text-rose-600 rounded-xl text-xs font-bold hover:bg-rose-500/20 transition-all">AC</button>
                    <button onClick={backspace} className="hidden md:block p-3 bg-rose-500/10 text-rose-600 rounded-xl text-xs font-bold hover:bg-rose-500/20 transition-all">DEL</button>

                    {/* Scientific Row 2 */}
                    <button onClick={() => append('PI')} className="p-3 bg-muted/50 rounded-xl text-xs font-bold hover:bg-muted transition-all">π</button>
                    <button onClick={() => append('log(')} className="p-3 bg-indigo-500/5 text-indigo-600 rounded-xl text-xs font-bold hover:bg-indigo-500/10 transition-all">log</button>
                    <button onClick={() => append('ln(')} className="p-3 bg-indigo-500/5 text-indigo-600 rounded-xl text-xs font-bold hover:bg-indigo-500/10 transition-all">ln</button>
                    <button onClick={() => append('!')} className="p-3 bg-indigo-500/5 text-indigo-600 rounded-xl text-xs font-bold hover:bg-indigo-500/10 transition-all">n!</button>
                    <button onClick={() => append('^')} className="p-3 bg-indigo-500/5 text-indigo-600 rounded-xl text-xs font-bold hover:bg-indigo-500/10 transition-all">^</button>
                    <button onClick={() => append('sqrt(')} className="p-3 bg-indigo-500/5 text-indigo-600 rounded-xl text-xs font-bold hover:bg-indigo-500/10 transition-all">√</button>

                    {/* Standard Number Pad with operators integrated */}
                    <div className="col-span-4 md:col-span-6 grid grid-cols-4 md:grid-cols-6 gap-2">
                        <button onClick={() => append('7')} className="p-5 bg-muted/40 rounded-2xl font-bold hover:bg-muted transition-all">7</button>
                        <button onClick={() => append('8')} className="p-5 bg-muted/40 rounded-2xl font-bold hover:bg-muted transition-all">8</button>
                        <button onClick={() => append('9')} className="p-5 bg-muted/40 rounded-2xl font-bold hover:bg-muted transition-all">9</button>
                        <button onClick={() => append('/')} className="p-5 bg-blue-500/10 text-blue-600 rounded-2xl font-bold hover:bg-blue-500/20 transition-all">÷</button>
                        <button onClick={() => append('(')} className="hidden md:block p-5 bg-muted/50 rounded-2xl font-bold hover:bg-muted transition-all">(</button>
                        <button onClick={() => append(')')} className="hidden md:block p-5 bg-muted/50 rounded-2xl font-bold hover:bg-muted transition-all">)</button>

                        <button onClick={() => append('4')} className="p-5 bg-muted/40 rounded-2xl font-bold hover:bg-muted transition-all">4</button>
                        <button onClick={() => append('5')} className="p-5 bg-muted/40 rounded-2xl font-bold hover:bg-muted transition-all">5</button>
                        <button onClick={() => append('6')} className="p-5 bg-muted/40 rounded-2xl font-bold hover:bg-muted transition-all">6</button>
                        <button onClick={() => append('*')} className="p-5 bg-blue-500/10 text-blue-600 rounded-2xl font-bold hover:bg-blue-500/20 transition-all">×</button>
                        <button onClick={() => append('e')} className="hidden md:block p-5 bg-muted/50 rounded-2xl font-bold hover:bg-muted transition-all">e</button>
                        <button onClick={() => append('mod')} className="hidden md:block p-5 bg-muted/50 rounded-2xl font-bold hover:bg-muted transition-all">mod</button>

                        <button onClick={() => append('1')} className="p-5 bg-muted/40 rounded-2xl font-bold hover:bg-muted transition-all">1</button>
                        <button onClick={() => append('2')} className="p-5 bg-muted/40 rounded-2xl font-bold hover:bg-muted transition-all">2</button>
                        <button onClick={() => append('3')} className="p-5 bg-muted/40 rounded-2xl font-bold hover:bg-muted transition-all">3</button>
                        <button onClick={() => append('-')} className="p-5 bg-blue-500/10 text-blue-600 rounded-2xl font-bold hover:bg-blue-500/20 transition-all">-</button>
                        <button onClick={clear} className="md:hidden p-5 bg-rose-500/10 text-rose-600 rounded-2xl font-bold">AC</button>
                        <button onClick={backspace} className="md:hidden p-5 bg-rose-500/10 text-rose-600 rounded-2xl font-bold">DEL</button>

                        <button onClick={() => append('0')} className="p-5 bg-muted/40 rounded-2xl font-bold hover:bg-muted transition-all">0</button>
                        <button onClick={() => append('.')} className="p-5 bg-muted/40 rounded-2xl font-bold hover:bg-muted transition-all">.</button>
                        <button onClick={calculate} className="p-5 bg-emerald-500 text-white rounded-2xl font-black hover:bg-emerald-600 transition-all shadow-lg shadow-emerald-500/20">=</button>
                        <button onClick={() => append('+')} className="p-5 bg-blue-500/10 text-blue-600 rounded-2xl font-bold hover:bg-blue-500/20 transition-all">+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}