import { motion } from 'framer-motion';
import SEO from "../lib/seo";

import WaveBackground from '../components/WaveBackground';




import IdentityHero from '../components/IdentityHero';
import TechProfileSection from '../components/TechProfileSection';
import MyValuesSection from '../components/MyValuesSection';
import CtaExperiencesSection from '../components/CtaExperiencesSection';



export default function About(): React.ReactElement {
    return (

        <>
            <SEO title="Chi Sono" description="Sara: UI/UX Designer & Front-End Developer. Unisco creatività e codice per creare ecosistemi digitali pixel-perfect." path='/about' />

            <motion.div className="relative z-10">
                <IdentityHero />
            </motion.div>

            <motion.div>
                <WaveBackground />

                <motion.div className="relative z-10">
                    <TechProfileSection />
                </motion.div>

                <motion.div className="relative z-10">
                    <MyValuesSection />
                </motion.div>

                <motion.div className="relative z-10">
                    <CtaExperiencesSection />
                </motion.div>

            </motion.div>


        </>

    );
}

