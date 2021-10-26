import React from "react";
import NavBar from "../components/NavBar/NavBar";
import CustomForm from "../components/contact/customForm/CustomForm";
import Footer from "../components/Footer/Footer";
import FadeInUp from "../animations/FadeInUp";

export default function ContactPage() {
    return (
        <>
            <NavBar />
            <FadeInUp>
                <CustomForm
                    boldSubtitle="We are waiting for your email!"
                    description="Our team will get back to you ASAP with you query. In the mean time you can go through our website to get to know our values, mission and goals. "
                    address="2952 Lucia Ct, McKinney, TX 75072, USA"
                    email="nomaanaleemmufti@hotmail.com"
                    contactNumber="+1 469 931 8345"
                    heading="Contact"
                />
            </FadeInUp>
            <Footer />
        </>
    );
}
