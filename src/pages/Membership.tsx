import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowRight, Star, Crown, Compass, Check, X, 
  TrendingUp, MapPin, Shield, Users 
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import DifferenceSplit from '../components/DifferenceSplit';
import StoryShowcase from '../components/StoryShowcase';

const tiers = [
  {
    id: 'explorer',
    name: 'Explorer',
    price: '2,000',
    originalPrice: '3,000',
    image: '/membership/explorer.jpg',
    color: 'bg-blue-500',
    icon: <Compass className="w-6 h-6 text-blue-500" />,
    tagline: 'The Curious Soul',
    desc: 'Begin your journey with essential privileges designed to make every trip smoother and more rewarding.',
    benefits: ['Early Access', '5% Off Day Trips', 'Community Access']
  },
  {
    id: 'adventure-elite',
    name: 'Adventure Elite',
    price: '5,000',
    originalPrice: '7,000',
    image: '/membership/adventure-elite.jpg',
    color: 'bg-orange-500',
    icon: <Star className="w-6 h-6 text-orange-500" />,
    tagline: 'The Bold Voyager',
    desc: 'Unlock priority access, deeper discounts, and exclusive events. Crafted for the frequent traveler.',
    benefits: ['Priority Booking', '10% Off All Trips', 'Airport Transfers']
  },
  {
    id: 'prestige-platinum',
    name: 'Prestige Platinum',
    price: '19,000',
    originalPrice: '24,500',
    image: '/membership/prestige-platinum.jpg',
    color: 'bg-yellow-500',
    icon: <Crown className="w-6 h-6 text-yellow-600" />,
    tagline: 'The Global Citizen',
    desc: 'Limitless luxury. Private concierge, bespoke itineraries, and the world on your terms.',
    benefits: ['Private Concierge', '15% Off All Trips', 'Global Lounge Access']
  }
];

const Membership: React.FC = () => {
  useScrollAnimation();
  const navigate = useNavigate();

  const lightPattern = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556 15.858 12.14 28 0zm-6.485 0L13.373 12.142l1.414 1.414L25.515.828 38.244 13.556l1.414-1.414L27.515 0h-2zM0 5.373l12.142 12.143-1.414 1.414L0 8.2V5.374zm0 5.656l9.314 9.314-1.414 1.414L0 13.83v-2.8zm0 5.656L6.485 23.17 5.07 24.586 0 19.515v-2.83zm0 5.657l3.657 3.657-1.414 1.414L0 25.172v-2.83zM0 27.485L.828 28.314 0 29.143v-1.66zM60 5.373L47.858 17.515l1.414 1.414L60 8.2V5.374zm0 5.656L50.686 21.343l1.414 1.414L60 13.83v-2.8zm0 5.656L53.515 23.17l1.414 1.415L60 19.515v-2.83zm0 5.657L56.343 25.999l1.414 1.414L60 25.172v-2.83zM60 27.485l-.828.828.828.83v-1.66zM0 48.97l12.142-12.14 1.414 1.414L0 51.8v-2.83zm0-5.656L9.314 34l1.414 1.414L0 46.143v-2.83zm0-5.657L6.485 31.17 5.07 32.586 0 27.515v2.142zm0-5.656l3.657-3.657L2.243 27.93 0 25.686v2.315zM60 48.97L47.858 36.828l1.414-1.414L60 51.8v-2.83zm0-5.656L50.686 34l1.414-1.414L60 46.143v-2.83zm0-5.657L53.515 31.17l1.414-1.415L60 34.828v-2.142zm0-5.656l-3.657-3.657 1.414-1.414L60 25.686v2.315z' fill='%23222222' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`
  };

  const darkPattern = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556 15.858 12.14 28 0zm-6.485 0L13.373 12.142l1.414 1.414L25.515.828 38.244 13.556l1.414-1.414L27.515 0h-2zM0 5.373l12.142 12.143-1.414 1.414L0 8.2V5.374zm0 5.656l9.314 9.314-1.414 1.414L0 13.83v-2.8zm0 5.656L6.485 23.17 5.07 24.586 0 19.515v-2.83zm0 5.657l3.657 3.657-1.414 1.414L0 25.172v-2.83zM0 27.485L.828 28.314 0 29.143v-1.66zM60 5.373L47.858 17.515l1.414 1.414L60 8.2V5.374zm0 5.656L50.686 21.343l1.414 1.414L60 13.83v-2.8zm0 5.656L53.515 23.17l1.414 1.415L60 19.515v-2.83zm0 5.657L56.343 25.999l1.414 1.414L60 25.172v-2.83zM60 27.485l-.828.828.828.83v-1.66zM0 48.97l12.142-12.14 1.414 1.414L0 51.8v-2.83zm0-5.656L9.314 34l1.414 1.414L0 46.143v-2.83zm0-5.657L6.485 31.17 5.07 32.586 0 27.515v2.142zm0-5.656l3.657-3.657L2.243 27.93 0 25.686v2.315zM60 48.97L47.858 36.828l1.414-1.414L60 51.8v-2.83zm0-5.656L50.686 34l1.414-1.414L60 46.143v-2.83zm0-5.657L53.515 31.17l1.414-1.415L60 34.828v-2.142zm0-5.656l-3.657-3.657 1.414-1.414L60 25.686v2.315z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3C/svg%3E")`
  };

  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans selection:bg-[#f29100] selection:text-white">
      
      {/* 1. HERO - Updated to Bottom-Aligned Detail Page Hero Style */}
      <section className="relative h-[85vh] md:h-[90vh] w-full overflow-hidden flex items-end pb-12 md:pb-24 z-0">
        <div className="absolute inset-0">
          <img 
            src="/hero-bg.jpg" 
            alt="The World Awaits" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#fdf8f0] via-transparent to-black/60"></div>
        </div>

        <div className="relative z-10 w-full px-6 md:px-20 flex flex-col items-start">
            <h1 className="text-4xl md:text-[8rem] font-serif font-black italic text-[#222] mix-blend-screen bg-white/0 leading-[0.8] mb-4 tracking-tighter drop-shadow-2xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">Don't Just Go,</span><br/>
                <span className="text-[#f29100]">Belong.</span>
            </h1>
            <p className="text-xl mb-20 lg:mb-22 md:text-3xl text-white/90 font-serif italic max-w-2xl border-l-4 border-[#f29100] pl-6 mt-4 drop-shadow-lg leading-relaxed">
                Join an exclusive community of explorers who get the upgrades, the secret access, and the prices publicly unavailable.
            </p>
        </div>
      </section>

      {/* 2. PHILOSOPHY */}
      <section id="philosophy" className="py-24 px-4 md:px-12 max-w-[1600px] mx-auto relative rounded-t-[5rem] bg-[#fdf8f0] -mt-20 z-10 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.1)]">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
            <div className="md:col-span-5 space-y-10">
                <span className="text-[#f29100] text-xs font-black uppercase tracking-[0.4em]">The Inner Circle</span>
                <h2 className="text-5xl md:text-7xl font-serif font-black italic text-[#222] leading-[0.9]">
                    Access the <br/> Inaccessible.
                </h2>
                <div className="h-1 w-24 bg-[#222]"></div>
                <p className="text-lg text-slate-600 leading-relaxed font-light">
                    Membership is more than a card; it's a key. A key to sold-out lodges, private conservation areas, and a community of like-minded explorers.
                </p>
                
                <div className="grid grid-cols-2 gap-8 pt-8">
                    <div>
                        <Shield className="w-8 h-8 text-[#f29100] mb-4" />
                        <h4 className="font-bold text-[#222] mb-2">Curated Safety</h4>
                        <p className="text-sm text-slate-500">Vetted guides and secure, private transport.</p>
                    </div>
                    <div>
                        <Users className="w-8 h-8 text-[#f29100] mb-4" />
                        <h4 className="font-bold text-[#222] mb-2">Exclusivity</h4>
                        <p className="text-sm text-slate-500">Access to events non-members miss.</p>
                    </div>
                </div>
            </div>

            <div className="md:col-span-7 relative h-[500px]">
                <div className="absolute top-0 right-0 w-[85%] h-[80%] overflow-hidden rounded-[3rem] shadow-2xl z-10 group">
                    <img src="/safari-vehicle.jpg" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt="Safari" />
                </div>
                <div className="absolute bottom-0 left-0 w-[55%] h-[55%] overflow-hidden rounded-[2rem] shadow-2xl z-20 border-8 border-[#fdf8f0] group">
                    <img src="/safari-journal.jpg" className="w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110" alt="Journal" />
                </div>
            </div>
        </div>
      </section>

      {/* 3. DIFFERENCE */}
      <DifferenceSplit />

      {/* 4. THE COLLECTION */}
      <section id="tiers" className="py-20 relative overflow-hidden bg-[#fdf8f0] rounded-t-[5rem] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.5)] -mt-20 z-40 pb-32">
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={darkPattern}></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#fdf8f0] via-transparent to-[#fdf8f0] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-[1400px]">
            <div className="text-center mb-20">
                <span className="text-[#222]/40 text-[10px] font-black uppercase tracking-[0.3em]">Choose Your Status</span>
                <h3 className="text-4xl md:text-6xl font-serif font-black italic text-[#222] mt-4">The Collection</h3>
            </div>

            <div className="flex flex-col gap-24">
                {tiers.map((tier, index) => (
                    <div 
                        key={tier.id} 
                        className={`flex flex-col md:flex-row items-center gap-8 md:gap-24 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
                    >
                        <div className="flex-1 w-full relative">
                            <div className="relative group">
                                <div className="relative aspect-video w-full overflow-hidden rounded-[3rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] z-10 border border-[#222]/5">
                                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-20"></div>
                                    <img 
                                        src={tier.image} 
                                        alt={tier.name}
                                        className="w-full h-full object-cover transition-transform duration-[2s] ease-out group-hover:scale-110"
                                    />
                                    <div className="absolute top-8 left-8 z-30 bg-white/90 backdrop-blur-md border border-white/20 px-6 py-2 rounded-full shadow-lg text-[#222] text-[10px] font-bold tracking-widest uppercase">
                                        Tier 0{index + 1}
                                    </div>
                                </div>
                                <div className={`absolute -inset-4 md:-inset-8 border-2 border-[#f29100]/20 rounded-[4rem] -z-0 transition-transform duration-1000 group-hover:scale-105 ${index % 2 === 0 ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'}`}></div>
                            </div>
                        </div>

                        <div className="flex-1 w-full flex flex-col items-start">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="p-3 bg-white rounded-2xl border border-[#222]/5 shadow-sm">
                                    {tier.icon}
                                </div>
                                <span className="text-[#f29100] font-black tracking-[0.3em] text-[10px] uppercase">{tier.tagline}</span>
                            </div>
                            
                            <h2 className="text-5xl md:text-6xl font-serif font-black italic text-[#222] mb-6 leading-[0.8] tracking-tighter">
                                {tier.name}
                            </h2>
                            
                            <p className="text-slate-600 leading-relaxed text-lg mb-8 max-w-lg font-light">
                                {tier.desc}
                            </p>

                            <div className="flex items-center gap-8 mb-10 bg-white p-6 rounded-3xl border border-[#222]/5 shadow-sm w-full max-w-md">
                                <div>
                                    <span className="text-slate-400 font-bold line-through text-xs block mb-1">KES {tier.originalPrice}</span>
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-xl font-bold text-[#f29100]">KES</span>
                                        <span className="text-5xl font-black text-[#222] tracking-tighter">{tier.price}</span>
                                    </div>
                                </div>
                                <div className="h-12 w-px bg-[#222]/10"></div>
                                <span className="text-[10px] text-slate-500 uppercase tracking-[0.2em] font-black leading-tight">Annual<br/>Membership</span>
                            </div>

                            <button 
                                onClick={() => navigate(`/membership/${tier.id}`)}
                                className="group inline-flex items-center gap-6 bg-[#222] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-xs hover:bg-[#f29100] hover:text-white transition-all shadow-xl"
                            >
                                Explore Access
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 5. VISUAL PROOF */}
      <StoryShowcase />

      {/* 6. FOOTER CTA */}
      <section className="py-24 bg-[#fdf8f0] text-[#222] rounded-t-[5rem] -mt-24 relative z-50 shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden">
        <div className="absolute inset-0 opacity-100 pointer-events-none" style={lightPattern}></div>
        <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-black italic mb-8 tracking-tighter">
                Begin Your Legacy
            </h2>
            <p className="text-slate-600 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
                Choose the path that speaks to your soul. Our team is ready to welcome you to the FlyTrails family.
            </p>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
                <button 
                    onClick={() => document.getElementById('philosophy')?.scrollIntoView({ behavior: 'smooth' })}
                    className="px-12 py-6 bg-[#222] text-white rounded-2xl font-black uppercase tracking-[0.2em] text-sm hover:bg-[#f29100] transition-all shadow-2xl"
                >
                    Get Started
                </button>
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400">
                    <TrendingUp className="w-4 h-4 text-green-500" />
                    Join 500+ Active Members
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default Membership;
