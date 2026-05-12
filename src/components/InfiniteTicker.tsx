import { motion } from 'framer-motion';

const InfiniteTicker = () => {
  const words = [
    "UI Design", "Front-end Dev", "Graphic Mindset", 
    "React.js", "Tailwind CSS", "User Experience",
    "Figma Pro", "Clean Code", "Creative Thinker"
  ];

  // Triplichiamo le parole per un loop infinito senza interruzioni
  const duplicatedWords = [...words, ...words, ...words];

  return (
    <div className="w-full bg-white py-14 cursor-none overflow-hidden">
      {/* Container allineato alla Navbar (px-10) */}
      <div className="w-full px-10 relative overflow-hidden">
        
        {/* Sfumature laterali per l'effetto dissolvenza */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />

        <motion.div
          className="flex whitespace-nowrap gap-20 items-center"
          animate={{ x: [0, -2000] }}
          transition={{
            duration: 45, // Movimento lento e sofisticato
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedWords.map((word, index) => (
            <div key={index} className="flex items-center gap-20">
              <span className="text-xl md:text-3xl font-bold text-slate-300 uppercase tracking-[0.2em] select-none">
                {word}
              </span>
              {/* Separatore: un rombo sottile o un puntino */}
              <div className="w-1.5 h-1.5 bg-pink-500/20 rounded-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default InfiniteTicker;
