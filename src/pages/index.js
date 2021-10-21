import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import WhatWeDoSection from "../components/WhatWeDoSection/WhatWeDoSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";

const heroCTAData = {
    children: "How We Do It",
};

const heroSectionData = {
    heroCTAProps: heroCTAData,
};

export default function IndexPage() {
    return (
        <div>
            <HeroSection
                imageSlider="https://anima-uploads.s3.amazonaws.com/projects/6161355fdb61f69a919554e4/releases/616135bcb0ff15b21092b4ef/img/image-slider@1x.png"
                heroTitle="Let’s Empower People"
                heroCTAProps={heroSectionData.heroCTAProps}
            />
            <WhatWeDoSection/>
            <ProjectsSection/>
        </div>
    );
}
