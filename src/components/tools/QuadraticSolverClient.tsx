'use client';

import { useState, useMemo } from 'react';
import { trackToolUsed } from '@/lib/ga4';
import * as math from 'mathjs';

export function QuadraticSolverClient() {
    const [a, setA] = useState<number>(1);
    const [b, setB] = useState<number>(5);
    const [c, setC] = useState<number>(6);

    const stats = useMemo(() => {
        const D = b * b - 4 * a * c;
        const vertexX = -b / (2 * a);
        const vertexY = a * vertexX * vertexX + b * vertexX + c;

        let roots: string[] = [];
        if (D > 0) {
            const x1 = (-b + Math.sqrt(D)) / (2 * a);
            const x2 = (-b - Math.sqrt(D)) / (2 * a);
            roots = [x1.toFixed(4), x2.toFixed(4)];
        } else if (D === 0) {
            roots = [(-b / (2 * a)).toFixed(4)];
        } else {
            const real = (-b / (2 * a)).toFixed(4);
            const imag = (Math.sqrt(-D) / (2 * a)).toFixed(4);
            roots = [`${real} + ${imag}i`, `${real} - ${imag}i`];
        }

        return {
            discriminant: D,
            vertex: `(${vertexX.toFixed(2)}, ${vertexY.toFixed(2)})`,
            roots,
            type: D > 0 ? 'Two Real Roots' : D === 0 ? 'One Real Root' : 'Two Complex Roots'
        };
    }, [a, b, c]);

    return (
        <div className="w-full max-w-4xl mx-auto flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm items-start">
                <div className="flex flex-col gap-6">
                    <div className="text-center p-6 bg-muted/30 rounded-2xl border border-border/50">
                        <div className="text-2xl font-mono font-black italic">
                            {a}x² + {b < 0 ? `- ${Math.abs(b)}` : `+ ${b}`}x + {c < 0 ? `- ${Math.abs(c)}` : c} = 0
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest text-center block">a</label>
                            <input type="number" value={a} onChange={(e) => setA(Number(e.target.value))} className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold text-center focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest text-center block">b</label>
                            <input type="number" value={b} onChange={(e) => setB(Number(e.target.value))} className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold text-center focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest text-center block">c</label>
                            <input type="number" value={c} onChange={(e) => setC(Number(e.target.value))} className="w-full p-4 bg-muted/30 border border-border rounded-2xl text-lg font-bold text-center focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 outline-none" />
                        </div>
                    </div>
                </div>

                <div className="flex flex-col gap-4 justify-center bg-orange-500/5 p-8 rounded-[2rem] border border-orange-500/10 min-h-[350px]">
                    <div className="space-y-4">
                        <div className="flex justify-between items-center p-4 bg-white border border-orange-500/10 rounded-2xl">
                            <span className="text-xs font-bold text-muted-foreground uppercase">Roots ({stats.type})</span>
                            <div className="flex flex-col items-end gap-1">
                                {stats.roots.map((r, i) => (
                                    <span key={i} className="font-black text-foreground">{r}</span>
                                ))}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 bg-white border border-orange-500/10 rounded-2xl text-center">
                                <span className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Discriminant</span>
                                <span className="font-black text-xl">{stats.discriminant}</span>
                            </div>
                            <div className="p-4 bg-white border border-orange-500/10 rounded-2xl text-center">
                                <span className="text-[10px] font-bold text-muted-foreground uppercase block mb-1">Vertex (h, k)</span>
                                <span className="font-black text-xl">{stats.vertex}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}