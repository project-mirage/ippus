import React, { useState } from "react";
import HeroCTA from "../HeroCTA/HeroCTA";
import "./HeroSection.sass";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HeroSection(props) {
    const { sliderData } = props;
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        dots: false,
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
                    {sliderData.map((e, i) => (
                        <>
                            <div className="colorBg">
                                <img
                                    className="image-slider animate-enter heroImage"
                                    src={e.image.sourceUrl}
                                />
                            </div>
                            <div className="heroSectionContainer">
                                <h1 className="hero-title">
                                    {e.title}
                                </h1>
                                <div className="controls">
                                    <HeroCTA href={e.ctaHref} text={e.cta} />
                                </div>
                            </div>
                        </>
                    ))}
                </Slider>
            </div>
        </div>
    );
}
