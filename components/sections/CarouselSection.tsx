'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  id: number;
  title: string;
  image: string;
  description: string;
}

const slides: CarouselItem[] = [
  {
    id: 1,
    title: 'Gaushala',
    image: 'https://images.unsplash.com/photo-1596733430284-f7437764b1a9?w=1200&h=450&fit=crop',
    description: 'Dedicated cow sanctuary honouring the spirit of Braj.',
  },
  {
    id: 2,
    title: '40m Entry / Exit Road',
    image: 'https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?w=1200&h=450&fit=crop',
    description: 'Grand boulevard entrance with 9m wide internal township roads.',
  },
  {
    id: 3,
    title: '40m Swimming Pool',
    image: 'https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=1200&h=450&fit=crop',
    description: 'Olympic-length pool within the township complex.',
  },
  {
    id: 4,
    title: 'Meditation Centre',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1200&h=450&fit=crop',
    description: 'Dedicated space for yoga, meditation, and spiritual wellness.',
  },
  {
    id: 5,
    title: 'Commercial Centre',
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&h=450&fit=crop',
    description: 'Retail and dining hub with branded outlets — Domino’s coming soon.',
  },
  {
    id: 6,
    title: '25% Green Cover',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1200&h=450&fit=crop',
    description: 'Lush landscaped gardens and dedicated natural forest area.',
  },
  {
    id: 7,
    title: 'Club & Recreation',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&h=450&fit=crop',
    description: 'Full-featured clubhouse with sports, games, and recreation facilities.',
  },
  {
    id: 8,
    title: 'Resort-Style Township',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&h=450&fit=crop',
    description: 'Complete township with the look, feel, and amenities of a luxury resort.',
  },
  {
    id: 9,
    title: '24/7 Power Backup',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1200&h=450&fit=crop',
    description: 'Uninterrupted power supply across the entire township.',
  },
];

export function CarouselSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => setCurrentSlide(prev => (prev + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, [autoPlay]);

  const prevSlide = () => { setAutoPlay(false); setCurrentSlide(prev => prev === 0 ? slides.length - 1 : prev - 1); };
  const nextSlide = () => { setAutoPlay(false); setCurrentSlide(prev => (prev + 1) % slides.length); };

  return (
    <section id="spaces" className="py-24 lg:py-32" style={{ background: 'var(--bg-secondary)' }}>
      <div className="px-6 lg:px-16 max-w-360 mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[11px] font-medium uppercase mb-4" style={{ color: '#C8A96B', letterSpacing: '4px' }}>
            LIFESTYLE THAT INSPIRES
          </p>
          <h2 className="text-4xl lg:text-5xl font-serif font-light text-white">
            Spaces For Every Moment
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative w-full group">

          {/* Main slide */}
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl aspect-[16/10] md:aspect-[28/9]">
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 65%)' }} />
                <div className="absolute bottom-6 left-6 right-6 md:bottom-12 md:left-12 md:right-12 max-w-[90%] md:max-w-[70%]">
                  <h3 className="text-2xl md:text-5xl font-serif font-light text-white mb-2 leading-tight">
                    {slide.title}
                  </h3>
                  <p className="text-xs md:text-base font-light text-white/80 line-clamp-2 md:line-clamp-none">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Prev */}
            <button
              onClick={prevSlide}
              className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 p-3 lg:p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{
                background: 'rgba(200,169,107,0.2)',
                border: '1px solid rgba(200,169,107,0.4)',
                backdropFilter: 'blur(8px)',
                color: '#C8A96B',
              }}
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6 lg:w-8 lg:h-8" />
            </button>

            {/* Next */}
            <button
              onClick={nextSlide}
              className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 p-3 lg:p-4 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
              style={{
                background: 'rgba(200,169,107,0.2)',
                border: '1px solid rgba(200,169,107,0.4)',
                backdropFilter: 'blur(8px)',
                color: '#C8A96B',
              }}
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6 lg:w-8 lg:h-8" />
            </button>
          </div>

          {/* Thumbnails */}
          <div className="mt-6 flex gap-3 lg:gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => { setCurrentSlide(index); setAutoPlay(false); }}
                className={`shrink-0 relative rounded-xl overflow-hidden transition-all duration-300 snap-start ${
                  index === currentSlide ? 'h-28 w-40 opacity-100' : 'h-24 w-32 opacity-60 hover:opacity-90'
                }`}
                style={index === currentSlide ? { outline: '2px solid #C8A96B', outlineOffset: '2px' } : {}}
              >
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center" style={{ background: 'rgba(0,0,0,0.38)' }}>
                  <span className="text-white text-xs font-light text-center px-2">{slide.title}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => { setCurrentSlide(index); setAutoPlay(false); }}
                className={`rounded-full transition-all duration-300 ${index === currentSlide ? 'w-8 h-2.5' : 'w-2.5 h-2.5'}`}
                style={{ background: index === currentSlide ? '#C8A96B' : 'var(--text-faint)' }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
