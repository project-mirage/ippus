import React from "react";
import "./WhoWeAre.sass";
import HeroCTA from "../HeroCTA/HeroCTA";

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
            <HeroCTA text={heroCTA2Props} href="/contact" />
        </div>
    );
}

const heroCTA2Data = {
    children: "More About Us",
};

const component4Data = {
    heroCTA2Props: heroCTA2Data,
};
