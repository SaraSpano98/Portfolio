import React, { useState } from 'react';
import Pattern from '../styles/Pattern';

const Hero = () => {
  const [percent, setPercent] = useState(50);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, currentTarget } = e;
    const { width, left } = currentTarget.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    setPercent(x);
  };

  return (
    <section 
      className="relative w-full h-screen overflow-hidden bg-white cursor-col-resize pt-[100px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setPercent(50)}
    >
      <div className="absolute inset-0 z-0 opacity-40">
        <Pattern />
      </div>

      {/* LATO DESIGNER */}
      <div 
        className="absolute inset-0 z-10"
        style={{ clipPath: `inset(0 ${100 - percent}% 0 0)` }}
      >
        <div className="absolute left-[10%] top-1/2 -translate-y-1/2 z-30 pointer-events-none">
          <h2 className="text-7xl font-black text-slate-800 uppercase tracking-tighter">Designer</h2>
        </div>
        <img 
          src="/images/designer.png" 
          alt="Designer" 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-full w-auto object-contain scale-[1.8]"
        />
      </div>

      {/* LATO CODER */}
      <div 
        className="absolute inset-0 z-20"
        style={{ clipPath: `inset(0 0 0 ${percent}%)` }}
      >
        <div className="absolute right-[10%] top-1/2 -translate-y-1/2 z-30 text-right pointer-events-none">
          <h2 className="text-7xl font-black text-slate-900 uppercase tracking-tighter">{"<Coder>"}</h2>
        </div>
        <img 
          src="/images/coder.png" 
          alt="Coder" 
          className="absolute left-1/2 top-1/2 -translate-x-1/2 h-full w-auto object-contain scale-[1.8]"
          style={{ transform: 'translate(-50%, -46.5%)' }} 
        />
      </div>

      {/* LINEA ROSA */}
      <div 
        className="absolute top-0 bottom-0 z-40 w-[2px] bg-pink-500 shadow-[0_0_15px_rgba(236,144,230,0.7)]"
        style={{ left: `${percent}%` }}
      />
    </section>
  );
};

export default Hero;

