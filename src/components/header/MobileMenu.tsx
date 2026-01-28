import React from 'react';

interface MobileMenuProps {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ mobileOpen, setMobileOpen }) => {
  return (
    <>
      {/* Mobile Menu Toggle (Minimal Floating Button) */}
      <button 
        className="lg:hidden fixed top-6 right-6 z-[120] bg-white text-[#222] px-5 py-3 rounded-full shadow-xl flex items-center gap-3 transition-transform hover:scale-105 active:scale-95 pointer-events-auto border border-slate-100"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.2em]">{mobileOpen ? 'CLOSE' : 'MENU'}</span>
        <div className="flex flex-col gap-[5px]">
            <span className={`w-6 h-[2px] bg-[#222] transition-all ${mobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`}></span>
            <span className={`w-6 h-[2px] bg-[#222] transition-all ${mobileOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-[2px] bg-[#222] transition-all ${mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[115] bg-white transition-transform duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] ${mobileOpen ? 'translate-y-0' : '-translate-y-full'}`}>
         
         {/* Background Decor - Kenya Image (Visible ONLY on Mobile/SM) */}
         <div className="absolute inset-0 z-0 md:hidden">
            <img 
                src="/kenya.jpg" 
                alt="Wilderness" 
                className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/20"></div>
         </div>

         {/* Background Decor - Original Blob & Texture (Visible ONLY on MD+) */}
         <div className="hidden md:block absolute top-0 right-0 w-[80vw] h-[80vw] bg-[#fdf5e6] rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 opacity-60"></div>
         
         {/* New Right Wall Orange Gradient - High Intensity */}
         <div className="hidden md:block absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f29100]/50 via-[#f29100]/15 to-transparent pointer-events-none"></div>
         
         <div className="hidden md:block absolute bottom-0 left-0 w-full h-full opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/natural-paper.png")' }}></div>

         <div className="h-full flex flex-col p-8 pt-32 pb-12 relative z-10 overflow-y-auto">
            
            <div className="flex-1 flex flex-col md:flex-row gap-12 md:gap-24">
                <div className="flex-1">
                    {/* Navigation Header */}
                    <div className="flex items-center gap-4 mb-10">
                        <span className="h-px w-8 bg-[#f29100]"></span>
                        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Navigation</p>
                    </div>

                    {/* Main Nav Links */}
                    <nav className="flex flex-col gap-6">
                        {["HOME", "SAFARIS", "DESTINATIONS", "OUR STORY", "JOURNAL", "MEMBERSHIP"].map((item, i) => (
                        <div key={item} className="group relative overflow-hidden md:py-1">
                            <a 
                                href={item === "HOME" ? "/" : item === "MEMBERSHIP" ? "/membership" : "#"}
                                className={`flex items-baseline gap-4 text-[#222] hover:text-[#f29100] transition-colors transform ${mobileOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
                                style={{ transitionDelay: `${150 + i * 100}ms`, transitionDuration: '0.8s' }}
                                onClick={() => setMobileOpen(false)}
                            >
                                <span className="text-[11px] font-black text-slate-300 group-hover:text-[#f29100] transition-colors">0{i + 1}</span>
                                <span className="text-4xl md:text-5xl font-serif font-black italic tracking-tighter">{item.toLowerCase().replace(/^\w/, (c) => c.toUpperCase())}</span>
                            </a>
                        </div>
                        ))}
                    </nav>
                </div>

                {/* Featured Block - Restored original structure for MD+ */}
                <div className={`hidden md:block flex-1 bg-[#fdf8f0] rounded-2xl p-8 transition-all duration-1000 delay-500 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <img 
                      src="/okavango-delta.jpg" 
                      className="w-full h-48 object-cover rounded-xl mb-6 shadow-lg" 
                      alt="Featured"
                    />
                    <p className="text-[#f29100] text-[10px] font-black uppercase tracking-widest mb-2">Editor's Pick</p>
                    <h4 className="text-2xl font-serif font-black italic text-[#222] mb-4">Okavango Delta Oasis</h4>
                    <p className="text-slate-500 text-sm leading-relaxed mb-6">Discover the untamed beauty of Botswana's waterways in our latest expedition guide.</p>
                    <button className="text-[11px] font-black uppercase tracking-widest border-b-2 border-[#f29100] pb-1 hover:text-[#f29100] transition-colors">Read Story</button>
                </div>
            </div>

            {/* Bottom Section */}
            <div className={`mt-auto flex flex-col gap-10 transition-all duration-1000 delay-700 ${mobileOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
               
               {/* Quick Action - Hidden on MD to restore original look */}
               <button className="md:hidden w-full bg-[#0c3154] text-white py-4 rounded-xl font-black uppercase tracking-[0.2em] text-xs shadow-xl hover:bg-[#f29100] transition-all">
                  Book Your Journey
               </button>

               <div className="w-full h-px bg-slate-100"></div>
               
               <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                   <div className="space-y-1">
                       <p className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400">Reach Out</p>
                       <p className="text-xl font-medium text-[#222]">hello@flytrailstravels.com</p>
                       <p className="text-base font-medium text-slate-400">+254 700 000 000</p>
                   </div>
                   
                   <div className="flex gap-4">
                        {[
                            { name: 'Instagram', path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
                            { name: 'X', path: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" },
                            { name: 'Facebook', path: "M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" }
                        ].map((social) => (
                            <a key={social.name} href="#" className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-[#222] hover:bg-[#f29100] hover:text-white hover:border-[#f29100] transition-all">
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={social.path}/></svg>
                            </a>
                        ))}
                   </div>
               </div>
            </div>
         </div>
      </div>
    </>
  );
};

export default MobileMenu;