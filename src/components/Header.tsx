import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

import TechStackPopover from './TechStackPopover';

const Header = () => {
  const location = useLocation();
  const [isTechOpen, setIsTechOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Chi sono', path: '/about' },
    { name: 'Progetti', path: '/progetti' },
    { name: 'Esperienze', path: '/esperienze' },
    { name: 'Contatti', path: '/contatti' }
  ];

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      {/* OVERLAY SFOCATO (TECH STACK POPOVER) */}
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

      <header className="fixed top-0 left-0 w-full h-[70px] sm:h-[85px] lg:h-[100px] flex items-center justify-between z-[100] px-6 sm:px-12 md:px-16 lg:px-24 bg-white/80 backdrop-blur-sm shadow-sm">

        {/* 1. LOGO (A SINISTRA) */}
        <div className="relative z-[110]">
          <Link to="/" className="flex items-center" onClick={closeMobileMenu}>
            <img src="/images/logo-portfolio.png" alt="Logo" className="h-[45px] sm:h-[58px] lg:h-[75px] w-auto object-contain" />
          </Link>
        </div>

        {/* 2. NAV LINKS DESKTOP (CENTRATI) */}
        <nav className="hidden lg:flex absolute left-1/2 -translate-x-1/2 gap-10 items-center">
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

        {/* 3. LATO DESTRO: TECH STACK (desktop) + HAMBURGER (mobile) */}
        <div className="flex items-center gap-3 relative z-[110]">

          {/* TECH STACK BADGE — visibile solo da md in su */}
          <div
            className="hidden md:block relative"
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

          {/* HAMBURGER — visibile solo sotto lg */}
          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            aria-label={isMobileMenuOpen ? 'Chiudi menu' : 'Apri menu'}
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full text-slate-900 hover:bg-slate-100 transition-colors duration-300"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </header>

      {/* MENU MOBILE A COMPARSA */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-[90] lg:hidden"
            />

            <motion.nav
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="fixed top-[70px] sm:top-[85px] left-0 w-full bg-white shadow-lg z-[95] lg:hidden flex flex-col px-6 sm:px-12 py-6 gap-1"
            >
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.name}
                    to={link.path}
                    onClick={closeMobileMenu}
                    className={`text-base font-semibold py-3 border-b border-slate-100 transition-colors duration-300
                      ${isActive ? 'text-pink-500' : 'text-black hover:text-pink-500'}`}
                  >
                    {link.name}
                  </Link>
                );
              })}

              {/* TECH STACK inline nel menu mobile, senza popover */}
              <div className="mt-4 flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border border-indigo-100 rounded-full w-fit">
                <span className="text-blue-500 text-sm">✨</span>
                <span className="text-[12px] font-black uppercase tracking-widest text-slate-700">Tech Stack</span>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
