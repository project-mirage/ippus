import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import WhatWeDoSection from "../components/WhatWeDoSection/WhatWeDoSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import NavBar from "../components/NavBar/NavBar";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import Cards from "../components/Cards/Cards";

const heroCTAData = {
    children: "How We Do It",
};

const heroSectionData = {
    heroCTAProps: heroCTAData,
};

export default function IndexPage() {
    return (
        <div>
            <div>
                <NavBar />
            </div>
            <HeroSection
                imageSlider="https://anima-uploads.s3.amazonaws.com/projects/6161355fdb61f69a919554e4/releases/616135bcb0ff15b21092b4ef/img/image-slider@1x.png"
                heroTitle="Let’s Empower People"
                heroCTAProps={heroSectionData.heroCTAProps}
            />
            <WhatWeDoSection />
            <ProjectsSection />
            <HowItWorks />
            <WhoWeAre />
            <Cards />
        </div>
    );
}
