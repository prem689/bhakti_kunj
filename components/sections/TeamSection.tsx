'use client';

import { Crown } from 'lucide-react';

const SALES_TEAM = [
  {
    name: 'Shubham Jain',
    detail: '15+ Years Experience',
    sub: 'Delhi NCR Real Estate',
  },
  {
    name: 'Rohit Parimal Chandel',
    detail: 'Ex Assistant Director',
    sub: 'HSBC Professional',
  },
  {
    name: 'Amit Chaudhary',
    detail: '10+ Years Experience',
    sub: 'Sales & Marketing',
  },
];

export function TeamSection() {
  return (
    <section
      id="team"
      className="relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)', paddingTop: '6rem', paddingBottom: '6rem' }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 55% 35% at 50% 0%, rgba(200,169,107,0.07) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 30% 40% at 10% 80%, rgba(200,169,107,0.04) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] font-medium uppercase mb-4"
            style={{ color: '#C8A96B', letterSpacing: '4px' }}>
            THE PEOPLE BEHIND THE VISION
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-light leading-tight"
            style={{ color: 'var(--text-primary)' }}>
            Meet Our <span style={{ color: '#C8A96B' }}>Team</span>
          </h2>
        </div>

        {/* Owner card — featured */}
        <div className="flex justify-center mb-14">
          <div
            className="relative rounded-2xl px-10 py-10 flex flex-col items-center text-center max-w-sm w-full"
            style={{
              background: 'linear-gradient(145deg, rgba(200,169,107,0.12) 0%, rgba(200,169,107,0.03) 100%)',
              border: '1px solid rgba(200,169,107,0.35)',
              boxShadow: '0 0 60px rgba(200,169,107,0.08)',
            }}
          >
            {/* Crown badge */}
            <div
              className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full flex items-center gap-1.5"
              style={{ background: '#C8A96B' }}
            >
              <Crown size={11} className="text-black" />
              <span className="text-[10px] font-bold uppercase tracking-widest text-black">Owner</span>
            </div>

            {/* Avatar initials */}
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center mb-5 mt-2"
              style={{
                background: 'linear-gradient(135deg, rgba(200,169,107,0.25) 0%, rgba(200,169,107,0.08) 100%)',
                border: '2px solid rgba(200,169,107,0.5)',
              }}
            >
              <span className="text-2xl font-serif font-light" style={{ color: '#C8A96B' }}>AS</span>
            </div>

            <h3 className="text-2xl font-serif font-light mb-1" style={{ color: 'var(--text-primary)' }}>
              Ankur Sharma
            </h3>
            <p className="text-xs uppercase tracking-widest" style={{ color: 'rgba(200,169,107,0.8)' }}>
              Founder &amp; Owner
            </p>
            <p className="text-xs font-light mt-3" style={{ color: 'var(--text-muted)' }}>
              Bhakti Kunj Developers
            </p>

            {/* Gold divider */}
            <div className="w-10 h-px mt-5" style={{ background: 'rgba(200,169,107,0.4)' }} />
          </div>
        </div>

        {/* Sales team grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {SALES_TEAM.map(({ name, detail, sub }) => {
            const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('');
            return (
              <div
                key={name}
                className="rounded-2xl px-7 py-8 flex flex-col items-center text-center transition-all duration-300"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid var(--border-subtle)',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = 'rgba(200,169,107,0.3)';
                  el.style.background = 'rgba(200,169,107,0.05)';
                  el.style.transform = 'translateY(-4px)';
                  el.style.boxShadow = '0 16px 40px rgba(0,0,0,0.25)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = 'var(--border-subtle)';
                  el.style.background = 'var(--card-bg)';
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = 'none';
                }}
              >
                {/* Avatar */}
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center mb-4"
                  style={{
                    background: 'rgba(200,169,107,0.1)',
                    border: '1px solid rgba(200,169,107,0.3)',
                  }}
                >
                  <span className="text-base font-serif" style={{ color: '#C8A96B' }}>{initials}</span>
                </div>

                <h3 className="text-base font-semibold mb-1" style={{ color: 'var(--text-primary)' }}>
                  {name}
                </h3>
                <p className="text-sm font-medium mb-0.5" style={{ color: '#C8A96B' }}>
                  {detail}
                </p>
                <p className="text-xs font-light" style={{ color: 'var(--text-muted)' }}>
                  {sub}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
