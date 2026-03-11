import Link from 'next/link';
import { ShieldCheck } from 'lucide-react';

const CATEGORIES = [
    {
        title: 'PDF Tools',
        links: [
            { label: 'Merge PDF', href: '/tools/merge-pdf' },
            { label: 'Compress PDF', href: '/tools/compress-pdf' },
            { label: 'Split PDF', href: '/tools/split-pdf' },
        ],
    },
    {
        title: 'Image Tools',
        links: [
            { label: 'Image Compressor', href: '/tools/image-compressor' },
            { label: 'JPG to PDF', href: '/tools/jpg-to-pdf' },
            { label: 'PDF to JPG', href: '/tools/pdf-to-jpg' },
            { label: 'PNG to JPG', href: '/tools/png-to-jpg' },
        ],
    },
    {
        title: 'Converters & Audio',
        links: [
            { label: 'PDF to Word', href: '/tools/pdf-to-word' },
            { label: 'Word to PDF', href: '/tools/word-to-pdf' },
            { label: 'MP4 to MP3', href: '/tools/mp4-to-mp3' },
        ],
    },
    {
        title: 'Company',
        links: [
            { label: 'Why Us', href: '/#why-us' },
            { label: 'Privacy Policy', href: '/#privacy' },
            { label: 'Terms of Service', href: '/#terms' },
            { label: 'Contact', href: '/#contact' },
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
                            className="flex items-center gap-1 shrink-0 mb-4"
                            style={{ textDecoration: 'none' }}
                        >
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
                                eddit
                            </span>
                            <span
                                style={{
                                    width: 6, height: 6,
                                    borderRadius: '50%',
                                    background: 'linear-gradient(135deg, #34D399, #059669)',
                                    display: 'inline-block',
                                    marginBottom: 2,
                                    flexShrink: 0,
                                }}
                            />
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

                {/* ── Bottom area: Copyright & Legal ── */}
                <div
                    className="flex flex-col md:flex-row items-center justify-between pt-8 gap-4"
                    style={{ borderTop: '1px solid rgba(0,0,0,0.06)' }}
                >
                    <div style={{ fontSize: 13, color: '#9CA3AF', fontWeight: 500 }}>
                        © {new Date().getFullYear()} eddit. All rights reserved.
                    </div>
                    <div className="flex gap-6">
                        <Link href="/#privacy" style={{ fontSize: 13, color: '#9CA3AF', fontWeight: 500, textDecoration: 'none' }} className="hover:text-[#111827]">
                            Privacy Policy
                        </Link>
                        <Link href="/#terms" style={{ fontSize: 13, color: '#9CA3AF', fontWeight: 500, textDecoration: 'none' }} className="hover:text-[#111827]">
                            Terms of Service
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
