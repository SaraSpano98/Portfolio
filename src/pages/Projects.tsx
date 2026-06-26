import { motion } from "framer-motion";
import SEO from "../lib/seo";

import ProjectsHero from '../components/layout/projects/ProjectsHero';

export default function Projects(): React.ReactElement {
    return (
        <>
            <SEO title="Progetti" description="Esplora il mio portfolio di progetti, dove creatività e tecnologia si incontrano per dare vita a soluzioni digitali innovative." path='/projects' />

            <motion.div className="relative z-10">
                <ProjectsHero />
            </motion.div>
        </>
    );
}