import React from "react";
import "./WhoWeAre.sass";

function WhoWeAre() {
    return (
        <Component4
            heroTitle="Who We Are"
            hiwSubTitle="Welcome to Industrial Partnership Projects US, your number one source for entrepreneurship and empowering the youth. We're dedicated to providing you the best learning platform to enable you to think independantly, with a focus on creating new innovations"
            heroCTA2Props={component4Data.heroCTA2Props}
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
            <HeroCTA2 data-id="148:888:an-component-instance">
                {heroCTA2Props.children}
            </HeroCTA2>
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
