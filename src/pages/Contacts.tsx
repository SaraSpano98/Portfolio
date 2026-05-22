import { useEffect, useState, useRef } from 'react';
import SEO from "../lib/seo";
import { Player } from '@lordicon/react';
import { fetchIconData, LordIcons } from '../components/Lordicons';

// Import esatti dei tuoi componenti
import ContactHero from '../components/ContactHero';
import ProcessSection from '../components/ProcessSection';
import PrerequisitiSection from '../components/PrerequisitiSection';
import KeyPoints from '../components/KeyPoints';
import DirectInquirySection from '../components/DirectInquirySection';
import SloganContacts from '../components/SloganContacts';

const Contacts = () => {
    // 1. STATO DELL'ORARIO (Richiesto da ContactHero)
    const [time, setTime] = useState(new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    // 2. LOGICA VARIANTI ANIMAZIONE (Richiesta da ContactHero)
    const revealVariant = {
        hidden: { y: "100%" },
        visible: { y: 0, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
    };

    // 3. CENTRALIZZAZIONE REFERENZE LORDICONS (Richiesti da DirectInquirySection)
    const emailRef = useRef<Player>(null);
    const whatsappRef = useRef<Player>(null);
    const telephoneRef = useRef<Player>(null);
    const meetingRef = useRef<Player>(null);
    const globeRef = useRef<Player>(null);
    const linkedinRef = useRef<Player>(null);
    const githubRef = useRef<Player>(null);

    // 4. LOGICA CARICAMENTO ASINCRONO ICONE JSON
    const [loadedIcons, setLoadedIcons] = useState<{ [key: string]: any }>({});

    useEffect(() => {
        const loadAllIcons = async () => {
            const email = await fetchIconData(LordIcons.email);
            const whatsapp = await fetchIconData(LordIcons.whatsapp);
            const telephone = await fetchIconData(LordIcons.telephone);
            const meeting = await fetchIconData(LordIcons.meeting);
            const globe = await fetchIconData(LordIcons.globe);
            const linkedin = await fetchIconData(LordIcons.linkedin);
            const github = await fetchIconData(LordIcons.github);

            setLoadedIcons({ email, whatsapp, telephone, meeting, globe, linkedin, github });
        };
        loadAllIcons();
    }, []);

    return (
        <>
            <SEO title="Contatti" description="Parliamo del tuo prossimo progetto digitale." path="/contacts" />

            {/* CORREZIONE STRUTTURALE: Il main è un guscio fluido a tutta larghezza. 
                I singoli componenti interni usano w-full px-10 per incollarsi simmetricamente all'Header */}
            <main className="w-full min-h-screen bg-white pt-44 pb-32 cursor-none overflow-x-hidden relative flex flex-col">
                
                {/* 1. HERO CONTATTI (Riceve l'orario e le animazioni) */}
                <ContactHero time={time} revealVariant={revealVariant} />

                {/* 2. PROCESSO DI LAVORO */}
                <ProcessSection />

                {/* 3. PREREQUISITI PROGETTO */}
                <PrerequisitiSection />

                {/* 4. KEY POINTS: CAROUSEL DINAMICO */}
                <KeyPoints />

                {/* 5. CONTATTI DIRETTI E SOCIAL (Riceve le icone e le referenze per evitare i crash del browser) */}
                <DirectInquirySection 
                    loadedIcons={loadedIcons} 
                    refs={{ emailRef, whatsappRef, telephoneRef, meetingRef, globeRef, linkedinRef, githubRef }} 
                />

                {/* 6. SLOGAN CONTATTI */}
                <SloganContacts />

            </main>
        </>
    );
};

export default Contacts;
