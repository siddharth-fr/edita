'use client';

import { useState } from 'react';
import { trackToolUsed } from '@/lib/ga4';
import nerdamer from 'nerdamer';
import 'nerdamer/Solve';

export function EquationSolverClient() {
    const [equation, setEquation] = useState('2x^2 + 5x - 3 = 0');
    const [variable, setVariable] = useState('x');

    const result = (() => {
        if (!equation) return null;
        try {
            // Check if it's an equality or expression
            const eqToSolve = equation.includes('=') ? equation : `${equation}=0`;
            const solutions = nerdamer.solve(eqToSolve, variable);
            return {
                solutions: solutions.toString().replace(/[\[\]]/g, '').split(','),
                latex: solutions.toTeX()
            };
        } catch (e) {
            return { error: 'Computation error or invalid syntax' };
        }
    })();

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm items-start">
                <div className="flex flex-col gap-8">
                    <div className="space-y-4">
                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Equation to Solve</label>
                            <input
                                type="text"
                                value={equation}
                                onChange={(e) => setEquation(e.target.value)}
                                placeholder="e.g., x^2 - 4 = 0"
                                className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-mono focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all outline-none"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Variable (solve for)</label>
                            <input
                                type="text"
                                value={variable}
                                onChange={(e) => setVariable(e.target.value)}
                                className="w-24 p-4 bg-muted/30 border border-border rounded-2xl text-lg font-mono focus:ring-2 focus:ring-rose-500/20 focus:border-rose-500 transition-all outline-none text-center"
                            />
                        </div>
                    </div>

                    <div className="p-5 bg-blue-500/5 rounded-2xl border border-blue-500/10 text-xs text-muted-foreground">
                        <p className="font-bold mb-1">Tips:</p>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Use ^ for powers: x^2</li>
                            <li>Include multiplication: 2*x</li>
                            <li>You can type the expression alone (assumes = 0)</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-6 justify-center bg-rose-500/5 p-8 rounded-[2rem] border border-rose-500/10 min-h-[300px]">
                    <div className="text-center space-y-6">
                        <span className="text-[11px] font-bold text-rose-600 uppercase tracking-widest">Solutions for {variable}</span>
                        <div className="space-y-4">
                            {'error' in (result || {}) ? (
                                <div className="p-6 bg-white border border-rose-500/20 rounded-2xl text-rose-500 font-bold">
                                    {result && 'error' in result ? result.error : ''}
                                </div>
                            ) : result?.solutions ? (
                                result.solutions.map((sol, i) => (
                                    <div key={i} className="p-6 bg-white border border-rose-500/20 rounded-2xl shadow-sm">
                                        <div className="text-2xl font-black text-foreground">{sol.trim()}</div>
                                    </div>
                                ))
                            ) : (
                                <div className="p-6 bg-white border border-rose-500/20 rounded-2xl italic text-muted-foreground">
                                    No solutions found
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}