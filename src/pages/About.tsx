import { motion } from 'framer-motion';
import SEO from "../lib/seo";

import IdentityHero from '../components/IdentityHero';



export default function About(): React.ReactElement {
    return (

        <>
            <SEO title="Chi Sono" description="Sara: UI/UX Designer & Front-End Developer. Unisco creatività e codice per creare ecosistemi digitali pixel-perfect." path='/about' />

            <motion.div className="relative z-10">
                <IdentityHero />
            </motion.div>

        </>

    );
}

