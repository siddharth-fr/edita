'use client';

import { useState, useMemo } from 'react';
import { trackToolUsed } from '@/lib/ga4';
import * as math from 'mathjs';

export function MatrixCalculatorClient() {
    const [rows, setRows] = useState(2);
    const [cols, setCols] = useState(2);
    const [matrixA, setMatrixA] = useState<number[][]>([[1, 2], [3, 4]]);
    const [matrixB, setMatrixB] = useState<number[][]>([[5, 6], [7, 8]]);
    const [operation, setOperation] = useState<'add' | 'subtract' | 'multiply' | 'determinant' | 'inverse'>('add');

    const updateMatrix = (matrix: 'A' | 'B', r: number, c: number, val: string) => {
        const numVal = parseFloat(val) || 0;
        if (matrix === 'A') {
            const newMatrix = [...matrixA];
            newMatrix[r][c] = numVal;
            setMatrixA(newMatrix);
        } else {
            const newMatrix = [...matrixB];
            newMatrix[r][c] = numVal;
            setMatrixB(newMatrix);
        }
    };

    const handleDimensionChange = (r: number, c: number) => {
        setRows(r);
        setCols(c);
        setMatrixA(Array(r).fill(0).map(() => Array(c).fill(0)));
        setMatrixB(Array(r).fill(0).map(() => Array(c).fill(0)));
    };

    const result = useMemo(() => {
        try {
            switch (operation) {
                case 'add': return math.add(matrixA, matrixB);
                case 'subtract': return math.subtract(matrixA, matrixB);
                case 'multiply': return math.multiply(matrixA, matrixB);
                case 'determinant': return math.det(matrixA);
                case 'inverse': return math.inv(matrixA);
                default: return null;
            }
        } catch (e) {
            return 'Invalid Operation for these dimensions';
        }
    }, [matrixA, matrixB, operation]);

    return (
        <div className="w-full max-w-5xl mx-auto flex flex-col gap-8">
            <div className="bg-card p-6 md:p-10 rounded-[2.5rem] border border-border shadow-sm">
                <div className="flex flex-wrap gap-4 mb-8 items-center justify-between">
                    <div className="flex gap-2 bg-muted/50 p-1.5 rounded-2xl">
                        {[2, 3, 4].map(size => (
                            <button key={size} onClick={() => handleDimensionChange(size, size)} className={`px-4 py-2 rounded-xl text-xs font-bold ${rows === size ? 'bg-white text-cyan-600 shadow-sm' : 'text-muted-foreground'}`}>
                                {size}x{size}
                            </button>
                        ))}
                    </div>

                    <div className="flex gap-2 bg-muted/50 p-1.5 rounded-2xl">
                        {(['add', 'subtract', 'multiply', 'determinant', 'inverse'] as const).map(op => (
                            <button key={op} onClick={() => setOperation(op)} className={`px-3 py-2 rounded-xl text-[10px] uppercase font-bold tracking-wider ${operation === op ? 'bg-white text-cyan-600 shadow-sm' : 'text-muted-foreground'}`}>
                                {op}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        <div>
                            <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-4">Matrix A</span>
                            <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
                                {matrixA.map((r, ri) => r.map((c, ci) => (
                                    <input key={`${ri}-${ci}`} type="number" value={matrixA[ri][ci]} onChange={(e) => updateMatrix('A', ri, ci, e.target.value)} className="w-full p-3 bg-muted/30 border border-border rounded-xl text-center font-mono focus:ring-2 focus:ring-cyan-500/20" />
                                )))}
                            </div>
                        </div>

                        {['add', 'subtract', 'multiply'].includes(operation) && (
                            <div>
                                <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest block mb-4">Matrix B</span>
                                <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${cols}, 1fr)` }}>
                                    {matrixB.map((r, ri) => r.map((c, ci) => (
                                        <input key={`${ri}-${ci}`} type="number" value={matrixB[ri][ci]} onChange={(e) => updateMatrix('B', ri, ci, e.target.value)} className="w-full p-3 bg-muted/30 border border-border rounded-xl text-center font-mono focus:ring-2 focus:ring-cyan-500/20" />
                                    )))}
                                </div>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-6 justify-center bg-cyan-500/5 p-8 rounded-[2rem] border border-cyan-500/10 min-h-[300px]">
                        <div className="text-center space-y-6">
                            <span className="text-[11px] font-bold text-cyan-600 uppercase tracking-widest">Result</span>
                            {typeof result === 'string' ? (
                                <div className="text-rose-500 font-bold p-4 bg-white rounded-xl border border-rose-500/20">{result}</div>
                            ) : typeof result === 'number' ? (
                                <div className="text-4xl font-black text-foreground">{result.toLocaleString()}</div>
                            ) : Array.isArray(result) ? (
                                <div className="grid gap-2" style={{ gridTemplateColumns: `repeat(${Array.isArray(result[0]) ? result[0].length : 1}, 1fr)` }}>
                                    {(result as any[]).map((r, ri) => (Array.isArray(r) ? r : [r]).map((c, ci) => (
                                        <div key={`${ri}-${ci}`} className="p-4 bg-white border border-cyan-500/20 rounded-xl font-mono font-bold text-center shadow-sm">
                                            {typeof c === 'number' ? c.toFixed(2) : String(c)}
                                        </div>
                                    )))}
                                </div>
                            ) : null}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}