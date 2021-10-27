import React from "react";
import NavBar from "../components/NavBar/NavBar";
import DescriptionSection from "../components/DescriptionSection/DescriptionSection";
import Footer from "../components/Footer/Footer";
import Collection from "../components/TeamCard/Collection";
import FadeInUp from "../animations/FadeInUp";
import { graphql } from "gatsby";

export default function AboutPage(data) {
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

    console.log(data.data);
    // const title = data.data.allWpPost.nodes[0].aboutPage.title1;
    // const fieldGroupName =
    //     data.data.allWpPost.nodes[0].aboutPage.fieldGroupName;

    // console.log(title, fieldGroupName);

    const title1 = data.data.allWpPage.nodes[0].aboutPage.title1;
    const description1 = data.data.allWpPage.nodes[0].aboutPage.description1;

    const title2 = data.data.allWpPage.nodes[0].aboutPage.title2;
    const description2 = data.data.allWpPage.nodes[0].aboutPage.description2;

    return (
        <div>
            <NavBar />

            {/* {data.data.allWpPage.nodes.map((e) => (
                <FadeInUp>
                    {console.log(e.aboutPage)}
                    <DescriptionSection
                        heading={e.aboutPage.title1}
                        text={e.aboutPage.description1}
                    />
                </FadeInUp>
            ))} */}

            <FadeInUp>
                <DescriptionSection heading={title1} text={description1} />
            </FadeInUp>
            <FadeInUp>
                <DescriptionSection heading={title2} text={description2} />
            </FadeInUp>

            <Collection heading="Our Team" teamData={teamData} />

            <Footer />
        </div>
    );
}

export const query = graphql`
    {
        allWpPage {
            nodes {
                aboutPage {
                    description1
                    title1
                    description2
                    title2
                }
            }
        }
    }
`;
