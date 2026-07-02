import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Pattern from "../../../styles/Pattern";

const Hero = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const getBgColor = () => {
    if (hoveredLink === 'designer') return '#fff5f7';
    if (hoveredLink === 'coder') return '#0f172a';
    return '#ffffff';
  };

  return (
    <motion.section
      animate={{ backgroundColor: getBgColor() }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative w-full h-screen overflow-hidden select-none transition-colors duration-500 z-10 pt-[140px]"
    >
      {/* SFONDO PATTERN AMBIENTALE */}
      <div
        className="absolute inset-0 z-0 opacity-12 pointer-events-none"
        style={{ opacity: hoveredLink === 'coder' ? 0.03 : 0.12 }}
      >
        <Pattern />
      </div>

      {/* STRUTTURA TESTI LATERALI INTERATTIVI */}
      <div className="absolute inset-0 z-30 grid grid-cols-2 w-full h-full pointer-events-none pt-16">
        
        {/* LATO SINISTRO: DESIGNER */}
        <div className="relative w-full h-full px-24 flex items-center justify-start">
          <div className="pointer-events-auto flex flex-col items-start group">
            <Link
              to="/designer"
              onMouseEnter={() => setHoveredLink('designer')}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative block outline-none cursor-pointer"
            >
              <motion.span
                animate={{
                  color: hoveredLink === 'coder' ? '#475569' : (hoveredLink === 'designer' ? '#ec4899' : '#0f172a'),
                  opacity: hoveredLink === 'designer' ? 1 : (hoveredLink === 'coder' ? 0.6 : [0.75, 0.95, 0.75]),
                  textShadow: hoveredLink === 'designer'
                    ? '0 0 25px rgba(236,72,153,0.5)'
                    : '0 0 8px rgba(236,72,153,0.15)'
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="block text-4xl sm:text-5xl md:text-7xl font-black lowercase leading-none"
              >
                designer
              </motion.span>
              <div className="absolute bottom-[-6px] left-0 w-0 h-[3px] bg-pink-500 group-hover:w-full transition-all duration-300 ease-out" />
            </Link>

            {/* BLOCCO TESTO + LINEA VERTICALE ANIMATA */}
            <div className="mt-6 flex items-stretch gap-4 sm:gap-5">
              
              {/* Linea verticale sinistra*/}
              <motion.div
                animate={{
                  backgroundColor: hoveredLink === 'designer'
                    ? '#7c3aed'
                    : (hoveredLink === 'coder' ? '#64748b' : '#ec4899')
                }}
                transition={{ duration: 0.3 }}
                className="w-[4px] rounded-full"
              />

              <motion.h5
                animate={{
                  color: hoveredLink === 'designer'
                    ? '#1e293b'
                    : (hoveredLink === 'coder' ? '#64748b' : '#475569')
                }}
                transition={{ duration: 0.3 }}
                className="text-xs sm:text-sm md:text-lg max-w-[180px] sm:max-w-[250px] md:max-w-[320px] font-medium leading-relaxed italic transition-colors"
              >
                Product designer specializzata in UI design, sistemi creativi e colori.
              </motion.h5>
            </div>

            <motion.span
              animate={{ color: hoveredLink === 'coder' ? '#64748b' : (hoveredLink === 'designer' ? '#ec4899' : '#94a3b8') }}
              className="mt-4 flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-widest transition-colors duration-300 pl-5"
            >
              esplora progetti
              <motion.span
                animate={hoveredLink === 'designer' ? { x: 5 } : { x: 0 }}
                transition={hoveredLink === 'designer' ? { duration: 0.2 } : { repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                →
              </motion.span>
            </motion.span>
          </div>
        </div>

        {/* LATO DESTRO: CODER */}
        <div className="relative w-full h-full px-6 sm:px-12 md:px-16 lg:px-24 flex items-center justify-end select-none">
          <div className="pointer-events-auto text-right flex flex-col items-end group">
            <Link
              to="/coder"
              onMouseEnter={() => setHoveredLink('coder')}
              onMouseLeave={() => setHoveredLink(null)}
              className="relative block outline-none cursor-pointer"
            >
              <motion.span
                animate={{
                  color: hoveredLink === 'coder' ? '#7c3aed' : (hoveredLink === 'designer' ? '#475569' : '#0f172a'),
                  opacity: hoveredLink === 'coder' ? 1 : (hoveredLink === 'designer' ? 0.5 : [0.75, 0.95, 0.75]),
                  textShadow: hoveredLink === 'coder'
                    ? '0 0 30px rgba(124, 58, 237, 0.6)'
                    : '0 0 8px rgba(71, 85, 105, 0.15)'
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="block text-4xl sm:text-5xl md:text-7xl font-black lowercase leading-none"
              >
                &lt;coder&gt;
              </motion.span>

              <div className="absolute bottom-[-6px] right-0 w-0 h-[3px] bg-violet-600 group-hover:w-full transition-all duration-300 ease-out" />
            </Link>

            {/* BLOCCO TESTO + LINEA VERTICALE ANIMATA DESTRI */}
            <div className="mt-6 flex items-stretch gap-4 sm:gap-5 justify-end">
              <motion.h5
                animate={{
                  color: hoveredLink === 'coder'
                    ? '#f1f5f9' 
                    : (hoveredLink === 'designer' ? '#475569' : '#475569')
                }}
                transition={{ duration: 0.3 }}
                className="text-xs sm:text-sm md:text-lg max-w-[180px] sm:max-w-[250px] md:max-w-[320px] font-medium leading-relaxed italic transition-colors text-right"
              >
                Sviluppatrice front-end che ama scrivere codice pulito, elegante ed efficiente.
              </motion.h5>

              {/* Linea verticale destra */}
              <motion.div
                animate={{
                  backgroundColor: hoveredLink === 'coder'
                    ? '#ec4899' 
                    : (hoveredLink === 'designer' ? '#64748b' : '#ec4899')
                }}
                transition={{ duration: 0.3 }}
                className="w-[4px] rounded-full"
              />
            </div>

            <motion.span
              animate={{ color: hoveredLink === 'coder' ? '#7c3aed' : (hoveredLink === 'designer' ? '#475569' : '#94a3b8') }}
              className="mt-4 flex items-center gap-2 text-[10px] sm:text-xs font-black uppercase tracking-widest transition-colors duration-300 pr-5"
            >
              <motion.span
                animate={hoveredLink === 'coder' ? { x: -5 } : { x: [0, -4, 0] }}
                transition={hoveredLink === 'coder' ? { duration: 0.2 } : { repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                ←
              </motion.span>
              vedi codice
            </motion.span>
          </div>
        </div>
      </div>

      {/* SEZIONE IMMAGINI CENTRALI */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none pt-[12%] sm:pt-[10%]">
        <div className="relative h-[55%] sm:h-[70%] md:h-[75%] aspect-[4/5]">
          <motion.img
            src="/images/designer.png"
            animate={{
              opacity: hoveredLink === 'coder' ? 0.2 : 1,
              filter: hoveredLink === 'designer' ? 'brightness(1.08) contrast(1.02)' : 'brightness(1) contrast(1)'
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ clipPath: "inset(0 50% 0 0)" }}
            className="absolute top-0 left-1/2 w-full h-full object-contain -translate-x-1/2"
            alt="Designer Half"
          />

          <motion.img
            src="/images/coder.png"
            animate={{
              opacity: hoveredLink === 'designer' ? 0.15 : 1,
              filter: hoveredLink === 'coder' ? 'saturate(1.15) contrast(1.05)' : 'saturate(1) contrast(1)'
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ clipPath: "inset(0 0 0 50%)" }}
            className="absolute top-0 left-1/2 w-full h-full object-contain -translate-x-1/2"
            alt="Coder Half"
          />

          <div className="absolute top-1/2 left-1/2 w-[1px] h-[50%] bg-slate-100/20 opacity-30 -translate-x-1/2 -translate-y-1/2 pointer-events-none overflow-hidden">
            <motion.div
              animate={{
                top: ["-100%", "100%"],
                opacity: hoveredLink ? 0 : [0.2, 0.6, 0.2]
              }}
              transition={{
                top: { repeat: Infinity, duration: 3, ease: "linear" },
                opacity: { repeat: Infinity, duration: 3, ease: "linear" }
              }}
              className="absolute left-0 w-full h-1/3 bg-gradient-to-b from-transparent via-pink-500 to-transparent"
            />
          </div>
        </div>
      </div>

      {/* NOME SARA SPANO */}
      <div className="absolute top-[150px] sm:top-[160px] left-0 right-0 w-full z-40 flex flex-col items-center justify-center pointer-events-none px-4">
        <div className="w-full text-center">
          <motion.h1
            animate={{ color: hoveredLink === 'coder' ? '#ffffff' : '#0f172a' }}
            transition={{ duration: 0.3 }}
            className="text-xl sm:text-2xl md:text-4xl font-black tracking-[0.3em] sm:tracking-[0.5em] uppercase block w-full text-center"
          >
            Sara Spano
          </motion.h1>
          <div className="h-[2px] w-8 sm:w-12 bg-pink-500 mx-auto mt-2 sm:mt-3" />
        </div>
      </div>

      {/* BOTTONE SCARICA CV */}
      <div className="absolute bottom-[8%] sm:bottom-[10%] left-0 right-0 w-full z-50 flex justify-center pointer-events-none px-4">
        <div className="pointer-events-auto">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="/cv-sara-spano.pdf"
            download
            className="relative px-8 py-4 sm:px-12 sm:py-5 bg-pink-500 hover:bg-pink-700 text-white text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.2em] sm:tracking-[0.3em] rounded-[1rem] sm:rounded-[1.3rem] inline-block outline-none focus:ring-0 shadow-lg transition-colors duration-300"
          >
            <span className="relative z-30 flex items-center gap-3 sm:gap-4 pointer-events-none">
              Scarica CV
              <motion.span animate={{ y: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>↓</motion.span>
            </span>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
