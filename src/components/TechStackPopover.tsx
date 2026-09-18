import { motion } from 'framer-motion';
import { Code2, Cpu, Bot, Sparkles } from 'lucide-react';

// Sezione 1: I pilastri consolidati del tuo workflow quotidiano
const activeStack = [
  { name: 'Core Stack', desc: 'React, TypeScript, Next.js', icon: <Code2 size={16} /> },
  { name: 'UI/UX Design', desc: 'Design System & Prototipazione', icon: <Cpu size={16} /> },
];

// Sezione 2: Le tecnologie di frontiera su cui stai facendo R&D e automazione
const innovationStack = [
  { name: 'AI Integration', desc: 'Agenti AI & OpenAI API', icon: <Bot size={16} /> },
  { name: 'Automation & Workflow', desc: 'Make, n8n, Scripting Avanzato', icon: <Sparkles size={16} /> },
];

const TechStackPopover = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      className="w-[290px] max-w-[calc(100vw-2rem)] bg-white rounded-[1.5rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] border border-pink-700 p-6 flex flex-col"
    >
      {/* SEZIONE 1: ATTUALMENTE NEL FLUSSO */}
      <div className="flex flex-col gap-4">
        <span className="text-pink-500 font-black text-[10px] uppercase tracking-[0.25em] border-b border-slate-100 pb-2">
          Production Stack
        </span>
        
        <div className="flex flex-col gap-4">
          {activeStack.map((tech) => (
            <div key={tech.name} className="flex items-center gap-4 group">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/10 text-indigo-600 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0">
                {tech.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-wider text-slate-900 leading-none mb-1">
                  {tech.name}
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">
                  {tech.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* SEZIONE 2: INNOVAZIONE, AI E AUTOMAZIONI */}
      <div className="mt-6 pt-5 border-t border-slate-100 flex flex-col gap-4">
        <span className="text-pink-500 font-black text-[10px] uppercase tracking-[0.25em] border-b border-slate-100 pb-2">
          R&D & Innovation
        </span>
        
        <div className="flex flex-col gap-4">
          {innovationStack.map((tech) => (
            <div key={tech.name} className="flex items-center gap-4 group">
              <div className="w-8 h-8 rounded-lg bg-pink-500/10 text-pink-500 group-hover:bg-pink-500 group-hover:text-white transition-all duration-300 flex items-center justify-center shrink-0">
                {tech.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xs font-black uppercase tracking-wider text-slate-900 leading-none mb-1">
                  {tech.name}
                </span>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wide">
                  {tech.desc}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </motion.div>
  );
};

export default TechStackPopover;
