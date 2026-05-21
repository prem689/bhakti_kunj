'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const SITE_PHOTOS = [
  { src: '/site_images/site_1.jpeg', caption: 'Township Overview'    },
  { src: '/site_images/site_2.jpeg', caption: 'Green Landscape'      },
  { src: '/site_images/site_3.jpeg', caption: 'Wide Boulevard'       },
  { src: '/site_images/site_4.jpeg', caption: 'Plot Layout'          },
  { src: '/site_images/site_5.jpeg', caption: 'Site Progress'        },
];

const EVENT_PHOTOS = [
  { src: '/event/OMP_0020.JPG.jpeg', caption: 'Community Celebration' },
  { src: '/event/OMP_0160.JPG.jpeg', caption: 'Township Gathering'    },
  { src: '/event/OMP_0188.JPG.jpeg', caption: 'Cultural Evening'      },
  { src: '/event/OMP_0192.JPG.jpeg', caption: "Residents' Meet"       },
  { src: '/event/OMP_0208.JPG.jpeg', caption: 'Festive Moments'       },
];

const ALL_PHOTOS = [...SITE_PHOTOS, ...EVENT_PHOTOS];

const VIDEOS = [
  { src: '/videos/site_video_1.mp4', title: 'Site Walkthrough — Part 1', thumb: '/site_images/site_1.jpeg' },
  { src: '/videos/site_video_2.mp4', title: 'Site Walkthrough — Part 2', thumb: '/site_images/site_2.jpeg' },
];

type Tab = 'site' | 'events' | 'videos';

export function GallerySection() {
  const [tab, setTab]       = useState<Tab>('site');
  const [lightbox, setLightbox] = useState<{ photos: typeof ALL_PHOTOS; index: number } | null>(null);

  const prev = () => setLightbox(lb => lb && ({ ...lb, index: (lb.index - 1 + lb.photos.length) % lb.photos.length }));
  const next = () => setLightbox(lb => lb && ({ ...lb, index: (lb.index + 1) % lb.photos.length }));

  return (
    <>
      <section
        id="gallery"
        className="relative overflow-hidden"
        style={{ background: 'var(--bg-secondary)', paddingTop: '6rem', paddingBottom: '6rem' }}
      >
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse 50% 40% at 50% 0%, rgba(200,169,107,0.06) 0%, transparent 70%)' }} />

        {/* Large leaf — top left */}
        <svg className="absolute -top-10 -left-16 pointer-events-none" width="340" height="380" viewBox="0 0 340 380" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.55 }}>
          <path d="M170 360 C80 280, 10 180, 30 80 C50 -20, 170 10, 170 10 C170 10, 290 -20, 310 80 C330 180, 260 280, 170 360Z" fill="rgba(200,169,107,0.08)" stroke="#C8A96B" strokeWidth="1.2"/>
          <line x1="170" y1="355" x2="170" y2="12" stroke="#C8A96B" strokeWidth="1.5" strokeOpacity="0.7"/>
          <line x1="170" y1="290" x2="90" y2="200" stroke="#C8A96B" strokeWidth="0.9" strokeOpacity="0.5"/>
          <line x1="170" y1="250" x2="240" y2="170" stroke="#C8A96B" strokeWidth="0.9" strokeOpacity="0.5"/>
          <line x1="170" y1="210" x2="100" y2="140" stroke="#C8A96B" strokeWidth="0.8" strokeOpacity="0.45"/>
          <line x1="170" y1="170" x2="230" y2="110" stroke="#C8A96B" strokeWidth="0.8" strokeOpacity="0.45"/>
          <line x1="170" y1="130" x2="115" y2="82" stroke="#C8A96B" strokeWidth="0.7" strokeOpacity="0.35"/>
        </svg>

        {/* Small leaf — bottom left */}
        <svg className="absolute bottom-0 left-24 pointer-events-none" width="180" height="220" viewBox="0 0 180 220" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.45, transform: 'rotate(-30deg)' }}>
          <path d="M90 210 C40 160, 5 100, 18 45 C30 -10, 90 5, 90 5 C90 5, 150 -10, 162 45 C175 100, 140 160, 90 210Z" fill="rgba(200,169,107,0.08)" stroke="#C8A96B" strokeWidth="1"/>
          <line x1="90" y1="207" x2="90" y2="6" stroke="#C8A96B" strokeWidth="1.2" strokeOpacity="0.7"/>
          <line x1="90" y1="165" x2="48" y2="115" stroke="#C8A96B" strokeWidth="0.8" strokeOpacity="0.5"/>
          <line x1="90" y1="135" x2="128" y2="95" stroke="#C8A96B" strokeWidth="0.8" strokeOpacity="0.5"/>
          <line x1="90" y1="105" x2="52" y2="70" stroke="#C8A96B" strokeWidth="0.7" strokeOpacity="0.4"/>
        </svg>

        {/* Large leaf — top right */}
        <svg className="absolute -top-8 right-0 pointer-events-none" width="280" height="320" viewBox="0 0 280 320" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.5, transform: 'rotate(25deg) translateX(60px)' }}>
          <path d="M140 305 C65 235, 8 148, 25 65 C42 -18, 140 8, 140 8 C140 8, 238 -18, 255 65 C272 148, 215 235, 140 305Z" fill="rgba(200,169,107,0.08)" stroke="#C8A96B" strokeWidth="1.1"/>
          <line x1="140" y1="302" x2="140" y2="10" stroke="#C8A96B" strokeWidth="1.4" strokeOpacity="0.7"/>
          <line x1="140" y1="250" x2="75" y2="175" stroke="#C8A96B" strokeWidth="0.9" strokeOpacity="0.5"/>
          <line x1="140" y1="210" x2="195" y2="145" stroke="#C8A96B" strokeWidth="0.9" strokeOpacity="0.5"/>
          <line x1="140" y1="170" x2="80" y2="115" stroke="#C8A96B" strokeWidth="0.8" strokeOpacity="0.45"/>
          <line x1="140" y1="135" x2="185" y2="90" stroke="#C8A96B" strokeWidth="0.8" strokeOpacity="0.45"/>
        </svg>

        {/* Tiny leaf — bottom right */}
        <svg className="absolute bottom-8 right-12 pointer-events-none" width="130" height="160" viewBox="0 0 130 160" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.4, transform: 'rotate(15deg)' }}>
          <path d="M65 152 C30 118, 4 75, 14 34 C24 -7, 65 4, 65 4 C65 4, 106 -7, 116 34 C126 75, 100 118, 65 152Z" fill="rgba(200,169,107,0.08)" stroke="#C8A96B" strokeWidth="1"/>
          <line x1="65" y1="149" x2="65" y2="5" stroke="#C8A96B" strokeWidth="1.1" strokeOpacity="0.7"/>
          <line x1="65" y1="120" x2="35" y2="85" stroke="#C8A96B" strokeWidth="0.7" strokeOpacity="0.5"/>
          <line x1="65" y1="95" x2="90" y2="65" stroke="#C8A96B" strokeWidth="0.7" strokeOpacity="0.5"/>
        </svg>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16">

          {/* Header */}
          <div className="text-center mb-10">
            <p className="text-[11px] font-medium uppercase mb-4"
              style={{ color: '#C8A96B', letterSpacing: '4px' }}>
              LIFE AT BHAKTI KUNJ
            </p>
            <h2 className="text-4xl lg:text-5xl font-serif font-light mb-5 leading-tight"
              style={{ color: 'var(--text-primary)' }}>
              Moments &amp; Memories
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex justify-center mb-10">
            <div className="flex rounded-full p-1" style={{ background: 'var(--card-bg)', border: '1px solid var(--border-subtle)' }}>
              {([
                { key: 'site',   label: `Site (${SITE_PHOTOS.length})`  },
                { key: 'events', label: `Events (${EVENT_PHOTOS.length})` },
                { key: 'videos', label: `Videos (${VIDEOS.length})`     },
              ] as { key: Tab; label: string }[]).map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setTab(key)}
                  className="px-6 py-2.5 rounded-full text-xs font-semibold uppercase transition-all duration-300"
                  style={{
                    letterSpacing: '1.5px',
                    background: tab === key ? '#C8A96B' : 'transparent',
                    color: tab === key ? '#000' : 'var(--text-muted)',
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* ── Site photos tab ── */}
          {tab === 'site' && (
            <PhotoGrid
              photos={SITE_PHOTOS}
              onOpen={i => setLightbox({ photos: SITE_PHOTOS, index: i })}
            />
          )}

          {/* ── Events tab ── */}
          {tab === 'events' && (
            <PhotoGrid
              photos={EVENT_PHOTOS}
              onOpen={i => setLightbox({ photos: EVENT_PHOTOS, index: i })}
            />
          )}

          {/* ── Videos tab ── */}
          {tab === 'videos' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {VIDEOS.map((v, i) => (
                <VideoCard key={i} video={v} />
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-100 flex items-center justify-center"
          style={{ background: 'rgba(0,0,0,0.93)', backdropFilter: 'blur(14px)' }}
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-5 right-5 w-11 h-11 rounded-full flex items-center justify-center z-10"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}
            onClick={() => setLightbox(null)}
          ><X size={18} /></button>

          <button
            className="absolute left-4 lg:left-8 w-11 h-11 rounded-full flex items-center justify-center z-10"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}
            onClick={e => { e.stopPropagation(); prev(); }}
          ><ChevronLeft size={20} /></button>

          <div className="relative max-w-5xl w-full mx-16 lg:mx-24" onClick={e => e.stopPropagation()}>
            <Image
              src={lightbox.photos[lightbox.index].src}
              alt={lightbox.photos[lightbox.index].caption}
              width={1400} height={900}
              className="w-full h-auto rounded-xl object-contain"
              style={{ maxHeight: '78vh' }}
            />
            <p className="text-center mt-4 text-sm font-light tracking-widest uppercase" style={{ color: '#C8A96B' }}>
              {lightbox.photos[lightbox.index].caption}
            </p>
            <p className="text-center mt-1 text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
              {lightbox.index + 1} / {lightbox.photos.length}
            </p>
          </div>

          <button
            className="absolute right-4 lg:right-8 w-11 h-11 rounded-full flex items-center justify-center z-10"
            style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', color: 'white' }}
            onClick={e => { e.stopPropagation(); next(); }}
          ><ChevronRight size={20} /></button>
        </div>
      )}
    </>
  );
}

function PhotoGrid({ photos, onOpen }: {
  photos: { src: string; caption: string }[];
  onOpen: (i: number) => void;
}) {
  return (
    <>
      {/* Mobile: horizontal Swiper with chevron arrows */}
      <div className="md:hidden relative">
        <Swiper
          modules={[FreeMode, Navigation]}
          freeMode
          navigation={{ nextEl: '.swiper-next', prevEl: '.swiper-prev' }}
          slidesPerView={1.6}
          spaceBetween={12}
        >
          {photos.map((img, i) => (
            <SwiperSlide key={img.src} style={{ height: '220px' }}>
              <GalleryThumb img={img} index={i} onClick={onOpen} tall={false} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Prev arrow */}
        <button className="swiper-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 z-10 w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(200,169,107,0.9)', boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}>
          <ChevronLeft size={18} className="text-black" />
        </button>

        {/* Next arrow */}
        <button className="swiper-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 z-10 w-9 h-9 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(200,169,107,0.9)', boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}>
          <ChevronRight size={18} className="text-black" />
        </button>
      </div>

      {/* Desktop: staggered bento grid — first image spans 2 rows */}
      <div
        className="hidden md:grid gap-4"
        style={{
          gridTemplateColumns: '2fr 1fr 1fr',
          gridTemplateRows: 'repeat(2, 220px)',
        }}
      >
        {photos.map((img, i) => (
          <div
            key={img.src}
            style={{ gridRow: i === 0 ? '1 / 3' : undefined }}
          >
            <GalleryThumb img={img} index={i} onClick={onOpen} tall={false} />
          </div>
        ))}
      </div>
    </>
  );
}

function GalleryThumb({ img, index, onClick, tall }: {
  img: { src: string; caption: string };
  index: number;
  onClick: (i: number) => void;
  tall?: boolean;
}) {
  const [hov, setHov] = useState(false);
  return (
    <div
      className="relative overflow-hidden rounded-xl cursor-pointer w-full h-full"
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
        style={{ transform: hov ? 'scale(1.06)' : 'scale(1)', transition: 'transform 0.6s ease' }}
      />
      <div
        className="absolute inset-0 flex flex-col justify-end p-3"
        style={{
          background: hov
            ? 'linear-gradient(0deg, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0.18) 60%, transparent 100%)'
            : 'linear-gradient(0deg, rgba(0,0,0,0.38) 0%, transparent 60%)',
          transition: 'background 0.4s ease',
        }}
      >
        <p className="text-xs font-medium uppercase tracking-widest"
          style={{ color: '#C8A96B', opacity: hov ? 1 : 0, transform: hov ? 'translateY(0)' : 'translateY(6px)', transition: 'opacity 0.3s ease, transform 0.3s ease' }}>
          {img.caption}
        </p>
      </div>
      <div className="absolute top-2.5 right-2.5 w-5 h-5 pointer-events-none"
        style={{ opacity: hov ? 0.6 : 0, transition: 'opacity 0.3s ease', borderTop: '1.5px solid #C8A96B', borderRight: '1.5px solid #C8A96B' }} />
    </div>
  );
}

function VideoCard({ video }: { video: { src: string; title: string; thumb: string } }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className="rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(200,169,107,0.15)', boxShadow: '0 8px 40px rgba(0,0,0,0.4)' }}>
      {playing ? (
        <video
          src={video.src}
          controls
          autoPlay
          className="w-full"
          style={{ aspectRatio: '16/9', background: '#000', display: 'block' }}
        />
      ) : (
        <div
          className="relative cursor-pointer group"
          style={{ aspectRatio: '16/9' }}
          onClick={() => setPlaying(true)}
        >
          <Image src={video.thumb} alt={video.title} fill className="object-cover" />
          <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.45)' }} />
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
              style={{ background: 'rgba(200,169,107,0.9)', boxShadow: '0 0 40px rgba(200,169,107,0.5)' }}
            >
              <Play size={24} fill="#000" className="text-black ml-1" />
            </div>
          </div>
        </div>
      )}
      <div className="px-5 py-4" style={{ background: 'var(--card-bg)' }}>
        <p className="text-sm font-medium" style={{ color: 'var(--text-primary)' }}>{video.title}</p>
        <p className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>Bhakti Kunj Township</p>
      </div>
    </div>
  );
}
