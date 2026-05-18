export function CTASection() {
  return (
    <section
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, var(--bg-primary) 0%, var(--bg-secondary) 50%, var(--bg-primary) 100%)' }}
    >
      {/* Cinematic vignette */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.55) 100%)' }}
      />

      {/* Ambient gold glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-75 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(200,169,107,0.09) 0%, transparent 70%)' }}
      />

      <div className="px-6 lg:px-16 max-w-4xl mx-auto relative">

        {/* Main CTA card */}
        <div
          className="rounded-2xl p-10 lg:p-16 text-center"
          style={{
            background: 'rgba(200,169,107,0.04)',
            border: '1px solid rgba(200,169,107,0.18)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: '0 0 80px rgba(200,169,107,0.07)',
          }}
        >
          <p className="text-[10px] font-medium uppercase mb-5" style={{ color: '#C8A96B', letterSpacing: '4px' }}>
            A LIFE WELL LIVED
          </p>
          <h2 className="text-4xl lg:text-6xl font-serif font-light text-white mb-6 leading-tight">
            Your Dream Life Awaits
          </h2>
          <p className="text-lg font-light mb-10 max-w-xl mx-auto" style={{ color: 'var(--text-secondary)' }}>
            Be part of the most sought-after township community. Book your site visit today!
          </p>
          <a
            href="https://wa.me/911234567890?text=Hi%21%20I%27m%20interested%20in%20Bhakti%20Kunj%20Township%20and%20would%20like%20to%20book%20a%20site%20visit.%20Please%20get%20in%20touch%20with%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="gold-btn px-10 py-4 rounded-full text-sm font-semibold uppercase text-black inline-flex items-center gap-3"
            style={{ letterSpacing: '1.5px' }}
          >
            BOOK A SITE VISIT
            <span className="text-base">→</span>
          </a>
        </div>

        {/* Stats row */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <p className="text-4xl font-serif mb-2" style={{ color: '#C8A96B' }}>160 ACRES</p>
            <p className="text-sm font-light" style={{ color: 'var(--text-muted)' }}>Of Spacious Living</p>
          </div>
          <div>
            <p className="text-4xl font-serif mb-2" style={{ color: '#C8A96B' }}>3000+</p>
            <p className="text-sm font-light" style={{ color: 'var(--text-muted)' }}>Happy Families</p>
          </div>
          <div>
            <p className="text-4xl font-serif mb-2" style={{ color: '#C8A96B' }}>70%</p>
            <p className="text-sm font-light" style={{ color: 'var(--text-muted)' }}>Green Spaces</p>
          </div>
        </div>
      </div>
    </section>
  );
}
