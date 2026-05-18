import {
  BookOpen,
  Cross,
  ShoppingCart,
  Banknote,
  Stethoscope,
  Waves,
  Dumbbell,
  Trees,
  Utensils,
  Shield,
} from 'lucide-react';

interface AmenityItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const amenities: AmenityItem[] = [
  { icon: <BookOpen className="w-8 h-8" />, title: 'School', description: 'Top educational institutions' },
  { icon: <Cross className="w-8 h-8" />, title: 'Hospital', description: 'Multi-specialty healthcare' },
  { icon: <ShoppingCart className="w-8 h-8" />, title: 'Shopping Mall', description: 'Retail therapy just steps away' },
  { icon: <Banknote className="w-8 h-8" />, title: 'ATM & Banking', description: 'Banks & ATMs within township' },
  { icon: <Stethoscope className="w-8 h-8" />, title: 'Medical', description: '24/7 medical & pharmacy services' },
  { icon: <Waves className="w-8 h-8" />, title: 'Swimming Pool', description: 'Resort-style pool & kids pool' },
  { icon: <Dumbbell className="w-8 h-8" />, title: 'Jogging Track', description: 'Scenic tracks for a healthy lifestyle' },
  { icon: <Utensils className="w-8 h-8" />, title: 'Grocery Store', description: 'Daily essentials at your doorstep' },
  { icon: <Trees className="w-8 h-8" />, title: 'Multipurpose Hall', description: 'Events & celebrations made special' },
  { icon: <Waves className="w-8 h-8" />, title: 'Park', description: 'Green spaces for yoga & harmony' },
  { icon: <Dumbbell className="w-8 h-8" />, title: 'Sports Arena', description: 'Indoor & outdoor sports facilities' },
  { icon: <Shield className="w-8 h-8" />, title: 'Security', description: 'Safe & secure living environment' },
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
            EVERYTHING IN ONE PLACE
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-light text-white">
            All You Need, Right Inside Your{' '}
            <span style={{ color: '#C8A96B' }}>Township</span>
          </h2>
        </div>

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {amenities.map((amenity, index) => (
            <div key={index} className="luxury-card rounded-xl p-8 flex flex-col items-center text-center">
              <div className="card-icon mb-5" style={{ color: '#C8A96B' }}>
                {amenity.icon}
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{amenity.title}</h3>
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
