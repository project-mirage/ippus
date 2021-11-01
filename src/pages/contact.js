import React from "react";
import NavBar from "../components/NavBar/NavBar";
import CustomForm from "../components/contact/customForm/CustomForm";
import DonationForm from "../components/contact/DonationForm/DonationForm";
import Footer from "../components/Footer/Footer";
import FadeInUp from "../animations/FadeInUp";
import { graphql } from "gatsby";
import Map from "../components/contact/Map/Map";

export default function ContactPage(data) {
    console.log(data);

    let contactForm;

    for (let i = 0; i < data.data.allWpPage.nodes.length; i++) {
        const e = data.data.allWpPage.nodes[i];
        if (e.contactPage.contactForm) {
            contactForm = e.contactPage.contactForm[0];
        }
    }

    console.log(contactForm);

    return (
        <>
            <NavBar />
            <FadeInUp>
                <CustomForm
                    type="contact"
                    boldSubtitle={contactForm.heading}
                    description={contactForm.text}
                    address={contactForm.address}
                    email={contactForm.email}
                    contactNumber={contactForm.phone}
                    heading="Contact"
                />
            </FadeInUp>
            <FadeInUp>
                <DonationForm />
            </FadeInUp>
            <Map
                heading="Location on Map"
                url="https://goo.gl/maps/VLyRxKv3SbcNYA6j9"
            />
            <Footer />
        </>
    );
}

export const query = graphql`
    {
        allWpPage {
            nodes {
                contactPage {
                    contactForm {
                        heading
                        text
                        address
                        email
                        phone
                    }
                }
            }
        }
    }
`;
