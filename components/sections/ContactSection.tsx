'use client';

import { Phone, Mail, MapPin, MessageCircle, FileText, Calendar } from 'lucide-react';

export function ContactSection() {
  return (
    <section id="contact" className="py-24 lg:py-32 relative bg-black border-t border-white/10">
      <div className="px-6 lg:px-16 max-w-7xl mx-auto relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          
          {/* CTA Area */}
          <div className="space-y-8">
            <p className="text-[11px] font-medium uppercase" style={{ color: '#C8A96B', letterSpacing: '4px' }}>
              Final Opportunity
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-light text-white leading-tight">
              Only a Few Units <span style={{ color: '#C8A96B' }}>Remaining</span>
            </h2>
            
            <div className="space-y-4">
              <p className="text-lg text-white/80 font-light">
                Phase 1 sold out completely — don&apos;t miss Phase 2.
              </p>
              <div className="inline-flex px-4 py-2 rounded-lg text-sm font-medium border" style={{ borderColor: 'rgba(200,169,107,0.3)', background: 'rgba(200,169,107,0.05)', color: '#C8A96B' }}>
                ₹1 Lakh secures your plot today.
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="https://wa.me/919810164924?text=I%20want%20to%20book%20a%20site%20visit"
                target="_blank"
                rel="noreferrer"
                className="gold-btn px-8 py-3.5 rounded-full text-sm font-semibold uppercase text-black inline-flex items-center justify-center gap-2"
                style={{ letterSpacing: '1px' }}
              >
                <Calendar className="w-4 h-4" />
                Book Site Visit
              </a>
              <a
                href="/brochure/Bhakti kunj trifold.pdf"
                download="Bhakti Kunj Brochure.pdf"
                className="glass-pill px-8 py-3.5 rounded-full text-sm font-semibold uppercase text-white inline-flex items-center justify-center gap-2 transition-all hover:bg-white/10"
                style={{ border: '1px solid rgba(255,255,255,0.2)', letterSpacing: '1px' }}
              >
                <FileText className="w-4 h-4" />
                Request Brochure
              </a>
            </div>
          </div>

          {/* Contact Details */}
          <div className="luxury-card p-8 lg:p-10 rounded-2xl border border-[#C8A96B]/30" style={{ background: 'linear-gradient(145deg, rgba(200,169,107,0.05) 0%, rgba(0,0,0,0) 100%)' }}>
            <h3 className="text-2xl font-serif text-white mb-8">Get In Touch</h3>
            
            <div className="space-y-6">
              <a href="tel:9810164924" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#C8A96B]/20 transition-colors">
                  <Phone className="w-5 h-5" style={{ color: '#C8A96B' }} />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Call Us</p>
                  <p className="text-white font-medium text-lg">9810164924</p>
                </div>
              </a>

              <a href="https://wa.me/919810164924" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#C8A96B]/20 transition-colors">
                  <MessageCircle className="w-5 h-5" style={{ color: '#C8A96B' }} />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest mb-1">WhatsApp</p>
                  <p className="text-white font-medium text-lg">9810164924</p>
                </div>
              </a>

              <a href="mailto:bhaktikunj@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#C8A96B]/20 transition-colors">
                  <Mail className="w-5 h-5" style={{ color: '#C8A96B' }} />
                </div>
                <div>
                  <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-white font-medium text-lg">bhaktikunj@gmail.com</p>
                </div>
              </a>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" style={{ color: '#C8A96B' }} />
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Site Address</p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      Mathura–Bharatpur Highway,<br />
                      Mathura, Uttar Pradesh
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-white/50 uppercase tracking-widest mb-1">Corporate Office</p>
                    <p className="text-white/80 text-sm leading-relaxed">
                      301, 2nd Floor, AGCR Enclave, Main Road,<br />
                      Near Karkardooma Court, Delhi
                    </p>
                  </div>
                  <a
                    href="https://www.google.com/maps?q=27.37704086303711,77.60386657714844&z=17&hl=en"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex text-sm text-[#C8A96B] hover:underline font-medium mt-2"
                  >
                    View Exact Location on Google Maps →
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Embedded Google Map — full width */}
        <div
          className="w-full rounded-2xl overflow-hidden border border-[#C8A96B]/20"
          style={{ height: '440px', boxShadow: '0 0 60px rgba(0,0,0,0.6)' }}
        >
          <div className="relative w-full h-full">
            {/* Gold header bar */}
            <div
              className="absolute top-0 left-0 right-0 z-10 flex items-center gap-3 px-5 py-3"
              style={{
                background: 'rgba(0,0,0,0.80)',
                backdropFilter: 'blur(8px)',
                borderBottom: '1px solid rgba(200,169,107,0.3)',
              }}
            >
              <MapPin className="w-4 h-4 shrink-0" style={{ color: '#C8A96B' }} />
              <span className="text-sm font-medium text-white/90">
                Bhakti Kunj Township — Mathura, Uttar Pradesh
              </span>
              <a
                href="https://www.google.com/maps?q=27.37704086303711,77.60386657714844&z=17&hl=en"
                target="_blank"
                rel="noreferrer"
                className="ml-auto text-xs font-semibold uppercase hover:underline"
                style={{ color: '#C8A96B', letterSpacing: '1px' }}
              >
                Open in Maps →
              </a>
            </div>

            <iframe
              src="https://maps.google.com/maps?q=27.37704086303711,77.60386657714844&z=17&output=embed"
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: 'invert(90%) hue-rotate(180deg) saturate(0.5) brightness(0.85)',
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Bhakti Kunj Location"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
