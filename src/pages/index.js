import React from "react";
import HeroSection from "../components/HeroSection/HeroSection";
import WhatWeDoSection from "../components/WhatWeDoSection/WhatWeDoSection";
import ProjectsSection from "../components/ProjectsSection/ProjectsSection";
import NavBar from "../components/NavBar/NavBar";
import HowItWorks from "../components/HowItWorks/HowItWorks";
import WhoWeAre from "../components/WhoWeAre/WhoWeAre";
import Cards from "../components/Cards/Cards";
import Footer from "../components/Footer/Footer";
import FadeInUp from "../animations/FadeInUp";

import image2 from "../images/Image2.webp";
import image3 from "../images/Image3.webp";
import image4 from "../images/Image4.webp";
import image5 from "../images/Image5.webp";
import image6 from "../images/Image6.webp";
import image7 from "../images/Image7.webp";

export default function IndexPage() {
    const sliderData = [
        {
            image: image2,
            heroTitle: "Let's Empower People 1",
            CTAText: "How We Do It 1",
        },
        {
            image: image3,
            heroTitle: "Let's Empower People 2",
            CTAText: "How We Do It 2",
        },
        {
            image: image4,
            heroTitle: "Let's Empower People 3",
            CTAText: "How We Do It 3",
        },
        {
            image: image5,
            heroTitle: "Let's Empower People 4",
            CTAText: "How We Do It 4",
        },
        {
            image: image6,
            heroTitle: "Let's Empower People 5",
            CTAText: "How We Do It 5",
        },
        {
            image: image7,
            heroTitle: "Let's Empower People 6",
            CTAText: "How We Do It 6",
        },
    ];

    return (
        <>
            <NavBar />
            <HeroSection sliderData={sliderData} />
            <FadeInUp>
                <WhatWeDoSection />
            </FadeInUp>
            <FadeInUp>
                <ProjectsSection />
            </FadeInUp>
            <FadeInUp>
                <HowItWorks />
            </FadeInUp>
            <FadeInUp>
                <WhoWeAre />
            </FadeInUp>
            <FadeInUp>
                <Cards />
            </FadeInUp>
            <Footer />
        </>
    );
}
