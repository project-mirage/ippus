import React from "react";
import NavBar from "../components/NavBar/NavBar";
import CustomForm from "../components/contact/customForm/CustomForm";
import Footer from "../components/Footer/Footer";

export default function ContactPage() {
    return (
        <>
            <NavBar />
            <CustomForm heading="Contact" />
            <Footer />
        </>
    );
}
