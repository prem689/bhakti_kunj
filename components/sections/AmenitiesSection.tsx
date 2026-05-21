import {
  Navigation,
  Waves,
  HeartHandshake,
  Building2,
  ShoppingBag,
  Trees,
  Zap,
  Flower2,
  Dumbbell
} from 'lucide-react';

interface AmenityItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: boolean;
}

const amenities: AmenityItem[] = [
  { icon: <HeartHandshake className="w-10 h-10" />, title: 'Gaushala', description: 'Dedicated cow sanctuary honouring the spirit of Braj.', highlight: true },
  { icon: <Navigation className="w-8 h-8" />, title: '40m Entry / Exit Road', description: 'Grand boulevard entrance with 9m wide internal roads.' },
  { icon: <Waves className="w-8 h-8" />, title: '40m Swimming Pool', description: 'Olympic-length pool within the township complex.' },
  { icon: <Building2 className="w-8 h-8" />, title: 'Resort-Style Township', description: 'Complete township with the look & feel of a luxury resort.' },
  { icon: <ShoppingBag className="w-8 h-8" />, title: 'Commercial Centre', description: 'Retail and dining hub — Domino’s coming soon.' },
  { icon: <Trees className="w-8 h-8" />, title: '25% Green Cover', description: 'Lush landscaped gardens and dedicated natural forest area.' },
  { icon: <Zap className="w-8 h-8" />, title: '24/7 Power Backup', description: 'Uninterrupted power supply across the entire township.' },
  { icon: <Flower2 className="w-8 h-8" />, title: 'Meditation Centre', description: 'Dedicated space for yoga, meditation, and wellness.' },
  { icon: <Dumbbell className="w-8 h-8" />, title: 'Club & Recreation', description: 'Full-featured clubhouse with sports & recreation facilities.' },
];

export function AmenitiesSection() {
  return (
    <section
      id="amenities"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-primary) 100%)' }}
    >
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.035,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Ambient gold glow — top center */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-150 h-75 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(200,169,107,0.07) 0%, transparent 70%)' }}
      />

      <div className="px-6 lg:px-16 max-w-360 mx-auto relative">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] font-medium uppercase mb-4" style={{ color: '#C8A96B', letterSpacing: '4px' }}>
            SPACES FOR EVERY MOMENT
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-light text-white">
            World-Class <span style={{ color: '#C8A96B' }}>Facilities</span>
          </h2>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {amenities.map((amenity, index) => (
            <div key={index} className={`luxury-card rounded-xl p-8 flex flex-col items-center text-center ${amenity.highlight ? 'border-[#C8A96B] md:col-span-2 lg:col-span-3 lg:w-2/3 mx-auto' : ''}`} style={{ background: amenity.highlight ? 'linear-gradient(135deg, rgba(200,169,107,0.1) 0%, rgba(0,0,0,0.5) 100%)' : 'var(--card-bg)' }}>
              {amenity.highlight && (
                <div className="mb-3 text-xs uppercase tracking-widest font-bold" style={{ color: '#C8A96B' }}>Main Highlight</div>
              )}
              <div className="card-icon mb-5" style={{ color: '#C8A96B' }}>
                {amenity.icon}
              </div>
              <h3 className={`${amenity.highlight ? 'text-2xl' : 'text-base'} font-semibold text-white mb-2`}>{amenity.title}</h3>
              <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {amenity.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
