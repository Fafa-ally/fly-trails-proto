import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Check, ArrowLeft, Star, Shield, Gift, Calendar, 
  Plane, Globe, ChevronRight, MapPin, Sparkles, Crown, Zap, Users, Compass 
} from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const tierData: Record<string, any> = {
  "explorer": {
    name: "Explorer",
    price: "2,000",
    originalPrice: "3,000",
    color: "bg-blue-600",
    accentText: "text-blue-900",
    cardImage: "/membership/explorer.jpg",
    scenicImage: "https://images.unsplash.com/photo-1534759846116-5799c33ce22a?q=80&w=2070",
    hero: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068",
    tagline: "Ignite your wanderlust.",
    description: "The perfect entry point for the modern traveler. The Explorer tier is designed to give you a taste of the extraordinary, offering essential perks that enhance your journeys without breaking the bank.",
    benefits: [
      { text: "Early Access", sub: "Book peak dates before the crowd.", icon: <Calendar className="w-5 h-5" /> },
      { text: "5% Off Day Trips", sub: "Spontaneous adventures for less.", icon: <MapPin className="w-5 h-5" /> },
      { text: "Travel Insights", sub: "Curated guides to your inbox.", icon: <Globe className="w-5 h-5" /> },
      { text: "Community", sub: "Connect with fellow explorers.", icon: <Users className="w-5 h-5" /> },
    ],
    lifestyleImages: [
      "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072",
      "https://images.unsplash.com/photo-1547471080-7541e8856987?q=80&w=2008",
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?q=80&w=2072"
    ],
    testimonial: {
      quote: "I've seen more of Kenya in one year than I did in the previous ten.",
      author: "David M.",
      role: "Explorer Member"
    }
  },
  "adventure-elite": {
    name: "Adventure Elite",
    price: "5,000",
    originalPrice: "7,000",
    color: "bg-orange-600",
    accentText: "text-orange-900",
    cardImage: "/membership/adventure-elite.jpg",
    scenicImage: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2069",
    hero: "https://images.unsplash.com/photo-1547234935-80c7145ec969?q=80&w=2074",
    tagline: "For those who travel deeper.",
    description: "Step up your game with Adventure Elite. Crafted for the frequent traveler who values comfort, priority, and deeper connections with the destinations they visit.",
    benefits: [
      { text: "Priority Booking", sub: "48-hour head start on new launches.", icon: <Star className="w-5 h-5" /> },
      { text: "10% Off Everything", sub: "Significant savings, all year round.", icon: <Gift className="w-5 h-5" /> },
      { text: "Airport Transfers", sub: "Complimentary pickup in major hubs.", icon: <Plane className="w-5 h-5" /> },
      { text: "Hidden Gems", sub: "Exclusive off-the-beaten-path tours.", icon: <Compass className="w-5 h-5" /> },
    ],
    lifestyleImages: [
      "https://images.unsplash.com/photo-1519999482648-25049ddd37b1?q=80&w=2026", 
      "https://images.unsplash.com/photo-1543832923-4466d6f7d583?q=80&w=2070",
      "https://images.unsplash.com/photo-1504198458649-3128b932f49e?q=80&w=2000"
    ],
    testimonial: {
      quote: "The priority booking alone is worth it. I got the last slot for the Mara migration.",
      author: "Sarah K.",
      role: "Adventure Elite Member"
    }
  },
  "prestige-platinum": {
    name: "Prestige Platinum",
    price: "19,000",
    originalPrice: "24,500",
    color: "bg-amber-600",
    accentText: "text-amber-900",
    cardImage: "/membership/prestige-platinum.jpg",
    scenicImage: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070",
    hero: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?q=80&w=2065",
    tagline: "The gold standard of travel.",
    description: "Experience the world without compromise. Prestige Platinum is our most exclusive offering, providing white-glove service, limitless possibilities, and access to the inaccessible.",
    benefits: [
      { text: "15% Off Bookings", sub: "Our highest tier of savings.", icon: <Crown className="w-5 h-5" /> },
      { text: "Private Concierge", sub: "Your personal travel assistant 24/7.", icon: <Shield className="w-5 h-5" /> },
      { text: "Lounge Access", sub: "Relax in luxury before you fly.", icon: <Check className="w-5 h-5" /> },
      { text: "Bespoke Planning", sub: "Tailor-made trips just for you.", icon: <Sparkles className="w-5 h-5" /> },
      { text: "Gala Invitations", sub: "Network with the elite.", icon: <Star className="w-5 h-5" /> },
      { text: "Instant Status", sub: "Skip the line, everywhere.", icon: <Zap className="w-5 h-5" /> },
    ],
    lifestyleImages: [
      "https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=2070",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070"
    ],
    testimonial: {
      quote: "I don't just travel anymore. I arrive. This membership changed my life.",
      author: "James W.",
      role: "Platinum Member"
    }
  }
};

const MembershipDetails: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  useScrollAnimation();
  const [showNav, setShowNav] = useState(false);

  const tier = id ? tierData[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
        if (window.scrollY > 100) {
            setShowNav(true);
        } else {
            setShowNav(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  if (!tier) return null;

  return (
    <div className="bg-[#fdf8f0] min-h-screen font-sans selection:bg-[#f29100] selection:text-white">
      
      {/* 1. EDITORIAL HERO */}
      <section className="relative h-[85vh] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={tier.hero} 
            alt={tier.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#fdf8f0] via-transparent to-transparent"></div>
        </div>
        
        {/* Navigation - Top Right on Desktop, Top Left (Scroll Triggered) on Mobile */}
        <button 
            onClick={() => navigate('/membership')}
            className={`
                fixed z-50 group flex items-center gap-3 bg-white/90 backdrop-blur-md px-6 py-3 rounded-full shadow-lg hover:bg-white transition-all border border-white/20
                right-8 top-28 hidden md:flex 
            `}
        >
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#222]">All Tiers</span>
            <ArrowLeft className="w-4 h-4 text-[#222] rotate-180" />
        </button>

        {/* Mobile Navigation - Scroll Triggered */}
        <button 
            onClick={() => navigate('/membership')}
            className={`
                fixed top-6 left-6 z-50 group flex items-center gap-2 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg hover:bg-white transition-all duration-500 border border-white/20 md:hidden
                ${showNav ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'}
            `}
        >
            <ArrowLeft className="w-4 h-4 text-[#222]" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#222]">Tiers</span>
        </button>

        {/* Hero Content - Bottom Left */}
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-20 pb-32">
            <div className="max-w-7xl mx-auto">
                <p className="text-white text-xs font-black uppercase tracking-[0.4em] mb-4 drop-shadow-md tracking-widest">FlyTrails Member Collective</p>
                <h1 className="text-5xl md:text-[10rem] mb-5 font-serif font-black italic text-white leading-[0.8] tracking-tighter drop-shadow-2xl mix-blend-overlay opacity-90">
                    {tier.name}
                </h1>
            </div>
        </div>
      </section>

      {/* 2. THE NARRATIVE - Creative Overlap Layout */}
      <section className="relative z-10 px-4 md:px-12 -mt-24">
        <div className="max-w-[1600px] mx-auto bg-white rounded-t-[3rem] md:rounded-t-[4rem] shadow-2xl overflow-hidden">
            <div className="flex flex-col lg:grid lg:grid-cols-2 min-h-[700px]">
                
                {/* Left: Text Content */}
                <div className="p-10 md:p-24 flex flex-col justify-center border-r border-[#fdf8f0] order-2 lg:order-1 relative bg-white z-20 -mt-12 lg:mt-0 rounded-t-[3rem] lg:rounded-none">
                    <span className={`text-[#f29100] text-xs font-black uppercase tracking-[0.4em] mb-8 block`}>
                        {tier.tagline}
                    </span>
                    <h2 className="text-3xl md:text-6xl font-serif font-black italic text-[#222] mb-8 leading-[0.9]">
                        Redefining how <br/> you see the world.
                    </h2>
                    <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-light mb-10 max-w-xl">
                        {tier.description}
                    </p>
                    <div className="flex items-center gap-4">
                        <div className="h-px w-16 bg-[#222]"></div>
                        <p className="text-xs font-black uppercase tracking-widest text-[#222]">Exclusively Yours</p>
                    </div>
                </div>

                {/* Right: Visual Feature */}
                <div className="relative h-[400px] lg:h-auto overflow-hidden order-1 lg:order-2 group">
                    <img 
                        src={tier.scenicImage} 
                        alt="Scenic Experience" 
                        className="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-[10s] hover:scale-110" 
                    />
                    <div className="absolute inset-0 bg-black/10"></div>
                    
                    {/* Floating Quote Card */}
                    <div className="absolute inset-0 flex items-center justify-center p-6">
                        <div className="bg-white/90 backdrop-blur-md p-8 md:p-12 rounded-[2rem] text-center max-w-xs shadow-2xl transform translate-y-4 lg:translate-y-0">
                            <p className="text-[#222] font-serif italic text-lg md:text-2xl mb-4 leading-tight">"The only way to see the world is through the FlyTrails lens."</p>
                            <div className="flex justify-center gap-1">
                                {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 text-[#f29100] fill-current" />)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* 2.5 LIFESTYLE IMMERSION */}
      <section className="py-24 px-8 max-w-[1800px] mx-auto">
        <div className="grid grid-cols-12 gap-6 md:gap-8">
          {/* Large Left Image */}
          <div className="col-span-12 md:col-span-7 row-span-2">
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl group shadow-2xl">
              <img 
                src={tier.lifestyleImages[0]}
                alt="Lifestyle"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-12 left-12">
                <p className="text-white text-3xl md:text-4xl font-serif font-black italic leading-tight max-w-md">
                  Every journey tells a story. Make yours unforgettable.
                </p>
              </div>
            </div>
          </div>

          {/* Top Right */}
          <div className="col-span-12 md:col-span-5">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl group shadow-xl">
              <img 
                src={tier.lifestyleImages[1]}
                alt="Experience"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
          </div>

          {/* Bottom Right */}
          <div className="col-span-12 md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl group shadow-xl">
              <img 
                src={tier.lifestyleImages[2]}
                alt="Moment"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. PRIVILEGES STRIP */}
      <section id="details" className="bg-white py-24 md:py-32 border-t border-[#fdf8f0]">
        <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                <h3 className="text-3xl md:text-6xl font-serif font-black italic text-[#222]">
                    Curated Privileges
                </h3>
                <p className="text-slate-400 max-w-sm text-right">
                    Every detail considered. Every request anticipated. Welcome to a life of seamless travel.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
                {tier.benefits.map((benefit: any, idx: number) => (
                    <div key={idx} className="group p-6 rounded-2xl hover:bg-[#fdf8f0] transition-colors">
                        <div className="flex items-center justify-between mb-4 pb-4 border-b border-slate-100 group-hover:border-[#f29100] transition-colors">
                            <span className="text-xs font-black text-slate-300 group-hover:text-[#f29100] transition-colors">0{idx + 1}</span>
                            <div className="text-slate-300 group-hover:text-[#222] transition-colors">
                                {benefit.icon}
                            </div>
                        </div>
                        <h4 className="text-lg font-bold text-[#222] mb-2">{benefit.text}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">
                            {benefit.sub}
                        </p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* 3.5 TESTIMONIAL */}
      <section className="py-32 bg-[#222]">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div className="mb-8 flex justify-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[#f29100] fill-[#f29100]" />
            ))}
          </div>
          
          <blockquote className="text-3xl md:text-5xl font-serif font-black italic text-white mb-8 leading-tight">
            "{tier.testimonial.quote}"
          </blockquote>
          
          <div className="space-y-1">
            <p className="text-white/70 font-bold tracking-wide">{tier.testimonial.author}</p>
            <p className="text-white/40 text-sm uppercase tracking-widest">{tier.testimonial.role}</p>
          </div>
        </div>
      </section>

      {/* 4. THE INVESTMENT */}
      <section className="py-24 bg-[#fdf8f0]">
        <div className="container mx-auto px-4 max-w-6xl">
            <div className="bg-[#111] rounded-[3rem] p-8 md:p-20 flex flex-col lg:flex-row items-center gap-12 lg:gap-20 relative overflow-hidden shadow-2xl">
                
                {/* Left: The Card Visual */}
                <div className="flex-1 w-full flex justify-center perspective-1000 order-2 lg:order-1">
                    <div className="relative w-full max-w-md aspect-[1.586/1] rounded-[2rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] transform lg:rotate-y-12 lg:hover:rotate-y-0 transition-transform duration-700 ease-out group">
                        <div className={`absolute inset-0 bg-gradient-to-br ${tier.color === 'bg-blue-600' ? 'from-blue-500' : tier.color === 'bg-orange-600' ? 'from-orange-500' : 'from-amber-500'} to-transparent rounded-[2rem] opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`}></div>
                        <img 
                            src={tier.cardImage} 
                            alt={`${tier.name} Card`} 
                            className="relative w-full h-full object-cover rounded-[2rem] border border-white/10 z-10"
                        />
                        <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-black/40 to-transparent z-20 pointer-events-none"></div>
                        <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-30 text-white drop-shadow-md">
                            <p className="text-[10px] uppercase tracking-[0.2em] opacity-80 mb-1">Status Level</p>
                            <p className="font-serif italic text-lg tracking-widest">{tier.name}</p>
                        </div>
                    </div>
                </div>

                {/* Right: Pricing & CTA */}
                <div className="flex-1 text-center lg:text-left relative z-10 order-1 lg:order-2">
                    <p className="text-white/50 text-xs font-black uppercase tracking-[0.4em] mb-6 md:mb-8">Your Journey Awaits</p>
                    
                    <div className="flex justify-center lg:justify-start items-baseline gap-2 mb-6">
                        <span className="text-2xl font-bold text-[#f29100]">KES</span>
                        <span className="text-6xl md:text-9xl font-serif font-black italic text-white tracking-tighter leading-none">
                            {tier.price}
                        </span>
                    </div>
                    
                    <p className="text-white/40 text-base md:text-lg mb-10">Billed Annually • All-Inclusive Access</p>

                    <button 
                        onClick={() => navigate(`/checkout/${id}`)}
                        className="w-full lg:w-auto px-12 py-5 bg-white text-[#222] rounded-full font-black uppercase tracking-[0.2em] text-xs hover:bg-[#f29100] hover:text-white hover:scale-105 transition-all shadow-xl"
                    >
                        Join {tier.name}
                    </button>
                    
                    <p className="mt-8 text-[10px] text-white/30 uppercase tracking-widest">
                        Instant Member ID issuance upon confirmation
                    </p>
                </div>
            </div>
        </div>
      </section>

    </div>
  );
};

export default MembershipDetails;