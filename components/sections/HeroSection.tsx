'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { Phone, ArrowRight, Download } from 'lucide-react';

const SLIDES = [
  { src: '/hero/hero_section_bg.png', alt: 'Bhakti Kunj Township' },
  { src: '/hero/Shri-Radhe-Krishna-Seva.webp', alt: 'Shri Radhe Krishna — Sacred Braj' },
  { src: '/hero/god-banke-bihari.jpg', alt: 'Shri Banke Bihari Ji — Vrindavan' },
  { src: '/hero/shri-radha-raman-ji-vrindavan.JPG', alt: 'Shri Radha Raman Ji — Vrindavan' },
  { src: '/hero/shri-radha-damodar-4.jpg', alt: 'Shri Radha Damodar Temple' },
  { src: '/hero/HD-wallpaper-radha-govind-dev-ji-krishna-lord.jpg', alt: 'Radha Govind Dev Ji — Vrindavan' },
  { src: '/hero/Vishram_Ghat.jpg', alt: 'Vishram Ghat, Mathura' },
  { src: '/hero/places-to-visit-in-mathura-bharat-sair.webp', alt: 'Places to Visit in Mathura' },
  { src: '/hero/resort_one.avif', alt: 'Resort Style Living' },
];

const AUTO_PLAY_MS = 5000;

export function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((idx: number) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(idx);
    setTimeout(() => setAnimating(false), 700);
  }, [animating]);

  const prev = useCallback(() => goTo((current - 1 + SLIDES.length) % SLIDES.length), [current, goTo]);
  const next = useCallback(() => goTo((current + 1) % SLIDES.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, AUTO_PLAY_MS);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="force-dark relative w-full h-screen overflow-hidden">

      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-700"
          style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            className="object-cover object-center"
            priority={i === 0}
            quality={100}
          />
        </div>
      ))}

      {/* ── Dark scrim — solid base layer so text is always readable ── */}
      <div className="absolute inset-0 z-10" style={{ background: 'rgba(0,0,0,0.55)' }} />

      {/* Gradient — dark left for text, dark right for stats */}
      <div className="absolute inset-0 z-10" style={{
        background: 'linear-gradient(90deg, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.10) 48%, rgba(0,0,0,0.10) 52%, rgba(0,0,0,0.65) 100%)',
      }} />

      {/* Vignette — darkens top/bottom edges */}
      <div className="absolute inset-0 z-10" style={{
        background: 'linear-gradient(180deg, rgba(0,0,0,0.40) 0%, transparent 25%, transparent 75%, rgba(0,0,0,0.50) 100%)',
      }} />

      {/* Vintage sepia wash */}
      <div className="absolute inset-0 z-10" style={{ background: 'rgba(100,65,20,0.10)' }} />

      {/* Film grain */}
      <div className="absolute inset-0 z-10 pointer-events-none" style={{
        opacity: 0.05,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23g)'/%3E%3C/svg%3E")`,
        backgroundSize: '128px 128px',
      }} />

      {/* ── Main Content ── */}
      <div className="relative z-20 h-full w-full flex flex-col">

        <div className="flex-1 flex flex-col justify-center px-6 lg:px-16 pt-20 pb-12">
          <div className="max-w-2xl lg:max-w-6xl">
            <p
              className="text-[9px] lg:text-xs xl:text-sm font-medium uppercase mb-4 lg:mb-8"
              style={{ color: '#C8A96B', letterSpacing: '4px' }}
            >
              Bhakti Kunj — Mathura&apos;s most rapidly developing luxury destination
            </p>
            <h1 className="text-2xl sm:text-3xl lg:text-6xl xl:text-7xl font-serif font-light text-white mb-4 lg:mb-8 leading-tight">
              Escape the Ordinary.
              <br />
              <span style={{ color: '#C8A96B' }}>Embrace the Extraordinary.</span>
            </h1>
            <div
              className="hidden sm:block text-xs sm:text-base lg:text-lg font-light leading-relaxed mb-6 lg:mb-12 max-w-md lg:max-w-xl space-y-1 lg:space-y-2"
              style={{ color: 'var(--text-secondary)' }}
            >
              <p>• Wake Up to Greenery, Not Traffic.</p>
              <p>• Luxury Plots &amp; Cottages Township</p>
              <p>• Sacred Serenity of Braj</p>
              <p>• Resort Style Living in Mathura</p>
            </div>

            {/* ── Investment Plan Highlight Strip — only on mobile & tablet (desktop has right-side stats) ── */}
            <div className="flex flex-wrap gap-1.5 sm:gap-3 mb-10 sm:mb-8 lg:hidden">
              {[
                { value: '₹25,000', label: 'Pre-Launch / SqYd' },
                { value: '₹30,000', label: 'Launching / SqYd' },
                { value: '100-500', label: 'Plot Sq. Yards' },
                { value: '₹4,000/mo', label: 'Rental Income' },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col px-2 py-1 sm:px-4 sm:py-3 rounded-md sm:rounded-xl"
                  style={{
                    background: 'rgba(200,169,107,0.12)',
                    border: '1px solid rgba(200,169,107,0.35)',
                    backdropFilter: 'blur(8px)',
                  }}
                >
                  <span className="text-[10px] sm:text-base font-bold" style={{ color: '#C8A96B' }}>{item.value}</span>
                  <span className="text-[7px] sm:text-[10px] uppercase tracking-wider text-white/60 mt-0.5" style={{ lineHeight: '1.2' }}>{item.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-row gap-2 lg:gap-4">
              <button
                className="gold-btn px-3.5 py-1.5 sm:px-5 sm:py-2.5 lg:px-8 lg:py-3.5 rounded-full text-[10px] sm:text-xs lg:text-sm font-semibold uppercase text-black inline-flex items-center justify-center gap-1.5 lg:gap-2 w-fit"
                style={{ letterSpacing: '1px' }}
                aria-label="Explore Township"
              >
                <span className="sm:hidden">Explore</span>
                <span className="hidden sm:inline">Explore Township</span>
                <ArrowRight className="hidden sm:block w-4 h-4" />
              </button>
              <a
                href="/brochure/Bhakti kunj trifold.pdf"
                download="Bhakti Kunj Brochure.pdf"
                className="glass-pill p-2.5 sm:px-5 sm:py-2.5 lg:px-8 lg:py-3.5 rounded-full text-[10px] sm:text-xs lg:text-sm font-semibold uppercase inline-flex items-center justify-center gap-1.5 lg:gap-2 w-fit transition-all duration-300"
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
                aria-label="Download Brochure"
              >
                <span className="hidden sm:inline">Download Brochure</span>
                <Download className="w-4 h-4" />
              </a>
            </div>

            {/* Contact links */}
            <div className="mt-5 lg:mt-10 flex flex-wrap items-center gap-4 lg:gap-6">
              <a
                href="tel:+919810164924"
                className="flex items-center gap-1.5 lg:gap-2 text-xs lg:text-sm font-medium hover:underline transition-opacity hover:opacity-80"
                style={{ color: '#C8A96B' }}
              >
                <Phone className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                +91 98101 64924
              </a>
              <a
                href="tel:+919350957700"
                className="flex items-center gap-1.5 lg:gap-2 text-xs lg:text-sm font-medium hover:underline transition-opacity hover:opacity-80"
                style={{ color: '#C8A96B' }}
              >
                <Phone className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                +91 93509 57700
              </a>
              <a
                href="https://instagram.com/BHAKTIKUNJ7"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1.5 lg:gap-2 text-xs lg:text-sm font-medium hover:underline transition-opacity hover:opacity-80"
                style={{ color: '#C8A96B' }}
              >
                <svg className="w-3.5 h-3.5 lg:w-4 lg:h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                </svg>
                BHAKTIKUNJ7
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-[10px] font-light uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
            Scroll to explore
          </span>
        </div>
      </div>

      {/* ── Right Side Stats ── */}
      <div className="absolute right-0 top-0 h-full z-20 hidden lg:flex flex-col justify-center pr-10 lg:pr-16">
        <div className="space-y-6 lg:space-y-14">
          {[
            { value: '₹25,000', label: 'PRE-LAUNCH PRICE / SQYD' },
            { value: '₹30,000', label: 'LAUNCHING PRICE / SQYD' },
            { value: '100-500', label: 'PLOT SIZES (SQ YARDS)' },
            { value: '₹4,000', label: '/ MONTH RENTAL INCOME' },
          ].map((stat, i) => (
            <div key={i} className="text-right">
              <p className="text-2xl lg:text-5xl font-serif font-light" style={{ color: '#C8A96B' }}>{stat.value}</p>
              <p className="text-[8px] lg:text-[10px] font-light tracking-wide mt-1 lg:mt-1.5" style={{ color: 'var(--text-muted)' }}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>



      {/* Dot indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="transition-all duration-300 rounded-full"
            style={{
              width: i === current ? '24px' : '8px',
              height: '8px',
              background: i === current ? '#C8A96B' : 'rgba(200,169,107,0.35)',
            }}
          />
        ))}
      </div>

    </section>
  );
}
