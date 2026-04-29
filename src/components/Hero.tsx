import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Pattern from '../styles/Pattern';

const Hero = () => {
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);

  const springConfig = { damping: 45, stiffness: 120, mass: 1 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  const percent = useTransform(smoothX, [0, 1], [0, 100]);
  
  const designerClip = useTransform(percent, (p) => `inset(0 ${100 - p}% 0 0)`);
  const coderClip = useTransform(percent, (p) => `inset(0 0 0 ${p}%)`);
  
  // OPACITÀ REGOLATA: non scende mai sotto lo 0.25 (25%) per restare visibile
  const designerOpacity = useTransform(smoothX, [0, 0.5, 1], [1, 1, 0.25]);
  const coderOpacity = useTransform(smoothX, [0, 0.5, 1], [0.25, 1, 1]);

  const designerTextX = useTransform(smoothX, [0, 0.5, 1], ["0%", "-5%", "-20%"]);
  const coderTextX = useTransform(smoothX, [0, 0.5, 1], ["20%", "5%", "0%"]);
  
  const imgX = useTransform(smoothX, [0, 1], [-20, 20]);
  const imgY = useTransform(smoothY, [0, 1], [-15, 15]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
    mouseX.set((clientX - left) / width);
    mouseY.set((clientY - top) / height);
  };

  return (
    <section 
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0.5); mouseY.set(0.5); }}
      className="relative w-full h-screen overflow-hidden bg-white select-none cursor-col-resize"
    >
      {/* --- LATO DESIGNER --- */}
      <motion.div 
        style={{ clipPath: designerClip, opacity: designerOpacity }}
        className="absolute inset-0 z-10 bg-white"
      >
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <Pattern />
        </div>
        
        <motion.div 
          style={{ x: designerTextX, y: "-50%" }} 
          className="absolute left-[12%] lg:left-[15%] top-1/2 z-30 pointer-events-none flex flex-col"
        >
          <h2 className="text-6xl md:text-7xl font-bold text-slate-800 lowercase tracking-tighter leading-none">
            designer
          </h2>
          <p className="mt-4 text-slate-500 text-sm md:text-base max-w-[260px] leading-relaxed font-medium">
            Product designer specializzata in UI design, sistemi creativi e colori.
          </p>
        </motion.div>

        <motion.img 
          src="/images/designer.png" 
          alt="designer"
          style={{ x: imgX, y: imgY, left: "50%", top: "58%", translateX: "-50%", translateY: "-50%" }}
          className="absolute h-[80%] md:h-[85%] w-auto object-contain"
        />
      </motion.div>

      {/* --- LATO CODER --- */}
      <motion.div 
        style={{ clipPath: coderClip, opacity: coderOpacity }}
        className="absolute inset-0 z-20 bg-white"
      >
        {/* CODICE GHOST: alzato al 30% di opacità per farlo vedere bene */}
        <div className="absolute right-[20%] md:right-[24%] bottom-[18%] opacity-30 font-mono text-sm md:text-base text-slate-900 text-left leading-relaxed">
           <pre className="drop-shadow-sm">{`const developer = {
  name: 'Sara Spano',
  role: 'Frontend Enthusiast',
  skills: ['React', 'Tailwind'],
  motto: 'Clean code & art'
};`}</pre>
        </div>

        <motion.div 
          style={{ x: coderTextX, y: "-50%" }} 
          className="absolute right-[12%] lg:right-[15%] top-1/2 z-30 text-right pointer-events-none flex flex-col items-end"
        >
          <h2 className="text-6xl md:text-7xl font-bold text-slate-900 lowercase tracking-tighter leading-none">
            &lt;coder&gt;
          </h2>
          <p className="mt-4 text-slate-500 text-sm md:text-base max-w-[260px] leading-relaxed font-medium">
            Sviluppatrice front-end che ama scrivere codice pulito, elegante ed efficiente.
          </p>
        </motion.div>

        <motion.img 
          src="/images/coder.png" 
          alt="coder"
          style={{ x: imgX, y: imgY, left: "50%", top: "58%", translateX: "-50%", translateY: "-50%" }}
          className="absolute h-[80%] md:h-[85%] w-auto object-contain grayscale brightness-110"
        />
      </motion.div>

      <motion.div 
        style={{ left: useTransform(percent, (p) => `${p}%`) }}
        className="absolute top-0 bottom-0 z-40 w-[1px] bg-slate-200"
      />
    </section>
  );
};

export default Hero;
