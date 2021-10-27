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
        arrows: false,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
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
                            <div className="colorBg">
                                <img
                                    className="image-slider animate-enter heroImage"
                                    src={e.image}
                                />
                            </div>
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
                </Slider>
            </div>
        </div>
    );
}
