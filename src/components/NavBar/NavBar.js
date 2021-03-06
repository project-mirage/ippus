import React, { useState } from "react";
import { Link } from "gatsby";
import "./NavBar.sass";
import ham from "../../images/ham.svg";
import closeHam from "../../images/closeHam.svg";
import useToggle from "../../hooks/useToggle";
import HeroCTA from "../HeroCTA/HeroCTA";
import { motion, AnimatePresence, useViewportScroll } from "framer-motion";

function NavBar({ page }) {
    return (
        <NavDesktop
            page={page}
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
    const { navHomeLink, navHomeLink2, navHomeLink3, page } = props;
    const { scrollY } = useViewportScroll();
    const [isNavOpen, toggleisNavOpen] = useToggle();
    const [opacity, setOpacity] = useState(page === "index" ? 0 : 1);
    const scrollLocation = 500;

    scrollY.onChange((y) => {
        if (page === "index") {
            if (y >= scrollLocation) {
                setOpacity(Math.min(Math.abs(1 - y / 500), 1));
            } else if (y <= scrollLocation) {
                setOpacity(0 - y / 500);
            }
        }
    });

    return (
        <div
            style={{ opacity: opacity }}
            className="nav-desktop animate-enter1"
            data-id="148:989"
        >
            <h1 className="nav-left">IPP US</h1>
            <div
                className="nav-right inter-medium-blue-charcoal-18px"
                data-id="I148:989;113:586"
            >
                <Link
                    to="/"
                    className="nav-home-link hvr-underline-from-center"
                    data-id="I148:989;113:587"
                >
                    {navHomeLink}
                </Link>
                <Link
                    to="/about"
                    className="nav-home-link-2 hvr-underline-from-center"
                    data-id="I148:989;113:588"
                >
                    {navHomeLink2}
                </Link>
                <Link
                    to="/competition"
                    className="nav-home-link-2 hvr-underline-from-center"
                    data-id="I148:989;113:589"
                >
                    NVC
                </Link>
                <Link
                    to="/contact"
                    className="nav-home-link-2 hvr-underline-from-center"
                    data-id="I148:989;113:589"
                >
                    {navHomeLink3}
                </Link>
                <Link className="nav-home-link-2" to="/contact/#donationForm">
                    <HeroCTA
                        arrow={true}
                        pointing={true}
                        text="Donate Now"
                        href="/contact#donationForm"
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
                <AnimatePresence>
                    {isNavOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="nav-mobile"
                        >
                            <Link
                                onClick={toggleisNavOpen}
                                className="navLinks hvr-underline-from-center"
                                to="/"
                            >
                                Home
                            </Link>
                            <Link
                                onClick={toggleisNavOpen}
                                className="navLinks hvr-underline-from-center"
                                to="/about"
                            >
                                About
                            </Link>
                            <Link
                                onClick={toggleisNavOpen}
                                className="navLinks hvr-underline-from-center"
                                to="/contact"
                            >
                                Contact
                            </Link>
                            <Link
                                onClick={toggleisNavOpen}
                                className="navLinks hvr-underline-from-center"
                                to="/competition"
                            >
                                NVC
                            </Link>
                            <HeroCTA
                                arrow={true}
                                text="Donate Now"
                                href="/contact#donationForm"
                            />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
