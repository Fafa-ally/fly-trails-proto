import React, { useState, useEffect } from 'react';
import { Play, X, ArrowRight, ArrowLeft } from 'lucide-react';

const StoryShowcase = () => {
  const [activeStoryIndex, setActiveStoryIndex] = useState(0);
  const [activeStory, setActiveStory] = useState<number | null>(null); // For modal
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0); // For modal slideshow
  const [isTransitioning, setIsTransitioning] = useState(false);

  const stories = [
    {
      id: 1,
      cover: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072',
      title: 'Serengeti',
      location: 'Tanzania',
      accent: '#E8DDD0',
      description: 'The endless plains where the earth breathes. Witness the greatest show on nature’s stage.',
      slides: [
        { image: 'https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072', caption: 'Where the earth breathes' },
        { image: 'https://images.unsplash.com/photo-1547471080-7541e8856987?q=80&w=2008', caption: 'Witness the Great Migration' },
        { image: 'https://images.unsplash.com/photo-1534759846116-5799c33ce22a?q=80&w=2070', caption: 'Nature in its purest form' }
      ]
    },
    {
      id: 2,
      cover: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=2074',
      title: 'Zanzibar',
      location: 'Tanzania',
      accent: '#D4E4F7',
      description: 'Turquoise waters, spice-scented breezes, and the ancient secrets of Stone Town.',
      slides: [
        { image: 'https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=2074', caption: 'Turquoise waters await' },
        { image: 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&w=2000', caption: 'Stone Town secrets' },
        { image: 'https://images.unsplash.com/photo-1586861635167-e5223aadc9fe?q=80&w=2000', caption: 'Spice island breeze' }
      ]
    },
    {
      id: 3,
      cover: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068',
      title: 'Masai Mara',
      location: 'Kenya',
      accent: '#F5E6E8',
      description: 'The heart of safari. Big cats roaming free under vast, dramatic skies.',
      slides: [
        { image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068', caption: 'The heart of safari' },
        { image: 'https://images.unsplash.com/photo-1543832923-4466d6f7d583?q=80&w=2070', caption: 'Big cats roaming free' },
        { image: 'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?q=80&w=2000', caption: 'Sunset silhouettes' }
      ]
    },
    {
      id: 4,
      cover: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2069',
      title: 'Cape Town',
      location: 'South Africa',
      accent: '#D0E8E4',
      description: 'Where oceans meet mountains. A vibrant city perched on the edge of the world.',
      slides: [
        { image: 'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2069', caption: 'Where oceans meet' },
        { image: 'https://images.unsplash.com/photo-1580060839134-75a5edca2e99?q=80&w=2000', caption: 'Table Mountain views' },
        { image: 'https://images.unsplash.com/photo-1577948000111-9c9707350061?q=80&w=2000', caption: 'Coastal drives' }
      ]
    },
    {
      id: 5,
      cover: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070',
      title: 'Okavango',
      location: 'Botswana',
      accent: '#F0E6D2',
      description: 'A miraculous watery wilderness in a thirsty land. Life giving waters of the delta.',
      slides: [
        { image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070', caption: 'Life giving waters' },
        { image: 'https://images.unsplash.com/photo-1534359409199-e61404169543?q=80&w=2000', caption: 'Mokoro safaris' },
        { image: 'https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&w=2000', caption: 'Delta wilderness' }
      ]
    }
  ];

  // Auto-advance main showcase slides
  useEffect(() => {
    if (activeStory === null) { // Only rotate if modal is closed
      const timer = setInterval(() => {
        setActiveStoryIndex(prev => (prev + 1) % stories.length);
      }, 6000); // Switch every 6 seconds
      return () => clearInterval(timer);
    }
  }, [activeStory, stories.length]);

  // Modal Progress Timer
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

  const openStory = (index: number) => {
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
      } else if (activeStory !== null && activeStory > 0) {
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

  const currentStory = stories[activeStoryIndex];
  const isImageLeft = activeStoryIndex % 2 === 0;

  return (
    <div className="w-full bg-[#fdf8f0] py-24 relative z-30 -mt-20 rounded-t-[5rem] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden transition-colors duration-1000">
      {/* Header */}
      <div className="text-center mb-16 pt-10 px-4">
        <h2 className="text-6xl md:text-7xl font-serif font-black italic text-[#222] mb-5 leading-tight">
          Story Showcase
        </h2>
        <p className="text-slate-500 text-base font-light tracking-wide max-w-md mx-auto">
          Experience destinations through immersive storytelling
        </p>
      </div>

      {/* Main Slideshow Container */}
      <div className="max-w-7xl mx-auto px-6 mb-20 md:px-12 relative min-h-[500px] flex items-center">
        {stories.map((story, index) => (
            <div 
                key={story.id}
                className={`
                    absolute inset-0 px-6 md:px-12 w-full flex flex-col md:flex-row items-center gap-12 md:gap-24 transition-all duration-1000 ease-in-out
                    ${index === activeStoryIndex ? 'opacity-100 translate-x-0 pointer-events-auto' : 'opacity-0 pointer-events-none translate-x-8'}
                    ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                `}
            >
                {/* Image Side */}
                <div className="flex-1 w-full relative group cursor-pointer" onClick={() => openStory(index)}>
                    <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-2xl">
                        <img 
                            src={story.cover} 
                            alt={story.title} 
                            className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                        
                        {/* Play Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                            <div className="bg-white/90 backdrop-blur-sm rounded-full p-5 shadow-2xl transform scale-75 group-hover:scale-100 transition-transform duration-500">
                                <Play className="w-6 h-6 text-[#222] fill-[#222]" strokeWidth={0} />
                            </div>
                        </div>
                    </div>
                    {/* Decorative Element */}
                    <div className={`absolute -inset-4 border-2 border-[#f29100]/20 rounded-[2.5rem] -z-10 transition-transform duration-1000 ${index % 2 === 0 ? '-translate-x-4 translate-y-4' : 'translate-x-4 translate-y-4'}`}></div>
                </div>

                {/* Text Side */}
                <div className="flex-1 w-full text-center md:text-left">
                    <div className={`flex items-center gap-3 mb-4 ${index % 2 !== 0 ? 'md:justify-end' : ''} justify-center md:justify-start`}>
                        <div className="h-px w-12 bg-[#f29100]"></div>
                        <span className="text-[#f29100] font-bold text-xs uppercase tracking-[0.2em]">{story.location}</span>
                    </div>
                    
                    <h3 className="text-5xl md:text-7xl font-serif font-black italic text-[#222] mb-6 leading-none">
                        {story.title}
                    </h3>
                    
                    <p className="text-slate-600 text-lg font-light leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
                        {story.description}
                    </p>

                    <button 
                        onClick={() => openStory(index)}
                        className={`group inline-flex items-center gap-3 text-[#222] font-black uppercase tracking-[0.2em] text-xs hover:text-[#f29100] transition-colors ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                    >
                        Watch Story
                        <div className="w-8 h-8 rounded-full border border-[#222]/20 flex items-center justify-center group-hover:border-[#f29100] group-hover:bg-[#f29100] group-hover:text-white transition-all">
                            {index % 2 !== 0 ? <ArrowLeft className="w-3 h-3" /> : <ArrowRight className="w-3 h-3" />}
                        </div>
                    </button>
                </div>
            </div>
        ))}
      </div>

      {/* Story Viewer Modal */}
      {activeStory !== null && (
        <div className="fixed inset-0 z-[100] bg-black animate-fadeIn">
          <div className="relative w-full h-full max-w-[480px] mx-auto bg-black shadow-2xl">
            {/* Minimal progress indicators */}
            <div className="absolute top-0 left-0 right-0 z-30 flex gap-1.5 p-4 mt-safe">
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
            <div className="absolute top-10 left-0 right-0 z-30 px-5 flex items-start justify-between mt-safe">
              <div className="flex-1 pt-2">
                <div className="font-bold text-white text-base tracking-wide mb-0.5">
                  {stories[activeStory].title}
                </div>
                <div className="text-white/60 text-xs tracking-widest uppercase font-medium">
                  {stories[activeStory].location}
                </div>
              </div>
              
              <button
                onClick={closeStory}
                className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full"
              >
                <X className="w-6 h-6" strokeWidth={1.5} />
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
                <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                
                {/* Refined caption */}
                <div className="absolute bottom-0 left-0 right-0 px-8 pb-20 text-center">
                  <div className="inline-block">
                    <p className="text-2xl md:text-3xl font-serif font-black italic text-white tracking-wide leading-relaxed mb-4">
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
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="flex-1 focus:outline-none active:bg-white/5 transition-colors cursor-w-resize"
                aria-label="Previous"
              />
              <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="flex-1 focus:outline-none active:bg-white/5 transition-colors cursor-e-resize"
                aria-label="Next"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StoryShowcase;