'use client';

import { CheckCircle2, TrendingUp, Maximize, Map, FileCheck, Coins, Key, Landmark, Home } from 'lucide-react';

export function MasterPlanSection() {
  const plots = [
    { size: '100', unit: 'Sq. Yards', dim: '45 ft × 20 ft', price: '₹25,000', popular: false },
    { size: '200', unit: 'Sq. Yards', dim: '30 ft × 60 ft', price: '₹25,000', popular: true },
    { size: '600', unit: 'Sq. Yards', dim: '100 ft × 60 ft', price: '₹25,000', popular: false },
  ];

  const approvals = [
    '143 Approved',
    'Tourism NOC',
    'Block NOC Provided',
    'Free Hold Property',
    'Fully Sanctioned Layout',
    'Full Ownership Rights',
    'All Clearances in Place'
  ];

  const infra = [
    '40m Entry / Exit Road',
    '9m Internal Roads',
    '25% Green Cover',
    'Dedicated Green & Forest Area'
  ];

  return (
    <section
      id="master-plan"
      className="py-24 lg:py-32 relative overflow-hidden"
      style={{ background: 'linear-gradient(180deg, var(--bg-secondary) 0%, var(--bg-tertiary) 100%)' }}
    >
      {/* Abstract Background Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,100 C20,80 40,90 60,50 C80,10 90,30 100,0 L100,100 Z" fill="rgba(200,169,107,0.08)" />
        </svg>
      </div>

      <div className="px-6 lg:px-16 max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <p className="text-[11px] font-medium uppercase mb-4" style={{ color: '#C8A96B', letterSpacing: '4px' }}>
            Master Plan & Investment
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-light text-white mb-6">
            Plot Details & <span style={{ color: '#C8A96B' }}>Guaranteed Income</span>
          </h2>
          <p className="text-lg font-light text-white/60 max-w-3xl mx-auto">
            Choose the perfect plot size for your dream sanctuary, and secure high-yield, guaranteed returns on your investment.
          </p>
        </div>

        {/* Plots Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {plots.map((plot, idx) => (
            <div key={idx} className={`luxury-card p-8 rounded-2xl border flex flex-col relative transition-all duration-300 hover:-translate-y-2 ${plot.popular ? 'border-[#C8A96B]' : 'border-white/10'}`} style={{ background: plot.popular ? 'rgba(200,169,107,0.05)' : 'var(--card-bg)' }}>
              {plot.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C8A96B] text-black text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full">
                  Most Popular
                </div>
              )}
              <div className="mb-6">
                <Maximize className="w-8 h-8 mb-4" style={{ color: '#C8A96B' }} />
                <h3 className="text-3xl font-serif text-white">{plot.size} <span className="text-lg text-white/70">{plot.unit}</span></h3>
                <p className="text-white/50 text-sm mt-1">{plot.dim}</p>
              </div>
              <div className="mt-auto pt-6 border-t border-white/10">
                <p className="text-xs uppercase tracking-wider text-white/50 mb-1">Starting Price</p>
                <p className="text-xl text-[#C8A96B] font-medium">{plot.price} <span className="text-sm text-white/50 font-light">/ SqYd</span></p>
              </div>
            </div>
          ))}
        </div>

        {/* 2-Column Integrated Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          
          {/* Left Column: Investment & Construction Plans */}
          <div className="flex flex-col gap-8 h-full">
            
            {/* Investment Plan Box */}
            <div className="luxury-card p-8 lg:p-10 rounded-2xl border border-white/10 flex-1 flex flex-col justify-between" style={{ background: 'var(--card-bg)' }}>
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <Coins className="w-8 h-8" style={{ color: '#C8A96B' }} />
                  <h3 className="text-2xl font-serif text-white">Guaranteed Rental Income</h3>
                </div>
                
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <TrendingUp className="w-5 h-5 shrink-0 mt-1 text-[#C8A96B]" />
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">Guaranteed ₹4,000 / Month</h4>
                      <p className="text-white/60 text-sm leading-relaxed">
                        Earn approximately <strong className="text-white">₹4,000 / month</strong> guaranteed rental income for your plot for the first 3 years.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Key className="w-5 h-5 shrink-0 mt-1 text-[#C8A96B]" />
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">Future Rental Potential</h4>
                      <p className="text-white/60 text-sm leading-relaxed">
                        After 3 years, the property can be rented out to top-tier aggregators like <strong className="text-white">Airbnb / MMT (MakeMyTrip)</strong> for continuous high-yield returns.
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4">
                    <Landmark className="w-5 h-5 shrink-0 mt-1 text-[#C8A96B]" />
                    <div>
                      <h4 className="text-base font-semibold text-white mb-1">Unmatched Value Comparison</h4>
                      <p className="text-white/60 text-sm leading-relaxed mb-3">
                        Save over 70% compared to typical resort-adjacent property rates in the region.
                      </p>
                      <div className="grid grid-cols-2 gap-2 sm:gap-4">
                        <div className="p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10">
                          <p className="text-xs uppercase text-white/50 mb-0.5">Bhakti Kunj</p>
                          <p className="text-sm sm:text-base text-[#C8A96B] font-medium flex flex-wrap items-baseline gap-0.5">
                            <span>₹25,000</span>
                            <span className="text-[10px] sm:text-xs text-white/50 font-light">/ SqYd</span>
                          </p>
                        </div>
                        <div className="p-2 sm:p-3 rounded-lg bg-white/5 border border-white/10">
                          <p className="text-xs uppercase text-white/50 mb-0.5">Resort Market</p>
                          <p className="text-sm sm:text-base text-white/60 font-medium flex flex-wrap items-baseline gap-0.5">
                            <span>₹80,000+</span>
                            <span className="text-[10px] sm:text-xs text-white/50 font-light">/ SqYd</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Construction Plan Box */}
            <div className="luxury-card p-8 rounded-2xl border border-[#C8A96B]/30" style={{ background: 'linear-gradient(135deg, rgba(200,169,107,0.08) 0%, transparent 100%)' }}>
              <div className="flex items-center gap-4 mb-4">
                <Home className="w-7 h-7" style={{ color: '#C8A96B' }} />
                <h3 className="text-xl font-serif text-white">Custom Cottage Construction</h3>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-3">
                Dreaming of building your own sanctuary? At Bhakti Kunj, you have absolute freedom to build your cottage exactly how you want.
              </p>
              <div className="p-4 rounded-xl border bg-black/40 border-white/10">
                <p className="text-xs text-[#C8A96B] font-semibold uppercase tracking-wider mb-1">Build Option</p>
                <p className="text-xs text-white/70 leading-relaxed">
                  Cottage construction pricing is fully customized based on your choice of materials, layout, and specifications.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Approvals, Legal & Infrastructure */}
          <div className="flex flex-col gap-8 h-full justify-between">
            
            {/* Approvals */}
            <div className="glass-panel p-8 lg:p-10 rounded-2xl flex-1 flex flex-col justify-between" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <FileCheck className="w-8 h-8" style={{ color: '#C8A96B' }} />
                  <h3 className="text-2xl font-serif text-white">Approvals & Legal Status</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                  {approvals.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 shrink-0" style={{ color: '#C8A96B' }} />
                      <span className="text-white/80 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Infrastructure Highlights */}
            <div className="glass-panel p-8 rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="flex items-center gap-4 mb-6">
                <Map className="w-7 h-7" style={{ color: '#C8A96B' }} />
                <h3 className="text-xl font-serif text-white">Infrastructure Highlights</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {infra.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ backgroundColor: '#C8A96B' }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
