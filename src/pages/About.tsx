import SEO from "../lib/seo";

import IdentityHero from '../components/layout/about/IdentityHero';
import TechProfileSection from '../components/layout/about/TechProfileSection';
import MyValuesSection from '../components/layout/about/MyValuesSection';
import CtaExperiencesSection from '../components/layout/about/CtaExperiencesSection';


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

