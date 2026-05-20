'use client';

import { CheckCircle2, TrendingUp, Maximize, Map, FileCheck } from 'lucide-react';

export function MasterPlanSection() {
  const plots = [
    { size: '100', unit: 'Sq. Yards', dim: '45 ft × 20 ft', price: '₹21,000', popular: false },
    { size: '200', unit: 'Sq. Yards', dim: '30 ft × 60 ft', price: '₹21,000', popular: true },
    { size: '600', unit: 'Sq. Yards', dim: '100 ft × 60 ft', price: '₹21,000', popular: false },
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

  return (
    <section id="master-plan" className="py-24 lg:py-32 relative bg-black">
      <div className="px-6 lg:px-16 max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <p className="text-[11px] font-medium uppercase mb-4" style={{ color: '#C8A96B', letterSpacing: '4px' }}>
            Master Plan
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-light text-white mb-6">
            Available <span style={{ color: '#C8A96B' }}>Plot Sizes</span>
          </h2>
          <p className="text-lg font-light text-white/60 max-w-2xl mx-auto">
            Choose the perfect canvas for your dream home or next investment. Fully equipped with world-class infrastructure.
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

        {/* Infrastructure & Approvals Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Approvals */}
          <div className="glass-panel p-8 lg:p-10 rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="flex items-center gap-4 mb-8">
              <FileCheck className="w-8 h-8" style={{ color: '#C8A96B' }} />
              <h3 className="text-2xl font-serif text-white">Approvals & Legal Status</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {approvals.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5" style={{ color: '#C8A96B' }} />
                  <span className="text-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Infrastructure & Investment Highlight */}
          <div className="flex flex-col gap-8">
            <div className="glass-panel p-8 rounded-2xl" style={{ border: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="flex items-center gap-4 mb-6">
                <Map className="w-7 h-7" style={{ color: '#C8A96B' }} />
                <h3 className="text-xl font-serif text-white">Infrastructure Highlights</h3>
              </div>
              <ul className="space-y-3">
                {[
                  '40m Entry / Exit Road',
                  '9m Internal Roads',
                  '25% Green Cover',
                  'Dedicated Green & Forest Area'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-white/80 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#C8A96B' }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="luxury-card p-8 rounded-2xl border border-[#C8A96B]/30" style={{ background: 'linear-gradient(135deg, rgba(200,169,107,0.1) 0%, transparent 100%)' }}>
              <div className="flex items-center gap-4 mb-4">
                <TrendingUp className="w-7 h-7" style={{ color: '#C8A96B' }} />
                <h3 className="text-xl font-serif text-white">Investment Plan Highlight</h3>
              </div>
              <p className="text-white/80 text-sm leading-relaxed mb-4">
                Enjoy ₹4,000 / Month Guaranteed Rental Income for the first 3 years. Save over 75% compared to resort properties in Mathura.
              </p>
              <div className="inline-flex px-4 py-2 rounded-lg text-sm font-medium" style={{ background: 'rgba(200,169,107,0.2)', color: '#C8A96B' }}>
                Buy Back at 1.5× After 3 Years
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
