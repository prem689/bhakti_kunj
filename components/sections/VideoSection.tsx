'use client';

export function VideoSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden"
      style={{ background: 'var(--bg-primary)', paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      {/* ── Golden leaf SVG decorations ── */}

      {/* Large leaf — top left */}
      <svg className="absolute -top-10 -left-16 pointer-events-none" width="340" height="380" viewBox="0 0 340 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.55 }}>
        <path d="M170 360 C80 280, 10 180, 30 80 C50 -20, 170 10, 170 10 C170 10, 290 -20, 310 80 C330 180, 260 280, 170 360Z" fill="rgba(200,169,107,0.08)" stroke="#C8A96B" strokeWidth="1.2"/>
        <line x1="170" y1="355" x2="170" y2="12" stroke="#C8A96B" strokeWidth="1.5" strokeOpacity="0.7"/>
        <line x1="170" y1="290" x2="90" y2="200" stroke="#C8A96B" strokeWidth="0.9" strokeOpacity="0.5"/>
        <line x1="170" y1="250" x2="240" y2="170" stroke="#C8A96B" strokeWidth="0.9" strokeOpacity="0.5"/>
        <line x1="170" y1="210" x2="100" y2="140" stroke="#C8A96B" strokeWidth="0.8" strokeOpacity="0.45"/>
        <line x1="170" y1="170" x2="230" y2="110" stroke="#C8A96B" strokeWidth="0.8" strokeOpacity="0.45"/>
        <line x1="170" y1="130" x2="115" y2="82" stroke="#C8A96B" strokeWidth="0.7" strokeOpacity="0.35"/>
      </svg>

      {/* Small leaf — bottom left rotated */}
      <svg className="absolute bottom-0 left-24 pointer-events-none" width="180" height="220" viewBox="0 0 180 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.45, transform: 'rotate(-30deg)' }}>
        <path d="M90 210 C40 160, 5 100, 18 45 C30 -10, 90 5, 90 5 C90 5, 150 -10, 162 45 C175 100, 140 160, 90 210Z" fill="rgba(200,169,107,0.08)" stroke="#C8A96B" strokeWidth="1"/>
        <line x1="90" y1="207" x2="90" y2="6" stroke="#C8A96B" strokeWidth="1.2" strokeOpacity="0.7"/>
        <line x1="90" y1="165" x2="48" y2="115" stroke="#C8A96B" strokeWidth="0.8" strokeOpacity="0.5"/>
        <line x1="90" y1="135" x2="128" y2="95" stroke="#C8A96B" strokeWidth="0.8" strokeOpacity="0.5"/>
        <line x1="90" y1="105" x2="52" y2="70" stroke="#C8A96B" strokeWidth="0.7" strokeOpacity="0.4"/>
      </svg>

      {/* Large leaf — top right */}
      <svg className="absolute -top-8 right-0 pointer-events-none" width="280" height="320" viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.5, transform: 'rotate(25deg) translateX(60px)' }}>
        <path d="M140 305 C65 235, 8 148, 25 65 C42 -18, 140 8, 140 8 C140 8, 238 -18, 255 65 C272 148, 215 235, 140 305Z" fill="rgba(200,169,107,0.08)" stroke="#C8A96B" strokeWidth="1.1"/>
        <line x1="140" y1="302" x2="140" y2="10" stroke="#C8A96B" strokeWidth="1.4" strokeOpacity="0.7"/>
        <line x1="140" y1="250" x2="75" y2="175" stroke="#C8A96B" strokeWidth="0.9" strokeOpacity="0.5"/>
        <line x1="140" y1="210" x2="195" y2="145" stroke="#C8A96B" strokeWidth="0.9" strokeOpacity="0.5"/>
        <line x1="140" y1="170" x2="80" y2="115" stroke="#C8A96B" strokeWidth="0.8" strokeOpacity="0.45"/>
        <line x1="140" y1="135" x2="185" y2="90" stroke="#C8A96B" strokeWidth="0.8" strokeOpacity="0.45"/>
      </svg>

      {/* Tiny leaf — bottom right */}
      <svg className="absolute bottom-8 right-12 pointer-events-none" width="130" height="160" viewBox="0 0 130 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.4, transform: 'rotate(15deg)' }}>
        <path d="M65 152 C30 118, 4 75, 14 34 C24 -7, 65 4, 65 4 C65 4, 106 -7, 116 34 C126 75, 100 118, 65 152Z" fill="rgba(200,169,107,0.08)" stroke="#C8A96B" strokeWidth="1"/>
        <line x1="65" y1="149" x2="65" y2="5" stroke="#C8A96B" strokeWidth="1.1" strokeOpacity="0.7"/>
        <line x1="65" y1="120" x2="35" y2="85" stroke="#C8A96B" strokeWidth="0.7" strokeOpacity="0.5"/>
        <line x1="65" y1="95" x2="90" y2="65" stroke="#C8A96B" strokeWidth="0.7" strokeOpacity="0.5"/>
      </svg>

      {/* Subtle center glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 40% at 50% 50%, rgba(200,169,107,0.04) 0%, transparent 70%)' }} />

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* LEFT — Text content */}
          <div className="w-full lg:w-2/5 flex flex-col">

            <p className="text-[11px] font-medium uppercase mb-5"
              style={{ color: '#C8A96B', letterSpacing: '4px' }}>
              SITE PREVIEW
            </p>

            <h2 className="text-4xl lg:text-5xl font-serif font-light mb-6 leading-tight"
              style={{ color: 'var(--text-primary)' }}>
              See Bhakti Kunj<br />
              <span style={{ color: '#C8A96B' }}>Come Alive</span>
            </h2>

            <div className="w-12 h-px mb-6" style={{ background: 'rgba(200,169,107,0.5)' }} />

            <p className="text-base font-light leading-relaxed mb-6"
              style={{ color: 'var(--text-secondary)' }}>
              Take a journey through our thoughtfully planned township — wide tree-lined roads,
              lush green spaces, and a community that feels like home from the very first moment.
            </p>

            <p className="text-base font-light leading-relaxed mb-10"
              style={{ color: 'var(--text-muted)' }}>
              160 acres of carefully crafted living, where modern infrastructure meets
              the timeless calm of Braj.
            </p>

            <a
              href="https://youtu.be/h4gLdCGHcMg?si=BKh_0SXuPASHiBoh"
              target="_blank"
              rel="noopener noreferrer"
              className="gold-btn px-7 py-3.5 rounded-full text-sm font-semibold uppercase text-black inline-flex items-center gap-2 self-start"
              style={{ letterSpacing: '1px' }}
            >
              Watch on YouTube
              <span>↗</span>
            </a>
          </div>

          {/* RIGHT — Video */}
          <div className="w-full lg:w-3/5">
            <div
              className="relative rounded-2xl overflow-hidden"
              style={{
                aspectRatio: '16 / 9',
                boxShadow: '0 0 0 1px rgba(200,169,107,0.2), 0 32px 80px rgba(0,0,0,0.5)',
              }}
            >
              {/* Gold corner accents */}
              <span className="absolute top-0 left-0 w-7 h-7 pointer-events-none z-10"
                style={{ borderTop: '2px solid rgba(200,169,107,0.65)', borderLeft: '2px solid rgba(200,169,107,0.65)', borderRadius: '12px 0 0 0' }} />
              <span className="absolute top-0 right-0 w-7 h-7 pointer-events-none z-10"
                style={{ borderTop: '2px solid rgba(200,169,107,0.65)', borderRight: '2px solid rgba(200,169,107,0.65)', borderRadius: '0 12px 0 0' }} />
              <span className="absolute bottom-0 left-0 w-7 h-7 pointer-events-none z-10"
                style={{ borderBottom: '2px solid rgba(200,169,107,0.65)', borderLeft: '2px solid rgba(200,169,107,0.65)', borderRadius: '0 0 0 12px' }} />
              <span className="absolute bottom-0 right-0 w-7 h-7 pointer-events-none z-10"
                style={{ borderBottom: '2px solid rgba(200,169,107,0.65)', borderRight: '2px solid rgba(200,169,107,0.65)', borderRadius: '0 0 12px 0' }} />

              <iframe
                src="https://www.youtube.com/embed/h4gLdCGHcMg?rel=0&modestbranding=1&color=white"
                title="Bhakti Kunj Township — Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
                style={{ border: 'none' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
