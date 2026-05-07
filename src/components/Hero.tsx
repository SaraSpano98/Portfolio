import { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import Pattern from '../styles/Pattern';

const Hero = () => {
  const [hoveredSide, setHoveredSide] = useState(null);
  const [isOverButton, setIsOverButton] = useState(false);
  const [windowSize, setWindowSize] = useState({ w: 1200, h: 800 });

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

  const cursorSpringConfig = { damping: 45, stiffness: 200, mass: 0.5 };
  const cursorX = useSpring(useTransform(mouseX, [0, 1], [-24, windowSize.w - 24]), cursorSpringConfig);
  const cursorY = useSpring(useTransform(mouseY, [0, 1], [-24, windowSize.h - 24]), cursorSpringConfig);

  const splitSpringConfig = { damping: 30, stiffness: 120, mass: 0.5 };
  const smoothX = useSpring(mouseX, splitSpringConfig);
  const smoothY = useSpring(mouseY, splitSpringConfig);

  const percent = useTransform(smoothX, [0.15, 0.85], [0, 100]);
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
      {/* CURSORE PERSONALIZZATO (Nascosto sotto i 1024px per comodità tablet/mobile) */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full z-[100] pointer-events-none hidden lg:flex items-center justify-center mix-blend-difference"
        style={{ x: cursorX, y: cursorY }}
        animate={{
          scale: isOverButton ? 0.6 : (hoveredSide ? 2 : 1),
          backgroundColor: hoveredSide ? "rgba(255,255,255,1)" : "rgba(255,255,255,0)",
          border: hoveredSide ? "none" : "1.5px solid rgba(255,255,255,0.5)",
        }}
        transition={{ type: "spring", damping: 50, stiffness: 250 }}
      >
        <AnimatePresence>
          {hoveredSide && !isOverButton && (
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="text-[8px] font-black uppercase text-black">
              esplora
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>

      {/* LATO DESIGNER */}
      <motion.div style={{ clipPath: designerClip }} className="absolute inset-0 z-20 bg-white">
        <a href="/designer" className="absolute inset-0 z-50 cursor-none outline-none focus:ring-0" />
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none"><Pattern /></div>
        
        {/* Testo Designer: adattato per tablet (sm) e mobile */}
        <motion.div className="absolute left-[5%] sm:left-[10%] md:left-[12%] top-1/2 -translate-y-1/2 z-30 pointer-events-none">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 lowercase leading-none">designer</h2>
          <h5 className="mt-4 sm:mt-6 text-slate-600 text-xs sm:text-sm md:text-lg max-w-[180px] sm:max-w-[250px] md:max-w-[320px] font-medium leading-relaxed border-l-4 border-pink-500 pl-4 sm:pl-5 italic">
            Product designer specializzata in UI design, sistemi creativi e colori.
          </h5>
        </motion.div>

        <motion.img
          src="/images/designer.png"
          style={{ x: imgX, y: imgY, left: "50%", top: "58%", translateX: "-50%", translateY: "-50%" }}
          className="absolute h-[60%] sm:h-[75%] md:h-[80%] w-auto object-contain"
        />
      </motion.div>

      {/* LATO CODER */}
      <motion.div style={{ clipPath: coderClip }} className="absolute inset-0 z-10 bg-white">
        <a href="/coder" className="absolute inset-0 z-50 cursor-none outline-none focus:ring-0" />
        <div className="absolute inset-0 z-0 opacity-25 pointer-events-none"><Pattern /></div>
        
        {/* Testo Coder: adattato per tablet (sm) e mobile */}
        <motion.div className="absolute right-[5%] sm:right-[10%] md:right-[12%] top-1/2 -translate-y-1/2 z-30 text-right pointer-events-none flex flex-col items-end">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-black text-slate-900 lowercase leading-none">&lt;coder&gt;</h2>
          <h5 className="mt-4 sm:mt-6 text-slate-600 text-xs sm:text-sm md:text-lg max-w-[180px] sm:max-w-[250px] md:max-w-[320px] font-medium leading-relaxed border-r-4 border-pink-500 pr-4 sm:pr-5 italic">
            Sviluppatrice front-end che ama scrivere codice pulito, elegante ed efficiente.
          </h5>
        </motion.div>

        <motion.img
          src="/images/coder.png"
          style={{ x: imgX, y: imgY, left: "50%", top: "58%", translateX: "-50%", translateY: "-50%" }}
          className="absolute h-[60%] sm:h-[75%] md:h-[80%] w-auto object-contain"
        />
      </motion.div>

      {/* NOME SARA SPANO (Ridimensionato su mobile) */}
      <div className="absolute top-[12%] sm:top-[18%] left-1/2 -translate-x-1/2 z-[60] text-center pointer-events-none w-full px-4">
        <h1 className="text-xl sm:text-2xl md:text-4xl font-black tracking-[0.3em] sm:tracking-[0.5em] uppercase text-slate-900 truncate">
          Sara Spano
        </h1>
        <div className="h-[2px] w-8 sm:w-12 bg-pink-500 mx-auto mt-2 sm:mt-3" />
      </div>

      {/* BOTTONE (Ridimensionato su mobile) */}
      <div className="absolute bottom-[8%] sm:bottom-[10%] left-1/2 -translate-x-1/2 z-[60]">
        <motion.a
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          href="/cv-sara-spano.pdf"
          download
          onMouseEnter={() => setIsOverButton(true)}
          onMouseLeave={() => setIsOverButton(false)}
          className="relative px-8 py-4 sm:px-12 sm:py-5 bg-pink-500 hover:bg-pink-700 text-white text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] rounded-[1rem] sm:rounded-[1.3rem] inline-block cursor-none outline-none focus:ring-0 shadow-lg transition-colors duration-300"
        >
          <span className="relative z-30 flex items-center gap-3 sm:gap-4 pointer-events-none">
            Scarica CV
            <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>↓</motion.span>
          </span>
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
