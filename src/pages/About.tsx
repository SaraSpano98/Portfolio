import SEO from "../lib/seo";

import IdentityHero from '../components/IdentityHero';
import TechProfileSection from '../components/TechProfileSection';
import MyValuesSection from '../components/MyValuesSection';
import CtaExperiencesSection from '../components/CtaExperiencesSection';


export default function About(): React.ReactElement {
    return (

        <>
            <SEO title="Chi Sono" description="Sara: UI/UX Designer & Front-End Developer. Unisco creatività e codice per creare ecosistemi digitali pixel-perfect." path='/about' />

            <main className="w-full flex flex-col relative z-10">
                <IdentityHero />
                <TechProfileSection/>
                <MyValuesSection />
                <CtaExperiencesSection />
            </main>
            
        </>
    );
}

