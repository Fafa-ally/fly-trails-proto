import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ChatWidget from '../components/ChatWidget';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-[#f29100] selection:text-white">
      <Header />
      <main className="flex-grow relative">
        <Outlet />
      </main>
      <div className="relative z-[60]">
        <Footer />
      </div>
      <ChatWidget />
    </div>
  );
};

export default MainLayout;