import React from "react";
import DescriptionSection from "../components/DescriptionSection/DescriptionSection";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import TeamCardCollection from "../components/TeamCard/Collection";
import FadeInUp from "../animations/FadeInUp";
import { graphql } from "gatsby";
import NVCImages from "../components/NVCImages/NVCImages";
import NVCForm from "../components/contact/customForm/NVCForm";
import favicon from "../images/icon.png";
import { Helmet } from "react-helmet";

export default function CompetitionPage(data) {
    console.log(data);

    let contentSection;
    let nvcJudges;
    let registerForm;

    for (let i = 0; i < data.data.allWpPage.edges.length; i++) {
        const e = data.data.allWpPage.edges[i];
        if (e.node.competitionPage.competitionContentSection) {
            contentSection = e.node.competitionPage.competitionContentSection;
        }
        if (e.node.competitionPage.registerForm) {
            registerForm = e.node.competitionPage.registerForm[0];
        }
        if (e.node.competitionPage.nvcJudges) {
            nvcJudges = e.node.competitionPage.nvcJudges;
        }
    }

    console.log(contentSection);
    console.log(registerForm);
    console.log(nvcJudges);

    return (
        <>
            <Helmet>
                <link rel="icon" type="image/png" href={favicon} />
                <title>IPPUS - Empower People</title>
            </Helmet>
            <NavBar />

            <FadeInUp>
                <NVCImages />
            </FadeInUp>

            {contentSection.map((e) => (
                <FadeInUp>
                    <DescriptionSection
                        heading={e.sectionTitle}
                        text={e.sectionDescription}
                    />
                </FadeInUp>
            ))}

            <TeamCardCollection heading="Judges" teamData={nvcJudges} />

            <FadeInUp>
                <NVCForm
                    type="Competition Registration"
                    heading="Competition Registration"
                    boldSubtitle={registerForm.heading}
                    description={registerForm.text}
                    address={registerForm.address}
                    email={registerForm.email}
                    contactNumber={registerForm.phone}
                />
            </FadeInUp>

            <Footer />
        </>
    );
}

export const query = graphql`
    {
        allWpPage {
            edges {
                node {
                    competitionPage {
                        competitionContentSection {
                            sectionDescription
                            sectionTitle
                        }
                        nvcJudges {
                            facebook
                            judgeImage {
                                sourceUrl
                            }
                            judgeName
                            judgeRole
                            linkedin
                        }
                        registerForm {
                            address
                            email
                            fieldGroupName
                            heading
                            phone
                            text
                        }
                    }
                }
            }
        }
    }
`;
