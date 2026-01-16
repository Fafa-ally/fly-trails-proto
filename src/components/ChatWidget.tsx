import React, { useState, useEffect, useRef } from 'react';

const ChatWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  
  // New state for auto-collapse
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  // Timers
  const collapseTimerRef = useRef<NodeJS.Timeout | null>(null);
  const expandTimerRef = useRef<NodeJS.Timeout | null>(null);

  const messages = [
    "Custom safari itinerary?",
    "Best time for migration?",
    "Luxury lodge options?",
    "Family safari packages?",
    "Talk to an expert today"
  ];

  // Visibility Logic (Scroll)
  useEffect(() => {
    const handleScroll = () => {
      // Show widget only after scrolling down (approx 0.5 screen heights for quicker appearance)
      if (window.scrollY > window.innerHeight * 0.5) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Check immediately on mount in case user reloads at bottom
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Message Rotation Logic
  useEffect(() => {
    if (!isVisible) return;

    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setCurrentMessageIndex((prev) => (prev + 1) % messages.length);
      }, 1500); // Typing duration
    }, 6000); // Message rotation interval

    return () => clearInterval(interval);
  }, [isVisible]);

  // Auto-collapse/Expand Logic
  useEffect(() => {
    // Clear existing timers when state changes
    if (collapseTimerRef.current) clearTimeout(collapseTimerRef.current);
    if (expandTimerRef.current) clearTimeout(expandTimerRef.current);

    // Only apply shrink/expand logic on desktop/large screens
    const isDesktop = window.matchMedia('(min-width: 640px)').matches;

    if (isVisible && !isHovered && isDesktop) {
      if (!isCollapsed) {
        // If expanded and not hovered, collapse after 30s
        collapseTimerRef.current = setTimeout(() => {
          setIsCollapsed(true);
        }, 30000);
      } else {
        // If collapsed and not hovered, expand again after 30s
        expandTimerRef.current = setTimeout(() => {
          setIsCollapsed(false);
        }, 30000);
      }
    }

    return () => {
        if (collapseTimerRef.current) clearTimeout(collapseTimerRef.current);
        if (expandTimerRef.current) clearTimeout(expandTimerRef.current);
    };
  }, [isVisible, isCollapsed, isHovered]);

  const phoneNumber = "254700000000";
  const prefilledMessage = encodeURIComponent("Hello! I'm interested in booking a bespoke safari experience.");
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${prefilledMessage}`;

  // Determine effective state
  const isExpanded = (isVisible && !isCollapsed) || isHovered;

  return (
    <div 
      className={`fixed bottom-8 left-8 z-[999] transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-40 opacity-0 pointer-events-none'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative block"
      >
        {/* Decorative 'Ticket' Stub effect - Hidden when collapsed or on mobile */}
        <div className={`absolute -top-2 left-4 right-4 h-4 bg-[#f29100] rounded-t-lg opacity-0 transition-all duration-300 -z-10 ${isExpanded ? 'hidden sm:block group-hover:opacity-100 group-hover:-translate-y-1' : ''}`}></div>

        {/* Main Card Container 
            Width transitions between w-14 (collapsed) and full width (expanded)
        */}
        <div 
            className={`relative bg-[#3c4a3e] text-white overflow-hidden rounded-xl shadow-[0_20px_50px_-12px_rgba(60,74,62,0.5)] border border-[#f29100]/30 transition-all duration-500 ease-in-out group-hover:shadow-[0_30px_60px_-12px_rgba(242,145,0,0.3)] group-hover:-translate-y-1 flex
            ${isExpanded ? 'w-14 sm:w-auto sm:min-w-[280px]' : 'w-14 h-9'}
        `}>
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>
          
          <div className="flex items-stretch w-full">
            {/* Left Section: Icon Area - Always visible */}
            <div className="bg-[#2d3830] w-14 flex-shrink-0 flex items-center justify-center border-r border-white/10 relative overflow-hidden h-14 sm:h-auto">
               {/* Vertical Text - Only visible when expanded on desktop */}
               <div className={`absolute inset-0 flex items-center justify-center text-[#f29100]/20 font-black text-4xl transform -rotate-90 pointer-events-none select-none transition-opacity duration-300 ${isExpanded ? 'hidden sm:flex' : 'hidden'}`}>FLY</div>
               
               <svg className="w-6 h-6 text-[#f29100] z-10 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12" fill="currentColor" viewBox="0 0 24 24">
                 <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
               </svg>
            </div>

            {/* Right Section: Content - Only visible when expanded on desktop 
                Using overflow-hidden and opacity transition for smooth collapse
            */}
            <div className={`flex-1 transition-all duration-500 ease-in-out ${isExpanded ? 'opacity-100 max-w-[300px] p-4 hidden sm:block' : 'opacity-0 max-w-0 p-0 hidden'}`}>
              <div className="flex flex-col gap-1 min-w-[180px]">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f29100]">Concierge</span>
                
                <div className="h-6 overflow-hidden relative">
                   {isTyping ? (
                     <div className="flex items-center gap-1 h-full">
                       <span className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce"></span>
                       <span className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce delay-100"></span>
                       <span className="w-1.5 h-1.5 bg-white/70 rounded-full animate-bounce delay-200"></span>
                     </div>
                   ) : (
                     <p className="text-sm font-medium text-white/90 whitespace-nowrap animate-fadeIn">
                       {messages[currentMessageIndex]}
                     </p>
                   )}
                </div>
              </div>
            </div>
            
            {/* Arrow Action - Only visible when expanded on desktop */}
            <div className={`w-10 bg-[#f29100] items-center justify-center transform transition-all duration-300 absolute right-0 top-0 bottom-0 ${isExpanded ? 'hidden sm:flex translate-x-full group-hover:translate-x-0' : 'hidden translate-x-full'}`}>
               <svg className="w-5 h-5 text-[#3c4a3e]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ChatWidget;