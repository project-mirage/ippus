import React from "react";
import HeroSliderPage from "../HeroSliderPage/HeroSliderPage";
import HeroCTA from "../HeroCTA/HeroCTA";
import "./HeroSection.sass";

export default function HeroSection(props) {
    const { imageSlider, heroTitle, heroCTAProps } = props;

    return (
        <div className="hero-section">
            <div className="overlap-group">
                <div className="image-slider animate-enter" src={imageSlider}>
                    <div className="heroSectionContainer">
                        <h1 className="hero-title merriweather-bold-soapstone-136px">
                            {heroTitle}
                        </h1>
                        <div className="controls">
                            <HeroCTA>{heroCTAProps.children}</HeroCTA>
                            <HeroSliderPage />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
