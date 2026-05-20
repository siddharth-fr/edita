'use client';

import { useState } from 'react';
import { trackToolUsed } from '@/lib/ga4';

export function StandardCalculatorClient() {
    const [display, setDisplay] = useState('0');
    const [expression, setExpression] = useState('');

    const handleNumber = (num: string) => {
        if (display === '0') {
            setDisplay(num);
        } else {
            setDisplay(display + num);
        }
        trackToolUsed('Standard Calculator');
    };

    const handleOperator = (op: string) => {
        setExpression(display + ' ' + op + ' ');
        setDisplay('0');
    };

    const calculate = () => {
        try {
            const finalExpression = expression + display;
            // eslint-disable-next-line no-eval
            const result = eval(finalExpression.replace(/×/g, '*').replace(/÷/g, '/'));
            setDisplay(String(result));
            setExpression('');
        } catch (error) {
            setDisplay('Error');
        }
    };

    const clear = () => {
        setDisplay('0');
        setExpression('');
    };

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-card p-6 md:p-8 rounded-[2.5rem] border border-border shadow-sm">
                <div className="mb-6 bg-muted/30 p-6 rounded-2xl border border-border/50 text-right">
                    <div className="text-xs text-muted-foreground h-5 mb-1">{expression}</div>
                    <div className="text-3xl font-black truncate">{display}</div>
                </div>

                <div className="grid grid-cols-4 gap-3">
                    <button onClick={clear} className="col-span-2 p-4 bg-rose-500/10 text-rose-600 rounded-2xl font-bold hover:bg-rose-500/20 transition-colors">AC</button>
                    <button onClick={() => handleOperator('/')} className="p-4 bg-blue-500/10 text-blue-600 rounded-2xl font-bold hover:bg-blue-500/20 transition-colors">÷</button>
                    <button onClick={() => handleOperator('*')} className="p-4 bg-blue-500/10 text-blue-600 rounded-2xl font-bold hover:bg-blue-500/20 transition-colors">×</button>

                    {[7, 8, 9].map(n => (
                        <button key={n} onClick={() => handleNumber(String(n))} className="p-4 bg-muted/50 rounded-2xl font-bold hover:bg-muted transition-colors">{n}</button>
                    ))}
                    <button onClick={() => handleOperator('-')} className="p-4 bg-blue-500/10 text-blue-600 rounded-2xl font-bold hover:bg-blue-500/20 transition-colors">-</button>

                    {[4, 5, 6].map(n => (
                        <button key={n} onClick={() => handleNumber(String(n))} className="p-4 bg-muted/50 rounded-2xl font-bold hover:bg-muted transition-colors">{n}</button>
                    ))}
                    <button onClick={() => handleOperator('+')} className="p-4 bg-blue-500/10 text-blue-600 rounded-2xl font-bold hover:bg-blue-500/20 transition-colors">+</button>

                    {[1, 2, 3].map(n => (
                        <button key={n} onClick={() => handleNumber(String(n))} className="p-4 bg-muted/50 rounded-2xl font-bold hover:bg-muted transition-colors">{n}</button>
                    ))}
                    <button onClick={calculate} className="row-span-2 p-4 bg-emerald-500 text-white rounded-2xl font-black hover:bg-emerald-600 transition-colors shadow-lg shadow-emerald-500/20">=</button>

                    <button onClick={() => handleNumber('0')} className="col-span-2 p-4 bg-muted/50 rounded-2xl font-bold hover:bg-muted transition-colors">0</button>
                    <button onClick={() => handleNumber('.')} className="p-4 bg-muted/50 rounded-2xl font-bold hover:bg-muted transition-colors">.</button>
                </div>
            </div>
        </div>
    );
}