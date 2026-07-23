import { useState } from 'react';

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
        <div className="w-full flex flex-col gap-6 mt-2">
            
            {/* Navigazione Filtri Designer */}
            <div className="flex flex-col gap-2 w-full mt-5">
                <span className="text-[11px] font-black uppercase tracking-[0.25em] text-slate-600">Toolbox Creativo</span>
                <div className="flex flex-wrap gap-2 mt-4">
                    {Object.keys(designerSkills).map((tab) => (
                        <button
                            key={tab}
                            onClick={() => setActiveDesignerTab(tab)}
                            className={`text-xs font-bold px-6 py-2.5 rounded-full border transition-all duration-300 cursor-pointer ${
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

            {/* CONTENITORE */}
            <div className="w-full flex items-start justify-between gap-6 mt-4">
                
                {/* Lista Voci Designer Effetto 3D */}
                <div className="flex-1 flex flex-col gap-4 justify-start">
                    {designerSkills[activeDesignerTab].items.map((item, i) => (
                        <div key={i} className="flex items-center gap-4 text-slate-700 hover:text-slate-950 transition-colors group/item cursor-default">
                            
                            {/* Sfera 3D per l'Icona */}
                            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-slate-50 to-slate-200/80 flex items-center justify-center shrink-0 shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),_0_4px_6px_-1px_rgba(0,0,0,0.08),_0_2px_4px_-1px_rgba(0,0,0,0.04)] border border-slate-200/40 transition-transform duration-300 group-hover/item:scale-110 group-hover/item:shadow-[inset_0_2px_4px_rgba(255,255,255,0.9),_0_8px_12px_-3px_rgba(0,0,0,0.12)]">
                                <span className="text-xl filter drop-shadow-[0_2px_3px_rgba(0,0,0,0.15)] transform transition-transform group-hover/item:rotate-6">
                                    {item.icon}
                                </span>
                            </div>

                            <span className="text-base font-semibold tracking-tight">{item.name}</span>
                        </div>
                    ))}
                </div>

                {/* Rettangolo Rosa */}
                <div className="flex shrink-0 items-start justify-end">
                    <div className="bg-[#be185d] text-white rounded-[2rem] px-8 py-8 w-[160px] sm:w-[180px] aspect-square flex flex-col items-center justify-center text-center shadow-lg shadow-pink-500/20 transform transition-transform duration-500 hover:scale-105">
                        <span className="text-4xl font-black tracking-tight mb-1">
                            {designerSkills[activeDesignerTab].percentage}
                        </span>
                        <span className="text-sm font-bold tracking-wide opacity-90 leading-tight uppercase">
                            competenza
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}