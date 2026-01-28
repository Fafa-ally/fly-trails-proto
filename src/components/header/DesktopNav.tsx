import React, { useRef } from 'react';

// Menu items data structure can be imported if shared or kept local if specific to this component
const menuItems = {
  "SAFARIS": {
    featured: {
      title: "The Great Migration",
      image: "/great-migration.jpg",
      desc: "Witness the rhythm of nature. Bespoke expeditions."
    },
    links: [
      "Masai Mara, Kenya",
      "Serengeti, Tanzania",
      "Amboseli National Park",
      "Ngorongoro Crater",
      "Samburu Reserve",
      "Kruger National Park",
      "Okavango Delta"
    ]
  },
  "DESTINATIONS": {
    featured: {
      title: "Beyond Boundaries",
      image: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?q=80&w=2070",
      desc: "From Kilimanjaro to Zanzibar's white sands."
    },
    links: [
      "Kenya",
      "Tanzania",
      "Uganda",
      "Rwanda",
      "South Africa",
      "Botswana",
      "Egypt",
      "Namibia"
    ]
  },
  "OUR STORY": {
    featured: {
      title: "Heritage & Passion",
      image: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2069",
      desc: "Born from a love for the land and preservation."
    },
    links: [
      "Our Heritage",
      "Sustainability",
      "The Team",
      "Conservation Efforts",
      "Partner Lodges",
      "Careers"
    ]
  },
  "MEMBERSHIP": {
    featured: {
      title: "The Travelers' Circle",
      image: "/membership/prestige-platinum.jpg",
      desc: "Unlock a world of exclusive privileges and curated experiences."
    },
    links: [
      "Explorer Tier",
      "Adventure Elite Tier",
      "Prestige Platinum",
      "Member Benefits",
      "Join the Circle",
      "Member Stories"
    ]
  }
};

interface DesktopNavProps {
  desktopNavOpen: boolean;
  setDesktopNavOpen: (open: boolean) => void;
  hoveredItem: string | null;
  handleMouseEnter: (item: string) => void;
  handleMouseLeave: () => void;
  timeoutRef: React.MutableRefObject<NodeJS.Timeout | null>;
}

const DesktopNav: React.FC<DesktopNavProps> = ({ 
  desktopNavOpen, 
  setDesktopNavOpen, 
  hoveredItem, 
  handleMouseEnter, 
  handleMouseLeave,
  timeoutRef 
}) => {
  return (
    <>
        {/* Desktop Sticky Nav Container */}
        <div 
            className={`hidden lg:block fixed top-0 right-0 h-20 w-[65%] transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] z-[150] ${desktopNavOpen ? 'translate-x-0 opacity-100 pointer-events-auto' : 'translate-x-[20%] opacity-0 pointer-events-none'}`}
        >
            {/* SVG Background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none filter drop-shadow-sm">
              <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
                <path d="M0 0 C 15 0, 20 100, 35 100 L 95 100 Q 100 100 100 50 L 100 0 Z" fill="#ffffff" />
              </svg>
            </div>

            {/* Links */}
            <nav className="relative h-full flex items-center justify-end pr-24 gap-6 md:gap-10 pointer-events-none">
              <div className="relative group pointer-events-auto">
                  <a href="/" className="text-[#3c4a3e] text-[11px] md:text-[13px] font-bold uppercase tracking-widest hover:text-[#f29100] transition-colors py-6">
                  HOME
                  </a>
                  <span className="absolute -bottom-1 left-0 w-full h-[2px] bg-[#f29100] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"></span>
              </div>

              {Object.keys(menuItems).map((item) => (
                <div key={item} className="relative group pointer-events-auto" 
                     onMouseEnter={() => handleMouseEnter(item)}
                     onMouseLeave={handleMouseLeave}>
                    <a href={item === "MEMBERSHIP" ? "/membership" : "#"} className="text-[#3c4a3e] text-[11px] md:text-[13px] font-bold uppercase tracking-widest hover:text-[#f29100] transition-colors py-6">
                    {item}
                    </a>
                    <span className={`absolute -bottom-1 left-0 w-full h-[2px] bg-[#f29100] transition-transform duration-300 origin-left ${hoveredItem === item ? 'scale-x-100' : 'scale-x-0'}`}></span>
                </div>
              ))}
            </nav>
            
            {/* Close Button (X) - Absolute Position */}
            <button 
              onClick={() => setDesktopNavOpen(false)}
              className="absolute right-8 top-1/2 -translate-y-1/2 p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-[#e11d48] pointer-events-auto cursor-pointer"
              title="Hide Menu"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
        </div>

        {/* Mega Menu Dropdown */}
        <div 
            className={`hidden lg:block fixed top-28 right-3 w-[55vw] bg-white/98 backdrop-blur-2xl rounded-[2.5rem] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.87,0,0.13,1)] z-[90] ${hoveredItem && desktopNavOpen ? 'opacity-100 translate-y-0 visible pointer-events-auto shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-white/50 ring-1 ring-black/5' : 'opacity-0 translate-y-4 invisible pointer-events-none border-transparent ring-transparent shadow-none'}`}
            onMouseEnter={() => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }}
            onMouseLeave={handleMouseLeave}
        >
            {hoveredItem && menuItems[hoveredItem as keyof typeof menuItems] && (
                <div className="flex w-full min-h-[400px]">
                    
                    {/* Left Column: Navigation & Categories */}
                    <div className="flex-[3] p-12 bg-gradient-to-br from-white to-slate-50/50">
                        <div className="flex items-center gap-4 mb-8 pb-4 border-b border-slate-100">
                            <span className="text-[#f29100] text-[10px] font-black uppercase tracking-[0.3em]">{hoveredItem} Collections</span>
                            <span className="h-px flex-1 bg-slate-100"></span>
                        </div>
                        
                        <ul className="grid grid-cols-2 gap-x-12 gap-y-3">
                            {menuItems[hoveredItem as keyof typeof menuItems].links.map((link, idx) => {
                                let href = "#";
                                if (hoveredItem === "MEMBERSHIP") {
                                    if (link === "Explorer Tier") href = "/membership/explorer";
                                    else if (link === "Adventure Elite Tier") href = "/membership/adventure-elite";
                                    else if (link === "Prestige Platinum") href = "/membership/prestige-platinum";
                                    else href = "/membership";
                                }
                                return (
                                <li key={idx} className="group/item">
                                    <a href={href} className="flex items-center justify-between py-2 group-hover/item:translate-x-2 transition-transform duration-300">
                                        <span className="text-[#4a5848] font-bold text-sm group-hover/item:text-[#f29100] transition-colors">{link}</span>
                                        <svg className="w-4 h-4 text-[#f29100] opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </a>
                                </li>
                                );
                            })}
                        </ul>

                        <div className="mt-auto pt-10">
                            <a href="#" className="inline-block text-[11px] font-black uppercase tracking-widest text-[#3c4a3e] border-b-2 border-slate-200 pb-1 hover:border-[#f29100] hover:text-[#f29100] transition-colors">
                                Browse All {hoveredItem.toLowerCase().replace(/^\w/, c => c.toUpperCase())}
                            </a>
                        </div>
                    </div>

                    {/* Right Column: Editorial Featured Card */}
                    <div className="flex-[2] relative group/card cursor-pointer overflow-hidden">
                        <div className="absolute inset-0 bg-black/20 group-hover/card:bg-black/10 transition-colors z-10"></div>
                        <img 
                            src={menuItems[hoveredItem as keyof typeof menuItems].featured.image} 
                            alt={menuItems[hoveredItem as keyof typeof menuItems].featured.title} 
                            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover/card:scale-105"
                        />
                        
                        {/* Glass Content Overlay */}
                        <div className="absolute inset-x-6 bottom-6 p-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl z-20 shadow-lg transform translate-y-2 group-hover/card:translate-y-0 transition-transform duration-500">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="w-2 h-2 rounded-full bg-[#f29100]"></span>
                                <span className="text-white/80 text-[9px] font-black uppercase tracking-widest">Editor's Pick</span>
                            </div>
                            <h4 className="text-white text-2xl font-serif font-black italic mb-2 leading-tight">{menuItems[hoveredItem as keyof typeof menuItems].featured.title}</h4>
                            <p className="text-white/80 text-xs font-medium leading-relaxed line-clamp-2">{menuItems[hoveredItem as keyof typeof menuItems].featured.desc}</p>
                        </div>
                    </div>

                </div>
            )}
        </div>

        {/* Desktop Re-Open Button (Visible when closed) */}
        <button 
            className={`hidden lg:flex fixed top-8 right-12 z-[200] bg-white text-[#222] px-6 py-3 rounded-full shadow-xl items-center gap-3 transition-all duration-500 pointer-events-auto border border-slate-100 group ${!desktopNavOpen ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0 pointer-events-none hidden'}`}
            onClick={() => setDesktopNavOpen(true)}
        >
             <span className="text-[10px] font-black uppercase tracking-[0.2em] group-hover:text-[#f29100] transition-colors">MENU</span>
             <div className="flex flex-col gap-[5px]">
                <span className="w-6 h-[2px] bg-[#222]"></span>
                <span className="w-6 h-[2px] bg-[#222]"></span>
             </div>
        </button>
    </>
  );
};

export default DesktopNav;