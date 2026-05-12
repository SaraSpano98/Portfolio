import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import TechStackPopover from './TechStackPopover';

const Header = () => {
  const location = useLocation();
  const [isTechOpen, setIsTechOpen] = useState(false);

  
  const navLinks = [
    { name: 'About', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contacts', path: '/contacts' }
  ];

  return (
    <>
      {/* OVERLAY SFOCATO */}
      <AnimatePresence>
        {isTechOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-white/30 backdrop-blur-md z-[80] pointer-events-none"
          />
        )}
      </AnimatePresence>

      <header className="fixed top-0 left-0 w-full h-[100px] flex items-center justify-between z-[100] px-10 bg-white/80 backdrop-blur-sm shadow-sm">
        
        {/* 1. LOGO (A SINISTRA) */}
        <div className="relative z-[110]">
          <Link to="/" className="flex items-center">
            <img src="/images/logo-portfolio.png" alt="Logo" className="h-[75px] w-auto object-contain" />
          </Link>
        </div>

        {/* 2. NAV LINKS (CENTRATI) */}
        <nav className="absolute left-1/2 -translate-x-1/2 flex gap-10 items-center">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-[15px] font-semibold transition-all duration-300 pb-[6px] 
                  ${isActive ? 'text-pink-500 border-b-[3px] border-pink-500' : 'text-black hover:text-pink-500'}`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* 3. TECH STACK BADGE (A DESTRA - Allineato come il logo) */}
        <div 
          className="relative z-[110]"
          onMouseEnter={() => setIsTechOpen(true)}
          onMouseLeave={() => setIsTechOpen(false)}
        >
          <div className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border border-indigo-100 rounded-full cursor-pointer hover:shadow-md transition-all duration-300">
            <span className="text-blue-500 text-sm">✨</span>
            <span className="text-[12px] font-black uppercase tracking-widest text-slate-700">Tech Stack</span>
          </div>

          <AnimatePresence>
            {isTechOpen && (
              <div className="absolute top-full right-0 mt-2 pt-4">
                 <TechStackPopover />
              </div>
            )}
          </AnimatePresence>
        </div>

      </header>
    </>
  );
};

export default Header;


