import React from "react";
import { Link } from "gatsby";
import "./NavBar.sass";
import ham from "../../images/ham.svg";
import closeHam from "../../images/closeHam.svg";
import useToggle from "../../hooks/useToggle";
import HeroCTA from "../HeroCTA/HeroCTA";

function NavBar() {
    return (
        <NavDesktop
            navLeft="https://anima-uploads.s3.amazonaws.com/projects/6161355fdb61f69a919554e4/releases/61617efe1392dcf49bb8de0f/img/nav---left@2x.png"
            navHomeLink="Home"
            navHomeLink2="About"
            navHomeLink3="Contact"
            navCta="https://anima-uploads.s3.amazonaws.com/projects/6161355fdb61f69a919554e4/releases/61617efe1392dcf49bb8de0f/img/nav---cta@2x.png"
            data-id="148:989:an-component-instance"
        />
    );
}

export default NavBar;

function NavDesktop(props) {
    const [isNavOpen, toggleisNavOpen] = useToggle();
    const { navLeft, navHomeLink, navHomeLink2, navHomeLink3, navCta } = props;

    return (
        <div className="nav-desktop animate-enter1" data-id="148:989">
            <img
                className="nav-left"
                data-id="I148:989;113:583"
                src={navLeft}
            />
            <div
                className="nav-right inter-medium-blue-charcoal-18px"
                data-id="I148:989;113:586"
            >
                <Link
                    to="/"
                    className="nav-home-link"
                    data-id="I148:989;113:587"
                >
                    {navHomeLink}
                </Link>
                <Link
                    to="/about"
                    className="nav-home-link-1"
                    data-id="I148:989;113:588"
                >
                    {navHomeLink2}
                </Link>
                <Link
                    to="/competition"
                    className="nav-home-link-2"
                    data-id="I148:989;113:589"
                >
                    NVC
                </Link>
                <Link
                    to="/contact"
                    className="nav-home-link-2"
                    data-id="I148:989;113:589"
                >
                    {navHomeLink3}
                </Link>
                <Link to="/contact/#donationForm">
                    <img
                        className="nav-cta animate-enter"
                        data-id="I148:989;113:590"
                        src={navCta}
                    />
                </Link>
            </div>

            <div className="nav-right-mobile">
                {!isNavOpen ? (
                    <img
                        onClick={toggleisNavOpen}
                        src={ham}
                        alt="hamburger icon to open menu"
                    />
                ) : (
                    <img
                        onClick={toggleisNavOpen}
                        src={closeHam}
                        alt="cross icon to close menu"
                    />
                )}
                {isNavOpen && (
                    <div className="nav-mobile">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/contact">Contact</Link>
                        <Link to="/competition">NVC</Link>
                        <HeroCTA
                            style={{ marginTop: "20px", marginBottom: "20px" }}
                        >
                            Donate Now
                        </HeroCTA>
                    </div>
                )}
            </div>
        </div>
    );
}
