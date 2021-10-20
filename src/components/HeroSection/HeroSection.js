import React from "react";
import HeroSliderPage from "../HeroSliderPage/HeroSliderPage";
import HeroCTA from "../HeroCTA/HeroCTA";
import "./HeroSection.sass";

export default function HeroSection(props) {
    const { imageSlider, heroTitle, heroCTAProps } = props;

    return (
        <div className="hero-section">
            <div className="overlap-group">
                <img className="image-slider animate-enter" src={imageSlider} />
                <div className="heroSectionContainer">
                    <HeroSliderPage />
                    <HeroCTA>{heroCTAProps.children}</HeroCTA>
                    <h1 className="hero-title merriweather-bold-soapstone-136px animate-enter3">
                        {heroTitle}
                    </h1>
                </div>
            </div>
        </div>
    );
}
