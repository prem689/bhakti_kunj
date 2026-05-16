import Image from 'next/image';
import { Compass } from 'lucide-react';

const stats = [
  { value: '160', label: 'ACRES TOTAL AREA' },
  { value: '3000+', label: 'HAPPY FAMILIES' },
  { value: '70%', label: 'GREEN SPACES' },
  { value: '24/7', label: 'SECURITY & SURVEILLANCE' },
];

export function VisionSection() {
  return (
    <section id="vision" className="relative min-h-150 lg:min-h-175 overflow-hidden">

      {/* Background Image */}
      <Image
        src="/vision_section.png"
        alt="A Vision That Takes Shape"
        fill
        className="object-cover object-center"
        quality={100}
      />

      {/* Dark gradient overlay — left heavy so text is readable */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(90deg, rgba(7,17,11,0.92) 0%, rgba(7,17,11,0.75) 55%, rgba(7,17,11,0.35) 100%)',
        }}
      />

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to top, #07110B, transparent)' }}
      />

      {/* Compass — top right */}
      <div
        className="absolute top-8 right-8 rounded-full p-3 z-10"
        style={{
          background: 'rgba(200,169,107,0.12)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(200,169,107,0.35)',
        }}
      >
        <Compass className="w-5 h-5" style={{ color: '#C8A96B' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 lg:px-16 max-w-360 mx-auto py-24 lg:py-32">
        <div className="max-w-2xl">

          <p className="text-[11px] font-medium uppercase mb-4" style={{ color: '#C8A96B', letterSpacing: '4px' }}>
            MASTERFULLY PLANNED
          </p>
          <h2 className="text-4xl lg:text-6xl font-serif font-light text-white mb-6 leading-tight">
            A Vision That Takes Shape
          </h2>
          <p className="font-light text-lg leading-relaxed mb-12" style={{ color: 'rgba(255,255,255,0.6)' }}>
            Spread across vast acres of greenery, Bhakti Kunj is a well-positioned township
            with wide roads, spacious grounds, and state-of-the-art infrastructure.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col">
                <div className="text-4xl font-serif mb-1.5" style={{ color: '#C8A96B' }}>
                  {stat.value}
                </div>
                <div className="text-[10px] font-light tracking-widest" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <button
            className="gold-btn px-8 py-3.5 rounded-full text-sm font-semibold uppercase text-black inline-flex items-center gap-2"
            style={{ letterSpacing: '1px' }}
          >
            VIEW MASTER PLAN
            <span>→</span>
          </button>

        </div>
      </div>

    </section>
  );
}
