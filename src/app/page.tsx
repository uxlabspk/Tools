import LandingHero from "@/components/landing-page/landing-hero";
import Features from "@/components/landing-page/features";
import Working from "@/components/landing-page/working";
import CTA from "@/components/common/cta";


export default function Home() {
    return (
        <>
            <LandingHero />
            <Features />
            <Working />
            <CTA />
        </>
    );
}
