import { motion } from 'framer-motion';

const InfiniteTicker = () => {
  const words = [
    "UI Design", "Front-end Dev", "Graphic Mindset", 
    "React.js", "Tailwind CSS", "User Experience",
    "Figma Pro", "Clean Code", "Creative Thinker"
  ];

  // Triplichiamo le parole per un loop infinito senza scatti
  const duplicatedWords = [...words, ...words, ...words];

  return (
    <div className="relative w-full bg-white py-12 border-y border-slate-50 overflow-hidden cursor-none">
      {/* Sfumature ai lati per l'effetto dissolvenza */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />

      <motion.div
        className="flex whitespace-nowrap gap-16 items-center"
        animate={{ x: [0, -1500] }}
        transition={{
          duration: 35, // Velocità rilassata
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedWords.map((word, index) => (
          <div key={index} className="flex items-center gap-16">
            <span className="text-3xl md:text-5xl font-black text-slate-100 uppercase tracking-tighter hover:text-pink-500/30 transition-colors duration-500">
              {word}
            </span>
            <div className="w-3 h-3 bg-pink-500/10 rounded-full" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteTicker;
