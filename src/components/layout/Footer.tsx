import Link from 'next/link';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

const CATEGORIES = [
    {
        title: 'PDF Tools',
        links: [
            { label: 'Merge PDF Online', href: '/tools/merge-pdf' },
            { label: 'Compress PDF Online', href: '/tools/compress-pdf' },
            { label: 'Split PDF Online', href: '/tools/split-pdf' },
            { label: 'View All PDF Tools →', href: '/tools' },
        ],
    },
    {
        title: 'Image Tools',
        links: [
            { label: 'PNG to JPG Converter', href: '/tools/png-to-jpg' },
            { label: 'JPG to PNG Converter', href: '/tools/jpg-to-png' },
            { label: 'Image Compressor', href: '/tools/image-compressor' },
            { label: 'Color Palette Generator', href: '/tools/image-color-palette-generator' },
            { label: 'View All Image Tools →', href: '/tools' },
        ],
    },
    {
        title: 'Utility Tools',
        links: [
            { label: 'QR Code Generator', href: '/tools/qr-code-generator' },
            { label: 'MP4 to MP3 Converter', href: '/tools/mp4-to-mp3' },
            { label: 'Image Color Palette', href: '/tools/image-color-palette-generator' },
            { label: 'View All Tools →', href: '/tools' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'How it Works', href: '/how-it-works' },
            { label: 'Why Us', href: '/why-us' },
            { label: 'Privacy Policy', href: '/privacy' },
            { label: 'Terms of Service', href: '/terms' },
            { label: 'Contact', href: '/contact' },
        ],
    },
];

export function Footer() {
    return (
        <footer
            style={{
                background: '#FAFBFF',
                borderTop: '1px solid rgba(0,0,0,0.06)',
                paddingTop: 80,
                paddingBottom: 32,
                marginTop: 'auto',
            }}
        >
            <div className="mx-auto px-5 sm:px-8 max-w-[1280px]">
                {/* ── Top area: Brand + Links Grid ── */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-12 xl:gap-8 mb-16">

                    {/* Brand info (spans 2 cols on wide screens) */}
                    <div className="xl:col-span-2 flex flex-col items-start pr-0 xl:pr-10">
                        {/* Logo */}
                        <Link
                            href="/"
                            className="flex items-center gap-2.5 shrink-0 mb-4"
                            style={{ textDecoration: 'none' }}
                        >
                            <Image 
                                src="/logo-icon.png" 
                                alt="Edita" 
                                width={32}
                                height={32}
                                style={{ borderRadius: 10 }}
                            />
                            <span
                                style={{
                                    fontFamily: 'var(--font-display), sans-serif',
                                    fontSize: 22,
                                    fontWeight: 800,
                                    letterSpacing: '-0.04em',
                                    color: '#0C0F17',
                                    lineHeight: 1,
                                }}
                            >
                                edit
                                <span style={{ color: '#059669' }}>a</span>
                            </span>
                        </Link>

                        <p style={{
                            fontSize: 14,
                            lineHeight: 1.6,
                            color: '#6B7280',
                            fontWeight: 400,
                            letterSpacing: '-0.01em',
                            marginBottom: 20,
                            maxWidth: 320,
                        }}>
                            Convert, compress and edit PDFs, images, and audio entirely in your browser. Fast, free, and completely private - your files never leave your device.
                        </p>

                        <div
                            className="inline-flex items-center gap-1.5"
                            style={{
                                padding: '5px 12px',
                                borderRadius: 999,
                                background: 'rgba(209,250,229,0.3)',
                                border: '1px solid rgba(52,211,153,0.2)',
                            }}
                        >
                            <ShieldCheck
                                style={{ width: 12, height: 12, color: '#059669', flexShrink: 0 }}
                            />
                            <span
                                style={{
                                    fontSize: 11.5,
                                    fontWeight: 600,
                                    color: '#065F46',
                                    letterSpacing: '-0.01em',
                                }}
                            >
                                100% Client-side Processing
                            </span>
                        </div>
                    </div>

                    {/* Links Grid: 4 columns */}
                    {CATEGORIES.map((cat, idx) => (
                        <div key={idx} className="flex flex-col gap-4">
                            <h4 style={{
                                fontSize: 13,
                                fontWeight: 700,
                                color: '#111827',
                                letterSpacing: '-0.01em',
                                textTransform: 'uppercase',
                            }}>
                                {cat.title}
                            </h4>
                            <nav className="flex flex-col gap-3">
                                {cat.links.map((link, i) => (
                                    <Link
                                        key={i}
                                        href={link.href}
                                        style={{
                                            fontSize: 14,
                                            fontWeight: 500,
                                            color: '#6B7280',
                                            letterSpacing: '-0.01em',
                                            textDecoration: 'none',
                                            transition: 'color 0.15s',
                                        }}
                                        className="hover:text-[#34D399]"
                                    >
                                        {link.label}
                                    </Link>
                                ))}
                            </nav>
                        </div>
                    ))}
                </div>

                {/* ── Badges / Featured On ── */}
                <div className="pt-8 mb-12" style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}>
                    <div className="flex flex-col items-start gap-4">
                        <span style={{ 
                            fontSize: 12, 
                            fontWeight: 700, 
                            color: '#9CA3AF', 
                            textTransform: 'uppercase', 
                            letterSpacing: '0.05em' 
                        }}>
                            Featured On
                        </span>
                        <div className="flex flex-wrap gap-4 items-center">
                            {[
                                { 
                                    href: "https://findly.tools/edita-tools?utm_source=edita-tools", 
                                    src: "https://findly.tools/badges/findly-tools-badge-light.svg", 
                                    alt: "Featured on Findly.tools",
                                    height: 28
                                },
                                { 
                                    href: "https://tinylaunch.com", 
                                    src: "https://tinylaunch.com/tinylaunch_badge_launching_soon.svg", 
                                    alt: "TinyLaunch Badge",
                                    height: 32
                                },
                                { 
                                    href: "https://directoryhunt.org/", 
                                    src: "https://directoryhunt.org/assets/Badges/featured.svg", 
                                    alt: "Featured on DirectoryHunt.org",
                                    height: 30
                                }
                            ].map((badge, idx) => (
                                <a 
                                    key={idx}
                                    href={badge.href}
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="group flex items-center justify-center h-12 px-6 bg-white border border-gray-200/60 rounded-xl transition-all duration-300 hover:border-emerald-500/30 hover:shadow-[0_4px_12px_rgba(16,185,129,0.08)] hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    <img 
                                        src={badge.src} 
                                        alt={badge.alt} 
                                        loading="lazy"
                                        style={{ height: badge.height, width: 'auto' }}
                                        className="object-contain grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                                    />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── Bottom area: Copyright & Legal ── */}
                <div
                    className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4"
                    style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
                >
                    <div style={{ fontSize: 13, color: '#9CA3AF', fontWeight: 500 }}>
                        © {new Date().getFullYear()} edita All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <Link href="/privacy" style={{ fontSize: 13, color: '#9CA3AF', fontWeight: 500, textDecoration: 'none' }} className="hover:text-[#111827]">
                            Privacy Policy
                        </Link>
                        <Link href="/terms" style={{ fontSize: 13, color: '#9CA3AF', fontWeight: 500, textDecoration: 'none' }} className="hover:text-[#111827]">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
