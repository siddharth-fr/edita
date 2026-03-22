'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Tools',   href: '/tools'   },
  { label: 'How it Works', href: '/how-it-works' },
  { label: 'Why Us',  href: '/why-us'   },
];

export function Navbar() {
  const pathname = usePathname();
  const isHome = pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
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
          className={`relative mx-auto pointer-events-auto transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] flex items-center ${
            isHome
              ? 'h-[54px] px-5 sm:px-10 w-full max-w-[1200px] justify-between'
              : 'h-[54px] px-2.5 sm:px-3 w-fit gap-6 sm:gap-10 rounded-full shadow-[0_15px_35px_rgba(0,0,0,0.1)] border mt-2 sm:mt-0 padding-around bg-white/90 backdrop-blur-xl'
          }`}
          style={{
            borderColor: isHome ? 'transparent' : 'rgba(0,0,0,0.06)',
          }}
        >
          {/* LEFT — Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 shrink-0 transition-all hover:opacity-80 active:scale-95 z-20 whitespace-nowrap pl-2"
            style={{ textDecoration: 'none' }}
          >
            <img 
              src="/logo-icon.png" 
              alt="Edita Logo" 
              style={{ width: 28, height: 28, borderRadius: 8, boxShadow: '0 4px 10px rgba(5,150,105,0.15)' }}
            />
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
              edit
              <span style={{ color: '#059669' }}>a</span>
            </span>
          </Link>

          {/* CENTRE — Nav links */}
          <nav className={`${isHome ? 'absolute left-1/2 -translate-x-1/2 hidden md:flex' : 'hidden md:flex'} items-center gap-1 whitespace-nowrap z-10`}>
            {NAV_LINKS.map(({ label, href }) => {
              const isActive = pathname.startsWith(href);
              return (
                <Link
                  key={label}
                  href={href}
                  style={{
                    fontSize: 13,
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? '#059669' : '#64748B',
                    padding: '8px 16px',
                    borderRadius: 999,
                    textDecoration: 'none',
                    letterSpacing: '-0.01em',
                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                    background: isActive ? 'rgba(5, 150, 105, 0.08)' : 'transparent',
                  }}
                  className={isActive ? '' : 'hover:text-[#0C0F17] hover:bg-black/[0.03]'}
                >
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT — CTAs + Mobile Dropdown Trigger */}
          <div className="shrink-0 flex items-center pr-1 z-20">
            {isHome ? (
              <Link
                href="/tools"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '9px 18px',
                  borderRadius: 999,
                  background: 'linear-gradient(135deg, #34D399 0%, #059669 100%)',
                  boxShadow: '0 8px 20px rgba(5,150,105,0.25)',
                  color: '#fff',
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                }}
                className="hidden sm:inline-flex hover:scale-[1.05] hover:shadow-[0_10px_25px_rgba(5,150,105,0.3)] active:scale-[0.96]"
              >
                Try it free
              </Link>
            ) : (
              <div className="w-2 md:hidden" /> /* Spacer for mobile link balance */
            )}

            {/* Hamburger Menu Toggle (Mobile Only) */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`${isHome ? 'md:hidden' : 'md:hidden'} flex items-center justify-center p-2 rounded-full transition-all active:scale-95 ${isHome ? 'text-gray-600 hover:bg-white/50' : 'ml-2 text-gray-500 hover:bg-black/5'}`}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X size={20} strokeWidth={2.5} /> : <Menu size={20} strokeWidth={2.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay Dropdown */}
        {/* We place it here so it references the full width `header` tag boundary, not trapped in the pill's width constraint */}
        <div
          className={`absolute w-full pointer-events-none transition-all duration-300 ${
            isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
          }`}
          style={{ top: isHome ? '58px' : '64px', zIndex: 100 }}
        >
          <div 
            className={`mx-3 bg-white/95 backdrop-blur-2xl border border-gray-100/50 shadow-[0_12px_40px_rgba(0,0,0,0.08)] rounded-[20px] p-2 flex flex-col ${
              isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'
            }`}
          >
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
          </div>
        </div>
      </header>

      {/* Invisible Underlay to catch mobile clicks falling outside the active dropdown */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-[45]" 
          onClick={() => setIsMobileMenuOpen(false)} 
        />
      )}
    </>
  );
}
