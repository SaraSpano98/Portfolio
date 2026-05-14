import { motion } from "framer-motion";

// 1. DEFINIAMO IL TIPO PER TYPESCRIPT
interface GlowBlobsProps {
  hoveredLink: 'designer' | 'coder' | null;
}

// 2. APPLICHIAMO IL TIPO ALLE PROPS NELLA FUNZIONE
export default function GlowBlobs({ hoveredLink }: GlowBlobsProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [-30, 50, -30],
          scale: hoveredLink === 'designer' ? 1.3 : (hoveredLink === 'coder' ? 0.3 : 1.0),
          opacity: hoveredLink === 'coder' ? 0.05 : (hoveredLink === 'designer' ? 0.25 : 0.15)
        }}
        transition={{
          x: { repeat: Infinity, duration: 15, ease: "easeInOut" },
          y: { repeat: Infinity, duration: 18, ease: "easeInOut" },
          scale: { duration: 0.4, ease: "easeInOut" },
          opacity: { duration: 0.4, ease: "easeInOut" }
        }}
        className="absolute top-[20%] left-[10%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-pink-400 rounded-full blur-[80px] md:blur-[120px]"
      />

      <motion.div
        animate={{
          x: [40, -40, 40],
          y: [50, -30, 50],
          scale: hoveredLink === 'coder' ? 1.4 : (hoveredLink === 'designer' ? 0.2 : 1.0),
          opacity: hoveredLink === 'designer' ? 0.02 : (hoveredLink === 'coder' ? 0.35 : 0.12)
        }}
        transition={{
          x: { repeat: Infinity, duration: 20, ease: "easeInOut" },
          y: { repeat: Infinity, duration: 14, ease: "easeInOut" },
          scale: { duration: 0.4, ease: "easeInOut" },
          opacity: { duration: 0.4, ease: "easeInOut" }
        }}
        className="absolute bottom-[15%] right-[5%] w-[300px] h-[300px] md:w-[550px] md:h-[550px] bg-sky-400 rounded-full blur-[90px] md:blur-[130px]"
      />
    </div>
  );
}
