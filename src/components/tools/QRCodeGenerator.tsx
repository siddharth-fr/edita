'use client';

import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/Button';
import { Download, Languages, Palette, Settings2, Check, Copy, ChevronRight } from 'lucide-react';
import { trackToolUsed, trackFileDownloaded, trackConversion } from '@/lib/ga4';
import { useToast } from '@/hooks/useToast';
import type QRCodeStyling from 'qr-code-styling';

type ModuleStyle = 'square' | 'rounded';
type ExportFormat = 'png' | 'jpg';

export function QRCodeGenerator() {
    const [value, setValue] = useState('https://edita.tools');
    const [fgColor, setFgColor] = useState('#000000');
    const [bgColor, setBgColor] = useState('#FFFFFF');
    const [isTransparent, setIsTransparent] = useState(false);
    const [moduleStyle, setModuleStyle] = useState<ModuleStyle>('square');
    const [size, setSize] = useState(1024);
    const [exportFormat, setExportFormat] = useState<ExportFormat>('png');
    const [isCopying, setIsCopying] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    
    const qrRef = useRef<HTMLDivElement>(null);
    const qrCodeInstance = useRef<any>(null);
    const { success, error } = useToast();

    // Initialize/Update QR Code
    useEffect(() => {
        const initQRCode = async () => {
            if (typeof window === 'undefined') return;
            
            const QRCodeStyling = (await import('qr-code-styling')).default;
            
            if (!qrCodeInstance.current) {
                qrCodeInstance.current = new QRCodeStyling({
                    width: 1024,
                    height: 1024,
                    data: value,
                    margin: 20,
                    qrOptions: {
                        typeNumber: 0,
                        mode: 'Byte',
                        errorCorrectionLevel: 'H'
                    },
                    imageOptions: {
                        hideBackgroundDots: true,
                        imageSize: 0.4,
                        margin: 10
                    },
                    dotsOptions: {
                        type: moduleStyle === 'rounded' ? 'rounded' : 'square',
                        color: fgColor
                    },
                    backgroundOptions: {
                        color: isTransparent ? 'transparent' : bgColor
                    },
                    cornersSquareOptions: {
                        type: moduleStyle === 'rounded' ? 'extra-rounded' : 'square',
                        color: fgColor
                    },
                    cornersDotOptions: {
                        type: moduleStyle === 'rounded' ? 'dot' : undefined,
                        color: fgColor
                    }
                });
                
                if (qrRef.current) {
                    qrRef.current.innerHTML = '';
                    qrCodeInstance.current.append(qrRef.current);
                }
            } else {
                qrCodeInstance.current.update({
                    data: value,
                    dotsOptions: {
                        type: moduleStyle === 'rounded' ? 'rounded' : 'square',
                        color: fgColor
                    },
                    backgroundOptions: {
                        color: isTransparent ? 'transparent' : bgColor
                    },
                    cornersSquareOptions: {
                        type: moduleStyle === 'rounded' ? 'extra-rounded' : 'square',
                        color: fgColor
                    },
                    cornersDotOptions: {
                        type: moduleStyle === 'rounded' ? 'dot' : undefined,
                        color: fgColor
                    }
                });
            }
        };

        initQRCode();
    }, [value, fgColor, bgColor, isTransparent, moduleStyle]);

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(value);
            setIsCopying(true);
            success("Copied", "Content copied to clipboard.");
            setTimeout(() => setIsCopying(false), 2000);
        } catch (err) {
            error("Error", "Failed to copy content.");
        }
    };

    const downloadQR = async (format: ExportFormat) => {
        if (!qrCodeInstance.current) return;

        try {
            await qrCodeInstance.current.download({
                name: `qrcode-${Date.now()}`,
                extension: format
            });

            trackToolUsed('QR Code Generator');
            trackConversion('QR Code Generator');
            trackFileDownloaded('QR Code Generator', format === 'png' ? 'image/png' : 'image/jpeg');
        } catch (err) {
            error("Download Failed", "There was an error generating your file.");
        }
    };

    return (
        <div className="w-full flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto items-stretch">
            {/* Left: Controls */}
            <div className="w-full lg:w-[60%] flex flex-col gap-6">
                <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm flex flex-col gap-8 h-full">
                    {/* Content Section */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2 text-sm font-bold text-foreground uppercase tracking-wider">
                            <Languages className="w-4 h-4 text-emerald-500" />
                            QR Content
                        </div>
                        <div className="relative group">
                            <textarea
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                placeholder="Enter URL or text here..."
                                className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 outline-none transition-all min-h-[100px] resize-none"
                            />
                            <button
                                onClick={handleCopy}
                                className="absolute bottom-3 right-3 p-2 bg-white border border-border rounded-lg shadow-sm hover:bg-muted transition-colors text-muted-foreground hover:text-foreground"
                                title="Copy content"
                            >
                                {isCopying ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>

                    {/* Styling Section */}
                    <div className="flex flex-col gap-6 pt-2 border-t border-border/50">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Module Style */}
                            <div className="flex flex-col gap-3">
                                <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1 flex items-center gap-2">
                                    <Settings2 className="w-3.5 h-3.5" />
                                    Module Shape
                                </label>
                                <div className="relative flex p-1 bg-muted/50 rounded-xl border border-border/50 overflow-hidden">
                                    {/* Sliding background pill */}
                                    <div 
                                        className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-white rounded-lg shadow-sm border border-emerald-100 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                                        style={{ 
                                            transform: `translateX(${moduleStyle === 'rounded' ? '100%' : '0%'})`,
                                            zIndex: 0
                                        }}
                                    />
                                    <button
                                        onClick={() => setModuleStyle('square')}
                                        className={`relative z-10 flex-1 py-1.5 px-4 rounded-lg text-[11px] font-bold transition-colors duration-300 ${moduleStyle === 'square' ? 'text-emerald-700' : 'text-muted-foreground hover:text-foreground'}`}
                                    >
                                        Square
                                    </button>
                                    <button
                                        onClick={() => setModuleStyle('rounded')}
                                        className={`relative z-10 flex-1 py-1.5 px-4 rounded-lg text-[11px] font-bold transition-colors duration-300 ${moduleStyle === 'rounded' ? 'text-emerald-700' : 'text-muted-foreground hover:text-foreground'}`}
                                    >
                                        Rounded
                                    </button>
                                </div>
                            </div>

                            {/* QR Color */}
                            <div className="flex flex-col gap-3">
                                <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1 flex items-center gap-2">
                                    <Palette className="w-3.5 h-3.5" />
                                    QR Color
                                </label>
                                <div className="flex items-center gap-3 bg-white border border-border rounded-xl p-1.5 transition-all focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500 group">
                                    <div className="relative w-6 h-6 rounded-lg overflow-hidden border border-border shadow-sm shrink-0">
                                        <input
                                            type="color"
                                            value={fgColor}
                                            onChange={(e) => setFgColor(e.target.value)}
                                            className="absolute -inset-2 w-12 h-12 cursor-pointer border-none p-0 bg-transparent scale-150"
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        value={fgColor.toUpperCase()}
                                        onChange={(e) => {
                                            const val = e.target.value;
                                            if (/^#[0-9A-F]{0,6}$/i.test(val)) setFgColor(val);
                                        }}
                                        className="flex-1 text-xs font-mono font-bold outline-none uppercase bg-transparent"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Background Combined Section */}
                        <div className="flex flex-col gap-3">
                            <label className="text-[11px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Background Settings</label>
                            <div className="flex flex-col md:flex-row gap-4">
                                <div className={`flex-1 flex items-center gap-3 bg-white border border-border rounded-xl p-1.5 transition-all focus-within:ring-2 focus-within:ring-emerald-500/20 focus-within:border-emerald-500 ${isTransparent ? 'opacity-40 grayscale pointer-events-none' : ''}`}>
                                    <div className="relative w-6 h-6 rounded-lg overflow-hidden border border-border shadow-sm shrink-0">
                                        <input
                                            type="color"
                                            value={bgColor}
                                            onChange={(e) => setBgColor(e.target.value)}
                                            className="absolute -inset-2 w-12 h-12 cursor-pointer border-none p-0 bg-transparent scale-150"
                                        />
                                    </div>
                                    <input
                                        type="text"
                                        value={bgColor.toUpperCase()}
                                        onChange={(e) => {
                                            const val = e.target.value;
                                            if (/^#[0-9A-F]{0,6}$/i.test(val)) setBgColor(val);
                                        }}
                                        className="flex-1 text-xs font-mono font-bold outline-none uppercase bg-transparent"
                                    />
                                </div>

                                <label className="flex items-center gap-2 group cursor-pointer select-none px-3 py-1.5 rounded-xl bg-muted/30 border border-border/50 hover:bg-muted/50 transition-colors shrink-0">
                                    <div className="relative scale-90">
                                        <input
                                            type="checkbox"
                                            checked={isTransparent}
                                            onChange={(e) => setIsTransparent(e.target.checked)}
                                            className="sr-only peer"
                                        />
                                        <div className="w-8 h-4.5 bg-gray-200 border border-transparent rounded-full peer peer-checked:bg-emerald-500 transition-all duration-300"></div>
                                        <div className="absolute left-0.5 top-0.5 w-3.5 h-3.5 bg-white rounded-full shadow-md transition-all duration-300 peer-checked:translate-x-3.5"></div>
                                    </div>
                                    <span className="text-[10px] font-bold text-muted-foreground group-hover:text-foreground transition-colors uppercase tracking-tight">
                                        Transparent
                                    </span>
                                </label>
                            </div>
                        </div>

                        {/* Quality Tip */}
                        <div className="mt-auto bg-emerald-50/50 border border-emerald-100/50 rounded-2xl p-4 flex gap-3 items-start w-full">
                            <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center shrink-0">
                                <Settings2 className="w-4 h-4 text-emerald-600" />
                            </div>
                            <div className="flex flex-col gap-0.5">
                                <p className="text-xs font-bold text-emerald-800 tracking-tight leading-none mb-1">Quality Tip</p>
                                <p className="text-[11px] leading-relaxed text-emerald-700/80 font-medium">
                                    Use High Res (1024px) for print and Ultra HD (2048px) for large banners or professional marketing.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Preview & Download */}
            <div className="w-full lg:w-[40%] flex flex-col lg:sticky lg:top-24 self-stretch">
                <div className="bg-card p-6 md:p-8 rounded-3xl border border-border shadow-sm flex flex-col gap-6 items-center h-full">

                    <div 
                        className="relative p-6 bg-white border border-border rounded-3xl shadow-inner group overflow-hidden flex items-center justify-center w-full aspect-square max-w-[280px]"
                        style={{
                            backgroundImage: isTransparent ? 'radial-gradient(#e5e7eb 1px, transparent 1px)' : 'none',
                            backgroundSize: '16px 16px',
                        }}
                    >
                        {/* Ambient light effect around QR */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/5 via-transparent to-blue-500/5 pointer-events-none" />
                        
                        {/* Canvas Container */}
                        <div ref={qrRef} className="w-full h-full flex items-center justify-center [&>canvas]:max-w-full [&>canvas]:h-auto shadow-sm scale-[0.95]" />
                    </div>

                    <div className="flex flex-col gap-4 w-full mt-auto">
                        <div className="grid grid-cols-2 gap-3">
                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Format</label>
                                <div className="relative flex p-1 bg-muted/50 rounded-xl border border-border/50 overflow-hidden">
                                    {/* Sliding background pill */}
                                    <div 
                                        className="absolute top-1 bottom-1 left-1 w-[calc(50%-4px)] bg-white rounded-lg shadow-sm border border-emerald-100 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)]"
                                        style={{ 
                                            transform: `translateX(${exportFormat === 'jpg' ? '100%' : '0%'})`,
                                            zIndex: 0
                                        }}
                                    />
                                    <button
                                        onClick={() => setExportFormat('png')}
                                        className={`relative z-10 flex-1 py-1 px-4 rounded-lg text-xs font-bold transition-colors duration-300 ${exportFormat === 'png' ? 'text-emerald-700' : 'text-muted-foreground hover:text-foreground'}`}
                                    >
                                        PNG
                                    </button>
                                    <button
                                        onClick={() => setExportFormat('jpg')}
                                        className={`relative z-10 flex-1 py-1 px-4 rounded-lg text-xs font-bold transition-colors duration-300 ${exportFormat === 'jpg' ? 'text-emerald-700' : 'text-muted-foreground hover:text-foreground'}`}
                                    >
                                        JPG
                                    </button>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest ml-1">Quality</label>
                                <div className="relative dropdown-container">
                                    <button 
                                        type="button"
                                        className="w-full bg-white hover:bg-muted/50 border border-border rounded-xl px-3 py-2 text-[11px] font-bold flex items-center justify-between transition-all active:scale-[0.98]"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setIsDropdownOpen(!isDropdownOpen);
                                        }}
                                    >
                                        <span className="truncate">
                                            {size === 512 && "512px"}
                                            {size === 1024 && "1024px"}
                                            {size === 2048 && "2048px"}
                                        </span>
                                        <ChevronRight className={`w-3.5 h-3.5 text-muted-foreground transition-transform duration-300 ${isDropdownOpen ? 'rotate-[-90deg]' : 'rotate-90'}`} />
                                    </button>

                                    {isDropdownOpen && (
                                        <>
                                            <div className="fixed inset-0 z-[60]" onClick={() => setIsDropdownOpen(false)} />
                                            <div 
                                                className="absolute bottom-[calc(100%+8px)] left-0 right-0 z-[70] bg-white/95 backdrop-blur-2xl border border-gray-100/50 shadow-[0_12px_40px_rgba(0,0,0,0.08)] rounded-[20px] p-1.5 flex flex-col animate-in fade-in zoom-in-95 slide-in-from-bottom-2 duration-200"
                                                style={{ transformOrigin: 'bottom' }}
                                            >
                                                {[
                                                    { value: 512, label: "Standard (512px)" },
                                                    { value: 1024, label: "HD (1024px)" },
                                                    { value: 2048, label: "Ultra (2048px)" }
                                                ].map((option) => {
                                                    const isActive = size === option.value;
                                                    return (
                                                        <button 
                                                            key={option.value}
                                                            type="button"
                                                            className={`px-3 py-2 rounded-lg font-bold text-[11px] text-left transition-all ${
                                                                isActive 
                                                                    ? 'bg-emerald-50 text-emerald-700' 
                                                                    : 'text-gray-600 hover:bg-black/[0.03]'
                                                            }`}
                                                            onClick={() => {
                                                                setSize(option.value);
                                                                setIsDropdownOpen(false);
                                                            }}
                                                        >
                                                            {option.label}
                                                        </button>
                                                    );
                                                })}
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <Button
                            size="lg"
                            onClick={() => downloadQR(exportFormat)}
                            className="w-full shadow-lg shadow-emerald-500/20 py-7 text-base group"
                        >
                            <Download className="w-5 h-5 mr-3 transition-transform group-hover:-translate-y-1" />
                            Download QR Code
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
