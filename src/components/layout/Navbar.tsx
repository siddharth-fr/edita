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
  const isHome = pathname === '/';

  return (
    <header className={`fixed top-0 z-50 w-full transition-[padding] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${isHome ? '' : 'sm:pt-5 pt-3 pointer-events-none'}`}>
      
      {/* If it's home, we need the background across the full width */}
      {isHome && (
        <div
          className="absolute inset-0 border-b pointer-events-none"
          style={{
            background: 'rgba(250,251,255,0.85)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            borderColor: 'rgba(0,0,0,0.06)',
          }}
        />
      )}

      {/* Symmetric Layout Container */}
      <div
        className={`relative mx-auto pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isHome
            ? 'h-[60px] px-5 sm:px-10 grid grid-cols-[1fr_auto_1fr] items-center'
            : 'h-[52px] px-5 sm:px-7 flex items-center justify-between gap-6 sm:gap-10 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.06)] border'
        }`}
        style={{
          maxWidth: isHome ? 1200 : 'fit-content',
          background: isHome ? 'transparent' : 'rgba(255,255,255,0.85)',
          backdropFilter: isHome ? 'none' : 'blur(20px)',
          WebkitBackdropFilter: isHome ? 'none' : 'blur(20px)',
          borderColor: isHome ? 'transparent' : 'rgba(0,0,0,0.08)',
        }}
      >
        {/* LEFT — Logo */}
        <Link
          href="/"
          className="flex items-center gap-1.5 shrink-0 transition-transform active:scale-95"
          style={{ textDecoration: 'none', justifySelf: isHome ? 'start' : undefined }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display), sans-serif',
              fontSize: 20,
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
              width: 5, height: 5,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #34D399, #059669)',
              display: 'inline-block',
              marginBottom: 1,
              flexShrink: 0,
            }}
          />
        </Link>

        {/* CENTRE — Nav links */}
        <nav className={`${isHome ? 'hidden md:flex' : 'hidden sm:flex'} items-center gap-1 lg:gap-2`}>
          {NAV_LINKS.map(({ label, href }) => {
            const isActive = pathname.startsWith(href);
            return (
              <Link
                key={label}
                href={href}
                style={{
                  fontSize: 13.5,
                  fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#065F46' : '#6B7280',
                  padding: '6px 14px',
                  borderRadius: 999,
                  textDecoration: 'none',
                  letterSpacing: '-0.01em',
                  transition: 'all 0.2s ease',
                  background: isActive ? 'rgba(52, 211, 153, 0.1)' : 'transparent',
                }}
                className={isActive ? '' : 'hover:text-[#0C0F17] hover:bg-black/[0.04]'}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        {/* RIGHT — Single CTA (Only visible on Home) */}
        {isHome && (
          <div style={{ justifySelf: 'end' }} className="shrink-0 flex items-center">
            <Link
              href="/tools"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '8px 16px',
                borderRadius: 12,
                background: 'linear-gradient(135deg, #34D399 0%, #059669 100%)',
                boxShadow: '0 4px 14px rgba(5,150,105,0.25)',
                color: '#fff',
                fontSize: 13.5,
                fontWeight: 700,
                letterSpacing: '-0.01em',
                textDecoration: 'none',
                transition: 'transform 0.2s cubic-bezier(0.16,1,0.3,1), box-shadow 0.2s',
              }}
              className="hover:scale-[1.04] active:scale-[0.97]"
            >
              Try it free
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
