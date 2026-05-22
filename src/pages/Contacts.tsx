import { motion } from 'framer-motion';
import SEO from "../lib/seo";

import ContactHero from '../components/ContactHero';
import ProcessSection from '../components/ProcessSection';
import PrerequisitiSection from '../components/PrerequisitiSection';
import KeyPoints from '../components/KeyPoints';
import DirectInquirySection from '../components/DirectInquirySection';
import SloganContacts from '../components/SloganContacts';



const Contacts = () => {

    return (
        <>
            <SEO title="Contatti" description="Parliamo del tuo prossimo progetto digitale." path="/contacts" />

            <main className="w-full min-h-screen bg-white pt-44 pb-32 cursor-none overflow-x-hidden relative">
                <div className="w-full max-w-7xl mx-auto px-4 xl:px-0">

                    {/* 1. HERO CONTATTI */}
                    <motion.div className="mb-40">
                        <ContactHero />
                    </motion.div>

                    {/* 2. PROCESSO DI LAVORO */}
                    <motion.div className="mb-40">
                        <ProcessSection />
                    </motion.div>

                    {/* 3. PREREQUISITI PROGETTO */}
                    <motion.div className="mb-40">
                        <PrerequisitiSection />
                    </motion.div>

                    {/* 4. KEY POINTS: CAROUSEL DINAMICO */}
                    <motion.div className="mb-40">
                        <KeyPoints />
                    </motion.div>

                    {/* 5. CONTATTI DIRETTI E SOCIAL */}
                    <motion.div className="mb-40">
                        <DirectInquirySection />
                    </motion.div>

                    {/* 6. SLOGAN CONTATTI */}
                    <motion.div className="mb-40">
                        <SloganContacts />
                    </motion.div>


                </div>
            </main>
        </>
    );
};

export default Contacts;