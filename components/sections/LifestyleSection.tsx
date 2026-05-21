'use client';

import { Sunrise, Leaf, Users, Music, Flame, Wind } from 'lucide-react';

const pillars = [
  {
    Icon: Sunrise,
    title: 'Sacred Mornings',
    desc: 'Wake up to the sounds of Braj — birdsong, temple bells, and the stillness of nature that no city can offer.',
  },
  {
    Icon: Leaf,
    title: 'Green Living',
    desc: '25% green cover with landscaped gardens and a dedicated forest area — breathe clean, live long.',
  },
  {
    Icon: Flame,
    title: 'Spiritual Wellness',
    desc: 'A dedicated meditation centre, yoga spaces, and a Gaushala rooted in the devotion of Braj.',
  },
  {
    Icon: Users,
    title: 'Community Events',
    desc: 'Festivals, cultural evenings, and community gatherings that bring neighbours together as family.',
  },
  {
    Icon: Music,
    title: 'Recreation & Leisure',
    desc: 'A full-featured clubhouse with sports, games, a 40m pool, and recreation for every age.',
  },
  {
    Icon: Wind,
    title: 'Resort-Style Comfort',
    desc: '24/7 power backup, wide roads, gated security — all the comforts of a luxury resort, every single day.',
  },
];

export function LifestyleSection() {
  return (
    <section
      id="lifestyle"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)', paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 40% at 50% 0%, rgba(200,169,107,0.06) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 40% 35% at 80% 80%, rgba(200,169,107,0.04) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] font-medium uppercase mb-4"
            style={{ color: '#C8A96B', letterSpacing: '4px' }}>
            THE BHAKTI KUNJ LIFESTYLE
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-light mb-5 leading-tight"
            style={{ color: 'var(--text-primary)' }}>
            Life Beyond the <span style={{ color: '#C8A96B' }}>Everyday</span>
          </h2>
          <p className="text-base font-light max-w-2xl mx-auto"
            style={{ color: 'var(--text-muted)' }}>
            Where the sacred serenity of Braj meets resort-style luxury — a life crafted around peace,
            purpose, and community.
          </p>
        </div>

        {/* Pillars grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map(({ Icon, title, desc }, i) => (
            <div
              key={i}
              className="group rounded-2xl p-8 flex flex-col gap-5 transition-all duration-300"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid var(--border-subtle)',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = 'rgba(200,169,107,0.06)';
                el.style.borderColor = 'rgba(200,169,107,0.3)';
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = '0 16px 40px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.background = 'var(--card-bg)';
                el.style.borderColor = 'var(--border-subtle)';
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = 'none';
              }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                style={{ background: 'rgba(200,169,107,0.1)', border: '1px solid rgba(200,169,107,0.25)' }}
              >
                <Icon size={20} style={{ color: '#C8A96B' }} />
              </div>
              <div>
                <h3 className="text-base font-semibold mb-2" style={{ color: 'var(--text-primary)' }}>
                  {title}
                </h3>
                <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom quote strip */}
        <div
          className="mt-16 rounded-2xl px-8 py-8 flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left"
          style={{
            background: 'linear-gradient(135deg, rgba(200,169,107,0.1) 0%, rgba(200,169,107,0.04) 100%)',
            border: '1px solid rgba(200,169,107,0.2)',
          }}
        >
          <div className="shrink-0 w-14 h-14 rounded-full flex items-center justify-center"
            style={{ background: 'rgba(200,169,107,0.15)', border: '1px solid rgba(200,169,107,0.4)' }}>
            <Flame size={22} style={{ color: '#C8A96B' }} />
          </div>
          <div>
            <p className="text-lg font-serif font-light italic mb-1" style={{ color: 'var(--text-primary)' }}>
              "A sanctuary where modern architecture meets the sacred serenity of Braj."
            </p>
            <p className="text-xs uppercase tracking-widest" style={{ color: '#C8A96B' }}>
              Bhakti Kunj — Resort Style Living in Mathura
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
