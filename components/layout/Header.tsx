'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About Township', href: '#about' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Master Plan', href: '#master-plan' },
  { label: 'Lifestyle', href: '#lifestyle' },
  { label: 'Location', href: '#location' },
  { label: 'Gallery', href: '#gallery' },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          height: scrolled ? '72px' : '100px',
          background: scrolled ? 'rgba(5, 10, 8, 0.72)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(16px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.08)' : 'none',
          boxShadow: scrolled ? '0 4px 40px rgba(0,0,0,0.35)' : 'none',
          transition: 'height 0.4s ease, background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-10 lg:px-14 h-full flex items-center justify-between">

          {/* Logo */}
          <a href="#home" className="flex items-center gap-3 group flex-shrink-0">
            <svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg"
              className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(200,169,107,0.7)]">
              <polygon points="17,2 32,32 2,32" stroke="#C8A96B" strokeWidth="1.5" fill="none" />
              <polygon points="17,9 26,29 8,29" stroke="#C8A96B" strokeWidth="0.8" fill="rgba(200,169,107,0.08)" />
              <line x1="17" y1="2" x2="17" y2="32" stroke="#C8A96B" strokeWidth="0.5" strokeOpacity="0.4" />
            </svg>
            <div>
              <div className="text-white font-serif text-sm tracking-[0.3em] leading-tight">
                BHAKTI KUNJ
              </div>
              <div className="text-[9px] tracking-[0.22em] uppercase leading-tight mt-0.5"
                style={{ color: 'rgba(200,169,107,0.72)' }}>
                LIVE BEYOND EVERYDAY
              </div>
            </div>
          </a>

          {/* Desktop Nav — perfectly centered */}
          <nav className="hidden lg:flex items-center gap-9 absolute left-1/2 -translate-x-1/2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="relative text-[10px] font-medium uppercase group"
                style={{
                  letterSpacing: '1.5px',
                  color: 'rgba(255,255,255,0.82)',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#ffffff'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.82)'; }}
              >
                {item.label}
                <span
                  className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full"
                  style={{
                    background: '#C8A96B',
                    transition: 'width 0.3s ease',
                  }}
                />
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* CTA — pill gold gradient */}
            <a
              href="https://wa.me/911234567890?text=Hi%21%20I%27m%20interested%20in%20Bhakti%20Kunj%20Township%20and%20would%20like%20to%20book%20a%20site%20visit.%20Please%20get%20in%20touch%20with%20me."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center text-[10px] font-semibold uppercase text-black rounded-full px-6 py-3 gold-btn"
              style={{ letterSpacing: '1px' }}
            >
              BOOK A VISIT
            </a>

            {/* Hamburger — circular glass */}
            <button
              className="lg:hidden w-12 h-12 rounded-full flex items-center justify-center"
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.1)',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.22)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)'; }}
              onClick={() => setIsOpen(true)}
              aria-label="Open menu"
            >
              <Menu size={16} className="text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Overlay Menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex flex-col items-center justify-center"
          style={{
            background: 'rgba(5, 10, 8, 0.97)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
          }}
        >
          {/* Close button */}
          <button
            className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <X size={16} className="text-white" />
          </button>

          <nav className="flex flex-col items-center gap-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-4xl font-serif font-light transition-colors duration-300"
                style={{ color: 'rgba(255,255,255,0.72)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#C8A96B'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.72)'; }}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="https://wa.me/911234567890?text=Hi%21%20I%27m%20interested%20in%20Bhakti%20Kunj%20Township%20and%20would%20like%20to%20book%20a%20site%20visit.%20Please%20get%20in%20touch%20with%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="mt-12 px-10 py-4 rounded-full text-xs font-semibold uppercase text-black gold-btn"
            style={{ letterSpacing: '1.5px' }}
            onClick={() => setIsOpen(false)}
          >
            BOOK A VISIT
          </a>
        </div>
      )}
    </>
  );
}
