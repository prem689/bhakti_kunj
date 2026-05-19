'use client';

import { Facebook, Instagram, Youtube, Linkedin, Phone, Clock, MapPin } from 'lucide-react';
import Image from 'next/image';

const quickLinks = ['About Township', 'Clubhouses', 'Amenities', 'Master Plan', 'Parks & Gardens', 'Community Living'];
const lifestyleLinks = ['Sports & Fitness', 'Parks & Gardens', 'Community Living', 'Events', 'Dining & Recreation', 'Safety'];

export function Footer() {
  return (
    <footer style={{ background: 'var(--bg-primary)', borderTop: '1px solid rgba(200,169,107,0.12)' }}>
      <div className="max-w-360 mx-auto px-6 lg:px-16 py-16 lg:py-20">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <Image
                src="/logo/logo.png"
                alt="Bhakti Kunj"
                width={52}
                height={52}
                className="rounded-full"
              />
              <div>
                <p className="font-serif text-xs tracking-widest" style={{ color: 'var(--text-primary)' }}>BHAKTI KUNJ</p>
                <p className="text-[9px] tracking-widest mt-0.5" style={{ color: 'rgba(200,169,107,0.65)' }}>LIVING IN THE HEART OF BRAJ</p>
              </div>
            </div>
            <p className="text-sm font-light mb-6" style={{ color: 'var(--text-muted)' }}>
              A thoughtfully planned township for modern luxury living.
            </p>
            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { Icon: Facebook, label: 'Facebook' },
                { Icon: Instagram, label: 'Instagram' },
                { Icon: Youtube, label: 'YouTube' },
                { Icon: Linkedin, label: 'LinkedIn' },
              ].map(({ Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    background: 'rgba(200,169,107,0.08)',
                    border: '1px solid rgba(200,169,107,0.2)',
                    color: '#C8A96B',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = 'rgba(200,169,107,0.18)';
                    el.style.boxShadow = '0 0 14px rgba(200,169,107,0.3)';
                    el.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.background = 'rgba(200,169,107,0.08)';
                    el.style.boxShadow = 'none';
                    el.style.transform = 'translateY(0)';
                  }}
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs tracking-widest uppercase">QUICK LINKS</h4>
            <ul className="space-y-3">
              {quickLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm font-light transition-colors duration-300"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#C8A96B'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Lifestyle */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs tracking-widest uppercase">LIFESTYLE</h4>
            <ul className="space-y-3">
              {lifestyleLinks.map(link => (
                <li key={link}>
                  <a href="#" className="text-sm font-light transition-colors duration-300"
                    style={{ color: 'var(--text-muted)' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#C8A96B'; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-muted)'; }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-xs tracking-widest uppercase">CONTACT</h4>
            <ul className="space-y-4">
              {[
                { Icon: Phone, text: '+91 70550 50551' },
                { Icon: Phone, text: '+91 79003 33101' },
                { Icon: MapPin, text: '604 - Full Moon, Omaxe Internity, Vrindavan – 281121' },
                { Icon: Clock, text: 'Mon – Sun, 9:00 AM – 9:00 PM' },
              ].map(({ Icon, text }) => (
                <li key={text} className="flex gap-3">
                  <Icon className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#C8A96B' }} />
                  <p className="text-sm font-light" style={{ color: 'var(--text-muted)' }}>{text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Info */}
        <div className="pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-8" style={{ borderTop: '1px solid rgba(200,169,107,0.1)' }}>
          {[
            { title: 'REGISTERED OFFICE', lines: ['604 - Full Moon, Omaxe Internity', 'Vrindavan – 281121'] },
            { title: 'SALES OFFICE', lines: ['604 - Full Moon, Omaxe Internity', 'Vrindavan – 281121'] },
          ].map(({ title, lines }) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-xs tracking-widest mb-2">{title}</h4>
              <p className="text-sm font-light leading-relaxed" style={{ color: 'var(--text-muted)' }}>
                {lines[0]}<br />{lines[1]}
              </p>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: '1px solid rgba(200,169,107,0.1)' }}>
          <p className="text-sm font-light" style={{ color: 'var(--text-faint)' }}>
            © 2026 Bhakti Kunj. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms & Conditions', 'Legal & Approvals'].map(label => (
              <a key={label} href="#" className="text-sm font-light transition-colors duration-300"
                style={{ color: 'var(--text-faint)' }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#C8A96B'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = 'var(--text-faint)'; }}>
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
