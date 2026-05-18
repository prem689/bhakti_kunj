'use client';

import { useState } from 'react';
import { Navigation, Plane, Zap, BookOpen, Plus, ShoppingBag, Building2, Train } from 'lucide-react';

const CX = 400, CY = 290;

type Anchor = 'top' | 'bottom' | 'left' | 'right';

interface Dest {
  id: string; short: string; time: string;
  mx: number; my: number; anchor: Anchor;
}

const DESTS: Dest[] = [
  { id: 'highway',  short: 'N. HIGHWAY',    time: '5 MIN',  mx: 678, my: 268, anchor: 'right'  },
  { id: 'airport',  short: 'AIRPORT',        time: '25 MIN', mx: 625, my: 82,  anchor: 'top'    },
  { id: 'metro',    short: 'METRO STN.',     time: '10 MIN', mx: 572, my: 466, anchor: 'right'  },
  { id: 'school',   short: 'INTL. SCHOOL',   time: '8 MIN',  mx: 106, my: 118, anchor: 'top'    },
  { id: 'hospital', short: 'HOSPITAL',       time: '12 MIN', mx: 48,  my: 278, anchor: 'right'  },
  { id: 'mall',     short: 'SHOPPING MALL',  time: '15 MIN', mx: 352, my: 510, anchor: 'bottom' },
  { id: 'business', short: 'BUSINESS DIST.', time: '20 MIN', mx: 305, my: 68,  anchor: 'top'    },
  { id: 'railway',  short: 'RAILWAY STN.',   time: '18 MIN', mx: 118, my: 462, anchor: 'bottom' },
];

const PARTICLE_DURS = ['2.2s','2.8s','2.5s','2.1s','2.3s','2.6s','2.4s','2.7s'];
const FLOAT_DURS    = ['3.0s','3.5s','2.8s','4.0s','3.2s','3.8s','2.6s','3.6s'];
const FLOAT_DELAYS  = ['0s',  '0.6s','0.3s','0.9s','0.2s','0.8s','0.4s','1.1s'];

const LEFT_ITEMS = [
  { id: 'highway',  label: 'National Highway',          time: '5 Mins',  Icon: Navigation },
  { id: 'airport',  label: 'Airport',                   time: '25 Mins', Icon: Plane       },
  { id: 'metro',    label: 'Metro Station',              time: '10 Mins', Icon: Zap         },
  { id: 'school',   label: 'International School',       time: '8 Mins',  Icon: BookOpen    },
  { id: 'hospital', label: 'Multi-speciality Hospital',  time: '12 Mins', Icon: Plus        },
  { id: 'mall',     label: 'Shopping Mall',              time: '15 Mins', Icon: ShoppingBag },
  { id: 'business', label: 'Business District',          time: '20 Mins', Icon: Building2   },
  { id: 'railway',  label: 'Railway Station',            time: '18 Mins', Icon: Train       },
];

function LabelCard({ d, isHov }: { d: Dest; isHov: boolean }) {
  const { mx, my, anchor, short, time } = d;
  const gold = '#C8A96B';
  const W = 88, H = 36, gap = 18;
  let rx: number, ry: number, lx1: number, ly1: number, lx2: number, ly2: number, tx: number;

  switch (anchor) {
    case 'top':
      rx = mx - W / 2; ry = my - H - gap;
      lx1 = mx; ly1 = my - 9; lx2 = mx; ly2 = ry + H; tx = mx; break;
    case 'bottom':
      rx = mx - W / 2; ry = my + gap;
      lx1 = mx; ly1 = my + 9; lx2 = mx; ly2 = ry; tx = mx; break;
    case 'left':
      rx = mx - W - gap; ry = my - H / 2;
      lx1 = mx - 9; ly1 = my; lx2 = rx + W; ly2 = my; tx = rx + W / 2; break;
    default: // right
      rx = mx + gap; ry = my - H / 2;
      lx1 = mx + 9; ly1 = my; lx2 = rx; ly2 = my; tx = rx + W / 2; break;
  }

  return (
    <g opacity={isHov ? 1 : 0.72} style={{ transition: 'opacity 0.3s ease' }}>
      <line x1={lx1} y1={ly1} x2={lx2} y2={ly2}
        stroke={gold} strokeWidth="0.75" strokeDasharray="3 2" opacity="0.5" />
      <rect x={rx} y={ry} width={W} height={H} rx="5"
        fill="rgba(5,12,9,0.92)"
        stroke={isHov ? 'rgba(200,169,107,0.7)' : 'rgba(200,169,107,0.28)'}
        strokeWidth="1" />
      <text x={tx} y={ry + 14} textAnchor="middle"
        fill="rgba(255,255,255,0.6)" fontSize="7" letterSpacing="0.8"
        fontFamily="'Plus Jakarta Sans', Inter, sans-serif">{short}</text>
      <text x={tx} y={ry + 27} textAnchor="middle"
        fill={gold} fontSize="9.5" fontWeight="700" letterSpacing="0.5"
        fontFamily="'Plus Jakarta Sans', Inter, sans-serif">{time}</text>
    </g>
  );
}

export function LocationSection() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section
      id="location"
      className="relative overflow-hidden"
      style={{ minHeight: '750px', background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-tertiary) 100%)' }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 38% 65% at 18% 50%, rgba(8,35,22,0.55) 0%, transparent 70%)' }} />
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 30% 45% at 78% 28%, rgba(200,169,107,0.05) 0%, transparent 70%)' }} />

      <div
        className="relative z-10 flex flex-col lg:flex-row items-stretch max-w-360 mx-auto px-6 lg:px-16 gap-0"
        style={{ minHeight: '750px', paddingTop: '6rem', paddingBottom: '6rem' }}
      >
        {/* LEFT 40% */}
        <div className="w-full lg:w-2/5 flex flex-col justify-center pr-0 lg:pr-14">

          <p className="text-[11px] font-medium uppercase mb-5"
            style={{ color: '#C8A96B', letterSpacing: '4px' }}>
            WELL CONNECTED
          </p>

          <h2 className="text-4xl lg:text-5xl font-serif font-light text-white mb-6 leading-tight">
            Connected To Everything That Matters
          </h2>

          <p className="text-lg font-light leading-relaxed mb-10"
            style={{ color: 'var(--text-secondary)', maxWidth: '420px' }}>
            Strategically positioned with seamless access to highways, airports,
            business districts, healthcare, and educational institutions.
          </p>

          <div className="flex flex-col gap-0.5 mb-10">
            {LEFT_ITEMS.map((item) => {
              const isHov = hovered === item.id;
              const { Icon } = item;
              return (
                <div
                  key={item.id}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl"
                  style={{
                    borderLeft: `2px solid ${isHov ? '#C8A96B' : 'var(--border-faint)'}`,
                    background: isHov ? 'rgba(200,169,107,0.07)' : 'transparent',
                    transform: isHov ? 'translateX(5px)' : 'translateX(0)',
                    transition: 'all 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={() => setHovered(item.id)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div
                    className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center"
                    style={{
                      background: isHov ? 'rgba(200,169,107,0.18)' : 'var(--card-bg-hover)',
                      border: `1px solid ${isHov ? 'rgba(200,169,107,0.5)' : 'var(--border-subtle)'}`,
                      boxShadow: isHov ? '0 0 14px rgba(200,169,107,0.4)' : 'none',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <Icon size={13} style={{
                      color: isHov ? '#C8A96B' : 'var(--text-muted)',
                      transition: 'color 0.3s ease',
                    }} />
                  </div>
                  <span className="flex-1 text-sm font-light" style={{
                    color: isHov ? 'var(--text-primary)' : 'var(--text-secondary)',
                    transition: 'color 0.3s ease',
                  }}>
                    {item.label}
                  </span>
                  <span className="text-sm font-bold" style={{ color: '#C8A96B' }}>
                    {item.time}
                  </span>
                </div>
              );
            })}
          </div>

          <button
            className="gold-btn px-8 py-3.5 rounded-full text-sm font-semibold uppercase text-black inline-flex items-center gap-2 self-start"
            style={{ letterSpacing: '1px' }}
          >
            VIEW LOCATION MAP
            <span>→</span>
          </button>
        </div>

        {/* RIGHT 60% — MAP */}
        <div className="w-full lg:w-3/5 relative mt-12 lg:mt-0" style={{ minHeight: '500px' }}>
          <div
            className="absolute inset-0 rounded-2xl overflow-hidden"
            style={{
              background: '#060E0B',
              border: '1px solid rgba(200,169,107,0.1)',
              boxShadow: '0 0 80px rgba(0,0,0,0.6), inset 0 0 60px rgba(0,0,0,0.3)',
            }}
          >
            <svg className="w-full h-full" viewBox="0 0 800 580" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="road-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="1.5" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="pin-glow" x="-150%" y="-150%" width="400%" height="400%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <filter id="particle-glow" x="-200%" y="-200%" width="500%" height="500%">
                  <feGaussianBlur stdDeviation="2.5" result="blur" />
                  <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                </filter>
                <radialGradient id="center-glow-grad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(200,169,107,0.22)" />
                  <stop offset="100%" stopColor="rgba(200,169,107,0)" />
                </radialGradient>
                <radialGradient id="township-grad" cx="40%" cy="35%" r="60%">
                  <stop offset="0%" stopColor="#F0D898" />
                  <stop offset="100%" stopColor="#C8A96B" />
                </radialGradient>
                <radialGradient id="vignette" cx="50%" cy="50%" r="65%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="100%" stopColor="rgba(0,0,0,0.55)" />
                </radialGradient>
              </defs>

              {/* Background */}
              <rect width="800" height="580" fill="#060E0B" />
              <ellipse cx={CX} cy={CY} rx="300" ry="240" fill="url(#center-glow-grad)" />

              {/* Micro street grid */}
              <g stroke="rgba(80,120,100,0.055)" strokeWidth="0.5" fill="none">
                {[52,88,148,205,248,338,385,438,492,538].map(y =>
                  <line key={`h${y}`} x1="0" y1={y} x2="800" y2={y} />
                )}
                {[62,112,168,225,285,348,452,512,568,632,698,752].map(x =>
                  <line key={`v${x}`} x1={x} y1="0" x2={x} y2="580" />
                )}
              </g>

              {/* Secondary roads */}
              <g stroke="rgba(200,169,107,0.1)" strokeWidth="1" fill="none">
                <line x1="0" y1="175" x2="800" y2="175" />
                <line x1="0" y1="395" x2="800" y2="395" />
                <line x1="242" y1="0" x2="242" y2="580" />
                <line x1="558" y1="0" x2="558" y2="580" />
              </g>

              {/* Main arteries through center */}
              <g filter="url(#road-glow)" fill="none">
                <line x1="0" y1={CY} x2="800" y2={CY} stroke="rgba(200,169,107,0.3)" strokeWidth="1.5" />
                <line x1={CX} y1="0" x2={CX} y2="580" stroke="rgba(200,169,107,0.3)" strokeWidth="1.5" />
              </g>

              {/* Connection lines + animated particles */}
              {DESTS.map((d, i) => {
                const isHov = hovered === d.id;
                const path = `M ${CX},${CY} L ${d.mx},${d.my}`;
                return (
                  <g key={`conn-${d.id}`}>
                    <line
                      x1={CX} y1={CY} x2={d.mx} y2={d.my}
                      stroke={isHov ? 'rgba(200,169,107,0.55)' : 'rgba(200,169,107,0.18)'}
                      strokeWidth={isHov ? 1.5 : 1}
                      strokeDasharray="6 4"
                      style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
                    />
                    <circle r={isHov ? 3.5 : 2.5} fill="#C8A96B"
                      filter="url(#particle-glow)" opacity={isHov ? 1 : 0.7}>
                      <animateMotion dur={PARTICLE_DURS[i]} repeatCount="indefinite" path={path} />
                    </circle>
                  </g>
                );
              })}

              {/* Township center marker */}
              <circle cx={CX} cy={CY} fill="none" stroke="#C8A96B" strokeWidth="1.5" opacity="0" r="18">
                <animate attributeName="r" values="18;52;18" dur="2.8s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.7;0;0.7" dur="2.8s" repeatCount="indefinite" />
              </circle>
              <circle cx={CX} cy={CY} fill="none" stroke="#C8A96B" strokeWidth="0.8" opacity="0" r="18">
                <animate attributeName="r" values="18;68;18" dur="2.8s" begin="0.9s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.4;0;0.4" dur="2.8s" begin="0.9s" repeatCount="indefinite" />
              </circle>
              <circle cx={CX} cy={CY} r="22" fill="rgba(200,169,107,0.18)" filter="url(#pin-glow)">
                <animate attributeName="r" values="20;27;20" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.5;1;0.5" dur="3s" repeatCount="indefinite" />
              </circle>
              <circle cx={CX} cy={CY} r="14" fill="url(#township-grad)" filter="url(#pin-glow)" />
              <circle cx={CX} cy={CY} r="14" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1" />
              <circle cx={CX} cy={CY} r="5" fill="white" />
              <text x={CX} y={CY + 37} textAnchor="middle"
                fill="#C8A96B" fontSize="9" letterSpacing="2.5" fontWeight="600"
                fontFamily="'Plus Jakarta Sans', Inter, sans-serif">BHAKTI KUNJ</text>
              <text x={CX} y={CY + 49} textAnchor="middle"
                fill="rgba(255,255,255,0.28)" fontSize="7" letterSpacing="1"
                fontFamily="'Plus Jakarta Sans', Inter, sans-serif">TOWNSHIP</text>

              {/* Destination markers */}
              {DESTS.map((d, i) => {
                const isHov = hovered === d.id;
                return (
                  <g key={`pin-${d.id}`}
                    onMouseEnter={() => setHovered(d.id)}
                    onMouseLeave={() => setHovered(null)}
                    style={{ cursor: 'pointer' }}>
                    <circle cx={d.mx} cy={d.my} r="7" fill="none" stroke="#C8A96B" strokeWidth="1" opacity="0">
                      <animate attributeName="r" values="7;16;7" dur={FLOAT_DURS[i]} begin={FLOAT_DELAYS[i]} repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.5;0;0.5" dur={FLOAT_DURS[i]} begin={FLOAT_DELAYS[i]} repeatCount="indefinite" />
                    </circle>
                    <circle cx={d.mx} cy={d.my} r="7"
                      fill={isHov ? 'rgba(200,169,107,0.35)' : 'rgba(200,169,107,0.12)'}
                      filter="url(#pin-glow)"
                      style={{ transition: 'fill 0.3s' }} />
                    <circle cx={d.mx} cy={d.my} r="4.5"
                      fill={isHov ? '#C8A96B' : 'rgba(200,169,107,0.82)'}
                      filter="url(#pin-glow)"
                      style={{ transition: 'fill 0.3s' }} />
                    <circle cx={d.mx} cy={d.my} r="1.8" fill="white" opacity="0.9" />
                  </g>
                );
              })}

              {/* Label cards */}
              {DESTS.map((d) => (
                <LabelCard key={`lbl-${d.id}`} d={d} isHov={hovered === d.id} />
              ))}

              {/* HUD: compass */}
              <g transform="translate(757,48)">
                <circle r="24" fill="rgba(5,12,9,0.82)" stroke="rgba(200,169,107,0.2)" strokeWidth="1" />
                <text y="-13" textAnchor="middle" fill="#C8A96B" fontSize="9" fontWeight="700"
                  fontFamily="'Plus Jakarta Sans', sans-serif">N</text>
                <text y="19" textAnchor="middle" fill="rgba(255,255,255,0.22)" fontSize="7"
                  fontFamily="'Plus Jakarta Sans', sans-serif">S</text>
                <text x="14" y="4" textAnchor="start" fill="rgba(255,255,255,0.22)" fontSize="7"
                  fontFamily="'Plus Jakarta Sans', sans-serif">E</text>
                <text x="-14" y="4" textAnchor="end" fill="rgba(255,255,255,0.22)" fontSize="7"
                  fontFamily="'Plus Jakarta Sans', sans-serif">W</text>
                <line x1="0" y1="-18" x2="0" y2="-10" stroke="#C8A96B" strokeWidth="1.5" />
                <line x1="0" y1="10" x2="0" y2="18" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
              </g>

              {/* HUD: map title */}
              <g transform="translate(12,12)">
                <rect x="0" y="0" width="134" height="26" rx="4"
                  fill="rgba(5,12,9,0.85)" stroke="rgba(200,169,107,0.18)" strokeWidth="1" />
                <text x="10" y="17" fill="rgba(200,169,107,0.75)" fontSize="8.5"
                  fontWeight="600" letterSpacing="1.5"
                  fontFamily="'Plus Jakarta Sans', sans-serif">CONNECTIVITY MAP</text>
              </g>

              {/* HUD: coordinates */}
              <text x="12" y="564" fill="rgba(200,169,107,0.2)" fontSize="7.5"
                fontFamily="monospace" letterSpacing="0.5">28.6315°N  77.4921°E</text>

              {/* HUD: scale bar */}
              <g transform="translate(12,548)">
                <line x1="0" y1="0" x2="40" y2="0" stroke="rgba(200,169,107,0.22)" strokeWidth="1" />
                <line x1="0" y1="-3" x2="0" y2="3" stroke="rgba(200,169,107,0.22)" strokeWidth="1" />
                <line x1="40" y1="-3" x2="40" y2="3" stroke="rgba(200,169,107,0.22)" strokeWidth="1" />
                <text x="20" y="-5" textAnchor="middle" fill="rgba(200,169,107,0.22)" fontSize="7"
                  fontFamily="monospace">5 KM</text>
              </g>

              {/* Vignette */}
              <rect width="800" height="580" fill="url(#vignette)" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
