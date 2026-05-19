'use client';

import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="force-dark relative w-full h-screen overflow-hidden">

      {/* Background Image */}
      <Image
        src="/hero_section_bg.png"
        alt="Bhakti Kunj Township"
        fill
        className="object-cover object-center"
        priority
        quality={100}
      />

      {/* Gradient — dark left for text, dark right for stats, bright center */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.15) 48%, rgba(0,0,0,0.15) 52%, rgba(0,0,0,0.75) 100%)',
      }} />

      {/* Vignette — darkens top/bottom edges */}
      <div className="absolute inset-0" style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.45) 100%)',
      }} />

      {/* Vintage sepia wash */}
      <div className="absolute inset-0" style={{ background: 'rgba(100,65,20,0.15)' }} />

      {/* Film grain */}
      <div className="absolute inset-0 pointer-events-none" style={{
        opacity: 0.055,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
        backgroundSize: '128px 128px',
      }} />

      {/* Content Container */}
      <div className="relative h-full w-full flex flex-col">

        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center px-6 lg:px-16 pt-28 pb-20">
          <div className="max-w-2xl">
            <p
              className="text-xs lg:text-sm font-medium uppercase mb-8"
              style={{ color: '#C8A96B', letterSpacing: '4px' }}
            >
              A WORLD WITHIN YOUR WORLD
            </p>
            <h1 className="text-6xl lg:text-8xl font-serif font-light text-white mb-8 leading-tight">
              A Township
              <br />
              <span style={{ color: '#C8A96B' }}>Beyond Living</span>
            </h1>
            <p
              className="text-base lg:text-lg font-light leading-relaxed mb-12 max-w-xl"
              style={{ color: 'var(--text-secondary)' }}
            >
              A thoughtfully planned community that brings together nature, modern
              infrastructure and world-class amenities for a wholesome lifestyle.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              {/* Primary — gold gradient pill */}
              <button
                className="gold-btn px-8 py-3.5 rounded-full text-sm font-semibold uppercase text-black inline-flex items-center justify-center gap-2 w-fit"
                style={{ letterSpacing: '1px' }}
              >
                Explore Township
                <span>→</span>
              </button>
              {/* Secondary — glass pill */}
              <a
                href="/brochure/Bhakti kunj trifold.pdf"
                download="Bhakti Kunj Brochure.pdf"
                className="glass-pill px-8 py-3.5 rounded-full text-sm font-semibold uppercase inline-flex items-center justify-center gap-2 w-fit transition-all duration-300"
                style={{
                  color: 'rgba(255,255,255,0.9)',
                  border: '1px solid rgba(255,255,255,0.22)',
                  background: 'var(--card-bg-hover)',
                  backdropFilter: 'blur(8px)',
                  letterSpacing: '1px',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = 'rgba(200,169,107,0.5)';
                  el.style.background = 'rgba(200,169,107,0.12)';
                  el.style.color = '#C8A96B';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.borderColor = 'rgba(255,255,255,0.22)';
                  el.style.background = 'var(--card-bg-hover)';
                  el.style.color = '';
                }}
              >
                Download Brochure
                <span>↓</span>
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] font-light uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
            Scroll to explore
          </span>
          <ChevronDown className="w-4 h-4" style={{ color: '#C8A96B' }} />
        </div>
      </div>

      {/* Right Side Stats */}
      <div className="absolute right-0 top-0 h-full hidden lg:flex flex-col justify-center pr-16">
        <div className="space-y-14">
          {[
            { value: '160', label: 'ACRES TOTAL AREA' },
            { value: '3000+', label: 'HAPPY FAMILIES' },
            { value: '70%', label: 'GREEN SPACE' },
            { value: '24/7', label: 'SECURITY & SURVEILLANCE' },
          ].map((stat, i) => (
            <div key={i} className="text-right">
              <p className="text-5xl font-serif font-light" style={{ color: '#C8A96B' }}>{stat.value}</p>
              <p className="text-[10px] font-light tracking-wide mt-1.5" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
