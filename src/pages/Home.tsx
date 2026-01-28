import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import BentoTours from '../components/BentoTours';
import Experience from '../components/Experience';
import ScrollShowcase from '../components/ScrollShowcase';
import Destinations from '../components/Destinations';
import TravelStories from '../components/TravelStories';
import Reviews from '../components/Reviews';
import Newsletter from '../components/Newsletter';
import FollowCarousel from '../components/FollowCarousel';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Home: React.FC = () => {
  useScrollAnimation();

  useEffect(() => {
    // Parallax Effect
    const handleScroll = () => {
      const scrolled = window.scrollY;
      document.querySelectorAll('.parallax-layer').forEach((el) => {
        const speed = (el as HTMLElement).getAttribute('data-speed') || '0.5';
        const yPos = -(scrolled * parseFloat(speed));
        (el as HTMLElement).style.transform = `translateY(${yPos}px)`;
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div className="relative z-[50]"><Hero /></div>
      <div className="relative z-[0]"><OurStory /></div>
      <div className="relative z-[10]"><BentoTours /></div>
      <div className="relative z-[15]"><Experience /></div>
      <div className="relative z-[20]"><ScrollShowcase /></div>
      <div className="relative z-[25]"><Destinations /></div>
      <div className="relative z-[30]"><TravelStories /></div>
      <div className="relative z-[40]"><Reviews /></div>
      <div className="relative z-[50]"><Newsletter /></div>
      <div className="relative z-[60]"><FollowCarousel /></div>
    </>
  );
};

export default Home;