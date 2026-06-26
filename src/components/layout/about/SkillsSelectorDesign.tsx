import { useState } from 'react';

// --- DEFINIZIONE INTERFACCE TYPESCRIPT ---
interface SkillCategoryData {
    percentage: string;
    items: { name: string; icon: string }[];
}

interface ColumnSkills {
    [category: string]: SkillCategoryData;
}

const designerSkills: ColumnSkills = {
    "Tools": {
        percentage: "85%",
        items: [
            { name: "Figma", icon: "🎨" },
            { name: "Canva", icon: "✨" },
            { name: "Adobe XD", icon: "📐" }
        ]
    },
    "Core disciplines": {
        percentage: "90%",
        items: [
            { name: "UI/UX Design", icon: "📐" },
            { name: "Interaction Design", icon: "🖱️" }
        ]
    },
    "Methodologies": {
        percentage: "80%",
        items: [
            { name: "Design Systems", icon: "📚" },
            { name: "Asset Optimization", icon: "🖼️" }
        ]
    }
};

export default function SkillsSelectorDesign() {
    const [activeDesignerTab, setActiveDesignerTab] = useState<string>("Tools");

    return (
        /* RIMOSSE LE SECTION E I PADDING DOPPI: Ora il componente è un frammento fluido che si adatta alla colonna sinistra del padre */
        <div className="w-full flex flex-col gap-6 mt-2">
            
            {/* Navigazione Filtri Designer */}
            <div className="flex flex-col gap-2 w-full">
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-600">Toolbox Creativo</span>
                <div className="flex flex-wrap gap-2">
                    {Object.keys(designerSkills).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveDesignerTab(tab)}
                            className={`text-xs font-bold px-5 py-2.5 rounded-full border transition-all duration-300 ${
                                activeDesignerTab === tab
                                    ? 'bg-pink-500/10 text-slate-900 border-pink-300 shadow-sm'
                                    : 'bg-slate-400/20 text-slate-500 border-slate-300 shadow-sm'
                            }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>
            </div>

            {/* Contenuto Dinamico: Lista + Maxi-Badge */}
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 w-full mt-2 items-center">
                
                {/* Lista Voci */}
                <div className="sm:col-span-7 flex flex-col gap-3.5">
                    {designerSkills[activeDesignerTab].items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3 text-slate-700 hover:text-slate-950 transition-colors">
                            <span className="text-xl shrink-0">{item.icon}</span>
                            <span className="text-base font-medium">{item.name}</span>
                        </div>
                    ))}
                </div>

                {/* Maxi Rettangolo Arrotondato Rosa (Competenza) */}
                <div className="sm:col-span-5 flex justify-center sm:justify-end">
                    <div className="bg-[#ec4899] text-white rounded-[2rem] px-8 py-8 w-full max-w-[180px] aspect-square flex flex-col items-center justify-center text-center shadow-lg shadow-pink-500/20 transform transition-transform duration-500 hover:scale-105">
                        <span className="text-4xl font-black tracking-tight mb-1">
                            {designerSkills[activeDesignerTab].percentage}
                        </span>
                        <span className="text-sm font-medium tracking-wide opacity-90 leading-tight">
                            competenza
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}
