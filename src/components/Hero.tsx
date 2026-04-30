import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import Pattern from '../styles/Pattern';

const Hero = () => {
  const [hoveredSide, setHoveredSide] = useState(null);
  const [isOverButton, setIsOverButton] = useState(false);
  const [windowSize, setWindowSize] = useState({ w: 1200, h: 800 });

  // Gestione dimensioni finestra per il cursore
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWindowSize({ w: window.innerWidth, h: window.innerHeight });
      const handleResize = () => setWindowSize({ w: window.innerWidth, h: window.innerHeight });
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  // CURSORE: Configurazione ultra-fluida (Damping 45)
  const cursorSpringConfig = { damping: 45, stiffness: 200, mass: 0.6 };
  const cursorX = useSpring(useTransform(mouseX, [0, 1], [-48, windowSize.w - 48]), cursorSpringConfig);
  const cursorY = useSpring(useTransform(mouseY, [0, 1], [-48, windowSize.h - 48]), cursorSpringConfig);

  // SPLIT: Configurazione reattiva
  const splitSpringConfig = { damping: 30, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, splitSpringConfig);
  const smoothY = useSpring(mouseY, splitSpringConfig);

  const percent = useTransform(smoothX, [0.15, 0.85], [0, 100]);
  const lineOpacity = useTransform(smoothX, [0.1, 0.2, 0.8, 0.9], [0, 1, 1, 0]);

  const designerClip = useTransform(percent, (p) => `inset(0 ${100 - p}% 0 0)`);
  const coderClip = useTransform(percent, (p) => `inset(0 0 0 ${p}%)`);

  const imgX = useTransform(smoothX, [0, 1], [-20, 20]);
  const imgY = useTransform(smoothY, [0, 1], [-15, 15]);

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    const xPct = (clientX - left) / width;
    mouseX.set(xPct);
    mouseY.set((clientY - top) / height);
    
    if (xPct < 0.3) setHoveredSide('designer');
    else if (xPct > 0.7) setHoveredSide('coder');
    else setHoveredSide(null);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0.5); setHoveredSide(null); setIsOverButton(false); }}
      className="relative w-full h-screen overflow-hidden bg-white select-none cursor-none"
    >
      {/* --- CURSORE PERSONALIZZATO --- */}
      <motion.div
        className="fixed top-0 left-0 w-24 h-24 rounded-full z-[100] pointer-events-none flex items-center justify-center mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
        animate={{ 
          scale: isOverButton ? 0.25 : (hoveredSide ? 1.2 : 0.4),
          backgroundColor: hoveredSide || isOverButton ? "#ffffff" : "rgba(255,255,255,0)",
          border: hoveredSide || isOverButton ? "none" : "1.5px solid #ffffff",
        }}
        transition={{ type: "spring", damping: 50, stiffness: 200 }}
      >
        <AnimatePresence>
          {hoveredSide && !isOverButton && (
            <motion.span 
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              className="text-[9px] font-black uppercase tracking-[0.3em] text-black"
            >
              esplora
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* --- LATO DESIGNER --- */}
      <motion.div style={{ clipPath: designerClip }} className="absolute inset-0 z-20 bg-white">
        <a href="/designer" className="absolute inset-0 z-50 cursor-none" />
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"><Pattern /></div>
        
        <motion.div 
          animate={{ scale: hoveredSide === 'designer' ? 1.02 : 1 }}
          className="absolute left-[10%] md:left-[12%] top-1/2 -translate-y-1/2 z-30 pointer-events-none"
        >
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 lowercase tracking-tighter">designer</h2>
          <p className="mt-5 text-slate-500 text-sm md:text-base max-w-[280px] font-medium leading-relaxed italic border-l-4 border-pink-500 pl-5">
            Product designer specializzata in UI design, sistemi creativi e colori.
          </p>
        </motion.div>
        
        <motion.img 
          src="/images/designer.png" 
          style={{ x: imgX, y: imgY, left: "50%", top: "58%", translateX: "-50%", translateY: "-50%" }} 
          className="absolute h-[75%] md:h-[80%] w-auto object-contain" 
        />
      </motion.div>

      {/* --- LATO CODER --- */}
      <motion.div style={{ clipPath: coderClip }} className="absolute inset-0 z-10 bg-white">
        <a href="/coder" className="absolute inset-0 z-50 cursor-none" />
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none"><Pattern /></div>
        
        <motion.div 
          animate={{ scale: hoveredSide === 'coder' ? 1.02 : 1 }}
          className="absolute right-[10%] md:right-[12%] top-1/2 -translate-y-1/2 z-30 text-right pointer-events-none flex flex-col items-end"
        >
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 lowercase tracking-tighter">&lt;coder&gt;</h2>
          <p className="mt-5 text-slate-500 text-sm md:text-base max-w-[280px] font-medium leading-relaxed italic border-r-4 border-slate-800 pr-5">
            Sviluppatrice front-end che ama scrivere codice pulito, elegante ed efficiente.
          </p>
        </motion.div>
        
        <motion.img 
          src="/images/coder.png" 
          style={{ x: imgX, y: imgY, left: "50%", top: "58%", translateX: "-50%", translateY: "-50%" }} 
          className="absolute h-[75%] md:h-[80%] w-auto object-contain" 
        />
      </motion.div>

      {/* --- ELEMENTI CENTRALI FISSI --- */}
      <div className="absolute top-[18%] left-1/2 -translate-x-1/2 z-[60] text-center pointer-events-none">
        <h1 className="text-2xl md:text-4xl font-black tracking-[0.5em] uppercase text-slate-900 drop-shadow-[0_4px_4px_rgba(0,0,0,0.1)]">
          Sara Spano
        </h1>
        <div className="h-[2px] w-12 bg-pink-500 mx-auto mt-3 shadow-sm" />
      </div>

      <div className="absolute bottom-[10%] left-1/2 -translate-x-1/2 z-[60]">
        <motion.a 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/cv-sara-spano.pdf" 
          download="Sara_Spano_CV.pdf"
          onMouseEnter={() => setIsOverButton(true)}
          onMouseLeave={() => setIsOverButton(false)}
          className="px-10 py-4 bg-slate-900 text-white text-xs md:text-sm font-black uppercase tracking-[0.2em] shadow-2xl inline-block cursor-none"
        >
          Scarica CV
        </motion.a>
      </div>

      {/* Linea di divisione */}
      <motion.div
        style={{ 
          left: useTransform(smoothX, (x) => `${x * 100}%`),
          opacity: lineOpacity 
        }}
        className="absolute top-0 bottom-0 z-40 w-[1px] bg-slate-200 pointer-events-none"
      />
    </section>
  );
};

export default Hero;
