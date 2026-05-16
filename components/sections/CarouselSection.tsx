'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselItem {
  id: number;
  title: string;
  image: string;
}

const slides: CarouselItem[] = [
  {
    id: 1,
    title: 'Grand Clubhouse',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=600&fit=crop',
  },
  {
    id: 2,
    title: 'Infinity Swimming Pool',
    image: 'https://images.unsplash.com/photo-1575429198097-0414ec08e8cd?w=800&h=600&fit=crop',
  },
  {
    id: 3,
    title: 'Sports Arena',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&h=600&fit=crop',
  },
  {
    id: 4,
    title: 'Fitness Centre',
    image: 'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=600&fit=crop',
  },
  {
    id: 5,
    title: 'Kids Play Zone',
    image: 'https://images.unsplash.com/photo-1575783970733-1aaedde1db74?w=800&h=600&fit=crop',
  },
  {
    id: 6,
    title: 'Landscaped Gardens',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&h=600&fit=crop',
  },
  {
    id: 7,
    title: 'Jogging & Cycling Track',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
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
    <section id="gallery" className="py-24 lg:py-32" style={{ background: '#0D1117' }}>
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
          <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl" style={{ aspectRatio: '28/9' }}>
            {slides.map((slide, index) => (
              <div
                key={slide.id}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
              >
                <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, transparent 55%)' }} />
                <div className="absolute bottom-8 left-8 lg:bottom-12 lg:left-12">
                  <h3 className="text-3xl lg:text-5xl font-serif font-light text-white">{slide.title}</h3>
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
                style={{ background: index === currentSlide ? '#C8A96B' : 'rgba(255,255,255,0.25)' }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
