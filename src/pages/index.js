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
import { graphql } from "gatsby";

export default function IndexPage(data) {
    console.log(data);
    let sliderData;
    let whatWeDo;
    let ourProjects;
    let howItWorksData;
    let whoWeAreData;
    let callToActionSectionData;

    // deals with the rare case that the nodes array has first or second element null
    for (let i = 0; i < data.data.allWpPage.nodes.length; i++) {
        const e = data.data.allWpPage.nodes[i];

        if (e.landingPage.heroSectionSlide) {
            sliderData = e.landingPage.heroSectionSlide;
        }
        if (e.landingPage.ourProjects) {
            ourProjects = e.landingPage.ourProjects;
        }
        if (e.landingPage.whatWeDo) {
            whatWeDo = e.landingPage.whatWeDo;
        }
        if (e.landingPage.howItWorks) {
            howItWorksData = e.landingPage.howItWorks;
        }
        if (e.landingPage.whoWeAre) {
            whoWeAreData = e.landingPage.whoWeAre[0];
        }
        if (e.landingPage.callToActionSection) {
            callToActionSectionData = e.landingPage.callToActionSection;
        }
    }

    return (
        <div style={{ overflow: "hidden" }}>
            <NavBar />
            <HeroSection sliderData={sliderData} />
            <FadeInUp>
                <WhatWeDoSection whatWeDoData={whatWeDo} />
            </FadeInUp>
            <ProjectsSection projectsData={ourProjects} />
            <FadeInUp>
                <HowItWorks howItWorksData={howItWorksData} />
            </FadeInUp>
            <FadeInUp>
                <WhoWeAre whoWeAreData={whoWeAreData} />
            </FadeInUp>
            <FadeInUp>
                <Cards callToActionSectionData={callToActionSectionData} />
            </FadeInUp>
            <Footer />
        </div>
    );
}

export const query = graphql`
    {
        allWpPage {
            nodes {
                landingPage {
                    heroSectionSlide {
                        title
                        cta
                        image {
                            sourceUrl
                        }
                    }
                    whatWeDo {
                        title
                        description
                    }
                    ourProjects {
                        projectName
                        projectDescription
                        projectImage {
                            sourceUrl
                        }
                    }
                    howItWorks {
                        benefitTitle
                        benefitDescription
                    }
                    whoWeAre {
                        title
                        subTitle
                        cta
                    }
                    callToActionSection {
                        blockHeading
                        blockText
                        blockEmail
                    }
                }
            }
        }
    }
`;
