'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Tools',   href: '/tools'   },
  { label: 'Why Us',  href: '/why-us'   },
  { label: 'Privacy', href: '/privacy' },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
            : 'h-[52px] px-4 sm:px-7 flex items-center justify-between gap-4 sm:gap-10 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.06)] border'
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
        <nav className={`${isHome ? 'hidden md:flex' : 'hidden sm:flex'} items-center gap-1 lg:gap-2 justify-center`}>
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

        {/* RIGHT — CTAs + Mobile Dropdown Trigger */}
        <div style={{ justifySelf: 'end' }} className="shrink-0 flex items-center gap-1.5 sm:gap-3">
          {isHome && (
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
              className="hidden sm:inline-flex hover:scale-[1.04] active:scale-[0.97]"
            >
              Try it free
            </Link>
          )}

          {/* Hamburger Menu Toggle (Mobile Only) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`${isHome ? 'md:hidden' : 'sm:hidden'} flex items-center justify-center p-2 rounded-full text-gray-500 active:scale-95 transition-transform`}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
          </button>
        </div>

        {/* Mobile Nav Overlay Dropdown */}
        <div
          className={`absolute ${isHome ? 'top-[62px]' : 'top-[58px]'} left-2 right-2 p-2 transition-all duration-300 pointer-events-none rounded-2xl ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          style={{ zIndex: 100 }}
        >
          <div className={`bg-white/95 backdrop-blur-2xl border border-gray-100/50 shadow-[0_12px_40px_rgba(0,0,0,0.08)] rounded-[20px] p-2 flex flex-col ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname.startsWith(href);
              return (
                <Link
                  key={label}
                  href={href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`px-4 py-3 rounded-xl font-semibold text-[15px] transition-colors ${
                    isActive ? 'bg-emerald-50 text-emerald-700' : 'text-gray-600 active:bg-gray-50'
                  }`}
                >
                  {label}
                </Link>
              );
            })}
            <div className="h-[1px] w-full bg-gray-100/80 my-1 mx-2 shrink-0 max-w-[calc(100%-16px)]" />
            <Link
              href="/tools"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mx-2 mt-2 mb-1 py-3 text-center rounded-xl font-bold text-white tracking-tight"
              style={{
                background: 'linear-gradient(135deg, #34D399 0%, #059669 100%)',
                boxShadow: '0 4px 14px rgba(5,150,105,0.25)',
              }}
            >
              Try it free
            </Link>
          </div>
        </div>

      </div>
    </header>
  );
}
