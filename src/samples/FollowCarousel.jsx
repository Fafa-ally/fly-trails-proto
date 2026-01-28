import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

const InstagramCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      image: 'https://picsum.photos/seed/egypt1/800/1000',
      title: 'THE WONDERS OF EGYPT',
      subtitle: 'Discover charm, culture and amazing sights'
    },
    {
      image: 'https://picsum.photos/seed/egypt2/800/1000',
      title: 'THE WONDERS OF EGYPT',
      subtitle: 'Uncover culture, beauty and the glory of a lifetime'
    },
    {
      image: 'https://picsum.photos/seed/france/800/1000',
      title: "FRANCE'S TIMELESS CHARM UNFOLDS",
      subtitle: 'Breathtaking architecture'
    },
    {
      image: 'https://picsum.photos/seed/beverly/800/1000',
      title: 'VIA RODEO DR',
      subtitle: 'Beverly Hills luxury'
    },
    {
      image: 'https://picsum.photos/seed/queensland/800/1000',
      title: 'QUEENSLAND',
      subtitle: 'Australia'
    },
    {
      image: 'https://picsum.photos/seed/italy/800/1000',
      title: 'ITALIAN RIVIERA',
      subtitle: 'Coastal beauty'
    },
    {
      image: 'https://picsum.photos/seed/japan/800/1000',
      title: 'TOKYO NIGHTS',
      subtitle: 'Urban adventure'
    }
  ];

  const nextSlide = () => {
    if (!isTransitioning && currentIndex < slides.length - 1) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev + 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning && currentIndex > 0) {
      setIsTransitioning(true);
      setCurrentIndex((prev) => prev - 1);
      setTimeout(() => setIsTransitioning(false), 500);
    }
  };

  return (
    <div className="w-full bg-gradient-to-b from-blue-50 via-slate-50 to-white py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-light tracking-wide text-slate-800 mb-2">
          Follow us on Instagram
        </h2>
      </div>

      {/* Carousel Container */}
      <div className="relative max-w-[1600px] mx-auto px-8 overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="relative w-1/4 flex-shrink-0 aspect-[3/4] overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              
              {/* Dark Overlay - Always visible */}
              <div className="absolute inset-0 bg-black/10" />
              
              {/* Hover Overlay with Instagram Icon */}
              <div className={`absolute inset-0 bg-black/40 flex items-center justify-center transition-opacity duration-300 ${
                hoveredIndex === idx ? 'opacity-100' : 'opacity-0'
              }`}>
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-4">
                  <Instagram className="w-8 h-8 text-white" strokeWidth={1.5} />
                </div>
              </div>

              {/* Text Overlay - Top */}
              <div className="absolute top-0 left-0 right-0 p-6 text-white text-center">
                <p className="text-[10px] uppercase tracking-[0.25em] font-light leading-relaxed">
                  {slide.title}
                </p>
                <p className="text-xs font-light mt-1 tracking-wide opacity-90">
                  {slide.subtitle}
                </p>
              </div>

              {/* Virtuoso Watermark - Bottom */}
              <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 border border-white/60 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white/60" />
                  </div>
                  <span className="text-white/80 text-xs tracking-[0.3em] font-light">
                    VIRTUOSO
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons */}
        {currentIndex > 0 && (
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6 bg-white/80 hover:bg-white rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-105 z-10 disabled:opacity-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700" strokeWidth={1.5} />
          </button>
        )}

        {currentIndex < slides.length - 4 && (
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-6 bg-white/80 hover:bg-white rounded-full p-4 shadow-xl transition-all duration-300 hover:scale-105 z-10 disabled:opacity-50"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-slate-700" strokeWidth={1.5} />
          </button>
        )}
      </div>
    </div>
  );
};

export default InstagramCarousel;