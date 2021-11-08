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
import favicon from "../images/icon.png";
import Flyers from "../components/Flyers/Flyers";
import { Helmet } from "react-helmet";
import flyer1 from "../images/flyer1.webp";

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
        if (e.landingPage.ourVision) {
            whatWeDo = e.landingPage.ourVision;
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
        <>
            <Helmet>
                <link rel="icon" type="image/png" href={favicon} />
                <title>IPPUS - Empower People</title>
            </Helmet>
            <NavBar />
            <FadeInUp>
                <div style={{ overflow: "hidden" }}>
                    <HeroSection sliderData={sliderData} />
                    <FadeInUp>
                        <WhatWeDoSection whatWeDoData={whatWeDo} />
                    </FadeInUp>
                    <FadeInUp>
                        <ProjectsSection projectsData={ourProjects} />
                    </FadeInUp>
                    <FadeInUp>
                    <Flyers
                        image={flyer1}
                        heading="New Venture Contest"
                        text="Industrial Partnership Projects (IPP), in collaboration with Engineers for Community Welfare (ECW) of Pakistan, Khwarzemic Institute of Computer Sciences (KICS) Pakistan, and Akhuwat Pakistan plans to host a competition for young entrepreneurs from December 15, 2021 till April 23, 2022. This will be a business ideas competition, inspiring young entrepreneurs to develop their business dreams to make them real. All entrepreneurs, including Graduate and undergraduate students, can join to promote their proposals and compete for up to $10,000 interest free loan for starting their business."
                        buttonCTA="Learn more about NVC"
                    />
                    </FadeInUp>
                    <FadeInUp>
                        <HowItWorks howItWorksData={howItWorksData} />
                    </FadeInUp>
                    <FadeInUp>
                        <WhoWeAre whoWeAreData={whoWeAreData} />
                    </FadeInUp>
                    <FadeInUp>
                        <Cards
                            callToActionSectionData={callToActionSectionData}
                        />
                    </FadeInUp>
                    <Footer />
                </div>
            </FadeInUp>
        </>
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
                        ctaHref
                        image {
                            sourceUrl
                        }
                    }
                    ourVision {
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
