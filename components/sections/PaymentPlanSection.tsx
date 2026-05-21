'use client';

import { CreditCard, CalendarDays, Wallet, Gift, Check } from 'lucide-react';

export function PaymentPlanSection() {
  const plans = [
    {
      id: '01',
      title: 'Full Payment Plan',
      timeline: 'At one go / within 7 days',
      features: [
        'Registry Charges FREE',
        'Exciting offers & gifts',
        'Up to ₹2.5 lakh benefit',
        '2 Offers + Gifts'
      ],
      icon: <Wallet className="w-8 h-8" />,
      popular: true
    },
    {
      id: '02',
      title: '30 / 90 Payment Plan',
      timeline: '25% in 30 days + 75% in 90 days',
      features: [
        'Exciting offer',
        '1 Offer + Gift',
        'Up to ₹1 lakh benefit'
      ],
      icon: <CalendarDays className="w-8 h-8" />,
      popular: false
    },
    {
      id: '03',
      title: 'Flexible EMI Plan',
      timeline: '25% every quarter over 12 months',
      features: [
        'Easy, stress-free instalments',
        'Exciting gifts on booking',
        'Consistent transparent pricing'
      ],
      icon: <CreditCard className="w-8 h-8" />,
      popular: false
    }
  ];

  return (
    <section
      id="payment-plans"
      className="py-24 lg:py-32 relative"
      style={{ background: 'linear-gradient(180deg, var(--bg-tertiary) 0%, var(--bg-primary) 100%)' }}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse at center, rgba(200,169,107,0.05) 0%, transparent 60%)',
      }} />

      <div className="px-6 lg:px-16 max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <p className="text-[11px] font-medium uppercase mb-4" style={{ color: '#C8A96B', letterSpacing: '4px' }}>
            Flexible Options
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-light text-white mb-6">
            Payment <span style={{ color: '#C8A96B' }}>Plans</span>
          </h2>
          <p className="text-lg font-light text-white/60 max-w-2xl mx-auto">
            Secure your future with our flexible payment options designed to suit your financial comfort.
          </p>
        </div>

        {/* Segregated & Highlighted Core Pricing Details */}
        <div className="flex flex-col md:flex-row gap-6 mb-16">
          <div className="flex-1 glass-panel p-6 lg:p-8 rounded-2xl flex items-center gap-6" style={{ border: '1px solid rgba(200,169,107,0.3)', background: 'rgba(200,169,107,0.02)' }}>
            <div className="p-4 rounded-full bg-white/5" style={{ color: '#C8A96B' }}>
              <CreditCard className="w-6 h-6" />
            </div>
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Booking Amount</p>
              <h3 className="text-3xl font-serif text-[#C8A96B]">₹1,00,000 <span className="text-lg text-white/50 font-sans font-light">(1 Lakh)</span></h3>
              <p className="text-white/40 text-sm mt-1">Secures your chosen plot and locks in the price.</p>
            </div>
          </div>
          <div className="flex-1 glass-panel p-6 lg:p-8 rounded-2xl flex items-center gap-6" style={{ border: '1px solid rgba(200,169,107,0.3)', background: 'rgba(200,169,107,0.02)' }}>
            <div className="p-4 rounded-full bg-white/5" style={{ color: '#C8A96B' }}>
              <Wallet className="w-6 h-6" />
            </div>
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest mb-1">Plot Base Price</p>
              <h3 className="text-3xl font-serif text-[#C8A96B]">₹25,000 <span className="text-lg text-white/50 font-sans font-light">/ SqYd</span></h3>
              <p className="text-white/40 text-sm mt-1">Transparent premium freehold plot pricing.</p>
            </div>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <div key={idx} className={`luxury-card p-8 rounded-2xl border flex flex-col relative transition-all duration-300 hover:-translate-y-2 ${plan.popular ? 'border-[#C8A96B]' : 'border-white/10'}`} style={{ background: plan.popular ? 'rgba(200,169,107,0.05)' : 'var(--card-bg)' }}>
              
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C8A96B] text-black text-xs font-bold uppercase tracking-wider py-1 px-4 rounded-full flex items-center gap-1">
                  <Gift className="w-3 h-3" />
                  Best Offers
                </div>
              )}

              <div className="mb-8">
                <div className="flex justify-between items-start mb-6">
                  <div style={{ color: '#C8A96B' }}>{plan.icon}</div>
                  <span className="text-4xl font-serif font-light text-white/10">
                    {plan.id}
                  </span>
                </div>
                <h3 className="text-2xl font-serif text-white mb-2">{plan.title}</h3>
                <p className="text-sm text-[#C8A96B] font-medium tracking-wide bg-[#C8A96B]/10 inline-block px-3 py-1 rounded">{plan.timeline}</p>
              </div>

              <div className="mt-auto space-y-4">
                {plan.features.map((feature, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 shrink-0" style={{ color: '#C8A96B' }} />
                    <span className="text-white/80 text-sm leading-tight">{feature}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
