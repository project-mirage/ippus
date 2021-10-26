import React from "react";
import NavBar from "../components/NavBar/NavBar";
import DescriptionSection from "../components/DescriptionSection/DescriptionSection";
import Footer from "../components/Footer/Footer";
import Collection from "../components/TeamCard/Collection";
import FadeInUp from "../animations/FadeInUp";

export default function AboutPage() {
    const teamData = [
        {
            name: "Noman Mufti",
            role: "Academic and Engineer",
            image: "",
            instaLink: "",
            waLink: "",
            twitLink: "",
            fbLink: "",
        },
        {
            name: "Noman Mufti",
            role: "Academic and Engineer",
            image: "",
            instaLink: "",
            waLink: "",
            twitLink: "",
            fbLink: "",
        },
        {
            name: "Noman Mufti",
            role: "Academic and Engineer",
            image: "",
            instaLink: "",
            waLink: "",
            twitLink: "",
            fbLink: "",
        },
        {
            name: "Noman Mufti",
            role: "Academic and Engineer",
            image: "",
            instaLink: "",
            waLink: "",
            twitLink: "",
            fbLink: "",
        },
        {
            name: "Noman Mufti",
            role: "Academic and Engineer",
            image: "",
            instaLink: "",
            waLink: "",
            twitLink: "",
            fbLink: "",
        },
        {
            name: "Noman Mufti",
            role: "Academic and Engineer",
            image: "",
            instaLink: "",
            waLink: "",
            twitLink: "",
            fbLink: "",
        },
    ];

    return (
        <div>
            <NavBar />
            <FadeInUp>
                <DescriptionSection
                    heading="What is IPP"
                    text="Industries create jobs, economic growth and prosperity. Industries create jobs, economic growth and prosperity and much more. Industries create jobs, economic growth and prosperity. Industries create jobs, economic growth and prosperity and much more. Industries create jobs, economic growth and prosperity. Industries create jobs, economic growth and prosperity and much more. Industries create jobs, economic growth and prosperity. Industries create jobs, economic growth and prosperity and much more. Industries create jobs, economic growth and prosperity. Industries create jobs, economic growth and prosperity and much more. Industries create jobs, economic growth and prosperity. Industries create jobs, economic growth and prosperity and much more. Industries create jobs, economic growth and prosperity. Industries create jobs, economic growth and prosperity and much more."
                />
            </FadeInUp>
            <FadeInUp>
                <DescriptionSection
                    heading="IPP Partners"
                    text="Industries create jobs, economic growth and prosperity. Industries create jobs, economic growth and prosperity and much more. Industries create jobs, economic growth and prosperity. Industries create jobs, economic growth and prosperity and much more. Industries create jobs, economic growth and prosperity. Industries create jobs, economic growth and prosperity and much more. Industries create jobs, economic growth and prosperity. Industries create jobs, economic growth and prosperity and much more. Industries create jobs, economic growth and prosperity. Industries create jobs, economic growth and prosperity and much more. Industries create jobs, economic growth and prosperity. Industries create jobs, economic growth and prosperity and much more. Industries create jobs, economic growth and prosperity. Industries create jobs, economic growth and prosperity and much more."
                />
            </FadeInUp>
            <FadeInUp>
                <DescriptionSection
                    heading="Entrepreneur Network"
                    text="Industries create jobs, economic growth and prosperity. Industries create jobs, economic growth and prosperity and much more. Industries create jobs, economic growth and prosperity. Industries create jobs, economic growth and prosperity and much more. Industries create jobs, economic growth and prosperity. Industries create jobs, economic growth and prosperity and much more. Industries create jobs, economic growth and prosperity. Industries create jobs, economic growth and prosperity and much more. Industries create jobs, economic growth and prosperity. Industries create jobs, economic growth and prosperity and much more. Industries create jobs, economic growth and prosperity. Industries create jobs, economic growth and prosperity and much more. Industries create jobs, economic growth and prosperity. Industries create jobs, economic growth and prosperity and much more."
                />
            </FadeInUp>

            <FadeInUp>
                <Collection heading="Our Team" teamData={teamData} />
            </FadeInUp>

            <Footer />
        </div>
    );
}
