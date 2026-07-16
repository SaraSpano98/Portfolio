import { motion } from "framer-motion";
import SEO from "../lib/seo";

import ProjectsHero from '../components/layout/projects/ProjectsHero';
import ProjectsSection from '../components/layout/projects/ProjectsSection';

export default function Projects(): React.ReactElement {
    return (
        <>
            <SEO title="Progetti" description="Esplora il mio portfolio di progetti, dove creatività e tecnologia si incontrano per dare vita a soluzioni digitali innovative." path='/projects' />

            <motion.div className="relative z-10">
                <ProjectsHero />
            </motion.div>

            <motion.div className="relative z-10">
                <ProjectsSection revealVariant={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
                }} />
            </motion.div>
        </>
    );
}