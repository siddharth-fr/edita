'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Tools',   href: '/tools'   },
  { label: 'Why Us',  href: '/why-us'   },
  { label: 'Privacy', href: '/privacy' },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full">
      {/* Frosted glass — matches hero bg */}
      <div
        className="absolute inset-0 border-b"
        style={{
          background: 'rgba(250,251,255,0.85)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderColor: 'rgba(0,0,0,0.06)',
        }}
      />

      {/* 3-column symmetric grid */}
      <div
        className="relative mx-auto px-5 sm:px-10 h-14"
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr auto 1fr',
          alignItems: 'center',
          maxWidth: 1200,
        }}
      >
        {/* LEFT — Logo */}
        <Link
          href="/"
          className="flex items-center gap-1"
          style={{ textDecoration: 'none', justifySelf: 'start' }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display), sans-serif',
              fontSize: 19,
              fontWeight: 800,
              letterSpacing: '-0.04em',
              color: '#0C0F17',
              lineHeight: 1,
            }}
          >
            eddit
          </span>
          {/* Green dot accent */}
          <span
            style={{
              width: 5, height: 5,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #34D399, #059669)',
              display: 'inline-block',
              marginBottom: 1,
              flexShrink: 0,
            }}
          />
        </Link>

        {/* CENTRE — Nav links (hidden on mobile) */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              style={{
                fontSize: 13,
                fontWeight: 500,
                color: '#6B7280',
                padding: '5px 12px',
                borderRadius: 999,
                textDecoration: 'none',
                letterSpacing: '-0.01em',
                transition: 'color 0.15s, background 0.15s',
              }}
              className="hover:text-[#0C0F17] hover:bg-black/[0.04]"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* RIGHT — Single CTA */}
        <div style={{ justifySelf: 'end' }}>
          {pathname === '/' && (
            <Link
              href="/tools"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '7px 15px',
                borderRadius: 10,
                background: 'linear-gradient(135deg, #34D399 0%, #059669 100%)',
                boxShadow: '0 3px 12px rgba(5,150,105,0.20)',
                color: '#fff',
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: '-0.02em',
                textDecoration: 'none',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
              className="hover:scale-[1.04] active:scale-[0.97]"
            >
              Try it free
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
