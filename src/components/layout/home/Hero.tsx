import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import Pattern from "../../../styles/Pattern";
import ClickSpark from '../../ui/ClickSpark';
import TextType from '../../ui/TextType';

export default function Hero() {
  const [hoveredLink, setHoveredLink] = useState<'designer' | 'coder' | null>(null);

  const getBgColor = () => {
    if (hoveredLink === 'designer') return '#fff5f7';
    if (hoveredLink === 'coder') return '#0f172a';
    return '#ffffff';
  };

  return (
    <motion.section
      animate={{ backgroundColor: getBgColor() }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="relative w-full min-h-screen lg:h-screen overflow-y-auto lg:overflow-hidden select-none transition-colors duration-500 z-10 pt-[120px] sm:pt-[130px] lg:pt-0 flex flex-col lg:block"
    >
      {/* SFONDO PATTERN AMBIENTALE */}
      <div
        className="absolute inset-0 z-0 pointer-events-none transition-opacity duration-500"
        style={{ opacity: hoveredLink === 'coder' ? 0.03 : 0.12 }}
      >
        <Pattern />
      </div>

      {/* NOME SARA SPANO */}
      <div className="relative lg:absolute lg:top-[15vh] xl:top-[16vh] left-0 right-0 w-full z-40 flex flex-col items-center justify-center pointer-events-none px-4 mb-6 sm:mb-8 lg:mb-0 shrink-0">
        <div className="w-full text-center">
          <motion.h1
            animate={{ color: hoveredLink === 'coder' ? '#ffffff' : '#0f172a' }}
            transition={{ duration: 0.3 }}
            className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-[0.2em] sm:tracking-[0.4em] lg:tracking-[0.5em] uppercase block w-full text-center whitespace-nowrap"
          >
            <TextType
              text="SARA SPANO"
              className="inline-flex items-center justify-center"
            />
          </motion.h1>
          <div className="h-[2px] w-8 sm:w-12 bg-pink-500 mx-auto mt-2 sm:mt-3 lg:mt-4" />
        </div>
      </div>

      {/* SEZIONE IMMAGINI CENTRALI */}
      <div className="relative lg:absolute lg:inset-0 z-10 flex items-center justify-center pointer-events-none my-6 sm:my-8 lg:my-0 lg:pt-[10%] order-2 lg:order-none shrink-0">
        <div className="relative h-[32vh] sm:h-[38vh] md:h-[42vh] lg:h-[52vh] xl:h-[58vh] aspect-[4/5]">
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

          {/* Linea Laser centrale animata */}
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

      {/* STRUTTURA TESTI LATERALI INTERATTIVI */}
      <div className="relative lg:absolute lg:inset-0 z-30 grid grid-cols-2 w-full h-fit lg:h-full pointer-events-none px-4 sm:px-12 md:px-16 lg:px-24 items-start lg:items-center pt-2 lg:pt-16 order-3 lg:order-none mb-24 lg:mb-0">

        {/* LATO SINISTRO: DESIGNER */}
        <div className="relative w-full flex flex-col items-start text-left group pointer-events-auto">
          <Link
            to="/projects#design-showcase"
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
              className="block text-xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black lowercase leading-none"
            >
              designer
            </motion.span>
            <div className="absolute bottom-[-6px] left-0 w-0 h-[3px] bg-pink-500 group-hover:w-full transition-all duration-300 ease-out" />
          </Link>

          <div className="mt-3 sm:mt-5 md:mt-6 flex items-stretch gap-2 sm:gap-4 md:gap-5">
            <motion.div
              animate={{
                backgroundColor: hoveredLink === 'designer' ? '#7c3aed' : (hoveredLink === 'coder' ? '#64748b' : '#ec4899')
              }}
              transition={{ duration: 0.3 }}
              className="w-[2px] sm:w-[4px] rounded-full"
            />
            <motion.h5
              animate={{
                color: hoveredLink === 'designer' ? '#1e293b' : (hoveredLink === 'coder' ? '#64748b' : '#475569')
              }}
              transition={{ duration: 0.3 }}
              className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg max-w-[135px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] xl:max-w-[320px] font-medium leading-relaxed italic"
            >
              Product designer specializzata in UI design, sistemi creativi e colori.
            </motion.h5>
          </div>

          <motion.span
            animate={{ color: hoveredLink === 'coder' ? '#64748b' : (hoveredLink === 'designer' ? '#ec4899' : '#94a3b8') }}
            className="mt-2 sm:mt-4 flex items-center gap-1 sm:gap-2 text-[8px] sm:text-[10px] font-black uppercase tracking-widest pl-3 sm:pl-5"
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

        {/* LATO DESTRO: CODER */}
        <div className="relative w-full flex flex-col items-end text-right group pointer-events-auto">
          <Link
            to="https://github.com/SaraSpano98"
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
              className="block text-xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-black lowercase leading-none"
            >
              &lt;coder&gt;
            </motion.span>
            <div className="absolute bottom-[-6px] right-0 w-0 h-[3px] bg-violet-600 group-hover:w-full transition-all duration-300 ease-out" />
          </Link>

          <div className="mt-3 sm:mt-5 md:mt-6 flex items-stretch gap-2 sm:gap-4 md:gap-5 justify-end">
            <motion.h5
              animate={{
                color: hoveredLink === 'coder' ? '#f1f5f9' : '#475569'
              }}
              transition={{ duration: 0.3 }}
              className="text-[10px] sm:text-xs md:text-sm lg:text-base xl:text-lg max-w-[135px] sm:max-w-[200px] md:max-w-[240px] lg:max-w-[280px] xl:max-w-[320px] font-medium leading-relaxed italic text-right"
            >
              Sviluppatrice front-end che ama scrivere codice pulito, elegante ed efficiente.
            </motion.h5>
            <motion.div
              animate={{
                backgroundColor: hoveredLink === 'coder' ? '#ec4899' : (hoveredLink === 'designer' ? '#64748b' : '#ec4899')
              }}
              transition={{ duration: 0.3 }}
              className="w-[3px] sm:w-[4px] rounded-full"
            />
          </div>

          <motion.a
            href="https://github.com/SaraSpano98"
            target="_blank"
            rel="noopener noreferrer"
            animate={{ color: hoveredLink === 'coder' ? '#7c3aed' : (hoveredLink === 'designer' ? '#475569' : '#94a3b8') }}
            className="mt-2 sm:mt-4 flex items-center gap-1 sm:gap-2 text-[8px] sm:text-[10px] font-black uppercase tracking-widest pr-3 sm:pr-5 cursor-pointer z-50 pointer-events-auto"
          >
            <motion.span
              animate={hoveredLink === 'coder' ? { x: -5 } : { x: [0, -4, 0] }}
              transition={hoveredLink === 'coder' ? { duration: 0.2 } : { repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              ←
            </motion.span>
            <Code2 className="w-3 h-3 text-current inline" />
            vedi codice
          </motion.a>
        </div>

      </div>

      {/* BOTTONE SCARICA CV */}
      <div className="absolute bottom-[4%] sm:bottom-[5%] lg:absolute lg:bottom-[7%] left-0 right-0 w-full z-50 flex justify-center pointer-events-none px-4 order-4 lg:order-none">
        <div className="pointer-events-auto">
          <ClickSpark>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/cv-sara-spano.pdf"
              download
              className="relative px-6 py-3 sm:px-10 sm:py-4 lg:px-12 lg:py-5 bg-pink-500 hover:bg-pink-700 text-white text-[10px] sm:text-xs md:text-sm font-black uppercase tracking-[0.15em] sm:tracking-[0.3em] rounded-[0.8rem] sm:rounded-[1.3rem] inline-block outline-none focus:ring-0 shadow-lg transition-colors duration-300 cursor-pointer"
            >
              <span className="relative z-30 flex items-center gap-2 sm:gap-4 pointer-events-none">
                Scarica CV
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  ↓
                </motion.span>
              </span>
            </motion.a>
          </ClickSpark>
        </div>
      </div>

    </motion.section>
  );
}
