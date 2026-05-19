'use client';

import { useState } from 'react';

export function WhatsAppFloat() {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href="https://wa.me/917055050551?text=Hi%21%20I%27m%20interested%20in%20Bhakti%20Kunj%20Township%20and%20would%20like%20to%20book%20a%20site%20visit.%20Please%20get%20in%20touch%20with%20me."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Tooltip */}
      <span
        className="text-xs font-semibold px-3 py-1.5 rounded-full whitespace-nowrap pointer-events-none"
        style={{
          background: '#25D366',
          color: '#fff',
          opacity: hovered ? 1 : 0,
          transform: hovered ? 'translateX(0)' : 'translateX(8px)',
          transition: 'opacity 0.25s ease, transform 0.25s ease',
        }}
      >
        Chat with us
      </span>

      {/* Button */}
      <div
        className="relative w-14 h-14 rounded-full flex items-center justify-center"
        style={{
          background: '#25D366',
          boxShadow: hovered
            ? '0 0 0 8px rgba(37,211,102,0.15), 0 8px 28px rgba(37,211,102,0.45)'
            : '0 0 0 0px rgba(37,211,102,0), 0 4px 18px rgba(37,211,102,0.35)',
          transform: hovered ? 'scale(1.1)' : 'scale(1)',
          transition: 'box-shadow 0.3s ease, transform 0.3s ease',
        }}
      >
        {/* Pulse ring */}
        <span
          className="absolute inset-0 rounded-full"
          style={{
            background: 'rgba(37,211,102,0.35)',
            animation: 'wa-pulse 2s ease-out infinite',
          }}
        />

        {/* WhatsApp SVG icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          className="w-7 h-7 relative z-10"
          fill="white"
        >
          <path d="M16 2C8.268 2 2 8.268 2 16c0 2.494.654 4.84 1.797 6.87L2 30l7.305-1.773A13.93 13.93 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.6a11.55 11.55 0 0 1-5.89-1.607l-.422-.25-4.335 1.052 1.087-4.218-.277-.435A11.6 11.6 0 0 1 4.4 16C4.4 9.593 9.593 4.4 16 4.4S27.6 9.593 27.6 16 22.407 27.6 16 27.6zm6.38-8.677c-.35-.175-2.07-1.02-2.39-1.137-.32-.116-.554-.175-.787.175s-.903 1.137-1.107 1.37c-.203.232-.407.262-.757.087-.35-.175-1.478-.545-2.815-1.737-1.04-.928-1.742-2.074-1.946-2.424-.203-.35-.022-.539.153-.713.157-.156.35-.407.524-.61.175-.204.233-.35.35-.583.116-.233.058-.437-.029-.612-.087-.175-.787-1.896-1.078-2.595-.284-.681-.572-.588-.787-.599l-.67-.012a1.285 1.285 0 0 0-.932.437c-.32.35-1.224 1.195-1.224 2.916s1.253 3.382 1.428 3.615c.175.233 2.467 3.766 5.977 5.28.836.36 1.488.576 1.996.737.838.267 1.601.229 2.204.139.672-.1 2.07-.846 2.362-1.663.291-.816.291-1.515.204-1.662-.087-.146-.32-.233-.67-.408z" />
        </svg>
      </div>

      <style>{`
        @keyframes wa-pulse {
          0%   { transform: scale(1);   opacity: 0.6; }
          70%  { transform: scale(1.55); opacity: 0; }
          100% { transform: scale(1.55); opacity: 0; }
        }
      `}</style>
    </a>
  );
}
