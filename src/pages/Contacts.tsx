import { useEffect, useState, useRef } from 'react';
import SEO from "../lib/seo";
import { Player } from '@lordicon/react';
import { fetchIconData, LordIcons } from '../components/Lordicons';

import ContactsHero from '../components/layout/contacts/ContactsHero';
import ProcessSection from '../components/layout/contacts/ProcessSection';
import PrerequisitiSection from '../components/layout/contacts/PrerequisitiSection';
import KeyPoints from '../components/layout/contacts/KeyPoints';
import DirectInquirySection from '../components/layout/contacts/DirectInquirySection';
import SloganContacts from '../components/layout/contacts/SloganContacts';

const Contacts = () => {
    {/* 1. STATO DELL'ORARIO (Richiesto da ContactHero) */}
    const [time, setTime] = useState(new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }));

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date().toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }));
        }, 1000);
        return () => clearInterval(timer);
    }, []);

    {/* 2. LOGICA VARIANTI ANIMAZIONE (Richiesta da ContactHero) */}
    const revealVariant = {
        hidden: { y: "100%" },
        visible: { y: 0, transition: { duration: 0.8, ease: [0.42, 0, 0.58, 1] } }
    };

    {/* 3. RIFERIMENTI PER CONTROLLO ANIMAZIONI LORDICON */}
    const emailRef = useRef<Player>(null);
    const whatsappRef = useRef<Player>(null);
    const telephoneRef = useRef<Player>(null);
    const meetingRef = useRef<Player>(null);
    const globeRef = useRef<Player>(null);
    const linkedinRef = useRef<Player>(null);
    const githubRef = useRef<Player>(null);

    const searchRef = useRef<Player>(null); 
    const computerRef = useRef<Player>(null); 
    const rocketRef = useRef<Player>(null);

    const starRef = useRef<Player>(null);
    const toolRef = useRef<Player>(null);
    const clockRef = useRef<Player>(null);
    const consultationRef = useRef<Player>(null);

    {/* 4. LOGICA CARICAMENTO ASINCRONO ICONE JSON */}
    const [loadedIcons, setLoadedIcons] = useState<{ [key: string]: object}>({});

    useEffect(() => {
        const loadAllIcons = async () => {
            // Contatti e Social
            const email = await fetchIconData(LordIcons.email);
            const whatsapp = await fetchIconData(LordIcons.whatsapp);
            const telephone = await fetchIconData(LordIcons.telephone);
            const meeting = await fetchIconData(LordIcons.meeting);
            const globe = await fetchIconData(LordIcons.globe);
            const linkedin = await fetchIconData(LordIcons.linkedin);
            const github = await fetchIconData(LordIcons.github);

            // Processo di lavoro
            const search = await fetchIconData(LordIcons.search); 
            const computer = await fetchIconData(LordIcons.computer); 
            const rocket = await fetchIconData(LordIcons.rocket); 

            // Punti Chiave
            const star = await fetchIconData(LordIcons.star);
            const tool = await fetchIconData(LordIcons.tool);
            const clock = await fetchIconData(LordIcons.clock);
            const consultation = await fetchIconData(LordIcons.consultation);

            // Salvataggio globale nello stato
            setLoadedIcons({ 
                email, whatsapp, telephone, meeting, globe, linkedin, github, 
                search, computer, rocket, 
                star, tool, clock, consultation 
            });
        };
        loadAllIcons();
    }, []);

    {/* AUTOMAZIONE ICONE DI CONTATT*/}
    useEffect(() => {
        const timer = setTimeout(() => {
            if (emailRef.current) emailRef.current.playFromBeginning();
            if (whatsappRef.current) whatsappRef.current.playFromBeginning();
            if (telephoneRef.current) telephoneRef.current.playFromBeginning();
            if (meetingRef.current) meetingRef.current.playFromBeginning();
            if (globeRef.current) globeRef.current.playFromBeginning();
            if (linkedinRef.current) linkedinRef.current.playFromBeginning();
            if (githubRef.current) githubRef.current.playFromBeginning();
        }, 150);

        return () => clearTimeout(timer);
    }, [loadedIcons]);

    return (
        <>
            <SEO title="Contatti" description="Parliamo del tuo prossimo progetto digitale." path="/contacts" />

            <main className="w-full min-h-screen bg-white pt-40 lg:pt-44 pb-32 px-6 md:px-16 lg:px-24 overflow-x-hidden relative flex flex-col">

                {/* 1. HERO CONTATTI */}
                <ContactsHero time={time} revealVariant={revealVariant} />

                {/* 2. PROCESSO DI LAVORO */}
                <ProcessSection 
                    loadedIcons={loadedIcons} 
                    refs={{ searchRef, computerRef, rocketRef }} 
                />

                {/* 3. PREREQUISITI PROGETTO */}
                <PrerequisitiSection />

                {/* 4. KEY POINTS: CAROUSEL DINAMICO */}
                <KeyPoints 
                    loadedIcons={loadedIcons}
                    refs={{ starRef, toolRef, clockRef, consultationRef }}
                />

                {/* 5. CONTATTI DIRETTI E SOCIAL */}
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

