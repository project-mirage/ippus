import React from "react";
import "./Footer.sass";
import { Link } from "gatsby";
import footer from "../../images/footer.png";
import FadeIn from "../../animations/FadeIn";

function App() {
    return <FooterDesktop {...footerDesktopData} />;
}

export default App;

function FooterDesktop(props) {
    const {
        makeADonationCopy,
        makeADonationCopy2,
        makeADonationCopy3,
        makeADonationCopy4,
        makeADonationCopy5,
        makeADonationCopy6,
        makeADonationCopy7,
        makeADonationCopy8,
        makeADonationCopy9,
        makeADonationCopy10,
        makeADonationCopy11,
        preview,
        preview2,
        preview3,
        preview4,
    } = props;

    return (
        <FadeIn>
            <div className="footer-desktop animate-enter1">
                <div className="footerContainer">
                    <div className="top">
                        <div className="leftdescription">
                            <h1 className="nav-left footerBottom">IPP US</h1>
                            <p className="footer-make-a-donation-copy inter-normal-midnight-16px">
                                {makeADonationCopy}
                            </p>
                        </div>

                        <div className="links">
                            <div className="socialLinks">
                                <div className="preview-2 inter-bold-blue-charcoal-24px">
                                    {preview3}
                                </div>
                                <div className="footer-make-a-donation-copy-4 inter-normal-midnight-16px">
                                    {makeADonationCopy5}
                                </div>
                                <div className="footer-make-a-donation-copy-6 inter-normal-midnight-16px">
                                    {makeADonationCopy7}
                                </div>
                                <div className="footer-make-a-donation-copy-8 inter-normal-midnight-16px">
                                    {makeADonationCopy9}
                                </div>
                                <div className="footer-make-a-donation-copy-9 inter-normal-midnight-16px">
                                    {makeADonationCopy10}
                                </div>
                            </div>

                            <div className="pages">
                                <h1 className="preview-1 inter-bold-blue-charcoal-24px">
                                    {preview2}
                                </h1>
                                <Link
                                    to="/"
                                    className="footer-make-a-donation-copy-3 inter-normal-midnight-16px"
                                >
                                    {makeADonationCopy4}
                                </Link>
                                <Link
                                    to="/about"
                                    className="footer-make-a-donation-copy-5 inter-normal-midnight-16px"
                                >
                                    {makeADonationCopy6}
                                </Link>
                                <Link
                                    to="/contact"
                                    className="footer-make-a-donation-copy-7 inter-normal-midnight-16px"
                                >
                                    {makeADonationCopy8}
                                </Link>
                                <Link
                                    to="/contact/#donationForm"
                                    className="footer-make-a-donation-copy-10 inter-normal-midnight-16px"
                                >
                                    {makeADonationCopy11}
                                </Link>
                            </div>
                        </div>

                        <img
                            className="preview-3 animate-enter"
                            src={preview4}
                        />
                    </div>

                    <div className="registrations">
                        <div className="footer-make-a-donation-copy-1 inter-normal-midnight-20px">
                            {makeADonationCopy2}
                        </div>
                        <div className="footer-make-a-donation-copy-2 inter-normal-midnight-20px">
                            {makeADonationCopy3}
                        </div>
                    </div>
                </div>
            </div>
        </FadeIn>
    );
}

const footerDesktopData = {
    makeADonationCopy:
        "We're dedicated to providing you the best learning platform to enable you to think independantly, with a focus on creating new innovations",
    makeADonationCopy2: "?? IPPUS 2021",
    makeADonationCopy3: "Made by Project Mirage",
    makeADonationCopy4: "Home",
    makeADonationCopy5: "Facebook",
    makeADonationCopy6: "About",
    makeADonationCopy7: "Instagram",
    makeADonationCopy8: "Contact",
    makeADonationCopy9: "LinkedIn",
    makeADonationCopy10: "Twitter",
    makeADonationCopy11: "Donate",
    preview2: "Pages",
    preview3: "Social Links",
    preview4: footer,
};
