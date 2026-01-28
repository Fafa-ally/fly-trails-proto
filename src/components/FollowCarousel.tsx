import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Instagram } from 'lucide-react';

const FollowCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides = [
    {
      src: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068',
      title: 'SERENGETI',
      subtitle: 'Tanzania'
    },
    {
      src: 'https://images.unsplash.com/photo-1547471080-7541e8856987?q=80&w=2008',
      title: 'MASAI MARA',
      subtitle: 'Kenya'
    },
    {
      src: 'https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072',
      title: 'KILIMANJARO',
      subtitle: 'Tanzania'
    },
    {
      src: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072',
      title: 'VICTORIA FALLS',
      subtitle: 'Zambia/Zimbabwe'
    },
    {
      src: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070',
      title: 'OKAVANGO',
      subtitle: 'Botswana'
    },
    {
      src: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2069',
      title: 'CAPE TOWN',
      subtitle: 'South Africa'
    },
    {
      src: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=2074',
      title: 'ZANZIBAR',
      subtitle: 'Tanzania'
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
    <div className="w-full bg-[#fdf8f0] pt-16 pb-0 overflow-hidden">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-serif font-black italic text-[#222] mb-2">
          Follow us on Instagram
        </h2>
        <p className="text-[#f29100] font-black tracking-widest text-xs uppercase">@FlyTrailsTravels</p>
      </div>

      {/* Carousel Container */}
      <div className="relative w-full max-w-full overflow-hidden">
        <div 
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {slides.map((slide, idx) => (
            <div
              key={idx}
              className="relative w-1/2 md:w-1/4 flex-shrink-0 aspect-square overflow-hidden cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <img
                src={slide.src}
                alt={slide.title}
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
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

              {/* Watermark - Bottom */}
              <div className="absolute bottom-6 left-0 right-0 flex items-center justify-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 border border-white/60 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white/60" />
                  </div>
                  <span className="text-white/80 text-xs tracking-[0.3em] font-light">
                    FLY TRAILS
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
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 z-10 disabled:opacity-50"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-slate-700" strokeWidth={1.5} />
          </button>
        )}

        {currentIndex < slides.length - 4 && (
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-3 shadow-xl transition-all duration-300 hover:scale-110 z-10 disabled:opacity-50"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-slate-700" strokeWidth={1.5} />
          </button>
        )}
      </div>
    </div>
  );
};

export default FollowCarousel;