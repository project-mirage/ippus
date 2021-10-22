import React from "react";
import "./HowItWorks.sass";

function HowItWorks() {
    return (
        <Component3
            {...component3Data}
            data-id="189:1243:an-component-instance"
        />
    );
}

export default HowItWorks;

function Component3(props) {
    const {
        heroTitle,
        hiwMicrofinancing,
        hiwMicrofinancing2,
        hiwGroupSupport,
        hiwGroupSupport2,
        hiwWellBeingTit,
        hiwWellBeingCop,
        hiwTransformation,
        hiwTransformation2,
        hiwSuccessTitle,
        hiwSuccessCopy,
        wWDEmpowerIconProps,
        wWDEmpowerIcon2Props,
        hIWWellBeingIconProps,
        wWDEmpowerIcon3Props,
        wWDEmpowerIcon4Props,
    } = props;

    return (
        <div className="component-3" data-id="189:1243">
            <h1
                className="hero-title-1 merriweather-bold-darkblue-136px"
                data-id="148:880"
            >
                {heroTitle}
            </h1>
            <div className="cardContainer">
                <div
                    className="hiw-microfinancing animate-enter1"
                    data-id="148:933"
                >
                    <WWDEmpowerIcon
                        src={wWDEmpowerIconProps.src}
                        data-id="148:934:an-component-instance"
                    />
                    <div
                        className="hiw inter-bold-midnight-22px"
                        data-id="148:939"
                    >
                        {hiwMicrofinancing}
                    </div>
                    <p
                        className="hiw-1 inter-normal-midnight-14px"
                        data-id="148:940"
                    >
                        {hiwMicrofinancing2}
                    </p>
                </div>
                <div
                    className="hiw-group-support animate-enter2"
                    data-id="148:941"
                >
                    <WWDEmpowerIcon
                        src={wWDEmpowerIcon2Props.src}
                        className={wWDEmpowerIcon2Props.className}
                        data-id="148:942:an-component-instance"
                    />
                    <div
                        className="hiw inter-bold-midnight-22px"
                        data-id="148:949"
                    >
                        {hiwGroupSupport}
                    </div>
                    <p
                        className="hiw-2 inter-normal-midnight-14px"
                        data-id="148:950"
                    >
                        {hiwGroupSupport2}
                    </p>
                </div>
                <div
                    className="hiw-well-being animate-enter3"
                    data-id="148:951"
                >
                    <HIWWellBeingIcon
                        src={hIWWellBeingIconProps.src}
                        data-id="148:952:an-component-instance"
                    />
                    <div
                        className="hiw inter-bold-midnight-22px"
                        data-id="148:956"
                    >
                        {hiwWellBeingTit}
                    </div>
                    <p
                        className="hiw-1 inter-normal-midnight-14px"
                        data-id="148:957"
                    >
                        {hiwWellBeingCop}
                    </p>
                </div>
                <div
                    className="hiw-transformation animate-enter4"
                    data-id="148:958"
                >
                    <WWDEmpowerIcon
                        src={wWDEmpowerIcon3Props.src}
                        className={wWDEmpowerIcon3Props.className}
                        data-id="148:959:an-component-instance"
                    />
                    <div
                        className="hiw inter-bold-midnight-22px"
                        data-id="148:965"
                    >
                        {hiwTransformation}
                    </div>
                    <p
                        className="hiw-1 inter-normal-midnight-14px"
                        data-id="148:966"
                    >
                        {hiwTransformation2}
                    </p>
                </div>
                <div
                    className="hiw-transformation-1 animate-enter5"
                    data-id="148:967"
                >
                    <WWDEmpowerIcon
                        src={wWDEmpowerIcon4Props.src}
                        className={wWDEmpowerIcon4Props.className}
                        data-id="148:968:an-component-instance"
                    />
                    <div
                        className="hiw inter-bold-midnight-22px"
                        data-id="148:974"
                    >
                        {hiwSuccessTitle}
                    </div>
                    <p
                        className="hiw-2 inter-normal-midnight-14px"
                        data-id="148:975"
                    >
                        {hiwSuccessCopy}
                    </p>
                </div>
            </div>
        </div>
    );
}

function WWDEmpowerIcon(props) {
    const { src, className } = props;

    return (
        <div
            className={`hiw-microfinancing-icon ${className || ""}`}
            data-id="148:934"
        >
            <img className="hiw-dollar-sign" data-id="148:936" src={src} />
        </div>
    );
}

function HIWWellBeingIcon(props) {
    const { src } = props;

    return (
        <div className="hiw-well-being-icon" data-id="148:952">
            <img className="heart-1" data-id="148:954" src={src} />
        </div>
    );
}

const wWDEmpowerIconData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/6161355fdb61f69a919554e4/releases/61617efe1392dcf49bb8de0f/img/hiw---dollar-sign@2x.png",
};

const wWDEmpowerIcon2Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/6161355fdb61f69a919554e4/releases/61617efe1392dcf49bb8de0f/img/users-1@2x.png",
    className: "hiw-3-1",
};

const hIWWellBeingIconData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/6161355fdb61f69a919554e4/releases/61617efe1392dcf49bb8de0f/img/heart-1@2x.png",
};

const wWDEmpowerIcon3Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/6161355fdb61f69a919554e4/releases/61617efe1392dcf49bb8de0f/img/globe-1@2x.png",
    className: "hiw-3-2",
};

const wWDEmpowerIcon4Data = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/6161355fdb61f69a919554e4/releases/61617efe1392dcf49bb8de0f/img/bar-chart-1@2x.png",
    className: "hiw-3",
};

const component3Data = {
    heroTitle: "How It Works",
    hiwMicrofinancing: "Interest-free Financing",
    hiwMicrofinancing2:
        "Grassroots microfinancing organizations offer training, support, and reliable saving, borrowing ...",
    hiwGroupSupport: "Group Support",
    hiwGroupSupport2:
        "Small groups train together and support each other in planning their income projects ...",
    hiwWellBeingTit: "Well-Being",
    hiwWellBeingCop:
        "When the loan is repaid (or the living animal loan is retired by passing on an offspring), the income project ...",
    hiwTransformation: "Transformation",
    hiwTransformation2:
        "People who have struggled have transformed themselves into donors and leaders, helping their neighbors ...",
    hiwSuccessTitle: "Success",
    hiwSuccessCopy:
        "IPP’s partners strive to get people on the ladder to climb out of extreme poverty. IPP’s role is to ...",
    wWDEmpowerIconProps: wWDEmpowerIconData,
    wWDEmpowerIcon2Props: wWDEmpowerIcon2Data,
    hIWWellBeingIconProps: hIWWellBeingIconData,
    wWDEmpowerIcon3Props: wWDEmpowerIcon3Data,
    wWDEmpowerIcon4Props: wWDEmpowerIcon4Data,
};
