import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Sparkles, Lock, Unlock } from 'lucide-react';

const PremiumMembership = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeExperience, setActiveExperience] = useState(0);
  const [videoPlaying, setVideoPlaying] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const experiences = [
    {
      title: "You arrive in Nairobi",
      standard: "https://picsum.photos/seed/airport1/1200/800",
      member: "https://picsum.photos/seed/vip1/1200/800",
      standardDesc: "Queue for 45 minutes at customs. Fight for a taxi. Wonder if this was worth it.",
      memberDesc: "Private greeter meets you at the gate. Fast-track customs. Your driver awaits with your name on a sign."
    },
    {
      title: "Booking the Masai Mara",
      standard: "https://picsum.photos/seed/booking1/1200/800",
      member: "https://picsum.photos/seed/exclusive1/1200/800",
      standardDesc: "Sold out. Or KES 89,000/night. Limited availability. Take it or leave it.",
      memberDesc: "Priority allocation. KES 65,000/night. Confirmed. The best lodge, the best dates, yours first."
    },
    {
      title: "Your safari vehicle",
      standard: "https://picsum.photos/seed/van1/1200/800",
      member: "https://picsum.photos/seed/luxury1/1200/800",
      standardDesc: "Share a dusty van with 8 strangers. Small windows. No legroom. Someone's talking loudly.",
      memberDesc: "Private Land Cruiser. Pop-up roof. Professional guide who knows your name and preferences."
    },
    {
      title: "Sunset in the wild",
      standard: "https://picsum.photos/seed/crowd1/1200/800",
      member: "https://picsum.photos/seed/private1/1200/800",
      standardDesc: "23 vehicles surround a single lion. Everyone jostling for photos. Magic gone.",
      memberDesc: "You're alone. Just you, your guide, and the golden hour. This moment belongs to you."
    }
  ];

  const tiers = [
    {
      name: "Explorer",
      tagline: "Begin Your Journey",
      price: "2,000",
      original: "3,000",
      color: "from-blue-600 to-cyan-500",
      benefits: ["5% off adventures", "Early access to new trips", "Members-only newsletter", "Community events"],
      image: "https://picsum.photos/seed/explorer/800/1000"
    },
    {
      name: "Adventurer",
      tagline: "Elevate Your Experience",
      price: "5,000",
      original: "7,000",
      color: "from-amber-600 to-orange-500",
      popular: true,
      benefits: ["10% off all trips", "Priority booking", "Airport transfers", "Concierge support", "Exclusive events"],
      image: "https://picsum.photos/seed/adventurer/800/1000"
    },
    {
      name: "Platinum",
      tagline: "Own The Experience",
      price: "19,000",
      original: "24,500",
      color: "from-yellow-600 to-amber-400",
      benefits: ["15% off everything", "Private concierge", "Bespoke itineraries", "Global lounge access", "VIP experiences", "Lifetime memories"],
      image: "https://picsum.photos/seed/platinum/800/1000"
    }
  ];

  return (
    <div className="bg-[#0a0a0a] min-h-screen">
      {/* CINEMATIC HERO */}
      <section className="relative h-screen w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/hero/1920/1080" 
            alt="Hero"
            className="w-full h-full object-cover scale-110 animate-slow-zoom"
            style={{ animationDuration: '20s' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
        </div>

        <div className="relative h-full flex items-center justify-center px-6">
          <div className="text-center max-w-5xl">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-extralight text-white mb-8 tracking-tight leading-none">
              Stop Traveling
              <br />
              <span className="font-light italic">Start Living</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto font-light leading-relaxed">
              The difference between a trip and a transformation isn't the destination.
              <br />It's who you become along the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="group px-10 py-5 bg-white text-black rounded-full font-medium text-sm tracking-wide hover:bg-amber-400 transition-all duration-500 flex items-center gap-3">
                See the difference
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => setVideoPlaying(true)}
                className="flex items-center gap-3 text-white/90 hover:text-white transition-colors group"
              >
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:bg-white/30 transition-all">
                  <Play className="w-6 h-6 fill-white" />
                </div>
                <span className="text-sm tracking-wide">Watch the story</span>
              </button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-px h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
        </div>
      </section>

      {/* SHOW THE DIFFERENCE - Split Screen Experience */}
      <section className="py-32 bg-gradient-to-b from-black to-stone-950">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-7xl font-extralight text-white mb-6 tracking-tight">
              The Same Place.<br/>A Different World.
            </h2>
            <p className="text-xl text-white/60 font-light">Every moment. Every detail. Every memory. Elevated.</p>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-3 mb-12">
            {experiences.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveExperience(idx)}
                className={`h-2 rounded-full transition-all duration-500 ${
                  idx === activeExperience ? 'w-12 bg-amber-400' : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>

          {/* Experience Title */}
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light text-white tracking-wide">
              {experiences[activeExperience].title}
            </h3>
          </div>

          {/* Split Screen Comparison */}
          <div className="grid md:grid-cols-2 gap-1 bg-white/5 p-1 rounded-3xl overflow-hidden">
            {/* Standard Experience */}
            <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
              <div className="aspect-[4/3] relative">
                <img 
                  src={experiences[activeExperience].standard}
                  alt="Standard"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                <div className="absolute top-6 left-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/30 rounded-full">
                    <Lock className="w-4 h-4 text-red-400" />
                    <span className="text-red-200 text-sm font-medium">Standard</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white/90 text-lg leading-relaxed font-light">
                    {experiences[activeExperience].standardDesc}
                  </p>
                </div>
              </div>
            </div>

            {/* Member Experience */}
            <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
              <div className="aspect-[4/3] relative">
                <img 
                  src={experiences[activeExperience].member}
                  alt="Member"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                <div className="absolute top-6 left-6">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/20 backdrop-blur-sm border border-amber-500/30 rounded-full">
                    <Unlock className="w-4 h-4 text-amber-400" />
                    <span className="text-amber-200 text-sm font-medium">Member</span>
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white/90 text-lg leading-relaxed font-light">
                    {experiences[activeExperience].memberDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-12">
            <button
              onClick={() => setActiveExperience(prev => (prev - 1 + experiences.length) % experiences.length)}
              className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/60 hover:text-white transition-all text-sm tracking-wide"
            >
              ← Previous moment
            </button>
            <button
              onClick={() => setActiveExperience(prev => (prev + 1) % experiences.length)}
              className="px-8 py-4 bg-white hover:bg-amber-400 rounded-full text-black font-medium transition-all text-sm tracking-wide"
            >
              Next moment →
            </button>
          </div>
        </div>
      </section>

      {/* MEMBERSHIP TIERS - Redesigned Premium */}
      <section className="py-32 bg-stone-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />
        
        <div className="max-w-[1600px] mx-auto px-6 relative z-10">
          <div className="text-center mb-32">
            <div className="inline-block mb-6">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
            <h2 className="text-5xl md:text-7xl font-extralight text-white mb-6 tracking-tight leading-tight">
              Three Levels.<br/>One Philosophy.
            </h2>
            <p className="text-xl text-white/50 font-light max-w-2xl mx-auto leading-relaxed">
              Access isn't about spending more. It's about experiencing more deeply.
            </p>
          </div>

          {/* Horizontal Scroll Tiers */}
          <div className="space-y-32">
            {tiers.map((tier, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${idx % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 items-center`}
              >
                {/* Image Side */}
                <div className="flex-1 w-full">
                  <div className="relative group">
                    <div className="aspect-[4/5] overflow-hidden rounded-2xl">
                      <img 
                        src={tier.image}
                        alt={tier.name}
                        className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                      
                      {/* Floating price tag */}
                      <div className="absolute top-8 left-8">
                        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-2xl">
                          <div className="text-stone-400 text-xs tracking-widest uppercase mb-2">Annual</div>
                          <div className="flex items-baseline gap-2">
                            <span className="text-4xl font-light text-stone-900">KES {tier.price}</span>
                          </div>
                          <div className="text-stone-400 line-through text-sm mt-1">KES {tier.original}</div>
                        </div>
                      </div>
                    </div>

                    {/* Decorative gradient border */}
                    <div className={`absolute -inset-4 bg-gradient-to-br ${tier.color} opacity-20 rounded-3xl -z-10 blur-2xl transition-opacity duration-700 group-hover:opacity-40`} />
                  </div>
                </div>

                {/* Content Side */}
                <div className="flex-1 w-full space-y-8">
                  <div>
                    <div className="text-sm text-white/40 tracking-[0.3em] uppercase mb-4 font-light">
                      {tier.tagline}
                    </div>
                    <h3 className="text-6xl md:text-7xl font-extralight text-white tracking-tight mb-6">
                      {tier.name}
                    </h3>
                    <div className="h-px w-32 bg-gradient-to-r from-white/60 to-transparent" />
                  </div>

                  {/* Benefits Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {tier.benefits.map((benefit, i) => (
                      <div key={i} className="group/item">
                        <div className="flex items-start gap-4 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-500">
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-br ${tier.color} mt-2 flex-shrink-0`} />
                          <span className="text-white/80 text-base leading-relaxed">{benefit}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <button className="group inline-flex items-center gap-4 px-10 py-5 bg-white hover:bg-amber-400 text-black rounded-full font-medium tracking-wide transition-all duration-500 shadow-xl hover:shadow-2xl">
                    <span>Explore {tier.name}</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-32 bg-gradient-to-b from-stone-950 to-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-5xl md:text-7xl font-extralight text-white mb-8 tracking-tight leading-tight">
            Your Next Chapter
            <br />
            <span className="font-light italic text-amber-400">Starts Here</span>
          </h2>
          <p className="text-xl text-white/60 mb-12 font-light leading-relaxed max-w-2xl mx-auto">
            Join a community of explorers who refuse to settle for ordinary. Who understand that the journey matters as much as the destination.
          </p>
          <button className="group px-12 py-6 bg-white text-black rounded-full font-medium text-lg tracking-wide hover:bg-amber-400 transition-all duration-500 flex items-center gap-4 mx-auto">
            Unlock Your Access
            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </section>

      <style jsx>{`
        @keyframes slow-zoom {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.1); }
        }
        .animate-slow-zoom {
          animation: slow-zoom 20s infinite;
        }
      `}</style>
    </div>
  );
};

export default PremiumMembership;