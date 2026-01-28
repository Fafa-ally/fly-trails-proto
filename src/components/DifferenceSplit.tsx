import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Lock, Unlock } from 'lucide-react';

const DifferenceSplit = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  const experiences = [
    {
      title: "Arrival in Nairobi",
      standard: "https://images.unsplash.com/photo-1543832923-4466d6f7d583?q=80&w=2070",
      member: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070",
      standardDesc: "Queue for 45 minutes at customs. Fight for a taxi. Wonder if this was worth it.",
      memberDesc: "Private greeter meets you at the gate. Fast-track customs. Your driver awaits with your name on a sign."
    },
    {
      title: "Booking the Masai Mara",
      standard: "https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=2068",
      member: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070",
      standardDesc: "Sold out. Or KES 89,000/night. Limited availability. Take it or leave it.",
      memberDesc: "Priority allocation. KES 65,000/night. Confirmed. The best lodge, the best dates, yours first."
    },
    {
      title: "Your Safari Vehicle",
      standard: "https://images.unsplash.com/photo-1533692328691-d637822c2f56?q=80&w=2069",
      member: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?q=80&w=2069",
      standardDesc: "Share a dusty van with 8 strangers. Small windows. No legroom. Someone's talking loudly.",
      memberDesc: "Private Land Cruiser. Pop-up roof. Professional guide who knows your name and preferences."
    },
    {
      title: "Sunset in the Wild",
      standard: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2072",
      member: "https://images.unsplash.com/photo-1547471080-7541e8856987?q=80&w=2008",
      standardDesc: "23 vehicles surround a single lion. Everyone jostling for photos. Magic gone.",
      memberDesc: "You're alone. Just you, your guide, and the golden hour. This moment belongs to you."
    }
  ];

  // The proven working pattern from the footer (Dark dots on Light bg)
  const lightPattern = {
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54.627 0l.83.828-1.415 1.415L51.8 0h2.827zM5.373 0l-.83.828L5.96 2.243 8.2 0H5.374zM48.97 0l3.657 3.657-1.414 1.414L46.143 0h2.828zM11.03 0L7.372 3.657 8.787 5.07 13.857 0H11.03zm32.284 0L49.8 6.485 48.384 7.9l-7.9-7.9h2.83zM16.686 0L10.2 6.485 11.616 7.9l7.9-7.9h-2.83zm20.97 0l9.315 9.314-1.414 1.414L34.828 0h2.83zM22.344 0L13.03 9.314l1.414 1.414L25.172 0h-2.83zM32 0l12.142 12.142-1.414 1.414L30 .828 17.272 13.556 15.858 12.14 28 0zm-6.485 0L13.373 12.142l1.414 1.414L25.515.828 38.244 13.556l1.414-1.414L27.515 0h-2zM0 5.373l12.142 12.143-1.414 1.414L0 8.2V5.374zm0 5.656l9.314 9.314-1.414 1.414L0 13.83v-2.8zm0 5.656L6.485 23.17 5.07 24.586 0 19.515v-2.83zm0 5.657l3.657 3.657-1.414 1.414L0 25.172v-2.83zM0 27.485L.828 28.314 0 29.143v-1.66zM60 5.373L47.858 17.515l1.414 1.414L60 8.2V5.374zm0 5.656L50.686 21.343l1.414 1.414L60 13.83v-2.8zm0 5.656L53.515 23.17l1.414 1.415L60 19.515v-2.83zm0 5.657L56.343 25.999l1.414 1.414L60 25.172v-2.83zM60 27.485l-.828.828.828.83v-1.66zM0 48.97l12.142-12.14 1.414 1.414L0 51.8v-2.83zm0-5.656L9.314 34l1.414 1.414L0 46.143v-2.83zm0-5.657L6.485 31.17 5.07 32.586 0 27.515v2.142zm0-5.656l3.657-3.657L2.243 27.93 0 25.686v2.315zM60 48.97L47.858 36.828l1.414-1.414L60 51.8v-2.83zm0-5.656L50.686 34l1.414-1.414L60 46.143v-2.83zm0-5.657L53.515 31.17l1.414-1.415L60 34.828v-2.142zm0-5.656l-3.657-3.657 1.414-1.414L60 25.686v2.315z' fill='%23222222' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E")`
  };

  return (
    <section className="pt-12 md:pt-16 pb-24 md:pb-32 bg-[#fdf8f0] relative overflow-hidden -mt-20 z-20 rounded-t-[3rem] md:rounded-t-[5rem] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.3)]">
        {/* Pattern Overlay */}
        <div className="absolute inset-0 pointer-events-none" style={lightPattern}></div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-10">
            <span className="text-[#f29100] text-xs font-black uppercase tracking-[0.4em]">The Contrast</span>
            <h2 className="text-5xl md:text-7xl font-serif font-black italic text-[#222] mb-6 tracking-tight mt-4">
              The Same Place.<br/>A Different World.
            </h2>
            <p className="text-xl text-slate-600 font-light max-w-2xl mx-auto">Every moment. Every detail. Every memory. Elevated.</p>
          </div>

          {/* Experience Title */}
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-light text-[#222] tracking-wide">
              {experiences[activeExperience].title}
            </h3>
          </div>

          {/* Split Screen Comparison */}
          <div className="grid md:grid-cols-2 gap-1 bg-white p-1 rounded-3xl overflow-hidden shadow-2xl border border-black/5">
            {/* Standard Experience */}
            <div className="relative group cursor-pointer overflow-hidden rounded-2xl">
              <div className="aspect-[4/3] relative">
                <img 
                  src={experiences[activeExperience].standard}
                  alt="Standard"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[0.5]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
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
                
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <p className="text-white/90 text-lg leading-relaxed font-light">
                    {experiences[activeExperience].memberDesc}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setActiveExperience(prev => (prev - 1 + experiences.length) % experiences.length)}
              className="px-8 py-4 bg-white hover:bg-slate-50 border border-slate-200 rounded-full text-slate-600 font-medium transition-all text-sm tracking-wide flex items-center gap-2 shadow-sm"
            >
              <ArrowLeft className="w-4 h-4" /> Previous moment
            </button>
            <button
              onClick={() => setActiveExperience(prev => (prev + 1) % experiences.length)}
              className="px-8 py-4 bg-[#222] hover:bg-[#f29100] text-white rounded-full font-medium transition-all text-sm tracking-wide flex items-center gap-2 shadow-lg"
            >
              Next moment <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
  );
};

export default DifferenceSplit;