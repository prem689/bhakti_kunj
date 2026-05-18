import { TrendingUp, Building2, Leaf, Shield, Zap } from 'lucide-react';

interface Benefit {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  { icon: <TrendingUp className="w-7 h-7" />, title: 'High Appreciation', description: 'Property value that grows consistently with time' },
  { icon: <Building2 className="w-7 h-7" />, title: 'Smart Infrastructure', description: 'State-of-the-art tech built into every block' },
  { icon: <Leaf className="w-7 h-7" />, title: 'Sustainable Living', description: 'Rainwater harvesting & eco-friendly design' },
  { icon: <Shield className="w-7 h-7" />, title: 'Secure Community', description: 'Gated township with 24/7 security & surveillance' },
  { icon: <Zap className="w-7 h-7" />, title: 'Modern Amenities', description: 'World-class recreational & lifestyle facilities' },
];

export function BenefitsSection() {
  return (
    <section
      id="benefits"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--bg-primary) 0%, var(--bg-secondary) 100%)' }}
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-150 h-75 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(200,169,107,0.06) 0%, transparent 70%)' }}
      />

      <div className="px-6 lg:px-16 max-w-360 mx-auto relative">

        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[11px] font-medium uppercase mb-4" style={{ color: '#C8A96B', letterSpacing: '4px' }}>
            WHY INVEST IN BHAKTI KUNJ?
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-light text-white">
            Investment{' '}
            <span style={{ color: '#C8A96B' }}>Opportunities</span>
          </h2>
        </div>

        {/* 5 horizontal cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {benefits.map((benefit, index) => (
            <div key={index} className="luxury-card rounded-xl p-7">
              <div className="card-icon mb-5" style={{ color: '#C8A96B' }}>
                {benefit.icon}
              </div>
              <h3 className="text-sm font-semibold text-white mb-3 leading-snug">{benefit.title}</h3>
              <p className="text-xs font-light leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-sm font-light max-w-xl mx-auto" style={{ color: 'var(--text-muted)' }}>
            Join thousands of happy families who have chosen Bhakti Kunj as their dream home.
          </p>
        </div>
      </div>
    </section>
  );
}
