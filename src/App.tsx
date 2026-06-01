import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import { AboutPage } from './components/AboutPage';
import { motion, useScroll, useSpring, AnimatePresence } from 'motion/react';
import { Menu } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

function SplashScreen({ onComplete }: { onComplete: () => void }) {
  useEffect(() => {
    const timer = setTimeout(onComplete, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center pointer-events-none"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center gap-6"
      >
        {/* Uploaded logo goes here */}
        <div className="w-24 h-24 relative overflow-hidden flex items-center justify-center">
          <img 
            src="/logo.jpeg" 
            alt="Ecclesiabranx Logo" 
            className="w-full h-full object-contain mix-blend-multiply"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <div className="hidden absolute inset-0 bg-emerald-950 flex items-center justify-center text-white font-bold text-2xl tracking-tighter">
            eC
          </div>
        </div>
        
        <div className="overflow-hidden">
          <motion.div 
            initial={{ y: "100%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-1"
          >
            <span className="text-2xl font-bold tracking-tighter uppercase text-emerald-950">
              Ecclesia<span className="text-brand-blue">branx</span>
            </span>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    if (location.pathname !== '/') return; // Let default browser action handle going to /#id from another route
    e.preventDefault();
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-6 py-4 md:px-8 border-b border-emerald-950/10 bg-brand-dark/80 backdrop-blur-md flex justify-between items-center pointer-events-none">
      <Link to="/" className="flex items-center gap-3 pointer-events-auto cursor-hover group">
        <div className="w-10 h-10 rounded-full overflow-hidden flex items-center justify-center">
          <img 
            src="/logo.jpeg" 
            alt="eC" 
            className="w-full h-full object-contain mix-blend-multiply"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.classList.remove('hidden');
            }} 
          />
          <div className="hidden w-full h-full bg-emerald-950 rounded-full flex items-center justify-center font-bold text-xs text-white">eC</div>
        </div>
        <span className="text-xl font-bold tracking-tighter uppercase text-emerald-950 group-hover:text-brand-blue transition-colors duration-300">
          Ecclesia<span className="text-brand-blue group-hover:text-emerald-950 transition-colors duration-300">branx</span>
        </span>
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-8 text-[10px] uppercase tracking-[0.2em] font-medium text-emerald-950/50 pointer-events-auto items-center">
        <Link to="/about" className="hover:text-emerald-950 transition-colors cursor-hover">ABOUT</Link>
        {['Services', 'Work', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`/#${item.toLowerCase()}`}
            onClick={(e) => handleScroll(e, item.toLowerCase())}
            className="hover:text-emerald-950 transition-colors cursor-hover"
          >
            {item.toUpperCase()}
          </a>
        ))}
      </div>

      {/* CTA Button / Mobile Toggle */}
      <div className="flex items-center gap-4 pointer-events-auto">
        <a href="/#contact" onClick={(e) => handleScroll(e, 'contact')} className="hidden md:block px-5 py-2 border border-emerald-950/20 rounded-full text-[10px] uppercase tracking-widest text-emerald-950 hover:bg-emerald-950 hover:text-white transition-all cursor-hover cursor-none">
          Start Project
        </a>
        <button 
          className="md:hidden cursor-hover p-2 text-emerald-950"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-white border-b border-emerald-950/10 p-6 flex flex-col gap-4 shadow-xl pointer-events-auto md:hidden"
          >
            <Link 
               to="/about" 
               onClick={() => setIsOpen(false)}
               className="text-lg font-medium text-emerald-950 hover:text-brand-blue transition-colors"
            >
              ABOUT
            </Link>
            {['Services', 'Work', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`/#${item.toLowerCase()}`}
                onClick={(e) => handleScroll(e, item.toLowerCase())}
                className="text-lg font-medium text-emerald-950 hover:text-brand-blue transition-colors"
              >
                {item.toUpperCase()}
              </a>
            ))}
            <a 
              href="/#contact"
              onClick={(e) => handleScroll(e, 'contact')}
              className="mt-4 px-5 py-3 text-center border border-emerald-950/20 rounded-full text-[10px] uppercase tracking-widest text-emerald-950 hover:bg-emerald-950 hover:text-white transition-all"
            >
              Start Project
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function MainLayout() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const location = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <CustomCursor />
      
      {/* Top Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-blue to-brand-purple origin-left z-[100]"
        style={{ scaleX }}
      />

      <Navigation />

      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Services />
              <Portfolio />
              <WhyChooseUs />
              <Contact />
            </>
          } />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
}

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-brand-dark text-emerald-950 font-sans selection:bg-brand-purple/30 overflow-x-hidden w-full max-w-[100vw]">
        <AnimatePresence>
          {showSplash && <SplashScreen onComplete={() => setShowSplash(false)} />}
        </AnimatePresence>
        
        <MainLayout />
      </div>
    </BrowserRouter>
  );
}
