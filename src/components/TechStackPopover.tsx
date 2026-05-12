import { motion } from 'framer-motion';
import { Code2, Zap, Palette, Layout } from 'lucide-react';

const techData = [
  { name: 'React', desc: 'Sviluppo interfacce reattive', icon: <Code2 size={18} /> },
  { name: 'TypeScript', desc: 'Codice scalabile e sicuro', icon: <Zap size={18} /> },
  { name: 'UI/UX', desc: 'Esperienze utente curate', icon: <Palette size={18} /> },
  { name: 'Next.js', desc: 'Performance e SEO top', icon: <Layout size={18} /> },
];

const TechStackPopover = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      className="w-[280px] bg-white rounded-[1.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-pink-700 p-8 cursor-none"
    >
      <div className="flex items-center gap-3 mb-8 border-b border-pink-700 pb-4">
        <span className="text-pink-500 font-black text-xs uppercase tracking-[0.3em]">Stack</span>
      </div>

      <div className="flex flex-col gap-6">
        {techData.map((tech) => (
          <div key={tech.name} className="flex items-center gap-5 group cursor-none">
            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-900 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300">
              {tech.icon}
            </div>
            <div className="flex flex-col">
              <span className="text-[13px] font-black uppercase tracking-wider text-slate-900 leading-none mb-1">
                {tech.name}
              </span>
              <span className="text-[10px] text-slate-400 font-medium uppercase tracking-tighter">
                {tech.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStackPopover;

