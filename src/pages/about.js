import React from "react";
import NavBar from "../components/NavBar/NavBar";
import DescriptionSection from "../components/DescriptionSection/DescriptionSection";
import Footer from "../components/Footer/Footer";
import Collection from "../components/TeamCard/Collection";
import FadeInUp from "../animations/FadeInUp";
import { graphql } from "gatsby";

export default function AboutPage(data) {
    console.log(data);
    // const contentSection =
    //     data.data.allWpPage.nodes[0].aboutPage.contentSection;
    // const ourTeam = data.data.allWpPage.nodes[0].aboutPage.ourTeam;

    let contentSection;
    let ourTeam;

    for (let i = 0; i < data.data.allWpPage.nodes.length; i++) {
        const e = data.data.allWpPage.nodes[i];

        if (e.aboutPage.aboutContentSection) {
            contentSection = e.aboutPage.aboutContentSection;
        }
        if (e.aboutPage.ourTeam) {
            ourTeam = e.aboutPage.ourTeam;
        }
    }

    console.log(contentSection);
    console.log(ourTeam);

    return (
        <div>
            <NavBar />

            {contentSection.map((e) => (
                <FadeInUp>
                    <DescriptionSection
                        heading={e.aboutTitle}
                        text={e.aboutDescription}
                    />
                </FadeInUp>
            ))}

            <Collection heading="Our Team" teamData={ourTeam} />
            <Footer />
        </div>
    );
}

export const query = graphql`
    {
        allWpPage {
            nodes {
                aboutPage {
                    aboutContentSection {
                        aboutTitle
                        aboutDescription
                    }
                    ourTeam {
                        memberName
                        memberRole
                        facebook
                        whatsapp
                        linkedin
                        memberImage {
                            sourceUrl
                        }
                    }
                }
            }
        }
    }
`;
