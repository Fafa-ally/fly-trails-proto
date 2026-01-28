import React, { useState } from 'react';
import DesktopNav from './header/DesktopNav';
import MobileMenu from './header/MobileMenu';

const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopNavOpen, setDesktopNavOpen] = useState(true);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (item: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 300); // 300ms delay to allow moving to submenu
  };

  return (
    <>
      <header className="absolute top-0 left-0 right-0 z-[100] px-8 lg:py-5 md:px-20 pointer-events-none">
        <div className="max-w-[1600px] mx-auto flex items-center justify-between pointer-events-none">
          <div className="flex items-center gap-3 pointer-events-auto">
            <div className="flex flex-col items-center">
               <img src="/flytrails-logo.png" alt="Fly Trails Logo" className="w-48 h-24 object-contain drop-shadow-lg" />
            </div>

          </div>
        </div>
      </header>

      <DesktopNav 
        desktopNavOpen={desktopNavOpen} 
        setDesktopNavOpen={setDesktopNavOpen} 
        hoveredItem={hoveredItem}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
        timeoutRef={timeoutRef}
      />

      <MobileMenu mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
    </>
  );
};

export default Header;