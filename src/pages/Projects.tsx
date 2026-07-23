import { motion } from "framer-motion";
import SEO from "../lib/seo";

import ProjectsHero from '../components/layout/projects/ProjectsHero';
import ProjectsSection from '../components/layout/projects/ProjectsSection';
import DesignShowcaseSection from '../components/layout/projects/GalleryImages'; 

export default function Projects(): React.ReactElement {
    const revealVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };
    
    return (
        <>
            <SEO title="Progetti" description="Esplora il mio portfolio di progetti, dove creatività e tecnologia si incontrano per dare vita a soluzioni digitali innovative." path='/projects' />

            <motion.div
                className="relative z-10"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
            >
                <ProjectsHero revealVariant={revealVariant} />
            </motion.div>

            <motion.div
                className="relative z-10"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }}
            >
                <ProjectsSection />
            </motion.div>

            <motion.div
                className="relative z-10"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut", delay: 0.2 } }
                }}
            >
                <DesignShowcaseSection />
            </motion.div>
        </>
    );
}
