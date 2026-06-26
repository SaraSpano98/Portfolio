import { motion } from "framer-motion";
import SEO from "../lib/seo";

import Hero from "../components/layout/home/Hero";
import FullStackPhilosophy from "../components/layout/home/FullStackPhilosophy";
import InfiniteTicker from "../components/layout/home/InfiniteTicker";
import KeyProjectsSection from "../components/layout/home/KeyProjectsSection";
import NextStepCta from "../components/layout/home/NextStepCta";

export default function Home(): React.ReactElement {
    return (

        <>
            <SEO title="Home" description="Sviluppo integrale di prodotti digitali: dalla visione creativa alla logica strutturale." path="/" />

            <main className="">
                <Hero />

                {/* LINEA DI SEPARAZIONE */}
                 <div className="w-full h-[1px] bg-slate-100 relative overflow-hidden">
                    <motion.div
                        initial={{ x: "-100%" }} 
                        whileInView={{ x: "100%" }} 
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }} 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"
                    />
                </div>

                <FullStackPhilosophy />

                <div className="py-12 px-6 sm:px-12 md:px-20 bg-white">
                    <InfiniteTicker />
                </div>

                <KeyProjectsSection/>

                <NextStepCta/>
            </main>
        </>
    );
}
