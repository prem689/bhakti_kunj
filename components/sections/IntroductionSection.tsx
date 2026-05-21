'use client';

import { ShieldCheck, Award, Star, History } from 'lucide-react';

export function IntroductionSection() {
  return (
    <section
      id="introduction"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 10% 50%, rgba(200,169,107,0.05) 0%, transparent 50%)',
      }} />
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(circle at 90% 80%, rgba(200,169,107,0.05) 0%, transparent 50%)',
      }} />

      <div className="px-6 lg:px-16 max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Column: Discover Bhakti Kunj */}
          <div className="space-y-8">
            <p className="text-[11px] font-medium uppercase" style={{ color: '#C8A96B', letterSpacing: '4px' }}>
              Welcome to the Future
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-white leading-tight">
              Discover <span style={{ color: '#C8A96B' }}>Bhakti Kunj</span>
            </h2>
            
            <div className="space-y-6 text-lg font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                Discover Bhakti Kunj — a luxury plots & cottages township on the Mathura–Bharatpur Highway. A sanctuary where modern architecture meets the sacred serenity of Braj. Designed for those who crave a peaceful life without compromising on luxury.
              </p>
              <p className="p-4 rounded-lg border" style={{ borderColor: 'rgba(200,169,107,0.3)', background: 'rgba(200,169,107,0.05)', color: '#fff' }}>
                <strong style={{ color: '#C8A96B' }}>Phase 1 is completely sold out.</strong> Phase 2 is your opportunity to own a piece of this extraordinary vision.
              </p>
            </div>
          </div>

          {/* Right Column: Legacy Section */}
          <div className="space-y-8 luxury-card p-8 lg:p-12 rounded-2xl relative">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <History className="w-32 h-32" style={{ color: '#C8A96B' }} />
            </div>

            <p className="text-[11px] font-medium uppercase" style={{ color: '#C8A96B', letterSpacing: '4px' }}>
              Legacy Built on Trust
            </p>
            <h3 className="text-3xl lg:text-4xl font-serif font-light text-white leading-tight">
              20 Years of <span style={{ color: '#C8A96B' }}>Excellence</span>
            </h3>
            <h4 className="text-xl font-medium text-white/90">
              A Legacy Built on Trust & Land Expertise in Mathura
            </h4>
            
            <div className="space-y-4 text-base font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              <p>
                With over two decades of experience in land development across the Mathura region, Bhakti Kunj Developers has built an unrivalled reputation for quality, transparency, and timely delivery.
              </p>
              <p>
                We have proudly provided land to some of India’s most prominent and respected real estate brands, including <strong className="text-white">Lodha Group</strong> and several other leading national developers.
              </p>
              <p>
                Our deep-rooted knowledge of the local land market, combined with a commitment to legal compliance and customer satisfaction, makes us the most trusted name in Mathura real estate.
              </p>
            </div>

            {/* Trust Highlights */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
              {[
                { icon: <Award className="w-5 h-5" />, text: '20+ Years in Mathura' },
                { icon: <Star className="w-5 h-5" />, text: 'Lodha Group' },
                { icon: <ShieldCheck className="w-5 h-5" />, text: 'Trusted Land Experts' },
                { icon: <Award className="w-5 h-5" />, text: 'Other Premium Builders' },
              ].map((highlight, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div style={{ color: '#C8A96B' }}>{highlight.icon}</div>
                  <span className="text-sm font-medium text-white/80">{highlight.text}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
