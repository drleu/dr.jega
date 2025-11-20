import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { CommonConditions } from './components/CommonConditions';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { AIChat } from './components/AIChat';
import { WhatsAppButton } from './components/WhatsAppButton';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { MyPractice } from './components/MyPractice';
import { PageView } from './types';

function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar onNavigate={handleNavigate} />
      
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero onNavigate={handleNavigate} />
            <About />
            <CommonConditions />
            <Services />
          </>
        ) : currentPage === 'practice' ? (
          <MyPractice />
        ) : (
          <PrivacyPolicy />
        )}
      </main>
      
      <Contact onNavigate={handleNavigate} />
      <WhatsAppButton />
      <AIChat />
    </div>
  );
}

export default App;