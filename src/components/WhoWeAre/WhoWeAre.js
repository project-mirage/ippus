import React from "react";
import "./WhoWeAre.sass";

function WhoWeAre({ whoWeAreData }) {
    return (
        <Component4
            heroTitle={whoWeAreData.title}
            hiwSubTitle={whoWeAreData.subTitle}
            heroCTA2Props={whoWeAreData.cta}
            data-id="189:1244:an-component-instance"
        />
    );
}

export default WhoWeAre;

function Component4(props) {
    const { heroTitle, hiwSubTitle, heroCTA2Props } = props;

    return (
        <div className="component-4" data-id="189:1244">
            <h1
                className="hero-title-1 merriweather-bold-darkblue-136px"
                data-id="148:881"
            >
                {heroTitle}
            </h1>
            <div
                className="hiw-sub-title inter-normal-midnight-24px animate-enter2"
                data-id="148:976"
            >
                {hiwSubTitle}
            </div>
            <HeroCTA2 data-id="148:888:an-component-instance">{heroCTA2Props}</HeroCTA2>
        </div>
    );
}

function HeroCTA2(props) {
    const { children } = props;

    return (
        <div className="hero-cta animate-enter1" data-id="148:888">
            <div className="label" data-id="I148:888;11:308">
                <div
                    className="label-1 inter-semi-bold-soapstone-20px"
                    data-id="I148:888;11:310"
                >
                    {children}
                </div>
            </div>
        </div>
    );
}

const heroCTA2Data = {
    children: "More About Us",
};

const component4Data = {
    heroCTA2Props: heroCTA2Data,
};
