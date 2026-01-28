import React, { useState, useEffect } from 'react';
import { ArrowLeft, Check, Star } from 'lucide-react';

const PremiumTierDetails = () => {
  const [scrollY, setScrollY] = useState(0);
  const [showNav, setShowNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowNav(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const tier = {
    name: "Adventurer",
    tagline: "For those who travel deeper",
    price: "5,000",
    original: "7,000",
    hero: "https://picsum.photos/seed/hero-tier/1920/1080",
    lifestyle1: "https://picsum.photos/seed/lifestyle1/1200/1600",
    lifestyle2: "https://picsum.photos/seed/lifestyle2/1200/800",
    lifestyle3: "https://picsum.photos/seed/lifestyle3/800/1000",
    color: "from-amber-600 to-orange-500",
    description: "Crafted for the modern explorer who refuses to settle for surface-level experiences. Adventure Elite opens doors that remain closed to others, transforming every journey into a chapter of your personal legend.",
    benefits: [
      { title: "Priority Access", desc: "48 hours before anyone else sees what's possible", detail: "Be first. Always. New expeditions, limited slots, exclusive experiences—yours before they're announced." },
      { title: "10% Savings", desc: "On everything, everywhere, every time", detail: "Not just trips. Everything. From single-day adventures to month-long expeditions across continents." },
      { title: "Private Transfers", desc: "Because your journey starts at your door", detail: "No queues. No chaos. Your driver knows your name, your flight, and exactly where you're going." },
      { title: "Hidden Access", desc: "Places others don't even know exist", detail: "Secret trails. Private reserves. Local connections that money can't buy—but membership unlocks." },
      { title: "Concierge Line", desc: "Real humans, real solutions, real time", detail: "9 AM or 9 PM, Nairobi or New York, we answer. And we solve it." },
      { title: "Community", desc: "Travel with people who get it", detail: "Quarterly gatherings. Annual expeditions. A network of explorers who've been there—and want to go back." }
    ],
    testimonial: {
      quote: "I used to plan trips. Now I collect moments.",
      author: "Sarah K.",
      role: "Adventurer member since 2023"
    }
  };

  return (
    <div className="bg-stone-950 min-h-screen">
      {/* Floating Navigation */}
      <button 
        className={`fixed top-8 left-8 z-50 flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-md rounded-full shadow-lg hover:shadow-xl transition-all duration-500 ${
          showNav ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
        }`}
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm font-medium tracking-wide">All Tiers</span>
      </button>

      {/* CINEMATIC HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <div 
          className="absolute inset-0 transition-transform duration-1000 ease-out"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          <img 
            src={tier.hero}
            alt={tier.name}
            className="w-full h-full object-cover scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-stone-950" />
        </div>

        <div className="relative h-full flex flex-col justify-end px-8 md:px-20 pb-24">
          <div className="max-w-6xl">
            <div className="mb-6">
              <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
                <span className="text-white/80 text-xs tracking-[0.3em] uppercase font-light">
                  {tier.tagline}
                </span>
              </div>
            </div>
            
            <h1 className="text-7xl md:text-9xl font-extralight text-white mb-8 tracking-tight leading-none">
              {tier.name}
            </h1>

            <p className="text-xl md:text-2xl text-white/70 max-w-3xl font-light leading-relaxed">
              {tier.description}
            </p>
          </div>
        </div>
      </section>

      {/* LIFESTYLE IMMERSION - Masonry Grid */}
      <section className="py-32 px-8 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {/* Large Left Image */}
          <div className="col-span-12 md:col-span-7 row-span-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl group">
              <img 
                src={tier.lifestyle1}
                alt="Lifestyle"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-12 left-12">
                <p className="text-white text-3xl md:text-4xl font-light leading-tight max-w-md">
                  Every journey tells a story. Make yours unforgettable.
                </p>
              </div>
            </div>
          </div>

          {/* Top Right */}
          <div className="col-span-12 md:col-span-5">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl group">
              <img 
                src={tier.lifestyle2}
                alt="Experience"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>

          {/* Bottom Right */}
          <div className="col-span-12 md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl group">
              <img 
                src={tier.lifestyle3}
                alt="Moment"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20" />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT YOU GET - Elegant List */}
      <section className="py-32 bg-gradient-to-b from-stone-950 to-black">
        <div className="max-w-5xl mx-auto px-8">
          <div className="mb-20">
            <div className="h-px w-32 bg-gradient-to-r from-white/0 via-white/30 to-white/0 mb-8" />
            <h2 className="text-5xl md:text-7xl font-extralight text-white mb-6 tracking-tight">
              What You Get
            </h2>
            <p className="text-xl text-white/50 font-light">
              Six privileges that change everything
            </p>
          </div>

          <div className="space-y-1">
            {tier.benefits.map((benefit, idx) => (
              <details 
                key={idx}
                className="group border-b border-white/10 hover:border-white/30 transition-colors"
              >
                <summary className="flex items-center justify-between py-8 cursor-pointer list-none">
                  <div className="flex-1">
                    <div className="flex items-baseline gap-6 mb-2">
                      <span className="text-white/30 text-sm font-light tabular-nums">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-light text-white">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-white/50 ml-14 font-light">
                      {benefit.desc}
                    </p>
                  </div>
                  <div className="ml-8 text-white/40 group-open:rotate-45 transition-transform">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </div>
                </summary>
                <div className="pb-8 ml-14 max-w-2xl">
                  <p className="text-white/70 leading-relaxed font-light">
                    {benefit.detail}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-32 bg-black">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="mb-8 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
            ))}
          </div>
          
          <blockquote className="text-3xl md:text-5xl font-light text-white mb-8 leading-tight">
            "{tier.testimonial.quote}"
          </blockquote>
          
          <div className="space-y-1">
            <p className="text-white/70 font-medium">{tier.testimonial.author}</p>
            <p className="text-white/40 text-sm">{tier.testimonial.role}</p>
          </div>
        </div>
      </section>

      {/* INVESTMENT - Side by Side */}
      <section className="py-32 bg-gradient-to-b from-black to-stone-950">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left: The Card */}
            <div className="relative">
              <div className={`absolute -inset-8 bg-gradient-to-br ${tier.color} opacity-20 blur-3xl rounded-full`} />
              <div className="relative aspect-[1.586/1] max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-stone-800 to-stone-900 rounded-3xl shadow-2xl" />
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl" />
                <div className="absolute bottom-8 left-8 text-white">
                  <p className="text-xs tracking-[0.3em] uppercase opacity-60 mb-1">Member Status</p>
                  <p className="text-2xl font-light tracking-wide">{tier.name}</p>
                </div>
                <div className="absolute top-8 right-8">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${tier.color}`} />
                </div>
              </div>
            </div>

            {/* Right: Pricing */}
            <div className="space-y-8">
              <div>
                <p className="text-white/40 text-sm tracking-[0.3em] uppercase mb-4">
                  Annual Investment
                </p>
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-7xl md:text-8xl font-extralight text-white">
                    {tier.price}
                  </span>
                  <span className="text-2xl text-white/40">KES</span>
                </div>
                <p className="text-white/40 line-through text-xl">
                  {tier.original} KES
                </p>
              </div>

              <div className="h-px bg-white/10" />

              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-white/70">
                  <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>Instant activation</span>
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>Digital member card</span>
                </li>
                <li className="flex items-center gap-3 text-white/70">
                  <Check className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <span>Cancel anytime</span>
                </li>
              </ul>

              <button className="w-full py-6 bg-white hover:bg-amber-400 text-black rounded-full font-medium text-lg tracking-wide transition-all duration-500 shadow-xl hover:shadow-2xl">
                Become an Adventurer
              </button>

              <p className="text-white/30 text-sm text-center">
                30-day money back guarantee
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PremiumTierDetails;