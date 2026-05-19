'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const IMAGES = [
  { src: '/event/OMP_0020.JPG.jpeg',  caption: 'Community Celebration' },
  { src: '/event/OMP_0160.JPG.jpeg',  caption: 'Township Gathering'     },
  { src: '/event/OMP_0188.JPG.jpeg',  caption: 'Cultural Evening'        },
  { src: '/event/OMP_0192.JPG.jpeg',  caption: 'Residents\' Meet'        },
  { src: '/event/OMP_0208.JPG.jpeg',  caption: 'Festive Moments'         },
];

export function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const prev = () => setLightbox(i => (i! - 1 + IMAGES.length) % IMAGES.length);
  const next = () => setLightbox(i => (i! + 1) % IMAGES.length);

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden"
        style={{ background: 'var(--bg-secondary)', paddingTop: '6rem', paddingBottom: '6rem' }}
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(200,169,107,0.06) 0%, transparent 70%)' }} />

        <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-16">

          {/* Header */}
          <div className="text-center mb-14">
            <p className="text-[11px] font-medium uppercase mb-4"
              style={{ color: '#C8A96B', letterSpacing: '4px' }}>
              LIFE AT BHAKTI KUNJ
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-light mb-5 leading-tight"
              style={{ color: 'var(--text-primary)' }}>
              Moments &amp; Memories
            </h2>
            <p className="text-base font-light mx-auto max-w-xl"
              style={{ color: 'var(--text-muted)' }}>
              A community that celebrates together — festivals, gatherings, and the everyday joy of living well.
            </p>
          </div>

          {/* Bento Grid — [large | 2×2] */}
          <div className="grid grid-cols-2 lg:grid-cols-4 grid-rows-2 gap-3 lg:gap-4" style={{ height: 'clamp(300px, 42vw, 500px)' }}>

            {/* Featured — spans 2 cols × 2 rows */}
            <GalleryThumb img={IMAGES[0]} index={0} onClick={setLightbox}
              className="col-span-2 row-span-2 lg:col-span-2" />

            {IMAGES.slice(1).map((img, i) => (
              <GalleryThumb key={i + 1} img={img} index={i + 1} onClick={setLightbox}
                className="col-span-1 row-span-1" />
            ))}
          </div>

        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(12px)' }}
          onClick={() => setLightbox(null)}
        >
          {/* Close */}
          <button
            className="absolute top-5 right-5 w-11 h-11 rounded-full flex items-center justify-center z-10"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}
            onClick={() => setLightbox(null)}
          >
            <X size={18} />
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 lg:left-8 w-11 h-11 rounded-full flex items-center justify-center z-10"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}
            onClick={e => { e.stopPropagation(); prev(); }}
          >
            <ChevronLeft size={20} />
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl w-full mx-16 lg:mx-24"
            style={{ maxHeight: '85vh', aspectRatio: 'auto' }}
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full" style={{ maxHeight: '80vh' }}>
              <Image
                src={IMAGES[lightbox].src}
                alt={IMAGES[lightbox].caption}
                width={1400}
                height={900}
                className="w-full h-auto rounded-xl object-contain"
                style={{ maxHeight: '78vh' }}
              />
            </div>
            <p className="text-center mt-4 text-sm font-light tracking-widest uppercase"
              style={{ color: '#C8A96B' }}>
              {IMAGES[lightbox].caption}
            </p>
            <p className="text-center mt-1 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {lightbox + 1} / {IMAGES.length}
            </p>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 lg:right-8 w-11 h-11 rounded-full flex items-center justify-center z-10"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}
            onClick={e => { e.stopPropagation(); next(); }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      )}
    </>
  );
}

function GalleryThumb({
  img, index, onClick, className,
}: {
  img: { src: string; caption: string };
  index: number;
  onClick: (i: number) => void;
  className?: string;
}) {
  const [hov, setHov] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-xl cursor-pointer ${className ?? ''}`}
      style={{
        border: '1px solid rgba(200,169,107,0.08)',
        transform: hov ? 'scale(1.015)' : 'scale(1)',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
        boxShadow: hov ? '0 12px 40px rgba(0,0,0,0.55)' : '0 4px 20px rgba(0,0,0,0.3)',
      }}
      onClick={() => onClick(index)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
    >
      <Image
        src={img.src}
        alt={img.caption}
        fill
        className="object-cover"
        style={{
          transform: hov ? 'scale(1.06)' : 'scale(1)',
          transition: 'transform 0.6s ease',
        }}
      />

      {/* Hover overlay */}
      <div
        className="absolute inset-0 flex flex-col justify-end p-4"
        style={{
          background: hov
            ? 'linear-gradient(0deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 60%, transparent 100%)'
            : 'linear-gradient(0deg, rgba(0,0,0,0.38) 0%, transparent 60%)',
          transition: 'background 0.4s ease',
        }}
      >
        <p
          className="text-xs font-medium uppercase tracking-widest"
          style={{
            color: '#C8A96B',
            opacity: hov ? 1 : 0,
            transform: hov ? 'translateY(0)' : 'translateY(6px)',
            transition: 'opacity 0.3s ease, transform 0.3s ease',
          }}
        >
          {img.caption}
        </p>
      </div>

      {/* Gold corner accent */}
      <div
        className="absolute top-3 right-3 w-5 h-5 pointer-events-none"
        style={{
          opacity: hov ? 0.6 : 0,
          transition: 'opacity 0.3s ease',
          borderTop: '1.5px solid #C8A96B',
          borderRight: '1.5px solid #C8A96B',
        }}
      />
    </div>
  );
}
