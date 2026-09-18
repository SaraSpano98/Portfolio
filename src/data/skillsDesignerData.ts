export interface SkillItem {
    name: string;
    icon: string;
    level: string;
    description: string;
}

export interface SkillCategoryData {
    items: SkillItem[];
}

export interface ColumnSkills {
    [category: string]: SkillCategoryData;
}

export const designerSkills: ColumnSkills = {
    "Tools": {
        items: [
            { name: "Figma", icon: "🎨", level: "Avanzato", description: "Progettazione di interfacce pixel-perfect, design system atomici e prototipi interattivi ad alta fedeltà." },
            { name: "Canva", icon: "✨", level: "Esperto", description: "Creazione rapida di asset grafici coordinati, presentazioni e contenuti visivi aziendali." },
            { name: "Adobe XD", icon: "📐", level: "Autonomo", description: "Studio dei flussi utente, wireframing e transizioni per interfacce web e mobile." }
        ]
    },
    "Core disciplines": {
        items: [
            { name: "UI/UX Design", icon: "📐", level: "Solido", description: "Studio approfondito della gerarchia visiva, tipografia, palette cromatiche ed empatia con l'utente." },
            { name: "Interaction Design", icon: "🖱️", level: "Autonomo", description: "Progettazione di micro-interazioni dinamiche per rendere l'esperienza d'uso fluida e naturale." }
        ]
    },
    "Methodologies": {
        items: [
            { name: "Design Systems", icon: "📚", level: "Solido", description: "Creazione e mantenimento di librerie di componenti scalabili, strutturati e pronti per lo sviluppo." },
            { name: "Asset Optimization", icon: "🖼️", level: "Avanzato", description: "Esportazione e ottimizzazione dei formati grafici per garantire massime performance di caricamento." }
        ]
    }
};
