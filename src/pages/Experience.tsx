import React from 'react';
import { motion } from "framer-motion";
import SEO from "../lib/seo";

import ExperiencesHero from '../components/layout/experiences/ExperiencesHero';
import ExperiencesTimeline from '../components/layout/experiences/ExperiencesTimeline';

export default function Experience(): React.ReactElement {
    const revealVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
    };

    return (
        <>
            <SEO title="Experiences" description="Il mio percorso professionale come sviluppatrice front-end e designer." path='/experiences' />

            <motion.div
                className="relative z-10"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                }}
            >
                <ExperiencesHero revealVariant={revealVariant} />
            </motion.div>

            <motion.div
                className="relative z-10"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
                }}
            >
                <ExperiencesTimeline />
            </motion.div>
        </>
    );
}
