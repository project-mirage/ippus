import React, { useState } from "react";
import HeroSliderPage from "../HeroSliderPage/HeroSliderPage";
import HeroCTA from "../HeroCTA/HeroCTA";
import "./HeroSection.sass";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection(props) {
    const { sliderData } = props;
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        dots: true,
        infinite: true,
        arrow: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        beforeChange: (prev, next) => {
            setCurrentSlide(next);
        },
        appendDots: (dots) => (
            <div
                style={{
                    padding: "10px",
                }}
            >
                <ul className="slick-dots"> {dots} </ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                className={i === currentSlide ? "rectangle-1" : "ellipse-1"}
            ></div>
        ),
    };

    return (
        <div className="hero-section">
            <div className="overlap-group-1">
                <Slider {...settings}>
                    {sliderData.map((e) => (
                        <>
                            <img
                                className="image-slider animate-enter"
                                src={e.image}
                                // style={{ backgroundImage: `url("${e.image}")` }}
                            />
                            {console.log(e.image)}
                            <div className="heroSectionContainer">
                                <h1 className="hero-title merriweather-bold-soapstone-136px">
                                    {e.heroTitle}
                                </h1>
                                <div className="controls">
                                    <HeroCTA>{e.CTAText}</HeroCTA>
                                </div>
                            </div>
                        </>
                    ))}

                    {/* <div
                        className="image-slider animate-enter"
                        src={imageSlider}
                    >
                        <div className="heroSectionContainer">
                            <h1 className="hero-title merriweather-bold-soapstone-136px">
                                {heroTitle}
                            </h1>
                            <div className="controls">
                                <HeroCTA>{heroCTAProps.children}</HeroCTA>
                                <HeroSliderPage />
                            </div>
                        </div>
                    </div> */}
                </Slider>
            </div>
        </div>
    );
}
