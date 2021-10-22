import React from "react";
import "./NavBar.sass";

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
    const { navLeft, navHomeLink, navHomeLink2, navHomeLink3, navCta } = props;

    return (
        <div className="nav-desktop animate-enter1" data-id="148:989">
            {/* <div className="nav-elements" data-id="I148:989;113:582"> */}
                <img
                    className="nav-left"
                    data-id="I148:989;113:583"
                    src={navLeft}
                />
                <div
                    className="nav-right inter-medium-blue-charcoal-18px"
                    data-id="I148:989;113:586"
                >
                    <div className="nav-home-link" data-id="I148:989;113:587">
                        {navHomeLink}
                    </div>
                    <div className="nav-home-link-1" data-id="I148:989;113:588">
                        {navHomeLink2}
                    </div>
                    <div className="nav-home-link-2" data-id="I148:989;113:589">
                        {navHomeLink3}
                    </div>
                    <img
                        className="nav-cta animate-enter"
                        data-id="I148:989;113:590"
                        src={navCta}
                    />
                </div>
            {/* </div> */}
        </div>
    );
}
