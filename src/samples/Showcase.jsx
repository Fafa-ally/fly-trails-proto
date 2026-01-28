import React, { useState, useEffect } from 'react';
import { Play, X } from 'lucide-react';

const PremiumStoryShowcase = () => {
  const [activeStory, setActiveStory] = useState(null);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const stories = [
    {
      id: 1,
      cover: 'https://picsum.photos/seed/luxury1/700/1000',
      title: 'Swiss Alps',
      location: 'Zermatt',
      accent: '#E8DDD0',
      slides: [
        { image: 'https://picsum.photos/seed/alps1/1080/1920', caption: 'Where mountains meet the sky' },
        { image: 'https://picsum.photos/seed/alps2/1080/1920', caption: 'Alpine serenity awaits' },
        { image: 'https://picsum.photos/seed/alps3/1080/1920', caption: 'Peak perfection' }
      ]
    },
    {
      id: 2,
      cover: 'https://picsum.photos/seed/luxury2/700/1000',
      title: 'Santorini',
      location: 'Greece',
      accent: '#D4E4F7',
      slides: [
        { image: 'https://picsum.photos/seed/santorini1/1080/1920', caption: 'Golden hour in paradise' },
        { image: 'https://picsum.photos/seed/santorini2/1080/1920', caption: 'Aegean dreams' },
        { image: 'https://picsum.photos/seed/santorini3/1080/1920', caption: 'Whitewashed wonder' }
      ]
    },
    {
      id: 3,
      cover: 'https://picsum.photos/seed/luxury3/700/1000',
      title: 'Tokyo',
      location: 'Japan',
      accent: '#F5E6E8',
      slides: [
        { image: 'https://picsum.photos/seed/tokyo1/1080/1920', caption: 'Neon pulse of the city' },
        { image: 'https://picsum.photos/seed/tokyo2/1080/1920', caption: 'Urban elegance' },
        { image: 'https://picsum.photos/seed/tokyo3/1080/1920', caption: 'Modern traditions' }
      ]
    },
    {
      id: 4,
      cover: 'https://picsum.photos/seed/luxury4/700/1000',
      title: 'Maldives',
      location: 'Indian Ocean',
      accent: '#D0E8E4',
      slides: [
        { image: 'https://picsum.photos/seed/maldives1/1080/1920', caption: 'Crystal waters call' },
        { image: 'https://picsum.photos/seed/maldives2/1080/1920', caption: 'Tropical tranquility' },
        { image: 'https://picsum.photos/seed/maldives3/1080/1920', caption: 'Paradise found' }
      ]
    },
    {
      id: 5,
      cover: 'https://picsum.photos/seed/luxury5/700/1000',
      title: 'Paris',
      location: 'France',
      accent: '#F0E6D2',
      slides: [
        { image: 'https://picsum.photos/seed/paris1/1080/1920', caption: 'City of light and romance' },
        { image: 'https://picsum.photos/seed/paris2/1080/1920', caption: 'Timeless beauty' },
        { image: 'https://picsum.photos/seed/paris3/1080/1920', caption: 'Eternal charm' }
      ]
    }
  ];

  useEffect(() => {
    if (activeStory !== null && !isPaused) {
      const timer = setInterval(() => {
        setProgress(prev => {
          if (prev >= 100) {
            nextSlide();
            return 0;
          }
          return prev + 0.6;
        });
      }, 30);
      return () => clearInterval(timer);
    }
  }, [activeStory, isPaused, currentSlide]);

  const openStory = (index) => {
    setActiveStory(index);
    setCurrentSlide(0);
    setProgress(0);
    setIsPaused(false);
  };

  const closeStory = () => {
    setActiveStory(null);
    setCurrentSlide(0);
    setProgress(0);
  };

  const nextSlide = () => {
    if (activeStory !== null && !isTransitioning) {
      const story = stories[activeStory];
      setIsTransitioning(true);
      if (currentSlide < story.slides.length - 1) {
        setCurrentSlide(prev => prev + 1);
        setProgress(0);
      } else {
        if (activeStory < stories.length - 1) {
          setActiveStory(prev => prev + 1);
          setCurrentSlide(0);
          setProgress(0);
        } else {
          closeStory();
        }
      }
      setTimeout(() => setIsTransitioning(false), 400);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      if (currentSlide > 0) {
        setCurrentSlide(prev => prev - 1);
        setProgress(0);
      } else if (activeStory > 0) {
        setActiveStory(prev => prev - 1);
        setCurrentSlide(stories[activeStory - 1].slides.length - 1);
        setProgress(0);
      }
      setTimeout(() => setIsTransitioning(false), 400);
    }
  };

  const handlePauseToggle = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-stone-50 via-slate-50 to-stone-100 py-24">
      {/* Header */}
      <div className="text-center mb-20 px-4">
        <div className="inline-block mb-6">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>
        <h2 className="text-6xl md:text-7xl font-extralight tracking-tight text-slate-800 mb-5 leading-tight">
          Visual Chronicles
        </h2>
        <p className="text-slate-500 text-base font-light tracking-wide max-w-md mx-auto">
          Experience destinations through immersive storytelling
        </p>
      </div>

      {/* Story Grid */}
      <div className="max-w-[1400px] mx-auto px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {stories.map((story, index) => (
            <div
              key={story.id}
              onClick={() => openStory(index)}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-white shadow-xl transition-all duration-700 group-hover:shadow-2xl">
                {/* Colored border effect */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{ 
                    background: `linear-gradient(135deg, ${story.accent}40 0%, transparent 100%)`,
                    mixBlendMode: 'multiply'
                  }}
                />
                
                {/* Image */}
                <img
                  src={story.cover}
                  alt={story.title}
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:brightness-95"
                />
                
                {/* Sophisticated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-700" />
                
                {/* Play icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="bg-white/95 backdrop-blur-sm rounded-full p-6 shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-700">
                    <Play className="w-8 h-8 text-slate-800 fill-slate-800" strokeWidth={0} />
                  </div>
                </div>
                
                {/* Elegant text overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-7 transform transition-transform duration-700 group-hover:translate-y-0">
                  <div className="mb-3 flex items-center gap-2">
                    <div className="w-8 h-px bg-white/60" />
                    <span className="text-[10px] text-white/80 font-light tracking-[0.3em] uppercase">
                      {story.location}
                    </span>
                  </div>
                  <h3 className="text-3xl font-extralight text-white tracking-tight leading-tight">
                    {story.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Story Viewer Modal */}
      {activeStory !== null && (
        <div className="fixed inset-0 z-50 bg-black animate-fadeIn">
          <div className="relative w-full h-full max-w-[480px] mx-auto">
            {/* Minimal progress indicators */}
            <div className="absolute top-0 left-0 right-0 z-30 flex gap-1.5 p-4">
              {stories[activeStory].slides.map((_, idx) => (
                <div key={idx} className="flex-1 h-[2px] bg-white/20 rounded-full overflow-hidden backdrop-blur-sm">
                  <div
                    className="h-full bg-white rounded-full transition-all duration-100 ease-linear shadow-sm"
                    style={{
                      width: idx === currentSlide ? `${progress}%` : idx < currentSlide ? '100%' : '0%'
                    }}
                  />
                </div>
              ))}
            </div>

            {/* Minimalist header */}
            <div className="absolute top-10 left-0 right-0 z-30 px-5 flex items-start justify-between">
              <div className="flex-1">
                <div className="font-light text-white text-base tracking-wide mb-0.5">
                  {stories[activeStory].title}
                </div>
                <div className="text-white/60 text-xs tracking-widest uppercase font-light">
                  {stories[activeStory].location}
                </div>
              </div>
              
              <button
                onClick={closeStory}
                className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <X className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Story content with fade transition */}
            <div className="relative w-full h-full">
              <div className={`absolute inset-0 transition-opacity duration-400 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                <img
                  src={stories[activeStory].slides[currentSlide].image}
                  alt="Story slide"
                  className="w-full h-full object-cover"
                />
                
                {/* Sophisticated bottom gradient */}
                <div className="absolute bottom-0 left-0 right-0 h-2/5 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Refined caption */}
                <div className="absolute bottom-0 left-0 right-0 px-8 pb-16 text-center">
                  <div className="inline-block">
                    <p className="text-2xl md:text-3xl font-light text-white tracking-wide leading-relaxed mb-3">
                      {stories[activeStory].slides[currentSlide].caption}
                    </p>
                    <div className="h-px w-24 bg-white/40 mx-auto" />
                  </div>
                </div>
              </div>
            </div>

            {/* Touch zones for navigation */}
            <div className="absolute inset-0 flex z-20" onMouseDown={handlePauseToggle} onMouseUp={handlePauseToggle} onTouchStart={handlePauseToggle} onTouchEnd={handlePauseToggle}>
              <button
                onClick={prevSlide}
                className="flex-1 focus:outline-none active:bg-white/5 transition-colors"
                aria-label="Previous"
              />
              <button
                onClick={nextSlide}
                className="flex-1 focus:outline-none active:bg-white/5 transition-colors"
                aria-label="Next"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PremiumStoryShowcase;